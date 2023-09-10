import React, { useState, useEffect } from "react";
import axios from 'axios';

// generar un de llistat totes les cases dels monstres de la saga Zelda
function Dungeons() {
    const [dungeonList, setDungeonList] = useState([]);

    useEffect(() => {
        const fetchDungeons = async () => {
            try {
                const response = await axios.get('https://zelda.fanapis.com/api/dungeons', {
                    params: {
                        limit: 100, 
                    }
                });
                setDungeonList(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error en carregar el llistat de les cases dels monstres: ', error);
            }
        };
        fetchDungeons();
    }, []);

    return (
        <div>
            <h1>Llistat de cases dels Monstres de la saga Zelda</h1>
            <ul>
                {dungeonList.map((dungeon) => (
                    <li key={dungeon.id}>{dungeon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dungeons;
