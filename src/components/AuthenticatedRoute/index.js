import { useSelector } from "react-redux";
import { ErrorPage } from "../../pages/ErrorPage";

export const AuthenticatedRoute = ({
  component: Component,
  path,
  ...otherProps
}) => {
  const currentUser = useSelector((state) => state.user.user);

  if (currentUser) {
    return <Component {...otherProps} />;
  }

  return (
    <ErrorPage
      code={401}
      message={
        "Unauthorized, you need to be logged in to access this ressource"
      }
    />
  );
};
