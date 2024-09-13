import React, { Component } from "react";

import "./styles.css";

export class SearchInput extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <input
        type="search"
        className="search-box"
        placeholder="search monster"
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchInput;
