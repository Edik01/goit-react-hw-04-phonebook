export const Filter = ({ filter, handleChange }) => {
  const onChange = event => {
    handleChange(event.target.value);
  };
  return <input value={filter} onChange={onChange} />;
};
