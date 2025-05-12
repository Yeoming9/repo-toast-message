import styled from "styled-components";
import AppImages from "../../constants/images";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const BottomNav = styled.div`
  height: 45%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBtnList = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgb(216, 218, 222);
  padding-left: 32px;
`;

const Logo = styled.div`
  img {
    height: 12px;
    width: auto;
  }
  cursor: pointer;
`;

const EtcBtnList = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: rgb(216, 218, 222);
  padding-right: 32px;
`;

const BottomMenuBtn = styled.button`
  height: 100%;
  background: none;
  border: none;
  color: black;
  font-size: 13px;
  letter-spacing: 0.3px;
  cursor: pointer;

  padding: 25px 10px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ededed;
  }
`;

const DemoBtn = styled.button`
  height: 100%;
  background: black;
  border: none;
  color: white;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0.3px;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
`;

const BottomNavigationBar = () => {
  return (
    <BottomNav>
      <MenuBtnList>
        <Logo>
          <img src={AppImages.Logo} />{" "}
        </Logo>
        |<BottomMenuBtn>Market Brief</BottomMenuBtn>
        <BottomMenuBtn>
          Tridge Sourcing Hub
          <KeyboardArrowDownOutlinedIcon
            sx={{ fontSize: "15px", color: "#14181f", marginLeft: "5px" }}
          />
        </BottomMenuBtn>
        <BottomMenuBtn>
          Tridge Eye
          <KeyboardArrowDownOutlinedIcon
            sx={{ fontSize: "15px", color: "#14181f", marginLeft: "5px" }}
          />
        </BottomMenuBtn>
        <BottomMenuBtn>
          더 보기
          <KeyboardArrowDownOutlinedIcon
            sx={{ fontSize: "15px", color: "#14181f", marginLeft: "5px" }}
          />
        </BottomMenuBtn>
      </MenuBtnList>

      <EtcBtnList>
        <BottomMenuBtn>
          <SearchOutlinedIcon sx={{ fontSize: "18px" }} />
        </BottomMenuBtn>
        <BottomMenuBtn>
          <LanguageOutlinedIcon sx={{ fontSize: "17px" }} />
          KO
        </BottomMenuBtn>
        <DemoBtn>데모 요청하기</DemoBtn>
        <BottomMenuBtn>로그인</BottomMenuBtn>
      </EtcBtnList>
    </BottomNav>
  );
};

export default BottomNavigationBar;
