import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    name: '',
  };

  handleNameChange = evt => {
    // console.log(evt);
    this.setState({ name: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.name.trim() === '') {
      toast.error('Enter photo category !');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.SearchForm}>
          <button
            type="submit"
            className={css.button}
            onClick={this.handleSubmit}
          >
            <span className={css.button_label}>Search</span>
          </button>

          <input
            className={css.input}
            onChange={this.handleNameChange}
            value={this.state.name}
            name="name"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
