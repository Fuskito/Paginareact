import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Tarjetas = ({
  sectionTitle,
  formTitle,
  modelLabel,
  descriptionLabel,
  imageLabel,
  backgroundColorLabel,
  borderColorLabel,
  submitButtonText,
  defaultImages,
  personalization,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    bgColor: '#ffffff',
    borderColor: '#000000',
  });

  const [cards, setCards] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, imageUrl, bgColor, borderColor } = formData;

    const selectedImageUrl = imageUrl || defaultImages[Math.floor(Math.random() * defaultImages.length)];

    const newCard = {
      title,
      description,
      imageUrl: selectedImageUrl,
      bgColor,
      borderColor,
    };

    setCards([...cards, newCard]);

    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      bgColor: '#ffffff',
      borderColor: '#000000',
    });
  };

  return (
    <section id="cards" className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">{sectionTitle}</h2>

        <div id="cards-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card p-4 border rounded-lg"
              style={{
                backgroundColor: card.bgColor,
                borderColor: card.borderColor,
              }}
              data-aos="fade-up"
            >
              <img
                src={card.imageUrl}
                alt="Card Image"
                className="rounded mx-auto mb-4"
              />
              <div className="card-content">
                <p className="text-lg font-semibold">{card.title}</p>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="card-form-container" className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">{formTitle}</h3>
          <form id="card-form" onSubmit={handleSubmit}>
            <label className="block text-lg font-medium mb-2" htmlFor="card-title">{modelLabel}</label>
            <input
              className="w-full p-2 mb-4 border rounded-lg"
              type="text"
              id="card-title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label className="block text-lg font-medium mb-2" htmlFor="card-description">{descriptionLabel}</label>
            <input
              className="w-full p-2 mb-4 border rounded-lg"
              type="text"
              id="card-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <label className="block text-lg font-medium mb-2" htmlFor="card-image">{imageLabel}</label>
            <input
              className="w-full p-2 mb-4 border rounded-lg"
              type="url"
              id="card-image"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://picsum.photos/200"
            />

            <h4 className="text-xl font-semibold mb-4">{personalization}</h4>
            <label className="block text-lg font-medium mb-2" htmlFor="card-bg-color">{backgroundColorLabel}</label>
            <input
              className="w-full p-2 mb-4 border rounded-lg"
              type="color"
              id="card-bg-color"
              name="bgColor"
              value={formData.bgColor}
              onChange={handleChange}
            />

            <label className="block text-lg font-medium mb-2" htmlFor="card-border-color">{borderColorLabel}</label>
            <input
              className="w-full p-2 mb-4 border rounded-lg"
              type="color"
              id="card-border-color"
              name="borderColor"
              value={formData.borderColor}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              {submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


Tarjetas.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  formTitle: PropTypes.string.isRequired,
  modelLabel: PropTypes.string.isRequired,
  descriptionLabel: PropTypes.string.isRequired,
  imageLabel: PropTypes.string.isRequired,
  backgroundColorLabel: PropTypes.string.isRequired,
  borderColorLabel: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  defaultImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};


Tarjetas.defaultProps = {
  sectionTitle: "Venta de usados",
  formTitle: "Publica tu auto",
  modelLabel: "Modelo:",
  descriptionLabel: "Descripción:",
  imageLabel: "Foto Del Auto:",
  backgroundColorLabel: "Color de fondo:",
  borderColorLabel: "Color del borde:",
  submitButtonText: "Publicar",
  personalization: "Personalización",
  defaultImages: [
    './src/img/usados2.jpg',
    './src/img/usados3.jpg',
    './src/img/usados4.jpg',
    './src/img/usados5.jpg',
  ],
};

export default Tarjetas;
