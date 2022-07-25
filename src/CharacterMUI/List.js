 
import React,  {useState, useEffect} from 'react';
import Character from './Character';
import Pagination from '@mui/material/Pagination';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import './styles.css';
export default function List() {
    const [characters, setCharacter] = useState([]);
    const [countPage, setCountPage] = useState([1]);
    const [loading, setLoading] = useState(true);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [pages, setPages] = useState();
    const location = useLocation();


    useEffect(() => {
        const url = currentPageUrl;

        async function fetchData() {
            const data = await fetch(url);
            const {results, info} = await data.json();

            setCharacter(results);
            setLoading(false);
            setPages(info.pages);
        }

        fetchData();
    }, [currentPageUrl]);

 const handleChange = ( event, value)  => {
    setCountPage(value);
    setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${value}`);


 }



    if (loading)
        return (<div>Loading...</div>);

    return (
        
        <div className="List">
            
            <h2>Characters</h2>
            <div className="row">
                
                
             
                
                
                
            <Pagination count={42} 
 color = "secondary"
  showFirstButton showLastButton
variant='outlined'
 
 page={countPage} onChange={handleChange} />
                
              

                {
                    characters.map((character) => (
                        <Character
                            key={character.id}
                            name={character.name}
                            origin={character.origin}
                            image={character.image}
                        />
                    ))
                }

           
 <Pagination count={42} 
 color = "primary"
  showFirstButton showLastButton
variant='outlined'
 
 page={countPage} onChange={handleChange} />
                
            </div>
        </div>
    );
}