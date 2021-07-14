import Training from "../Components/Training";

const TrainingList = (props) => {
  const active = props.list.filter((training) => !training.finished);

  const activeList = active.map((training) => (
    <Training
      key={training.id}
      training={training}
      complete={props.complete}
      delete={props.delete}
    />
  ));

  return (
    <>
      <h4>coming workouts:</h4>
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
        {activeList}
      </table>
    </>
  );
};

export default TrainingList;
