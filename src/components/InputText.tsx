import React, { useState } from 'react'

interface Props {
  name: string;
  label: string;
  value: string;
  handler: any;
  placeholder: string;
}

export default function InputText(props: Props) {
  return (
    <div className="control">
      <label htmlFor={props.name}>{props.label}</label>
      <input type="text"
             name={props.name}
             placeholder={props.placeholder}
             value={props.value}
             onChange={props.handler}/>
    </div>
  );
};
