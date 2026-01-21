import type { ChangeEventHandler } from "react";

interface InputFieldProps {
  /** The text displayed above the input */
  label: string;
  /** Unique ID for the input and label association */
  id: string;
  /** HTML input type (e.g., 'number', 'text') - defaults to 'text' */
  type?: string;
  /** The current value of the input */
  value: string | number;
  /** Callback function triggered when the input value changes */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /** Optional placeholder text */
  placeholder?: string;
}

/**
 * A reusable, styled input component with a floating label.
 * Designed to maintain a consistent look across the Retail Calculator.
 * * @component
 * @example
 * <InputField label="Price" id="price" value={price} onChange={setPrice} />
 */
const InputField = (props: InputFieldProps) => {
  const { label, ...inputProps } = props;
  return (
    <div className="flex flex-col">
      <label
        htmlFor={inputProps.id}
        className="text-sm font-semibold text-slate-700 tracking-wide"
      >
        {label}
      </label>
      <input {...inputProps} />
    </div>
  );
};

export default InputField;
