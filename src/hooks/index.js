import { useState } from "react";

export const useAlert = () => {
  const [toggled, setToggled] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    title: "",
    content: "",
  });
  const [alertSeverity, setAlertSeverity] = useState("info");
  return {
    toggled,
    setToggled,
    alertMessage,
    setAlertMessage,
    alertSeverity,
    setAlertSeverity,
  };
};
