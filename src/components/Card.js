import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
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
      isPreview,
      removeCard,
      index,
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
        { !isPreview
          && (
            <button
              data-testid="delete-button"
              id={ index }
              onClick={ removeCard }
            >
              Excluir
            </button>
          )}
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool,
  isPreview: PropTypes.bool,
  removeCard: PropTypes.func,
  index: PropTypes.number,
};

Card.defaultProps = {
  cardTrunfo: false,
  isPreview: false,
  removeCard: undefined,
  index: undefined,
};

export default Card;
