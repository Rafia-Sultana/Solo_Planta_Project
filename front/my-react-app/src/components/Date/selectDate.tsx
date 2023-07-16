import React, { useState } from 'react';
const [selectedDate, setSelectedDate] = useState('');
const selectDate = () => {


    const currentDate = new Date().toISOString().split('T')[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedDate(value);
    };
    return (
        <div>
            <input
                type='date'
                min={currentDate}
                value={selectedDate}
                onChange={handleChange}
                required
                className='ml-52 my-5'
            />
        </div>
    );
};

export default selectDate;