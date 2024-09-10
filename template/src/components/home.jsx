import React from 'react';

const HomeSection = () => {
  return (
    <section
      id="Home"
      className="homepage flex items-center justify-center h-screen text-white relative"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
       
      <img
        src='./src/img/fondo.jpg'
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      /> 

      <div className="content text-center relative z-10">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: 'Georgia, serif' }} 
          data-aos="fade-up"
        >
          Autos Motos Utilitarios
        </h1>
      </div>
    </section>
  );
};

export default HomeSection;
