import { Alert as MuiAlert, AlertTitle } from "@mui/material";

export const Alert = ({ severity = "info", title, content, setToggled }) => {
  const handleClose = () => {
    setToggled(false);
  };

  return (
    <MuiAlert onClose={handleClose} severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {content}
    </MuiAlert>
  );
};
