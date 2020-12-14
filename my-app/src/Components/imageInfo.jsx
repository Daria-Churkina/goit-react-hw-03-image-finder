import { Component } from 'react';
import api from './api';
import Gallery from './gallery';
import Modal from './modal';
import SearchForm from './searchForm';
import Button from './button';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class ImageInfo extends Component {
  state = {
    searchQuery: '',
    page: 1,
    results: [],
    loading: false,
    firstFetch: true,
    modalImage: null,
    status: 'idle',
  };

  handleSearchSubmit = query => {
    this.setState({
      searchQuery: query,
      results: [],
      page: 1,
      firstFetch: true,
    });
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    prevQuery !== nextQuery && this.fetchImages();
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({
      loading: true,
    });

    api
      .fetchImagesWithQuery(searchQuery, page)
      .then(images => {
        this.setState(prevState => ({
          results: [...prevState.results, ...images],
          page: prevState.page + 1,
        }));
        if (!this.state.firstFetch) {
          window.scrollTo({
            bottom: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({
          loading: false,
          firstFetch: false,
        });
      });
  };

  openModal = imageUrl => {
    this.setState({ modalImage: imageUrl });
  };

  closeModal = e => {
    this.setState({ modalImage: null });
  };

  render() {
    const { loading, results, modalImage } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleSearchSubmit} />
        <Gallery images={results} onClick={this.openModal} />
        {modalImage && (
          <Modal largeImage={modalImage} onClose={this.closeModal} />
        )}
        <div className="Loader">
          {loading && (
            <Loader type="Oval" color="#00BFFF" height={100} width={100} />
          )}
        </div>
        {results.length > 0 && !loading && (
          <Button onClick={this.fetchImages} />
        )}
      </>
    );
  }
}
