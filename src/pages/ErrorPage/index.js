import { Grid } from "@mui/material";
import { Error } from "../../components/Error";

export const ErrorPage = ({ code = 404, message = "Page Not found" }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Error code={code} message={message} />
    </div>
  );
};
