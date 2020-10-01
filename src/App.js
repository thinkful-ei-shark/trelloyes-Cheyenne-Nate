import React, {Component} from 'react';
import './App.css';
import List from './List';
import STORE from './Store'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

// ------ COMPONENT ------ //

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
}
    state = {
      store: STORE,
};

// DELETE BUTTON //

handleDeleteCard = (cardId) => {
  const { lists, allCards } = this.state.store;

  const newLists = lists.map(list => ({
    ...list,
    cardIds: list.cardIds.filter(id => id !== cardId)
  }))

  const newCards = omit(allCards, cardId)

  this.setState({
    store: {
      lists: newLists,
      allCards: newCards
    }
  })
}



// ADD RANDOM CARD BUTTON //

handleAddCard = (listId) => {
  
}



render() {
  const { store } = this.state
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {store.lists.map(list => (
          <List
            key={list.id}
            id={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
            onClickDelete={this.handleDeleteCard}
            onClickAdd={this.handleAddCard}/>
          ))}
        </div>
      </main>
    );
  }
}
 
export default App;