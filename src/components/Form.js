import InputField from "./InputField";
import "./Form.css";
const Form = ({ fields, onChange, onSubmit, editFlag }) => {
  const inputFields = [];

  for (const field of fields) {
    const { label, type, name, value, placeholder } = field;

    inputFields.push(
      <InputField
        key={name}
        label={label}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }

  return (
    <form onSubmit={onSubmit}>
      {inputFields}
      <button type="submit">{editFlag ? "Edit" : "Add"}</button>
    </form>
  );
};

export default Form;
