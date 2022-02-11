const InputField = ({ label, value, type, className, defaultValue }) => {
  return (
    <div className={`input-field ${className}`}>
      <label className="input-label">{label}</label>
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        className="input"
      />
    </div>
  );
};

export default InputField;
