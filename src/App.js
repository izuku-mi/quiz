import * as React from "react";
import data from "./questions.json";
import "bootstrap/dist/css/bootstrap.min.css";
import QCard from "./QCard";
export default function App() {
  const qs = data[0].sort(function () {
    return 0.5 - Math.random();
  });
  return (
    <div className="container d-md-flex justify-content-between ">
      {qs.map((q) => {
        return (
          <QCard
            className="align-self-center"
            key={q.id}
            id={q.id}
            question={q.question}
            correct={q.correct}
            choices={q.choices}
          />
        );
      })}
    </div>
  );
}
