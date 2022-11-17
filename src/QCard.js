import * as React from "react";
import "./style.css";

export default function QCard(props) {
  const question = props.question;
  const choices = props.choices;
  const correct = props.correct;

  return (
    <div className="card m-2 border border-0" style={{ width: "800px" }}>
      <div className="card-body">
        <h6 className="card-title">{question}</h6>
        <div className="stack">
          {choices.map((ch, index) => {
            return (
              <div
                className={`p-2 align-self-center rounded-2 small ${
                  correct.includes(index + 1)
                    ? " bg-success bg-opacity-25 "
                    : "bg-light"
                }`}
              >
                {index + 1}. {ch}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
