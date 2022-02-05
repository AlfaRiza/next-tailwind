import React from "react";

export default function Checkbox({label, ...props}) {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <input
          className="text-indigo-500 border-gray-300 rounded focus:ring-0"
          type="checkbox"
          {...props}
        />
        <label htmlFor={props.id} className="select-none">{label}</label>
      </div>
    </div>
  );
}
