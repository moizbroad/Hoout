import React from "react";

const InputField = (props) => {
  const {
    id,
    label,
    type,
    autoComplete,
    required,
    value,
    defaultValue,
    onBlur,
    onKeyUp,
    onKeyDown,
    autoFocus,
    disabled,
    placeholder,
    onChange,
    minLength,
    maxLength,
    max,
    pattern,
    title,
    marginTop,
    marginBottom,
    name,
    icon: IconComponent,
  } = props;

  return (
    <div className={`${marginTop && "mt-4"} ${marginBottom && "mb-4"} `}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 pb-1.5"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {IconComponent && (
          <span className="absolute left-3">
            <IconComponent className="text-gray-400 h-5 w-5" />
          </span>
        )}
        <input
          className={`block w-full appearance-none  ${
            IconComponent ? "pl-10" : ""
          } rounded-md   xl:py-3 xl:px-3 py-2 px-2 outline-none  border border-[#D9D9D9] focus:outline-none sm:text-sm input-field`}
          id={id}
          label={label}
          type={type}
          max={max}
          name={name}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          pattern={pattern}
          title={title}
          value={value}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          autoFocus={autoFocus}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
        
        />
      </div>
    </div>
  );
};

export default InputField;
