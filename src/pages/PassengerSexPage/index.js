import { PageLayout } from "../../layout/PageLayout";
import { PassengerSex } from "../../components/PassengerSex";
import { useSelector, useDispatch } from "react-redux";
import { setSexes } from "../../stores/sexes";
import { fetchStats } from "../../services/http/requests";
import { useEffect } from "react";

export const PassengerSexPage = ({}) => {
  const user = useSelector((state) => state.user.user);
  const sexes = useSelector((state) => state.sexes.sexes);
  const dispatch = useDispatch();
  useEffect(() => {
    user &&
      !sexes &&
      fetchStats(user, {
        type: "sexes",
      }).then(({ data, status }) => dispatch(setSexes(data)));
  });
  return <PageLayout component={PassengerSex} />;
};
