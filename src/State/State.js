import { createContext, useReducer } from "react";
import { uuid } from 'uuidv4';

export const StateContext = createContext();

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TODO":
          return [...state, {task: action.task, deadline: action.deadline, priority: action.priority, id: uuid()}]
  
      case "REMOVE_TODO":
        return state.filter(item => item.id !== action.id);
      default:
        return state;
    }
  };

  const StateProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return ( 
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
     );
}
 
export default StateProvider;