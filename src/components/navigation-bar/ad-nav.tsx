import styled from "styled-components";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const AdNav = styled.div`
  height: 32%;
  width: 100%;
  background-color: #d9e6fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const NewIcon = styled.div`
  background-color: #2c2ff2;
  color: white;
  border-radius: 15px;
  margin-right: 6px;
  padding-left: 4px;
  padding-right: 4px;
`;

const AdText = styled.div`
  color: #23248b;
  margin-right: 6px;
`;

const AdBtn = styled.div`
  color: #23248b;
  font-weight: bold;
  text-decoration: underline;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AdNavigationBar = () => {
  return (
    <AdNav>
      <NewIcon>신규</NewIcon>
      <AdText>Tridge Eye로 공급망 인텔리전스를 한 단계 더 발전시키세요.</AdText>
      <AdBtn>
        더 알아보기{" "}
        <ArrowForwardOutlinedIcon
          sx={{ fontSize: "13px", color: "#23248b", marginLeft: "3px" }}
        />{" "}
      </AdBtn>
    </AdNav>
  );
};

export default AdNavigationBar;
