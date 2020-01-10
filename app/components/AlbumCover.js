import React from 'react'
import SubContent from './SubContent'
import balans from '../assets/balans.png'

export default function AlbumCover() {
  return (
    <div 
      className='albumCover alignBaseline'
    >
      <div className='content'>
        {/*This is a placeholder*/}
        <img src={balans} alt='Yung Nnelg: Balans' /> 
        <SubContent />
      </div>
    </div>
  )
}