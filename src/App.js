import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardDeck from './components/CardDeck';

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

  removeCard = ({ target }) => {
    this.setState((previous) => ({
      savedCards: previous.savedCards.filter((card) => card.cardName
        !== target.parentNode.firstChild.innerHTML),
    }), this.hasTrunfoInDeck);
  };

  hasTrunfoInDeck = () => {
    const { state: { savedCards } } = this;
    this.setState({
      hasTrunfo: savedCards.some(({ cardTrunfo }) => cardTrunfo),
    });
  };

  onInputChange = ({ target }) => {
    this.hasTrunfoInDeck();
    this.setState({
      [target.name]: target.name === 'trunfo' ? target.checked : target.value,
    }, this.buttonDisableHanlder);
  };

  onSaveButtonClick = () => {
    this.setState((previous) => {
      const cardList = [...previous.savedCards];
      const { cardName,
        description,
        attr1,
        attr2,
        attr3,
        imgsrc,
        rare,
        trunfo,
      } = previous;
      cardList.push({
        cardName,
        cardDescription: description,
        cardAttr1: Number(attr1),
        cardAttr2: Number(attr2),
        cardAttr3: Number(attr3),
        cardImage: imgsrc,
        cardRare: rare,
        cardTrunfo: trunfo,
        removeCard: this.removeCard,
      });
      return {
        cardName: '',
        description: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        imgsrc: '',
        rare: 'normal',
        trunfo: false,
        savedCards: cardList,
      };
    }, () => { this.buttonDisableHanlder(); this.hasTrunfoInDeck(); });
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
        { savedCards.map((card) => <CardDeck key={ card.name } { ...card } />) }
      </div>
    );
  }
}

export default App;
