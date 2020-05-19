import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import "../styles/MainLayout.css";
import Alert from "../components/Alert";
import { connect } from "react-redux";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <SideNavigation />

      <div className={"content"}>{children}</div>
    </>
  );
};

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default MainLayout;
