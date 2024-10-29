import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/products.css";
import Pagination from './pagination';

const Products = () => {
    const [data, setData] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchData();
        setPage(1);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setData(response?.data?.map(product => ({
                ...product,
                selected: false,
            })) || []);
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([])
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
    const totalItems = data?.length;
    const numPages = Math.ceil(totalItems / itemsPerPage);
    const lastItemIndex = page * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const visibleItems = (data || []).slice(firstItemIndex, lastItemIndex);


    const goToNextPage = () => {
        if (page < numPages) setPage(page + 1);
    };

    const goToPrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const skipNextTwoPages = () => {
        if (page + 2 <= numPages) setPage(page + 2);
    };

    const skipPrevTwoPages = () => {
        if (page - 2 >= 1) setPage(page - 2);
    };
    return (
        <div className="main-container">
            <h1 className='title'>Trika Technologies</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search Products..."
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
                    {visibleItems
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
                                <td>{product?.title || 'NA'}</td>
                                <td>{product?.description || 'NA'}</td>
                                <td>₹ {product?.price || '0'}</td>
                                <td>{product?.brand || 'NA'}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className='bottom-container'>
                <button className='delete' onClick={handleDeleteSelected}>Delete Selected</button>
                <Pagination
                    currentPage={page}
                    totalPages={numPages}
                    onPageChange={setPage}
                    onNextPage={goToNextPage}
                    onPrevPage={goToPrevPage}
                    onNextTwoPages={skipNextTwoPages}
                    onPrevTwoPages={skipPrevTwoPages}
                />
            </div>
        </div>
    );
};

export default Products;

