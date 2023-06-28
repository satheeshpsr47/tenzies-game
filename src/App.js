import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Die from './die';
import React from 'react';
import Confetti from 'react-confetti';

export default function App() {
  const[array,setArray] = React.useState(allNewDice())

  function holdDice(id){
    setArray((oldArray) => oldArray.map((die) => {
      return die.id === id ? 
      {...die,isheld : !die.isheld} : 
      die
    }))
  }  
  
  function allNewDice(){
    const arr = []
    for(let i =0; i<10; i++){
      arr.push({value:(Math.floor(Math.random()*6)+1),isheld:false,id:i})
     
    }
    return arr
  }
  
  const die = array.map(die => 
  <Die value={die.value} key = {die.id} isheld = {die.isheld} holdDice={() => holdDice(die.id)}/>)
 
  function rollDice(){
    // const hold = holdDice()
    setArray((oldArray) => oldArray.map((die) => {
      return die.isheld ? 
      die : 
      {...die,value :(Math.floor(Math.random()*6)+1) }
    }))
    if(tenzies){
      setArray(allNewDice())
      setTenzies(false)
    }
  }
  const[tenzies,setTenzies] = React.useState(false)
  React.useEffect(() => {
    const heldValue = array.every((die) => die.isheld)
    // const heldValue1 = array.map((die) => die.isheld)
    const firstValue = array[0].value
    const allValue = array.map(die => die.value === firstValue ? true : false)
    if(heldValue && allValue){
      setTenzies(true)
    }
  },[array])


  return (
    <main className='main'>
      {tenzies && <Confetti />}
      <h1 className='main--title'>Tenzies Game</h1>
      <p className='main--msg'>roll untill the dices are same</p>
      <div className='container'>
        {die}
      </div>
      <button className='btn' onClick={rollDice}>{tenzies ? 'newgame' : 'roll'}</button>
    </main>
  )
}

