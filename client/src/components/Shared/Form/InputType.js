import React from "react";

const InputType = ({ inputType, labelfor, labelText, value, onChange, name , placeholder}) => {
  return (
    <>
      <div className="input-box">
        <label htmlFor={labelfor}>{labelText}</label>
        <input
          type={inputType}
          placeholder={placeholder}
          required
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
