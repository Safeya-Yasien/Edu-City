import styles from "./Input.module.scss";

type TInputProps = {
  type: string;
  name: string;
  placeholder: string;
};

const { input } = styles;

const Input = ({ type, name, placeholder }: TInputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={input}
    />
  );
};

export default Input;
