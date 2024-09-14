import React from 'react';

const HomeSection = ({
  backgroundImage = './src/img/fondo.jpg',
  title = 'Autos Motos Utilitarios',
  titleStyles = 'text-4xl md:text-6xl font-bold mb-4',
  sectionId = 'Home',
  aosEffect = 'fade-up',
  aosDuration = 1500,
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

export default HomeSection;
