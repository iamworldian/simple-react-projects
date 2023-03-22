import Style from './Card.module.css';

export default function Card({ id, name, job, image, text , changeIndex }) {
    console.log(changeIndex);
  return (
    <div className={Style.card}>
      <div className={Style.imageDiv}>
        <div className={Style.imageBg}>
          <img src={image} alt="" className={Style.image} />
          <i className={`bx bxs-quote-right ${Style.quote}`}></i>
        </div>
      </div>

      <div className={Style.details}>
        <h4 className={Style.name}>{name}</h4>
        <p className={Style.job}>{job}</p>
        <p className={Style.text}>{text}</p>
      </div>
      <div className={Style.buttons}>
        <button onClick={() => changeIndex(-1)} className={Style.btn}>
          <i className="bx bx-left-arrow"></i>
        </button>
        <button onClick={() => changeIndex(1)} className={Style.btn}>
          <i className="bx bx-right-arrow"></i>
        </button>
      </div>
    </div>
  );
}
