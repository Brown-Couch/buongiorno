import React, { useState } from 'react'

interface Props {
  fieldName: string;
  fieldLabel: string;
  fieldValue: string;
  placeholder: string;
  handleField: (field: string) => void;
}

export default function InputText(props: Props) {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.handleField(event.currentTarget.value);
  };

  return (
    <div className="control">
      <label htmlFor={props.fieldName}>{props.fieldLabel}</label>
      <input type="text"
             name={props.fieldName}
             placeholder={props.placeholder}
             value={props.fieldValue}
             onChange={handleChange}/>
    </div>
  );
};
