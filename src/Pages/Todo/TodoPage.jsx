import Task from "../../Components/Task";
import Tasklist from "../../Components/Tasklist";

const TodoPage = () => {
  return (
    <div className="app">
      <h1 className="text-2xl text-center">ToDo App</h1>
      <Task />
      <Tasklist />
    </div>
  );
}

export default TodoPage