import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageCard from './components/ImageCard/ImageCard';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import './App.module.css';

const ACCESS_KEY = '66IyT47tmpZyGjeGf1Wr-sbkVpDcBZUQtmNVPaVjcLk';
const BASE_URL = 'https://api.unsplash.com';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: searchQuery,
          page: page,
          per_page: 12,
        },
        headers: {
          Authorization: 'Client-ID YOUR_ACCESS_KEY',
        },
      });
      setImages(prevImages => [...prevImages, ...response.data.results]);
    } catch (error) {
      setError('Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  fetchImages();
}, [searchQuery, page]);

  const handleSearch = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {showModal && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
