import React from "react";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

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
      {/* <label className="label" htmlFor={label}>
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
      </label> */}

      <Form.Group className="mb-3" controlId="form">
        <Form.Label>{label}</Form.Label>

        <Form.Control
          size="lg"
          type={type}
          placeholder={placeholder}
          className={className}
          isInvalid={!!errors}
          {...getFieldProps(`${formikValue}`)}
        />
        <Form.Control.Feedback type="invalid">
          {touched && errors}
        </Form.Control.Feedback>
      </Form.Group>
    </React.Fragment>
  );
}
