import Training from "../Components/Training";

const History = (props) => {
  const finished = props.list.filter((training) => training.finished);

  const finishedList = finished.map((training) => (
    <Training
      key={training.id}
      training={training}
      complete={props.complete}
      edit={props.edit}
    />
  ));

  return (
    <>
      <h5 className="pageHeader">finished workouts:</h5>
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
        {finishedList}
      </table>
    </>
  );
};

export default History;
