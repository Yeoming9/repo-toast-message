import styled from "styled-components";

const TopNav = styled.div`
  height: 23%;
  width: 100%;
  background-color: rgb(27, 32, 39);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopMenuBtnList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

const InquiryBtn = styled.div`
  line-height: 1.25;
  font-size: 12px;
  letter-spacing: 0.3px;
  padding-right: 16px;
`;

const TopMenuBtn = styled.button`
  height: 100%;
  background: none;
  border: none;
  color: rgb(182, 185, 190);
  font-size: 11px;
  letter-spacing: 0.3px;
  cursor: pointer;
  padding: 25px 10px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2d3138;
  }
`;

const TopNavigationBar = () => {
  return (
    <TopNav>
      <TopMenuBtnList>
        <TopMenuBtn>모든 메뉴 보기</TopMenuBtn>
        <TopMenuBtn>Tridge Home</TopMenuBtn>
        <TopMenuBtn>Tridge 소개</TopMenuBtn>
        <TopMenuBtn>고객 지원 센터</TopMenuBtn>
        <TopMenuBtn>Tridge Pay</TopMenuBtn>
      </TopMenuBtnList>
      <InquiryBtn>
        <TopMenuBtn>문의하기</TopMenuBtn>
      </InquiryBtn>
    </TopNav>
  );
};

export default TopNavigationBar;
