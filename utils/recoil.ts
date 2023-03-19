import { atom } from "recoil";

export const firstLoadState = atom<boolean>({
  key: `firstLoadPage`,
  default: true,
});

export const errorState = atom<string>({
  key: `errorState`,
  default: "",
});
