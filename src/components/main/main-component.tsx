import styled from "styled-components";
import OptionBox from "./option-box";
import ToastBtnSide from "./toast-button";

const MainWrapper = styled.div`
  height: 80%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainComponent = () => {
  return (
    <MainWrapper>
      <OptionBox />
      <ToastBtnSide />
    </MainWrapper>
  );
};

export default MainComponent;
