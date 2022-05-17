import { ImageLogin } from "../../components/ImageLogin";
import { Login } from "../../components/Login/index";
import { NoMenuLayout } from "../../layout/NoMenuLayout/index";

export const LoginPage = ({}) => {
  return <NoMenuLayout leftSide={Login} rightSide={ImageLogin} />;
};
