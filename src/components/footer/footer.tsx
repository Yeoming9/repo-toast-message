import styled from "styled-components";
import AppImages from "../../constants/images";

const FooterWrapper = styled.div`
  height: 8%;
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(216, 218, 222);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #666;
  padding: 24px 16px;
`;

const TopSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(216, 218, 222);
`;

const Logo = styled.div`
  img {
    height: 12px;
    width: auto;
  }
  cursor: pointer;
`;

const TopSectionBtnList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(216, 218, 222);
  padding-left: 32px;
`;

const TopSectionBtn = styled.button`
  height: 100%;
  background: none;
  border: none;
  color: black;
  font-size: 12px;
  letter-spacing: 0.3px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomSection = styled.div`
  height: 100%;
  padding-top: 15px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const BottomSectionBtn = styled.div`
  text-decoration: underline;
  padding-left: 32px;
  font-size: 12px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <TopSection>
        <Logo>
          <img src={AppImages.Logo} />
        </Logo>
        <TopSectionBtnList>
          <TopSectionBtn>Tridge Home</TopSectionBtn>
          <TopSectionBtn>Tridge 소개</TopSectionBtn>
          <TopSectionBtn>고객 지원 센터</TopSectionBtn>
          <TopSectionBtn>채용공고</TopSectionBtn>
          <TopSectionBtn>문의하기</TopSectionBtn>
        </TopSectionBtnList>
      </TopSection>
      <BottomSection>
        © 2025 Tridge
        <BottomSectionBtn>개인정보처리방침</BottomSectionBtn>
        <BottomSectionBtn>약관</BottomSectionBtn>
        <BottomSectionBtn>사이트맵</BottomSectionBtn>
      </BottomSection>
    </FooterWrapper>
  );
};

export default Footer;
