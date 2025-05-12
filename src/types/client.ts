import { EToastPosition } from "../constants/enums";

export interface IToastOption {
  message: string;
  position: EToastPosition;
  delay: number | null;
  visible: boolean;
}

export interface IToastList {
  id: string;
  message: string;
  position: EToastPosition;
  delay: number | null;
  visible: boolean;
}
