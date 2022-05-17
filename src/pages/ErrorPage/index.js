import { Grid } from "@mui/material";
import { Error } from "../../components/Error";

export const ErrorPage = ({}) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Error />
    </div>
  );
};
