import React, { useState, useEffect } from "react";
import axios from 'axios';

// generar un llistat de tots els mostres finals de la saga Zelda
function Bosses() {
    const [bossList, setBossList] = useState([]);

    useEffect(() => {
        const FetchBosses = async () => {
            try {
                const response = await axios.get('https://zelda.fanapis.com/api/bosses', {
                    params: {
                        limit: 100, 
                    }
                });
                setBossList(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error en carregar el llistat dels monstres finals: ', error);
            }
        };
        FetchBosses();
    }, []);

    return (
        <div>
            <h1>Llistat de Monstres Finals de la saga de jocs Zelda</h1>
            <ul>
                {bossList.map((boss) => (
                    <li key={boss.id}>{boss.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Bosses;
