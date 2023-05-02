import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const UserDetailInput = ({
  id,
  type,
  label,
  value,
  onChange,
  autoComplete,
  disabled = false,
  required = true,
  variant = "filled",
  size = "md",
  icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputClasses = `w-full border-2 border-slate-400 px-3 py-2 rounded-lg shadow-sm focus:shadow-md focus:shadow-dark_green border-[1px] focus:border-slate-600 ${
    size === "sm" ? "text-sm" : "text-base"
  }`;
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <label
        htmlFor={id}
        className="block text-left text-green-800 text-sm font-semibold mb-1  pl-3"
      >
        {label}
      </label>
      <div>
        <input
          id={id}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          disabled={disabled}
          required={required}
          className={`
            ${variant === "filled" ? "bg-white  " : ""}
            ${inputClasses}
            ${icon ? "pl-10" : ""}
          `}
          {...props}
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center mt-6">
            <button
              type="button"
              className={`h-8 w-8 ${
                !showPassword
                  ? "bg-gray-300/50 text-gray-500  hover:bg-gray-400 focus:bg-gray-400 hover:text-gray-100 focus:text-gray-100 "
                  : "bg-medium_green text-faint_green shadow-green-900/20 focus:bg-green-900/50 hover:bg-green-900/50"
              }  p-1 rounded-radius50  focus:outline-none shadow-gray-900/20 shadow-md `}
              onClick={handleClickShowPassword}
              disabled={disabled}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
