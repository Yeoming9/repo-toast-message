import styled from "styled-components";
import { toastOptionState, toastListState } from "../../store/client";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";

const BtnSection = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ToastBtnSide = () => {
  const toastOption = useRecoilValue(toastOptionState);
  const setToastList = useSetRecoilState(toastListState);

  const showToastMessage = (message: string) => {
    const { position, delay } = toastOption;
    const newToast = {
      id: uuidv4(),
      message,
      position: position,
      delay: delay,
      visible: true,
    };

    setToastList((prev) => [...prev, newToast]);
  };

  const clearAllMessage = () => {
    setToastList([]);
  };

  return (
    <BtnSection>
      <button onClick={() => showToastMessage("My Message")}>
        Toast Button
      </button>
      <button onClick={() => clearAllMessage()}>Clear All Toast Message</button>
    </BtnSection>
  );
};

export default ToastBtnSide;
