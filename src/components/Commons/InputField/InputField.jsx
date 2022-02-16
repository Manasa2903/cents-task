const InputField = ({
  label,
  value,
  type,
  className,
  inputClassName,
  defaultValue,
  onChange,
  name,
  placeholder,
  id,
}) => {
  return (
    <div className={`input-container ${className}`}>
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        className={`input ${inputClassName}`}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default InputField;
