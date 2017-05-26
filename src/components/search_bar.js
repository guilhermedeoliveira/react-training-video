import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form-group">
        <input className="form-control" placeholder="Search" />
      </form>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);

    }
  }
