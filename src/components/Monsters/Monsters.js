import React, { useState, useEffect } from "react";
import axios from 'axios';

// generar un llistat de tots els mostres de la saga Zelda
function Monsters() {
    const [monsterList, setMonsterList] = useState([]);

    useEffect(() => {
        const fetchMonsters = async () => {
            try {
                const response = await axios.get('https://zelda.fanapis.com/api/monsters', {
                    params: {
                        limit: 100, 
                    }
                });
                setMonsterList(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error en carregar el llistat dels monstres: ', error);
            }
        };
        fetchMonsters();
    }, []);

    return (
        <div>
            <h1>Llistat de Monstres de la saga de jocs Zelda</h1>
            <ul>
                {monsterList.map((monster) => (
                    <li key={monster.id}>{monster.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Monsters;
