import InputForm from "./InputForm";
import List from "./List";
import { StateContext } from "../State/State";
import { useContext } from "react";

const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: "smooth"})
}

const Main = () => {
    const [state, dispatch] = useContext(StateContext)
    return (
        <div>
            <div className="px-8 py-8 md:grid md:grid-cols-3 md:gap-6">
                <div className="px-4 sm:px-0 sticky ">
                    <InputForm />
                </div>
                <div className="md:col-span-2">
                    {state.length === 0? 
                        <div className="flex flex-col items-center justify-center h-full text-5xl text-blue-600 text-center">
                            <h1>Hoorayy!! Let's Take Advantage of All this FREE TIME!!</h1>
                        </div>
                        :
                        <div className="px-4 sm:px-0 sm:py-4">
                            <List />
                        </div>
                    }
                </div>
                <div>
                    <button type="submit" onClick={handleClick} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Top
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Main;