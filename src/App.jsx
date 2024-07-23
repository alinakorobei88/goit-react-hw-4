import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageCard from './components/ImageCard/ImageCard';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Contact from './components/Contact/Contact';
import './App.module.css';

const ACCESS_KEY = '66IyT47tmpZyGjeGf1Wr-sbkVpDcBZUQtmNVPaVjcLk';
const BASE_URL = 'https://api.unsplash.com';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`);
      setImages(prevImages => [...prevImages, ...response.data.results]);
    } catch (error) {
      setError('Failed to fetch images');
    } finally {
      setIsLoading(false);
    }
  };

  fetchImages();
}, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='App'>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
