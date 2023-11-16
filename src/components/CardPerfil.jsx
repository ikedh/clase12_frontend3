import React from 'react'
 export const titleCase = (text) => {
    if(text === '') return '';

    const arr = text.split(' ');
    const result = [];
    for (let elem of arr){
        result.push(elem[0].toUpperCase()+ elem.substring(1).toLowerCase());
    }

    return result.join(' ')
}

const CardPerfil = () => {

  return (
    <div>soy el texto</div>
  )
}

export default CardPerfil