const CheckBox = ({ label, checked, disabled, className, onChange, id }) => {
  return (
    <div>
      <input
        type="checkbox"
        className={`checkbox-input ${className}`}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        id={id}
      />
      <label className="checkbox-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
