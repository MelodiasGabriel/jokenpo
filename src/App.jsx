import { useState } from 'react'
import './App.css'

function App() {
  const [winner, setWinner] = useState('')
  const [cont, setCont] = useState(0)
  const [compCont, setCompCont] = useState(0)
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [moves, setMoves] = useState([
    {
      type: 'paper',
      label: 'Papel',
      wins: 'rock',
      loses: 'scissor'
    },
    {
      type: 'rock',
      label: 'Pedra',
      wins: 'scissor',
      loses: 'paper'
    },
    {
      type: 'scissor',
      label: 'Tesoura',
      wins: 'paper',
      loses: 'rock'
    }])

    const makeMove = playerMove => {
      const minimumMove = 1
      const maximumMove = 3

      const randomSelect = Math.floor(
        Math.random() * (maximumMove - minimumMove + 1)
      ) + minimumMove

      let moveType = ''

      switch(randomSelect) {
        case 1:
          moveType = 'rock'
          break;
        case 2:
          moveType = 'paper'
          break;
        case 3: 
          moveType = 'scissor'
          break; 
      }

      if (moveType == playerMove) {
        setWinner('Empate')
        setEmpates(empates + 1);
        return
      } else {

      const playerValidation = moves.find(
        currentMove => currentMove.type === playerMove
      )

      const isPlayerWinner = playerValidation.wins === moveType

      if (isPlayerWinner) {
        setWinner('Jogador (Você) Ganhou!')
        setCont(cont + 1);
        setVitorias(vitorias + 1);
        return
      } else {
        setWinner('Computador (Não foi Você) Ganhou!')
        setCompCont(compCont + 1);
        setDerrotas(derrotas + 1);
      }
    }
  }

  return (
    <>
     <div>
      <h1>Placar</h1> <br/>
      <h3>Você: {cont} <br/> Computador: {compCont} </h3> <br/>
       {winner && <h1>{winner}</h1>} <br/>
      <button className='pedra' onClick={() => {makeMove('rock')}}>
        PEDRA
        {/* <img src={PaperHandTransparent} /> */}
      </button>
      <button className='papel' onClick={() => makeMove('paper')}>
        PAPEL
        {/* <img src={RockHandTransparent} /> */}
      </button>
      <button className='tesoura' onClick={() => makeMove('scissor')}>
        TESOURA
        {/* <img src={ScissorHandTransparent} /> */}
      </button>
      <h5>Vitórias: {vitorias} </h5>
      <h5>Derrotas: {derrotas} </h5>
      <h5>Empates: {empates} </h5>
     </div>
    </>
  )
}

export default App
