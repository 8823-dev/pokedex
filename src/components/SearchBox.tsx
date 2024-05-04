import { useState } from "react";
import type { ChangeEventHandler, ChangeEvent } from "react";
import apiClient from "../utils/axios";
import { useRecoilState } from "recoil";
import searchResultState from "../states/searchResultState";

const SearchBox = () => {
  const [inputText, setInputText] = useState("");
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);

  const changeInputText: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputText(e.target.value);
  };

  const doSearch = async () => {
    if (inputText === "") return;
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
