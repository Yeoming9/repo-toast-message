import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import MyReactPage from "./pages/my-react-page";
import NotificationToast from "./components/notification/toast-notification";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <RecoilRoot>
    <MyReactPage />
    <NotificationToast />
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
