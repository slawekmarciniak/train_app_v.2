import Training from "../Components/Training";

const Home = (props) => {
  const date = new Date().toISOString().slice(0, 10);
  const todaysWorkouts = props.list.filter(
    (training) => training.date === date && training.finished === false
  );

  const pageHeader =
    todaysWorkouts.length > 0
      ? "todays workouts:"
      : "no more workouts for today";

  const todaysList = todaysWorkouts.map((training) => (
    <Training
      key={training.id}
      training={training}
      complete={props.complete}
      edit={props.edit}
    />
  ));

  return (
    <>
      {/* <p className="quote"> {quote}</p> */}
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
