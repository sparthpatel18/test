import React from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Parth Patel.</span><br />
            Software QA Developer
          </h1>

          <p className='home__description'>
           - Software Engineer with 1.5+ years of experience in JavaScript, HTML5, CSS3, React.js, and Node.js. Proficient in building responsive web applications and troubleshooting.
              <br />
              - Strong grasp of Agile methodologies and eager to contribute to a dynamic team.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
