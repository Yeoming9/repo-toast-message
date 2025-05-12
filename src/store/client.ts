import { atom } from "recoil";
import { EToastPosition } from "../constants/enums";
import { IToastOption, IToastList } from "../types/client";

export const toastOptionState = atom<IToastOption>({
  key: "toastOptionState",
  default: {
    message: "",
    position: EToastPosition.TOP_LEFT,
    delay: 3000,
    visible: false,
  },
});

export const toastListState = atom<IToastList[]>({
  key: "toastListState",
  default: [],
});
