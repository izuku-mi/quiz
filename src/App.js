import * as React from "react";
import data from "./questions.json";
import idata from "./questions2.json";
import "bootstrap/dist/css/bootstrap.min.css";
import QCard from "./QCard";
export default function App() {
  const qs = data[0]; //.sort(function () {return 0.5 - Math.random();});
  const qs2 = idata.flat(); //.sort(function () {  return 0.5 - Math.random();});
  const [activeQbank, setActiveQbank] = React.useState();

  let qbank;
  const clickHadler = (type) => {
    if (type === "qs") {
      setActiveQbank("qs");
      qbank = qs;
    }
    if (type === "qs2") {
      setActiveQbank("qs2");
      qbank = qs2;
    }
  };
  return (
    <div className="container " style={{ width: "800px" }}>
      <nav className="d-flex flex-row justify-content-evenly mt-3 flex-wrap">
        <button
          title="ssa"
          onClick={() => clickHadler("qs")}
          className={` btn my-3 py-2 w-50 ${
            activeQbank === "qs" ? " btn-success" : "btn-light"
          }`}
        >
          QBank 1
        </button>
        <button
          title="iqms"
          onClick={() => clickHadler("qs2")}
          className={`btn my-3 py-2 w-50 ${
            activeQbank === "qs2" ? " btn-success " : "btn-light"
          }`}
        >
          QBank 2
        </button>
      </nav>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="d-flex justify-content-center align-content-center flex-wrap ">
            {activeQbank === "qs" &&
              qs.map((q) => {
                return (
                  <>
                    <QCard
                      className="align-self-center"
                      key={q.id + Math.random()}
                      id={q.id}
                      question={q.question}
                      correct={q.correct}
                      choices={q.choices}
                      qtype={q.Qtype}
                    />
                  </>
                );
              })}
            {activeQbank === "qs2" &&
              qs2.map((q) => {
                return (
                  <>
                    <QCard
                      className="align-self-center"
                      key={q.id + Math.random()}
                      id={q.id}
                      question={q.question}
                      correct={q.correct}
                      choices={q.choices}
                      qtype={q.Qtype}
                    />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
