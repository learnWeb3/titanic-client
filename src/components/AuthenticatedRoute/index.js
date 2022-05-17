export const AuthenticatedRoute = ({
  component: Component,
  path,
  ...otherProps
}) => {
  return <Component {...otherProps} />;
};
