import { useContext, useState } from "react";
import { StateContext } from "../State/State";

const TodoItem = ({task}) => {
  const [state, dispatch] = useContext(StateContext);
  const [done, setDone] = useState(false);

  const handleDelete = () => {
     dispatch({type: "REMOVE_TODO", id: task.id })
  }
  return ( 
      <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
              {task.task}
            </div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">{task.deadline}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        {done === false? 
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>:

        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          Inactive
        </span>
        }
      </td>
      <td class="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
      <div class="text-sm text-gray-900">{task.priority}</div>
      </td>
      <td class="px-12 py-4 whitespace-nowrap text-sm text-gray-500">
        <input type="checkbox" checked={done} onChange={(e) => setDone(e.target.checked)}/>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button onClick={handleDelete} class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
           Delete
       </button>
      </td>
    </tr>
     );
}
 
export default TodoItem;