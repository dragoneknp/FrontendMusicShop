import "./login.scss";
import LoginMainContent from "../../Components/LoginMainContent/loginMainContent";
import PageLayout from "../../Layout/pageLayout";
const Login = () => {
    return (
        <PageLayout page={"login"}>
            <LoginMainContent />
        </PageLayout>
    );
};
export default Login;
