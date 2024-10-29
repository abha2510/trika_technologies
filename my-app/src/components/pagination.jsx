import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange, onNextPage, onPrevPage, onNextTwoPages, onPrevTwoPages }) => {
    return (
        <div>
            <button onClick={onPrevTwoPages} disabled={currentPage <= 2}>««</button>
            <button onClick={onPrevPage} disabled={currentPage === 1}>«</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={onNextPage} disabled={currentPage === totalPages}>»</button>
            <button onClick={onNextTwoPages} disabled={currentPage >= totalPages - 1}>»»</button>
        </div>
    )
}

export default Pagination