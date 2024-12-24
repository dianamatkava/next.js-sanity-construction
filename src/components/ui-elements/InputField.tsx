import React from 'react';

const InputField = ({label, placeholder, name, type="input", required=true, inputClassName="", labelClassName="", children=null}: {label: string, placeholder: string, required?: boolean}) => {
  return (
    <div className={`form__group field relative w-full`}>
      <input name={name} type={type} className={`form__field w-full ${inputClassName}`} placeholder={placeholder} required={required}/>
      <label htmlFor={label} className={`form__label ${labelClassName}`}>
        {label}
        {required && <span className={'text-red-600 px-1'}>*</span>}
      </label>
      {children && children}
    </div>
  );
}

export default InputField;
