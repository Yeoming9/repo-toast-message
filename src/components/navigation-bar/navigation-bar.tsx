import styled from "styled-components";
import TopNavigationBar from "./top-nav";
import AdNavigationBar from "./ad-nav";
import BottomNavigationBar from "./bottom-nav";

const Nav = styled.div`
  height: 12%;
  width: 100%;
  border-bottom: 1px solid rgb(216, 218, 222);
  box-sizing: border-box;
`;

const NavigationBar = () => {
  return (
    <Nav>
      <TopNavigationBar />
      <AdNavigationBar />
      <BottomNavigationBar />
    </Nav>
  );
};

export default NavigationBar;
