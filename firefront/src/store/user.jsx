import {atom} from 'recoil'

export const userAtom= atom({
  key : "userAtom",
  default : {
    uid: null,
    email: null,
    metadata: null,
    name: null,
    username : null,
    profilePic: null,
  }
});

export const searchValueAtom = atom({
  key: "searchValueAtom",
  default: "",
});

export const searchResultAtom = atom({
  key: "searchResultAtom",
  default: {
    name : null,
    username : null,
  }
});