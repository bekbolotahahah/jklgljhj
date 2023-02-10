import React from 'react';



const Pogination = ({ cupsPerPage, totalCups, pagineyt, currentPage, setCurrentPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCups / cupsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='paginotion__catalog'>
            <div className='podination__number__catalog'>
                <div
                    className="pogination_mor"
                    onClick={() => setCurrentPage((prev) => prev === 1 ? prev : prev - 1)}
                ></div>
                {
                    pageNumbers.map(number => (
                        <span key={number}>
                            <span className={currentPage === number && 'span_active'} onClick={() => pagineyt(number)}>
                                {number}
                            </span>

                        </span>
                    ))
                }
                <div
                    className="pogination_more"
                    onClick={() => setCurrentPage((prev) => prev === pageNumbers.length ? prev : prev + 1)}
                ></div>
            </div>

        </div>

    );
}



export default Pogination;


