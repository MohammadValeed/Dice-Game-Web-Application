import React from 'react'
import styled from 'styled-components'       
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="/images/dices 1.png"/>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1182px;
display: flex;
margin:0 auto;
height: 100vh;
align-items: center;

.content{
  h1{
    font-size: 95px;
  }
}
`;


