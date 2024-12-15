import React from 'react';

const InputField = ({label, placeholder, required=true, inputClassName="", labelClassName=""}: {label: string, placeholder: string, required?: boolean}) => {
  return (
      <div className={`form__group field`}>
        <input type="input" className={`form__field w-full ${inputClassName}`} placeholder={placeholder} required={required} />
        <label htmlFor={label} className={`form__label ${labelClassName}`}>{label}</label>
      </div>
  );
}

export default InputField;
