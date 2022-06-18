import React, {useState, useEffect}from 'react';
import Character from './Character';

export default function List(){

const [characters, setCharacter] = useState([]);
async function fetchData(){
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const {result} = await data.json;
    setCharacter(result)
}


}