const InputField = ({
  label,
  value,
  type,
  className,
  defaultValue,
  onChange,
  name,
}) => {
  return (
    <div className={`input-field ${className}`}>
      <label className="input-label">{label}</label>
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        className="input"
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
