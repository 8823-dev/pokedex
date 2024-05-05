import { useRecoilValue } from "recoil";
import searchResultState from "../states/searchResultState";

const PokemonInfo = () => {
  const searchResult = useRecoilValue(searchResultState);

  return (
    searchResult && (
      <div>
        <p>
          {searchResult.id}: {searchResult.name}
        </p>
        <img src={searchResult.image_url} alt="" />
      </div>
    )
  );
};

export default PokemonInfo;
