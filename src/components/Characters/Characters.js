import React, { useState, useEffect } from "react";
import axios from 'axios';

// generar un llistat de tots els personatges de la saga Zelda
function Characters() {
    const [charactersList, setCharactersList] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://zelda.fanapis.com/api/characters', {
                    params: {
                        limit: 100, 
                    }
                });
                setCharactersList(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error en carregar el llistat dels personatges: ', error);
            }
        };
        fetchCharacters();
    }, []);

    return (
        <div>
            <h1>Llistat de Personatges de Zelda</h1>
            <ul>
                {charactersList.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Characters;
