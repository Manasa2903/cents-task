const RadioButton = ({ checked, disabled, label, name, id, className }) => {
  return (
    <div>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        name={name}
        id={id}
        className={className}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
