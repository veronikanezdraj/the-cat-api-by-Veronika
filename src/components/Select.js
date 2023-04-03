import classes from './Select.module.css';
const Select = (props) => {
  return (
    <>
      <label htmlFor={props.title} className={classes.label}>
        {props.title}
      </label>
      <select
        name={props.title}
        className={classes.drop}
        value={props.value}
        onChange={(e) => props.selectHandler(e.target.value, props.title)}
      >
        {props.options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
