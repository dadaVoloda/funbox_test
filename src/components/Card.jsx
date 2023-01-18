import React, { useMemo, useState } from 'react'

import cartImg from '../assets/images/cat.png'

const Card = ({ card, changeSelection }) => {
  const [canUpdate, setCanUpdate] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [cardHoverClass, setCardHoverClass] = useState('')

  const toggleSelection = () => {
    changeSelection(card.id)
    if (hovered) {
      setCanUpdate(false)
    }
    setHovered(false)
    setCardHoverClass('')
  }
  const handleMouseEnter = () => {
    if (canUpdate) {
      setCardHoverClass('card-body--hover')
      setHovered(true)
    }
  }
  const handleMouseLeave = () => {
    setCardHoverClass('')
    setCanUpdate(true)
    setHovered(false)
  }

  const hoveredAndSelected = useMemo(() => {
    return card.selected && hovered
  }, [hovered, card])

  const cardClasses = [
    'card-body',
    cardHoverClass,
    card.selected ? 'card-body--selected' : '',
  ].join(' ')

  const noteText = card.selected ? (
    <span>{card.description}</span>
  ) : (
    <span>
      Чего сидишь? Порадуй котэ,{' '}
      <button type='button' onClick={() => toggleSelection(card.id)}>
        купи.
      </button>
    </span>
  )

  return (
    <div className='card'>
      <button
        className={cardClasses}
        type='button'
        onClick={() => toggleSelection(card.id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        disabled={!card.isAvailable}>
        <span className='card-body__decor'></span>
        <div className='card-body__top'>
          <span className='card-body__top-text'>
            {hoveredAndSelected ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
          </span>
        </div>
        <div className='card-body__inner'>
          <h2 className='card-body__title'>
            <span>Нямушка</span> {card.name}
          </h2>
          <ul className='card-body__set'>
            {card.composition.map((comp) => (
              <li className='card-body__set-item' key={comp.text}>
                <span>{comp.count > 1 ? comp.count : ''}</span> {comp.text}
              </li>
            ))}
          </ul>
          <div className='card-body__img'>
            <img src={cartImg} alt='Кот' />
          </div>
          <div className='card-body__weight'>
            <span>{card.weight}</span>кг
          </div>
        </div>
      </button>
      {card.isAvailable ? (
        <div className='card__note'>{noteText}</div>
      ) : (
        <div className='card__note card__note--yellow'>Печалька, {card.name} закончился.</div>
      )}
    </div>
  )
}

export default Card
