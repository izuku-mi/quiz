import * as React from "react";
import data from "./questions.json";
import idata from "./questions2.json";
import "bootstrap/dist/css/bootstrap.min.css";
import QCard from "./QCard";
import QBoard from "./QBoard";
export default function App() {
  const qs = data[0]; //.sort(function () {return 0.5 - Math.random();});
  const qs2 = idata.flat(); //.sort(function () {  return 0.5 - Math.random();});
  const [activeQbank, setActiveQbank] = React.useState("qs");

  const clickHadler = (type) => {
    if (type === "qs") {
      setActiveQbank("qs");
    }
    if (type === "qs2") {
      setActiveQbank("qs2");
    }
  };
  return (
    <div className="container " style={{ width: "800px" }}>
      <nav className="d-flex flex-row justify-content-evenly mt-3 flex-wrap">
        <button
          type="button"
          onClick={() => clickHadler("qs")}
          className={` btn my-3 py-2 w-50 ${
            activeQbank === "qs" ? " btn-success" : "btn-light"
          }`}
          data-toggle="tooltip"
          data-placement="bottom"
          title="ssa"
        >
          SSA E1
        </button>
        <button
          data-toggle="tooltip"
          data-placement="bottom"
          title="iqms"
          onClick={() => clickHadler("qs2")}
          className={`btn my-3 py-2 w-50 ${
            activeQbank === "qs2" ? " btn-success " : "btn-light"
          }`}
        >
          IQMS
        </button>
      </nav>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="d-flex justify-content-center align-content-center flex-wrap ">
            {activeQbank === "qs" && <QBoard qbank={qs} />}
            {activeQbank === "qs2" && <QBoard qbank={qs2} />}
          </div>
        </div>
      </div>
    </div>
  );
}
