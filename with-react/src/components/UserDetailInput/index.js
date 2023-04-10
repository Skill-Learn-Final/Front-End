import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const UserDetailInput = ({
  id,
  type,
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

  const inputClasses = `w-full border-green_200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue border-[1px] focus:border-green-700 ${
    size === "sm" ? "text-sm" : "text-base"
  }`;

  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        id={id}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
        placeholder={props.label}
        className={`
          ${variant === "filled" ? "bg-green_200" : ""}
          ${inputClasses}
          ${icon ? "pl-10" : ""}
        `}
      />
      {type === "password" && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button
            type="button"
            className="bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
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
  );
};
