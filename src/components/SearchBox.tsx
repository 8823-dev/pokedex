import { useState, type ChangeEventHandler, type ChangeEvent } from "react";

const SearchBox = () => {
  const [inputText, setInputText] = useState("");

  const changeText: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputText(e.target.value);
  };

  const doSearch = () => {
    setInputText("");
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={changeText} />
      <button type="button" onClick={doSearch}>
        検索!!
      </button>
    </div>
  );
};

export default SearchBox;
