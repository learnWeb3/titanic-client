import { PageLayout } from "../../layout/PageLayout";
import { PassengerAge } from "../../components/PassengerAge";
import { useEffect } from "react";
import { fetchStats } from "../../services/http/requests";
import { useSelector, useDispatch } from "react-redux";
import { setAges } from "../../stores/ages";

export const PassengerAgePage = ({}) => {
  const user = useSelector((state) => state.user.user);
  const ages = useSelector((state) => state.ages.ages);
  const dispatch = useDispatch();
  useEffect(() => {
    user &&
      fetchStats(user, {
        type: "ages",
      }).then(({ data, status }) => dispatch(setAges(data)));
  }, [user]);
  return <PageLayout component={PassengerAge} />;
};
