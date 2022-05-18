import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { unsetUser } from "../../stores/user";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(unsetUser());
    navigate("/login", { replace: true });
  }, []);
};
