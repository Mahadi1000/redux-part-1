import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Redux/features/todoSlice";

const Tasklist = () => {
  const tasks = useSelector((state) => state.todo.tasks
  
);
  console.log(tasks)
  const dispatch = useDispatch();

  function deleteTask(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks: </h3>
        <ul className="tasks">
          {tasks.map((task) => (
            <li className="task" key={task.id}>
              {task.text}
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasklist