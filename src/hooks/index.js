import { useState, createRef, useEffect } from "react";

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

export const useAnchors = (anchorIds, state = null) => {
  const [anchors, setAnchors] = useState(
    anchorIds.map((e) => createRef())
  );

  const scrollTo = (elementRef) => {
    const { top } = elementRef.current.getBoundingClientRect();
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    if (state && state.anchor && anchors && anchors.length) {
      anchors.forEach((anchor) => {
        if (
          anchor &&
          anchor.current &&
          anchor.current.id &&
          anchor.current.id === state.anchor
        ) {
          return scrollTo(anchor);
        }
      });
    }
  }, [state]);

  return {
    anchors,
  };
};
