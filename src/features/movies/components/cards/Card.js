import React, { useState } from 'react';
import StyledCards from './StyledCards';
import { Progress } from 'react-sweet-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';


const calcProgress = (likes, dislikes) => {
  const total = parseInt(likes) + parseInt(dislikes);
  const progress = parseInt(likes)/total *100;
  return Math.trunc(progress);
}


const Cards = ({ movie, removeMovie, likeMovie, unlikedMovie }) => {
  return (
    <StyledCards>
    <div className='card'>
      <h4 className='title'>{movie.title}</h4>
      <span className='category'>{movie.category}</span>
      <div className='popularity'>
         <span>Popularity</span>
        <Progress percent={calcProgress(movie.likes, movie.dislikes)} status='default' theme={{
           default: {
            symbol: '',
            trailColor: 'pink',
            color: 'red'
          },
        }}/>
      </div>
      <div className='actions'>
        <a href='#' onClick={removeMovie}><FontAwesomeIcon icon={faTrashAlt} /></a>
        <a href='#' onClick={() => {
          if(!movie.liked){
            likeMovie();
          } else {
            unlikedMovie();
            console.log('liked ', movie);
          }
        }}><FontAwesomeIcon icon={movie.liked ? faToggleOn : faToggleOff} /></a>
      </div>
    </div>
  </StyledCards>
  );
}


export default Cards;
