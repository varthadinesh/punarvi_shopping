import React from 'react';

const Filter = () => {
    return (
        <>

            <div className='card mt-4 mb-5'>
                <div className='card-hearder bg-dark text-white p-3 fs-5'>
                <i className="bi bi-sort-down-alt pe-3"></i>
                Filter by attributes
                </div>
                <div className='card-body'>
                    <h5>Size</h5>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>0-2 Yrs</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>0-5 Yrs</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>2-4 Yrs</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>4-6 Yrs</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>5-10 Yrs</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>6-8 Yrs</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>8-10 Yrs</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>10-15 Yrs</p>
                </div>

            </div>
        </>
    );
};

export default Filter;