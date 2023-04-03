import React, { useReducer, useCallback } from "react";
import set from "lodash/set";
import get from "lodash/get";
import cloneDeep from "lodash/cloneDeep";

const getInitialState = (initialValues) => {
  return {
    values: {
      ...initialValues,
    },
    errors: {}, // all errors
    touched: {}, // dirty field names
    isSubmitted: false, // is form submitted to check validation
    submitCounter: 0,
  };
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INPUT_CHANGE":
      const inputKey = payload.key;
      const inputValue = payload.value;
      const values = cloneDeep(state.values);
      const touched = cloneDeep(state.touched);
      return {
        ...state,
        values: set(values, inputKey, inputValue),
        touched: set(touched, inputKey, true),
      };
    case "VALIDATE_FORM":
      const errors = payload.errors || {};
      return {
        ...state,
        errors,
      };
    case "SET_VALUES":
      return { ...state, values: { ...payload.values } };
    case "RESET_FORM":
      return { ...payload, errors: {} };
    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
        submitCounter: ++state.submitCounter,
      };
    case "CLEAR_FORM":
      return { ...state, values: { ...payload.values }, errors: {} };
    default:
      return state;
  }
};

const defaultConfig = {
  validate: true, // should validate form?
  validationOnChange: false, // should form validate on blur input
  validateSchema: false, // passport validation schema
};

const useForm = (initialValues = {}, config = { ...defaultConfig }) => {
  const initalState = getInitialState(initialValues);
  const [state, dispatch] = useReducer(reducer, initalState);
  const { validate, validationOnChange, validateSchema } = config;

  const getValidationErrors = useCallback(() => {
    return new Promise((resolve, _) => {
      if (validateSchema) {
        try {
          const isValid = validateSchema.validateSync(state.values, {
            abortEarly: false,
          });
          resolve({ isValid, errors: {} });
        } catch (err) {
          const errors = {};

          err.inner.forEach((passportErr) => {
            const currentErr = get(errors, passportErr.path);
            if (currentErr) {
              set(errors, passportErr.path, [
                ...currentErr,
                passportErr.message,
              ]);
            } else {
              set(errors, passportErr.path, [passportErr.message]);
            }
          });
          resolve({ isValid: false, errors });
        }
      } else {
        resolve({ isValid: true, errors: {} });
      }
    });
  }, [state, validateSchema]);

  const validateForm = useCallback(async () => {
    const { isValid, errors } = await getValidationErrors();
    dispatch({ type: "VALIDATE_FORM", payload: { errors } });
    return isValid;
  }, [getValidationErrors]);

  React.useEffect(() => {
    async function checkForm() {
      await validateForm();
    }
    if (validationOnChange && state.isSubmitted) {
      checkForm();
    }
  }, [state.values, state.isSubmitted, validationOnChange]);

  const handleChange = useCallback(async (key, value) => {
    dispatch({
      type: "INPUT_CHANGE",
      payload: { key, value },
    });
  }, []);

  const resetForm = useCallback(() => {
    dispatch({
      type: "RESET_FORM",
      payload: {
        ...initalState,
      },
    });
  }, [initalState]);

  const clearForm = useCallback(() => {
    const oldValues = { ...state.values };
    Object.keys(oldValues).forEach(function (key) {
      oldValues[key] = "";
    });
    dispatch({
      type: "CLEAR_FORM",
      payload: {
        ...oldValues,
      },
    });
  }, [state.values]);

  const setValues = (values) => {
    dispatch({
      type: "SET_VALUES",
      payload: {
        ...values,
      },
    });
  };

  const handleSubmit = useCallback(
    async (onSubmit) => {
      if (validate) {
        dispatch({ type: "SUBMIT_FORM", payload: null });
        if (await validateForm()) {
          onSubmit(state.values);
        }
      } else {
        onSubmit(state.values);
      }
    },
    [state.values, validate, validateForm]
  );

  return {
    handleChange,
    resetForm,
    handleSubmit,
    clearForm,
    setValues,
    ...state,
  };
};

export default useForm;
