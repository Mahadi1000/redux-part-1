import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/features/todoSlice";
import {useRef} from 'react'
const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  }

  return (
    <div className="">
      <div className="flex justify-center items-center gap-5">
        <input
          type="text"
          placeholder="Add task here..."
          className="outline-slate-900 py-2 px-2 w-64"
          ref={inputRef}
        />
        <button onClick={addNewTask} className="px-3 py-2 border">
          Add task 
        </button>
      </div>
    </div>
  );
}

export default Task