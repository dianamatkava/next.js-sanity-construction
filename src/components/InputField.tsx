import React from 'react';

const InputField = ({label, placeholder, required=true}: {label: string, placeholder: string, required?: boolean}) => {
  return (
      <div className="form__group field">
        <input type="input" className="form__field w-[250px]" placeholder={placeholder} required={required} />
        <label htmlFor={label} className="form__label">{label}</label>
      </div>
  );
}

export default InputField;
