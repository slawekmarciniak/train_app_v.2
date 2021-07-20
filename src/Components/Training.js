const Training = (props) => {
  console.log("training props", props);
  const { id, type, description, date, duration } = props.training;

  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{description}</td>
        <td>{duration}</td>
        <td>{date}</td>
        <td className="buttons">
          <button
            onClick={() => {
              props.complete(id);
            }}
            className="btn btn-primary btn-sm"
          >
            complete
          </button>
        </td>
        <td className="buttons">
          <button
            onClick={() => {
              props.delete(id);
            }}
            className="btn btn-danger btn-sm"
          >
            delete
          </button>
        </td>
        <td className="buttons">
          <button className="btn btn-warning btn-sm">edit</button>
        </td>
      </tr>
    </tbody>
  );
};

export default Training;
