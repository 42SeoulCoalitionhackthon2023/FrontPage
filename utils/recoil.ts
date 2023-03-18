import { atom } from "recoil";

export const firstLoadState = atom<boolean>({
  key: `firstLoadPage`,
  default: true,
});
