
import  React from 'react';
import { getNotes } from '../../data';
import { Link, useParams } from 'react-router-dom';
import './Notes.css';

const Notes = () => {
    let notes = getNotes();

    const {noteId} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if (id > 0) {
            selectedNote = notes.filter(
                note => note.id === Number(id)
            );
        }

        return selectedNote;
    }

    const selectedNote = filterNotes(noteId);

    const renderNotes = (notes) => (
        <ul>
            {
                
                notes.map((note, key) => (
                    <li key={key}>
                        
                        {
                            (selectedNote)?
                            <div>
                                <h1>{note.title}</h1>
                                <h2>{note.titulo}</h2>
                                <p>{note.description}</p>
                                <font color="orange"><p>{note.description2}</p></font>
                                <font color="blue"><p>{note.description3}</p></font>
                                <font color="white"><p>{note.description4}</p></font>
                                <font color="black"><p>{note.description5}</p></font>
                            </div>
                            :
                            <Link to={`/notes/${note.id}`}>{note.title}</Link>
                        }

                    </li>
                ))
            }
        </ul>
    )

   
    return (
        <div className = "Notes">
            <h1>Rutinas</h1>
            <h2>Aqui se mostraran los tipos de rutinas</h2>
            {renderNotes(selectedNote || notes )}
        </div>
    );
};

export default Notes