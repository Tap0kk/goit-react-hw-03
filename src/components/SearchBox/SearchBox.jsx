import s from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <label className={s.wrapper}>
        <span>Find contact by name:</span>
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
