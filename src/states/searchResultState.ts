import { atom } from "recoil";
import type { Pokemon } from "../types/types";

const searchResultState = atom<Pokemon | null>({
  key: "searchResultState",
  default: null,
});

export default searchResultState;
