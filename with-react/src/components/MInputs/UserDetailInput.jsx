import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputField = styled(TextField)({
  marginBottom: "20px",
});

const UserDetailInput = ({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
  disabled = false,
  required = true,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <InputField
      fullWidth
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      disabled={disabled}
      required={required}
      variant="filled"
      margin="normal"
      autoComplete={autoComplete}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    disabled={disabled}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : {}
      }
      {...props}
    />
  );
};

export default UserDetailInput;
