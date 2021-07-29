import { useContext } from "react";
import { AppContext } from "../layoutes/AppContext";

const Training = (props) => {
  const { id, type, description, date, hours, minutes } = props.training;
  const { dispatch } = useContext(AppContext);

  const completeButtonHandler = () =>
    dispatch({
      id,
      type: "COMPLETE",
    });
  const deleteButtonHandler = () =>
    dispatch({
      id,
      type: "DELETE",
    });
  const editButtonHandler = () => props.edit(id);

  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{description}</td>
        <td>{hours}</td>
        <td>{minutes}</td>
        <td>{date}</td>
        <td className="buttons">
          <button
            onClick={completeButtonHandler}
            className="btn btn-primary btn-sm"
          >
            complete
          </button>
        </td>
        <td className="buttons">
          <button
            onClick={deleteButtonHandler}
            className="btn btn-danger btn-sm"
          >
            delete
          </button>
        </td>
        <td className="buttons">
          {/* <NavLink to="/train_app_v.1/edit_workout"> */}
          <button
            onClick={editButtonHandler}
            className="btn btn-warning btn-sm"
          >
            Edit
          </button>
          {/* </NavLink> */}
        </td>
      </tr>
    </tbody>
  );
};

export default Training;
