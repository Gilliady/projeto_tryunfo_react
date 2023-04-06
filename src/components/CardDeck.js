import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CardDeck extends Component {
  trunfo = (isTrunfo) => (isTrunfo
    ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : '');

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      removeCard,
    } = this.props;

    return (
      <div>
        <h3 data-testid="name-card">{ cardName }</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ Number(cardAttr1) }</span>
        <span data-testid="attr2-card">{ Number(cardAttr2) }</span>
        <span data-testid="attr3-card">{ Number(cardAttr3) }</span>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        { this.trunfo(cardTrunfo) }
        <button data-testid="delete-button" onClick={ removeCard }>Excluir</button>
      </div>
    );
  }
}

CardDeck.propTypes = {
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool,
  removeCard: PropTypes.func.isRequired,
};

CardDeck.defaultProps = {
  cardTrunfo: false,
};

export default CardDeck;
