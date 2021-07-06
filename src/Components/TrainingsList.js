import Training from "./Training";

const TrainingList = (props) => {
  const active = props.list.filter((training) => !training.finished);
  const finished = props.list.filter((training) => training.finished);

  const activeList = active.map((training) => (
    <Training
      key={training.id}
      training={training}
      complete={props.complete}
      delete={props.delete}
    />
  ));
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
      <h4>coming trainings</h4>
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

      <h4>finished trainings:</h4>
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

export default TrainingList;
