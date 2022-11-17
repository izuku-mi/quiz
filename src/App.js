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
    <div className="container ">
      <nav className="nav nav-pills flex-row justify-content-evenly">
        <a
          title="ssa"
          onClick={() => clickHadler("qs")}
          className={`nav-link  my-3 ps-5 pe-5 ${
            activeQbank === "qs" ? "active" : ""
          }`}
          href="#item-1"
        >
          QBank 1
        </a>
        <a
          title="iqms"
          onClick={() => clickHadler("qs2")}
          className={`nav-link my-3 ps-5 pe-5 ${
            activeQbank === "qs2" ? "active" : ""
          }`}
          href="#item-2"
        >
          QBank 2
        </a>
      </nav>
      <div className="row">
        <div className="col-md-12">
          <div className="d-md-flex justify-content-between">
            {activeQbank === "qs" &&
              qs.map((q) => {
                return (
                  <>
                    2 {activeQbank}
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
