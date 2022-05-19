import { PageLayout } from "../../layout/PageLayout";
import { PassengerClasses } from "../../components/PassengerClasses";
import { useSelector, useDispatch } from "react-redux";
import { setClasses } from "../../stores/classes";
import { fetchStats } from "../../services/http/requests";
import { useEffect } from 'react';

export const PassengerClassesPage = ({}) => {
  const user = useSelector((state) => state.user.user);
  const classes = useSelector((state) => state.classes.classes);
  const dispatch = useDispatch();
  useEffect(() => {
    user &&
      !classes &&
      fetchStats(user, {
        type: "classes",
      }).then(({ data, status }) => dispatch(setClasses(data)));
  });
  return <PageLayout component={PassengerClasses} />;
};
