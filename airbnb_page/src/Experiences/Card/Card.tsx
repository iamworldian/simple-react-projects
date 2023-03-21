import Style from './Card.module.css';

export default function Card({ image, title, price, status, rating }) {
  return (
    <div className={Style.card}>
      <img className={Style.image} src={image} alt="" />
      <p className={Style.rating}>
        <i className="bx bxs-star" style={{ color: 'green' }}></i> {rating}
      </p>
      <p className={Style.title}>{title}</p>
      <p className={Style.price}>
        {price}{' '}
        <i
          className="bx bxs-circle"
          style={status ? { color: 'green' } : { color: 'red' }}
        ></i>
      </p>
    </div>
  );
}
