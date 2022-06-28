 
import React,  {useState, useEffect} from 'react';
import Character from './Character';
import Pagination from '@mui/material/Pagination';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import PaginationItem from '@mui/material/PaginationItem';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
export default function List() {
    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState();
    const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('pages') || '1', 42);
    useEffect(() => {
        const url = currentPageUrl;

        async function fetchData() {
            const data = await fetch(url);
            const {results, info} = await data.json();

            setCharacter(results);
            setLoading(false);

            setNextPageUrl(info.next);
            setPrevPageUrl(info.prev);
            setPages(info.pages);
        }

        fetchData();
    }, [currentPageUrl]);

    //Next Page
    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    }

    //Prev Page
    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl);
    }

    //Choose Page
    const goToPage= (num) => {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`);
    }

    if (loading)
        return (<div>Loading...</div>);

    return (
        
        <div>
            
            <h2>Characters</h2>
            <div className="row">
                
                
                <Pagination 
                 count={42}
                 color = "secondary"
                    nextPage={nextPageUrl ? nextPage : null}
                    prevPage={prevPageUrl ? prevPage : null}
                    goToPage={goToPage}
                    pages={pages}
                    
                    renderItem={(item) => (
                        <PaginationItem
                          component={Link}
                          to={`/inbox${item.page === 1 ? '' :  `?page=${item.page}`}`}
                          {...item}
                          
                        />


                        
                      )}
                    
                />
                
                
                
                
                
              

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

           
<Pagination count ={42}
color = "primary"
            
                    nextPage={nextPageUrl ? nextPage : null}
                    prevPage={prevPageUrl ? prevPage : null}
                    goToPage={goToPage}
                    pages={pages}
                    
            
                    
                />
                
            </div>
        </div>
    );
}