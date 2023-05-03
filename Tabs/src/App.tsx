import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import Style from './App.module.css';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async function () {
    const response = await fetch(url);
    const newData = await response.json();
    //console.log(newData);
    setJobs(newData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className={Style.container}>
        <span className={Style.loader}></span>
      </div>
    );
  } else {
    const { title, duties, dates, company } = jobs[value];
    //console.log(title, duties, dates, company);

    return (
      <div className={Style.container}>
        <div className={Style.jobDetails}>
          <div className={Style.leftPanel}>
            {jobs.map((item, index) => {
              return (
                <button
                  className={`${Style.btnCompany} ${index == value ? Style.active : ''}`}
                  key={item.id}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className={Style.rightPanel}>
            <h1 className={Style.title}>Experience</h1>
            <p className={Style.companyTitle}>{company}</p>
            <p className={Style.dates}>{dates}</p>
            {duties.map((item, index) => {
              return (
                <div key={index} className={Style.duties}>
                  <FaAngleDoubleRight className={Style.jobIcon}></FaAngleDoubleRight>
                  <p key={index}>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
