/* eslint-disable no-undef */
    /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function Cartitem(props) {
    const { id, game, price, gameImages } = props.data;
    
  return (
      <div className="ItemsCart">
        <div className="ItemsCard">
          <img src={gameImages} />
          <div className="ItemsDescription">
            <h4 className="ItemsTitle">{game}</h4>
            <p className="IItemsPrice">₱{price}</p>
          </div>
        </div>
      </div>
  )
}

export default Cartitem