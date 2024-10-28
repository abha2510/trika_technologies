import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/products.css";

const Products = () => {
    const [data, setData] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let response = await axios.get("https://dummyjson.com/products");
            setData(response.data.products);
            setFilterData(response.data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (searchTitle) {
                const filtered = data.filter(product =>
                    product.title.toLowerCase().includes(searchTitle.toLowerCase())
                );
                setFilterData(filtered);
            } else {
                setFilterData(data);
            }
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [searchTitle, data]);

    return (
        <div className='main-container'>
            <div className='search'>
                <input
                    type="text"
                    placeholder='Search by Title...'
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData?.map((element) => (
                        <tr key={element?.id}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{element?.title}</td>
                            <td>{element?.description}</td>
                            <td>{element?.price}</td>
                            <td>{element?.brand}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
