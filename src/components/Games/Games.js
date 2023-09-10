import React, { useState, useEffect } from "react";
import axios from 'axios';

// generar un llistat de tots els jocs de la saga Zelda
function Games() {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('https://zelda.fanapis.com/api/games', {
                    params: {
                        limit: 100, 
                    }
                });
                setGamesList(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error en carregar el llistat dels jocs: ', error);
            }
        };
        fetchGames();
    }, []);

    return (
        <div>
            <h1>Llistat de jocs de Zelda</h1>
            <ul>
                {gamesList.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Games;
