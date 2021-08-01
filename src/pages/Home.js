import Training from "../Components/Training";
import { useContext } from "react";
import { AppContext } from "../layoutes/AppContext";

const Home = () => {
  const { state } = useContext(AppContext);
  const date = new Date().toISOString().slice(0, 10);

  const todaysWorkouts = state.filter(
    (training) => training.date === date && training.finished === false
  );

  const pageHeader =
    todaysWorkouts.length > 0
      ? "todays workouts:"
      : "no more workouts for today";

  const todaysList = todaysWorkouts.map((training) => (
    <Training key={training.id} training={training} />
  ));

  return (
    <>
      <h5 className="pageHeader">{pageHeader}</h5>

      {todaysWorkouts.length > 0 && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>type</th>
              <th>description</th>
              <th>h</th>
              <th>m</th>
              <th>date</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {todaysList}
        </table>
      )}
    </>
  );
};

export default Home;
