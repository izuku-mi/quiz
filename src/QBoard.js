import * as React from "react";
import QCard from "./QCard";

export default function QBoard(props) {
  const qbank = props.qbank;
  const [filteredQbank, setFilteredQbank] = React.useState(qbank);

  const changeHandler = (e) => {
    const filter = e.target.value.trim().toLowerCase();
    if (filter) {
      const filtered = qbank.filter((q) =>
        q.question.toLowerCase().includes(filter)
      );
      setFilteredQbank(filtered);
    } else {
      setFilteredQbank(qbank);
    }
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        onChange={changeHandler}
        placeholder="Search Question here"
      />
      <p className="mt-3 fs-5 fst-italic">Questions count : {filteredQbank.length}</p>

      {filteredQbank &&
        filteredQbank.map((q) => {
          return (
            <QCard
              className="align-self-center"
              key={q.id + Math.random()}
              id={q.id}
              question={q.question}
              correct={q.correct}
              choices={q.choices}
              qtype={q.Qtype}
            />
          );
        })}
    </>
  );
}
