import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/products.css";

const Products = () => {
    const [data, setData] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            setData(response?.data?.products?.map(product => ({
                ...product,
                selected: false,
            })));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSelectAll = (e) => {
        const isChecked = e.target.checked;
        setData(prevData => prevData?.map(item => ({ ...item, selected: isChecked })));
    };

    const handleCheckboxChange = (id) => {
        setData(prevData =>
            prevData?.map(item => item.id === id ? { ...item, selected: !item.selected } : item)
        );
    };

    const handleDeleteSelected = () => {
        setData(prevData => prevData?.filter(item => !item.selected));
    };

    return (
        <div className="main-container">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search by Title..."
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" onChange={handleSelectAll} />
                        </th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        ?.filter(product => product?.title?.toLowerCase()?.includes(searchTitle.toLowerCase()))
                        .map(product => (
                            <tr key={product?.id} className={product.selected ? 'selected-row' : ''}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={product?.selected || false}
                                        onChange={() => handleCheckboxChange(product.id)}
                                    />
                                </td>
                                <td>{product?.title}</td>
                                <td>{product?.description}</td>
                                <td>{product?.price}</td>
                                <td>{product?.brand}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className='bottom-container'>
                <button className='delete' onClick={handleDeleteSelected}>Delete Selected</button>
            </div>
        </div>
    );
};

export default Products;

