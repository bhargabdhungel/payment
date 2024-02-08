import { atom } from "recoil";


export const loadingAtom = atom({
  key: "loadingAtom",
  default: false,
});

export const showSearchResultsAtom = atom({
  key: "showSearchResultsAtom",
  default: false,
});