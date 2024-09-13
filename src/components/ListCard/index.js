import React, { Component } from "react";

import './styles.css'

export class ListCard extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
              />
              <h1>{name}</h1>
              <h1>{email}</h1>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default ListCard;
