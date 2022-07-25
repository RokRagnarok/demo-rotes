import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import Error404 from './Components/Error/404';
import Contact from './Components/Contact/Contact';
import Notes from './Components/Notes/Notes';
import Character from './Components/Character/Character';
import Todo from './Components/Todo/Todo';
import Casa from './Components/Casa/Casa';
import Charthome from './Components/Chart/Charthome';
import Pomodoro from './Components/Pomodoro/Timer';
import Forms from './Components/Forms/Person';
const AppRoutes = () => (


    <App>
        <Routes>
            <Route path='/'element ={<Home/>}  />
            
            <Route path='/contact'element ={<Contact/>}  />
            <Route path='*'element ={<Error404/>}  />
            <Route path='/notes'element ={<Notes/>}  />
            <Route path='/notes/:noteId'element ={<Notes/>}  />
            <Route path='/Todo'element ={<Todo/>}  />
            <Route path='/Casa'element ={<Casa/>}  />
            <Route path='/ChartHome'element ={<Charthome/>}  />
            <Route path='/Pomodoro'element ={<Pomodoro/>}   />
            <Route path='/Forms'element ={<Forms/>}   />
        </Routes>
   </App>
)

export default AppRoutes;