const Input = ({ title }) => {
  return (
    <div>
      <span>{title}</span>
      <input placeholder={title} />
    </div>
  );
};

export default Input;
