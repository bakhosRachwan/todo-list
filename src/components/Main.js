import InputForm from "./InputForm";
import List from "./List";

const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: "smooth"})
}
const Main = () => {
    return (
        <div>
            <div className="px-8 py-8 md:grid md:grid-cols-3 md:gap-6">
                <div className="px-4 sm:px-0 sticky ">
                    <InputForm />
                </div>
                <div className="md:col-span-2">
                    <div className="px-4 sm:px-0 sm:py-4">
                        <List />
                    </div>
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