import Training from "../Components/Training";
import { useContext } from "react";
import { AppContext } from "../layoutes/AppContext";

const TrainingList = (props) => {
  const { state } = useContext(AppContext);
  const active = state.filter((training) => !training.finished);

  const activeList = active.map((training) => (
    <Training
      key={training.id}
      training={training}
      complete={props.complete}
      edit={props.edit}
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
            <th>h</th>
            <th>m</th>
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
