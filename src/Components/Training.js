const Training = (props) => {
  const { id, type, description, date, duration } = props.training;

  const completeButtonHandler = () => props.complete(id);
  const deleteButtonHandler = () => props.delete(id);
  const editButtonHandler = () => props.edit(id);

  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{description}</td>
        <td>{duration}</td>
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
          <button
            onClick={editButtonHandler}
            className="btn btn-warning btn-sm"
          >
            edit
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Training;
