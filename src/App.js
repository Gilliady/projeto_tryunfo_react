import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    description: '',
    attr1: '',
    attr2: '',
    attr3: '',
    imgsrc: '',
    rare: 'normal',
    trunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,

  };

  onInputChange = ({ target }) => {
    if (target.name === 'trunfo') {
      this.setState({
        [target.name]: target.checked,
      });
      return;
    }
    this.setState({
      [target.name]: target.value,
    });
    /* const { state: {
      cardName,
      description,
      attr1,
      attr2,
      attr3,
      imgsrc,
    } } = this;
    const textInputs = cardName.length > 0 && imgsrc.length > 0 && description.length > 0;
    const attrInputs = attr1 > 0 && attr2 > 0 && attr3 > 0;
    this.setState({
      isSaveButtonDisabled: !((textInputs && attrInputs)),
    }); */
  };

  onSaveButtonClick = () => {

  };

  render() {
    const { state:
      {
        cardName,
        description,
        attr1,
        attr2,
        attr3,
        imgsrc,
        rare,
        trunfo,
        hasTrunfo,
        isSaveButtonDisabled } } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imgsrc }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imgsrc }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
