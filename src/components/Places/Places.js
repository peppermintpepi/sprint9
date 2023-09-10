import React, { useState, useEffect } from "react";
import axios from 'axios';

// generar un llistat de totes les localitzacions de la saga Zelda
function Places() {
    const [placesList, setPlacesList] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get('https://zelda.fanapis.com/api/dungeons', {
                    params: {
                        limit: 100, 
                    }
                });
                setPlacesList(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error en carregar el llistat de les localitzacions: ', error);
            }
        };
        fetchPlaces();
    }, []);

    return (
        <div>
            <h1>Llistat de les localitzacions de la saga Zelda</h1>
            <ul>
                {placesList.map((location) => (
                    <li key={location.id}>{location.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Places;
