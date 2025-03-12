import css from "./SearchBox.module.css";

const SearchBox = ({value, onSearch}) => {
  return (
    <div className={css.filter}>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={(event) => onSearch(event.target.value)}/> 
    </div>
  );
};
export default SearchBox;
