import React, { Component } from 'react';
import './styles.css';
import ImageInfo from './Components/imageInfo';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  componentDidMount() {}

  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className="App">
        <ImageInfo searchQuery={this.state.searchQuery} />
        <ToastContainer autoClose={4000} />
      </div>
    );
  }
}
