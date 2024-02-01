import { atom } from "recoil";

export const userDataAtom = atom({
  key: "userDataAtom",
  default: {
    name: "",
    username: "",
    email: "",
    friends: [],
  },
});


export const searchValueAtom = atom({
  key: "searchValueAtom",
  default: "",
});

export const searchResultsAtom = atom({
  key: "searchResultsAtom",
  default: [],
});

