import "./App.css";
import FeeAmounts from "./components/FeeAmounts";
import ReleaseAmounts from "./components/ReleaseAmounts";
import ServerHealth from "./components/ServerHealth";
import Supply from "./components/Supply";

function App() {
    return (
        <div className="App relative">
            <img
                src={
                    "https://t3.ftcdn.net/jpg/03/22/68/66/360_F_322686690_FGS4GEosanesib73238v3vvYmU04SLpX.jpg"
                }
                alt="bg"
                className=" w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0"
            />
            <div className=" w-screen h-screen max-w-5xl m-auto flex flex-col gap-5 px-3 overflow-auto pb-3">
                <ServerHealth />
                <Supply />
                <div className=" flex md:flex-row w-full gap-5 flex-col">
                    <ReleaseAmounts />
                    <FeeAmounts />
                </div>
            </div>
        </div>
    );
}

export default App;
