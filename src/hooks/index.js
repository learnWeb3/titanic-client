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

export const useAnchors = (anchorIds, state = null, otherDependencies = []) => {
  const [anchors, setAnchors] = useState(anchorIds.map((e) => createRef()));

  const scrollTo = (elementRef) => {
    const { top } = elementRef.current.getBoundingClientRect();
    window.scrollTo(0, top);
  };

  useEffect(() => {
    const dependenciesContentCheck = otherDependencies.reduce((mapping, e) => {
      if (e !== null) {
        mapping[true] = true;
      } else {
        mapping[false] = true;
      }
      return mapping;
    }, {});

    if (
      state &&
      state.anchor &&
      anchors &&
      anchors.length &&
      !dependenciesContentCheck[false]
    ) {
      anchors.forEach((anchor) => {
        if (
          anchor &&
          anchor.current &&
          anchor.current.id &&
          anchor.current.id === state.anchor
        ) {
          scrollTo(anchor);
        }
      });
    }
  }, [state, ...otherDependencies]);

  return {
    anchors,
  };
};
