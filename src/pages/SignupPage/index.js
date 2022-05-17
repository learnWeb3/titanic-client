import { NoMenuLayout } from "../../layout/NoMenuLayout/index";
import { SignUp } from "../../components/SignUp/index";
import { ImageSignup } from "../../components/ImageSignup";

export const SignupPage = ({}) => {
  return <NoMenuLayout leftSide={SignUp} rightSide={ImageSignup} />;
};
