import { useState, type ChangeEventHandler, type ChangeEvent } from "react";
import apiClient from "../utils/axios";

const SearchBox = () => {
  const [inputText, setInputText] = useState("");

  const changeInputText: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputText(e.target.value);
  };

  const doSearch = async () => {
    const { data } = await apiClient.get(inputText);
    console.log(data);
    setInputText("");
  };

  return (
    <div>
      <input
        type="number"
        value={inputText}
        onChange={changeInputText}
        placeholder="図鑑番号"
      />
      <button type="button" onClick={doSearch}>
        検索!!
      </button>
    </div>
  );
};

export default SearchBox;
