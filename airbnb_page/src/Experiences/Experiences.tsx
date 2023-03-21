import image_1 from './assets/1.jpg';
import image_2 from './assets/2.jpeg';
import image_3 from './assets/3.jpg';
import Card from './Card/Card';
import Style from './Experiences.module.css';

export default function Experiences() {
  return (
    <div className={Style.container}>
      <Card
        image={image_1}
        title={`The Next 3 Things To Immediately Do About HOUSE`}
        price={`25 $`}
        status={false}
        rating={`5.0`}
      ></Card>
      <Card
        image={image_2}
        title={`Proof That HOUSE Really Works`}
        price={`110 $`}
        status={true}
        rating={`4.0`}
      ></Card>
      <Card
        image={image_3}
        title={`How To Start A Business With HOUSE`}
        price={`1200 $`}
        status={false}
        rating={`4.8`}
      ></Card>
    </div>
  );
}
