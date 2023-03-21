import { useEffect, useState } from 'react';

import Loading from './Loading/Loading';
import SingleTour from './SingleTour/SingleTour';
import Style from './Tours.module.css';

const api = 'https://course-api.com/react-tours-project';

export default function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    try {
      const response = await fetch(api);
      const tempTours = await response.json();
      setTours(tempTours);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <Loading></Loading>;
  else {
    return (
      <div className={Style.container}>
        <h1 className={Style.heading}> Our Tours </h1>
        {tours.map((tour) => {
          console.log(tour);
          return <SingleTour key={tour.id} {...tour}></SingleTour>;
        })}
      </div>
    );
  }
}
