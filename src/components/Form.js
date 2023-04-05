import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome do personagem:
          <br />
          <Input
            type="text"
            id="name-input"
            name="cardName"
            value={ cardName }
            handler={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <br />
          <textarea
            id="description-input"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1:
          <br />
          <Input
            type="number"
            id="attr1-input"
            name="attr1"
            value={ cardAttr1 }
            handler={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2:
          <br />
          <Input
            type="number"
            id="attr2-input"
            name="attr2"
            value={ cardAttr2 }
            handler={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3:
          <br />
          <Input
            type="number"
            id="attr3-input"
            name="attr3"
            value={ cardAttr3 }
            handler={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          <Input
            type="string"
            id="image-input"
            name="imgsrc"
            value={ cardImage }
            handler={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Trunfo:
          {' '}
          <input
            type="checkbox"
            name="trunfo"
            checked={ cardTrunfo }
            id="trunfo-input"
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          name="saveBtn"
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
