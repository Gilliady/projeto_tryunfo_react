import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    imgsrc: '',
    rare: 'normal',
    trunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,

  };

  buttonDisableHanlder = () => {
    this.setState(({ cardName, description, attr1, attr2, attr3, imgsrc }) => {
      const textInputs = cardName.length > 0
        && imgsrc.length > 0
        && description.length > 0;
      const maxAttributes = 210;
      const maxSingleAttributes = 90;
      const attrInputs = Number(attr1) >= 0
        && Number(attr1) <= maxSingleAttributes
        && Number(attr2) >= 0 && Number(attr2) <= maxSingleAttributes
        && Number(attr3) >= 0 && Number(attr3) <= maxSingleAttributes
        && (Number(attr1) + Number(attr2) + Number(attr3)) <= maxAttributes;
      return {
        isSaveButtonDisabled: !(textInputs && attrInputs),
      };
    });
  };

  onInputChange = ({ target }) => {
    if (target.name === 'trunfo') {
      this.setState({
        [target.name]: target.checked,
      }, this.buttonDisableHanlder);
      return;
    }
    this.setState({
      [target.name]: target.value,
    }, this.buttonDisableHanlder);
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
