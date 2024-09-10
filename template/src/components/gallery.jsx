import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cards = [
    {
      imageUrl: './src/img/galleria1.jpg',
      title: 'Ford Ranger 150',
      description: 'La Ford F-150 es una camioneta pickup de tamaño completo que ha sido un éxito de ventas en Estados Unidos y otros mercados durante décadas. Conocida por su robustez y capacidad de remolque, la F-150 está disponible en varias configuraciones de motor y carrocería. Ofrece comodidad interior, tecnología avanzada y opciones de equipamiento que van desde modelos básicos hasta versiones de lujo.'
    },
    {
      imageUrl: './src/img/galleria2.jpg',
      title: 'Ford Focus',
      description: 'El Ford Focus es un automóvil compacto que ha sido popular en varios mercados alrededor del mundo. La versión de 5 puertas ofrece una combinación de estilo deportivo, eficiencia y tecnología avanzada, haciéndolo atractivo tanto para conductores individuales como para familias pequeñas.'
    },
    {
      imageUrl: './src/img/galleria3.jpg',
      title: 'Ford Mustang GT',
      description: 'Una de las características más destacadas del Mustang GT es su motor V8, que proporciona una potencia impresionante y un sonido distintivo que es música para los oídos de los entusiastas del motor. La potencia puede variar según el año del modelo y las actualizaciones específicas, pero en general, el Mustang GT ofrece una experiencia de conducción emocionante y gratificante.'
    },
    {
      imageUrl: './src/img/galleria4.jpg',
      title: 'Royal Enfield 350cc',
      description: 'Royal Enfield Classic 350 es una de las motocicletas más populares de la marca y merece ser mencionada. Es conocida por su diseño retro inspirado en las motocicletas clásicas británicas. Está equipada con un motor de 346cc de un solo cilindro que proporciona un rendimiento suave y controlable. La Classic 350 ofrece un estilo vintage con tecnología moderna, adecuada para aquellos que buscan una experiencia de conducción cómoda y nostálgica.'
    },
    {
      imageUrl: './src/img/nueva2.jpg',
      title: 'Jaguar XK120',
      description: 'En nuestra galería de automóviles clásicos, destacamos el impresionante Jaguar XK120, producido entre 1948 y 1954. Este vehículo emblemático es conocido por su diseño aerodinámico, su elegante parrilla vertical y los distintivos faros redondos. Con un rendimiento sobresaliente para su época, el XK120 sigue siendo un símbolo de lujo y sofisticación en el mundo del automovilismo.'
    },
    {
      imageUrl: './src/img/nueva.jpg',
      title: 'Beetle',
      description: 'Un icónico Volkswagen Beetle clásico se muestra en toda su gloria vintage. Este modelo de los años 60 presenta una carrocería de color naranja brillante, con un diseño redondeado y adorable que recuerda una era pasada. El auto, con su distintiva forma de "bicho", está estacionado sobre una calle adoquinada, resaltando su aspecto retro.'
    }
  ];

  return (
    <section className="bg-yellow-100 py-12" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2">Galería</h2>
          <p className="text-gray-600">Consulte por algunos de los siguientes modelos</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <li 
              key={index} 
              className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
