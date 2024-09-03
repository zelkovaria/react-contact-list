const Input = ({ title, value, onChange }) => {
  return (
    <div>
      <span>{title}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={title}
      />
    </div>
  );
};

export default Input;
