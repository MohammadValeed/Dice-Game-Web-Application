import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({rollDice, currentDice}) => {

  

  
  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1"></img>
        <p>Click on Dice to Roll</p>
      </div>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  align-items: center;

  p{
    font-size: 26px;
  }

  .dice{
    cursor: pointer;
  }


`