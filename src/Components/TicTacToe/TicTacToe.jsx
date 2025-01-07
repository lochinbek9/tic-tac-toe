import React, { use } from 'react'
import { useState } from 'react';
import "./style.css"

let data = ["", "", "", "", "", "", "", "", ""];


const TicTacToe = () => {
  let  [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e,num) => {
    if(lock){
        return 0;
    } 
    if(count%2 === 0){
        e.target.innerHTML = `<img src="./img/cross.webp" width="170" height="170"/>`;
        data[num] = "x";
        setCount(++count);
         
    } else {
        e.target.innerHTML = `<img src="./img/circle.png" width="170" height="170"/>`;
        data[num] = "o";
        setCount(++count);
    };
  }

  const checkWin = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
        won();
    } else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
        won();
    } else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
        won();
    } else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
        won(data);
    } else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
        won(data);
    } else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
        won(data);
    }
  };
  const won = (winner) => {
    setLock(true);
  };
  return (
    <div className='container'>
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e) =>{toggle(e, 0)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e, 1)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e, 3)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e) =>{toggle(e, 4)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e, 5)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e, 6)}}></div>
            </div> 
            <div className="row3 ">
                <div className="boxes" onClick={(e) =>{toggle(e, 7)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e, 8)}}></div>
                <div className="boxes" onClick={(e) =>{toggle(e, 9)}}></div>
            </div> 
        </div>
        <button className='res-btn'>Restart</button> 
    </div>
  )
}

export default TicTacToe