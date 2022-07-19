import React from "react";

type Props = {
  touched?: boolean;
  errors: string | undefined;
  getFieldProps: (key: string) => any;
  type: string;
  placeholder: string;
  className: string;
  label: string;
  formikValue: string;
};

export default function TextField({
  touched,
  errors,
  type,
  placeholder,
  label,
  formikValue,
  getFieldProps,
  className,
}: Props) {
  return (
    <React.Fragment>
      <label className="label" htmlFor={label}>
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        {...getFieldProps(`${formikValue}`)}
      />
      <label className="label">
        <span className="label-text text-red-500">{touched && errors}</span>
      </label>
    </React.Fragment>
  );
}
