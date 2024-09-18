import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Gallery = ({
  title = "Galería",
  description = "Consulte por algunos de los siguientes modelos",
  bgColor = "bg-gray-100",
  slides = [
    {
      imageUrl: './src/img/galleria1.jpg',
      title: 'Ford Ranger 150',
      description: 'La Ford F-150 es una camioneta pickup de tamaño completo que ha sido un éxito de ventas en Estados Unidos y otros mercados durante décadas. Conocida por su robustez y capacidad de remolque, la F-150 está disponible en varias configuraciones de motor y carrocería. Ofrece comodidad interior, tecnología avanzada y opciones de equipamiento que van desde modelos básicos hasta versiones de lujo.',
    },
    {
      imageUrl: './src/img/galleria2.jpg',
      title: 'Ford Focus',
      description: 'El Ford Focus es un automóvil compacto que ha sido popular en varios mercados alrededor del mundo. La versión de 5 puertas ofrece una combinación de estilo deportivo, eficiencia y tecnología avanzada, haciéndolo atractivo tanto para conductores individuales como para familias pequeñas.',
    },
    {
      imageUrl: './src/img/galleria3.jpg',
      title: 'Ford Mustang GT',
      description: 'Una de las características más destacadas del Mustang GT es su motor V8, que proporciona una potencia impresionante y un sonido distintivo que es música para los oídos de los entusiastas del motor. La potencia puede variar según el año del modelo y las actualizaciones específicas, pero en general, el Mustang GT ofrece una experiencia de conducción emocionante y gratificante.',
    },
    {
      imageUrl: './src/img/galleria4.jpg',
      title: 'Royal Enfield 350cc',
      description: 'Royal Enfield Classic 350 es una de las motocicletas más populares de la marca y merece ser mencionada. Es conocida por su diseño retro inspirado en las motocicletas clásicas británicas. Está equipada con un motor de 346cc de un solo cilindro que proporciona un rendimiento suave y controlable. La Classic 350 ofrece un estilo vintage con tecnología moderna, adecuada para aquellos que buscan una experiencia de conducción cómoda y nostálgica.',
    },
    {
      imageUrl: './src/img/nueva2.jpg',
      title: 'Jaguar XK120',
      description: 'En nuestra galería de automóviles clásicos, destacamos el impresionante Jaguar XK120, producido entre 1948 y 1954. Este vehículo emblemático es conocido por su diseño aerodinámico, su elegante parrilla vertical y los distintivos faros redondos. Con un rendimiento sobresaliente para su época, el XK120 sigue siendo un símbolo de lujo y sofisticación en el mundo del automovilismo.',
    },
    {
      imageUrl: './src/img/nueva.jpg',
      title: 'Beetle',
      description: 'Un icónico Volkswagen Beetle clásico se muestra en toda su gloria vintage. Este modelo de los años 60 presenta una carrocería de color naranja brillante, con un diseño redondeado y adorable que recuerda una era pasada. El auto, con su distintiva forma de "bicho", está estacionado sobre una calle adoquinada, resaltando su aspecto retro.',
    },
  ],
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={`${bgColor} py-12`} id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-96 md:h-[500px] overflow-hidden group">
                {/* Imagen */}
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                />
                
                {/* Descripción (hover) */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-4">
                  <h3 className="text-white text-2xl font-semibold mb-2">{slide.title}</h3>
                  <p className="text-gray-300 text-center">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};



export default Gallery;
