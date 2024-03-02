import ToDo from "./ToDo";
// import { deleteItem } from "./ToDo";
function TableComponent({ ...list }) {
  // console.log("TableComponent :", list.item);

  const deleteItem = (id) => {
    //Calling a function of other class (without arguments)
    new ToDo().deleteItem(id);
  };
  return (
    <>
      <h2>To Do List</h2>
      <table>
        <tr>
          <th>Student Name</th>
          <th>Department</th>
          <th> Favorite Web language</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {list.item.map((obj) => (
          <tr>
            <td>{obj.studentName}</td>
            <td>{obj.department}</td>
            <td>{obj.selectedlanguage}</td>
            <td>
              <button
                variant="dark"
                className="mt-2"
                onClick={() => deleteItem(obj.id)}
              >
                Delete
              </button>
            </td>
            <td>
              <button
                variant="dark"
                className="mt-2"
                onClick={() => this.editItem(obj.id)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default TableComponent;
