import styled from 'styled-components';
import NavigationBar from "../components/navigation-bar/navigation-bar";
import MainComponent from '../components/main/main-component';
import Footer from '../components/footer/footer';

const MyPage = styled.div `
    height: 100vh;
    width: 100vw;
`;

const MyReactPage = () => {
    return (
        <MyPage > 
            <NavigationBar />
            <MainComponent />
            <Footer/>
        </MyPage>
      );
};

export default MyReactPage;