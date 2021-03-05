import { useContext } from "react";
import {StateContext} from "../State/State"

const InputForm = () => {
const [state, dispatch] = useContext(StateContext);

const handleSubmit = (e) => {
    e.preventDefault();
    const { task, deadline, priority } = e.target;
    
    dispatch({type: "SET_TODO", task: task.value, deadline: deadline.value, priority: priority.value})
}
    return (
        <div className="mt-5 md:mt-3 md:col-span-1">
            <form onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6 bg-gray-100">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label for="task" className="block text-sm font-medium text-gray-700">
                                    Task
                                 </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" name="task" id="task" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full h-9 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Enter ToDo Task..." />
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-2">
                                <label for="deadline" className="block text-sm font-medium text-gray-700">
                                    Deadline
                                 </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input type="date" name="deadline" id="deadline" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full h-9 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Enter ToDo Task..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label for="priority" className="block text-sm font-medium text-gray-700">Task Priority</label>
                            <select id="priority" name="priority" className="mt-1 block w-1/4 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>High</option>
                                <option>Meduim</option>
                                <option>Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            + ADD
                         </button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default InputForm;