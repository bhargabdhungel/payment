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

export const searchResultsAtom = atom({
  key: "searchResultsAtom",
  default: [],
});

export const currentFriendAtom = atom({
  key: "currentFriendAtom",
  default: {
    name : null,
    username: null,
  },
});
