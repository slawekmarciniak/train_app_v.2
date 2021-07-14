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
      <h5 className="pageHeader">coming workouts:</h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>type</th>
            <th>description</th>
            <th>duration</th>
            <th>date</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {activeList}
      </table>
    </>
  );
};

export default TrainingList;
