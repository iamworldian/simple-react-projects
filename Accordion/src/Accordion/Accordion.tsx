import Style from './Accordion.module.css';
import questions from './assets/data';
import SingleQuestion from './SingleQuestion/SingleQuestion';

export default function Accordion() {
  return (
    <div className={Style.container}>
      <div className={Style.leftPanel}> Questions And Answers About Login </div>
      <div className={Style.rightPanel}>
        {questions.map((q) => {
          return (
            <div className={Style.question} key={q.id}>
              <SingleQuestion {...q}></SingleQuestion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
