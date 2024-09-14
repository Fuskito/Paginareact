import React from 'react';
import PropTypes from 'prop-types';

const HomeSection = ({
  backgroundImage,
  title,
  titleStyles,
  sectionId,
  aosEffect,
  aosDuration,
}) => {
  return (
    <section
      id={sectionId}
      className="homepage flex items-center justify-center h-screen text-white relative"
      data-aos={aosEffect}
      data-aos-duration={aosDuration}
    >
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="content text-center relative z-10">
        <h1
          className={titleStyles}
          style={{ fontFamily: 'Georgia, serif' }}
          data-aos={aosEffect}
          data-aos-duration={aosDuration}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

HomeSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleStyles: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  aosEffect: PropTypes.string.isRequired,
  aosDuration: PropTypes.number.isRequired,
};

HomeSection.defaultProps = {
  backgroundImage: './src/img/fondo.jpg',
  title: 'Autos Motos Utilitarios',
  titleStyles: 'text-4xl md:text-6xl font-bold mb-4',
  sectionId: 'Home',
  aosEffect: 'fade-up',
  aosDuration: 1500,
};

export default HomeSection;
