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
    savedCards: [],
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
    const { state: { cardName,
      description,
      attr1,
      attr2,
      attr3,
      imgsrc,
      rare,
      trunfo,
      savedCards,
    } } = this;
    const cardList = [...savedCards];
    cardList.push(<Card
      cardName={ cardName }
      cardDescription={ description }
      cardAttr1={ Number(attr1) }
      cardAttr2={ Number(attr2) }
      cardAttr3={ Number(attr3) }
      cardImage={ imgsrc }
      cardRare={ rare }
      cardTrunfo={ trunfo }
    />);
    this.setState({
      cardName: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      imgsrc: '',
      rare: 'normal',
      trunfo: false,
      savedCards: cardList,
    });
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
        isSaveButtonDisabled,
        savedCards,
      } } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ description }
          cardAttr1={ Number(attr1) }
          cardAttr2={ Number(attr2) }
          cardAttr3={ Number(attr3) }
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
          cardAttr1={ Number(attr1) }
          cardAttr2={ Number(attr2) }
          cardAttr3={ Number(attr3) }
          cardImage={ imgsrc }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        {savedCards}
      </div>
    );
  }
}

export default App;
