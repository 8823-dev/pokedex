import type { ChangeEvent, ChangeEventHandler } from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import searchResultState from "../states/searchResultState";
import apiClient from "../utils/axios";

const SearchBox = () => {
  const [inputText, setInputText] = useState("");
  const setSearchResult = useSetRecoilState(searchResultState);

  const changeInputText: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputText(e.target.value);
  };

  const doSearch = async () => {
    if (inputText === "") {
      alert("図鑑番号を入力してね");
      return;
    }
    const { data } = await apiClient.get(inputText);

    const pokemon = {
      id: data.id,
      name: data.name,
      image_url: data.sprites.front_default,
    };
    setSearchResult(pokemon);

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
