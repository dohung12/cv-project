import InputField from "./InputField";

const Form = ({ fields, onChange, onSubmit, editFlag }) => {
  const inputFields = [];

  for (const field of fields) {
    const { label, type, name, value } = field;

    inputFields.push(
      <InputField
        key={name}
        label={label}
        type={type}
        name={name}
        value={value}
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
