import Training from "../Components/Training";

const History = (props) => {
  const finished = props.list.filter((training) => training.finished);

  const finishedList = finished.map((training) => (
    <Training
      key={training.id}
      training={training}
      complete={props.complete}
      delete={props.delete}
    />
  ));

  return (
    <>
      <h4>finished workouts:</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>type</th>
            <th>description</th>
            <th>duration</th>
            <th>date</th>
            <th>action</th>
          </tr>
        </thead>
        {finishedList}
      </table>
    </>
  );
};

export default History;
