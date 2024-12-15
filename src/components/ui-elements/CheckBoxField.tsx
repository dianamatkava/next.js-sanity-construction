import React from 'react';

const CheckBoxField = ({label, width}) => {
  return (
    <label className={`inline-flex gap-3 items-center justify-start`}>
      <input type="checkbox" className={`input w-${width}`}/>
      <span className="custom-checkbox"></span>
      {label}
    </label>
  );
}

export default CheckBoxField;
