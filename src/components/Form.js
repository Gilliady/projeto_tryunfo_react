import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  state = {
    name: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    imgsrc: '',
    rare: 'normal',
    trunfo: false,
  };

  handlerInputChanges = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { state:
      { name, description, attr1, attr2, attr3, imgsrc, rare, trunfo } } = this;
    return (
      <form>
        <label htmlFor="name-input" data-testid="name-input">
          Nome do personagem:
          <br />
          <Input
            type="text"
            id="name-input"
            name="name"
            value={ name }
            handler={ this.handlerInputChanges }
          />
        </label>
        <label
          htmlFor="description-input"
          data-testid="description-input"
        >
          Descrição:
          <br />
          <textarea
            id="description-input"
            name="description"
            value={ description }
            onChange={ this.handlerInputChanges }
          />
        </label>
        <label htmlFor="attr1-input" data-testid="attr1-input">
          Atributo 1:
          <br />
          <Input
            type="number"
            id="attr1-input"
            name="attr1"
            value={ attr1.toString() }
            handler={ this.handlerInputChanges }
          />
        </label>
        <label htmlFor="attr2-input" data-testid="attr2-input">
          Atributo 2:
          <br />
          <Input
            type="number"
            id="attr2-input"
            name="attr2"
            value={ attr2.toString() }
            handler={ this.handlerInputChanges }
          />
        </label>
        <label htmlFor="attr3-input" data-testid="attr3-input">
          Atributo 3:
          <br />
          <Input
            type="number"
            id="attr1-input"
            name="attr3"
            value={ attr3.toString() }
            handler={ this.handlerInputChanges }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input">
          <Input
            type="string"
            id="image-input"
            name="imgsrc"
            value={ imgsrc }
            handler={ this.handlerInputChanges }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare-input"
            onChange={ this.handlerInputChanges }
            value={ rare }
          >
            <option value="normal">Normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input" data-testid="trunfo-input">
          Trunfo:
          {' '}
          <Input
            type="checkbox"
            name="trunfo"
            value={ trunfo }
            id="trunfo-input"
            handler={ this.handlerInputChanges }
          />
        </label>
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
