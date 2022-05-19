import { mappingImg } from "./helpers";
import { useState, useEffect } from "react";

export const AgingPerson = ({ age = 18, sex = "male" }) => {
  const getAgeSlice = (age, sex) =>
    Object.values(mappingImg[sex]).find(
      (element) => element.min <= age && element.max >= age
    );

  const [ageSlice, setAgeSlice] = useState(getAgeSlice(age, sex));
  const [src, setSrc] = useState(ageSlice.img);

  useEffect(() => {
    setSrc(ageSlice.img);
  }, [ageSlice]);

  useEffect(() => {
    setAgeSlice(getAgeSlice(age, sex));
  }, [age, sex]);

  return (
    <img
      src={src}
      style={{
        height: "25rem",
      }}
    />
  );
};
