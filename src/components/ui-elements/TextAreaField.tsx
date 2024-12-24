import React from 'react';

const TextAreaField = ({label, placeholder="", name, required=true, inputClassName="", labelClassName=""}: {label: string, placeholder: string, required?: boolean}) => {
  return (
      <div className={`form__group field relative`}>
        <textarea name={name} rows={5} className={`form__field w-full ${inputClassName}`} placeholder={placeholder} required={required} />
        <label htmlFor={label} className={`form__label ${labelClassName}`}>{label}</label>
      </div>
  );
}

export default TextAreaField;
