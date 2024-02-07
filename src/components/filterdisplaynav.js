import React from 'react';

const Filterdisplaynav = () => {
    return (
        <>
            <nav className='bg-dark text-white w-100 d-md-flex justify-content-around ps-3 pe-3 p-2'>
                <div className='d-md-flex  text-center'>
                    <label className='fs-5 pe-4'>Filter</label>
                    <select className='form-select'>
                    <option>Most Recent</option>
                    </select>
                </div>
                <div className='d-md-flex  text-center'>
                    <label className='fs-5 pe-4'>Display</label>
                    <select className='form-select'>
                    <option>3</option>
                    <option>6</option>
                    <option>9</option>
                    </select>
                </div>
            </nav>

        </>
    );
};

export default Filterdisplaynav;