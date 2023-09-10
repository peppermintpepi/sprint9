import React, { useState, useEffect } from "react";
import axios from 'axios';

// generar un llistat de tots els 'gadgets' de la saga Zelda
function Items() {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://zelda.fanapis.com/api/dungeons', {
                    params: {
                        limit: 100, 
                    }
                });
                setItemsList(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error en carregar el llistat dels gadgets: ', error);
            }
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Llistat dels 'gadgets' de la saga Zelda</h1>
            <ul>
                {itemsList.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Items;
