import React, { useState } from 'react'

import Card from './components/Card'

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'с фуа-гра',
      composition: [
        {
          count: 10,
          text: 'порций',
        },
        {
          count: 1,
          text: 'мышь в подарок',
        },
      ],
      weight: '0,5',
      description: 'Печень утки разварная с артишоками.',
      selected: false,
      isAvailable: true,
    },
    {
      id: 2,
      name: 'с рыбой',
      composition: [
        {
          count: 40,
          text: 'порций',
        },
        {
          count: 2,
          text: 'мыши в подарок',
        },
      ],
      weight: '2',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      selected: false,
      isAvailable: true,
    },
    {
      id: 3,
      name: 'с курой',
      composition: [
        {
          count: 100,
          text: 'порций',
        },
        {
          count: 5,
          text: 'мышей в подарок',
        },
        {
          count: 1,
          text: 'заказчик доволен',
        },
      ],
      weight: '5',
      description: 'Филе из цыплят с трюфелями в бульоне.',
      selected: false,
      isAvailable: false,
    },
  ])

  const changeSelection = (id) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, selected: !card.selected } : card)))
  }

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='app__title'>Ты сегодня покормил кота?</h1>
        <ul className='app__cards'>
          {cards.map((card) => (
            <li className='app__card-item' key={card.id}>
              <Card card={card} changeSelection={changeSelection} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
