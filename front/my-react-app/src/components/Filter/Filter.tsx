import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import green from '../../assets/images/green.png';
import AllPlant from '../../Services/AllPlant';

const Filter: React.FC = () => {
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedGrowth, setSelectedGrowth] = useState('');

    const handleOpenModal = () => {
        const myModal = document.getElementById(
            'my_modal_5'
        ) as HTMLDialogElement | null;
        if (myModal) {
            myModal.showModal();
        }
    };

    const handleCloseModal = () => {
        const myModal = document.getElementById(
            'my_modal_5'
        ) as HTMLDialogElement | null;
        if (myModal) {
            myModal.close();
        }
    };
    const handleApplyFilter = async () => {
        const filterData = {
            color: selectedColor,
            difficulty: selectedDifficulty,
            growth: selectedGrowth,
        }
        // fetch('http://localhost:5000/filter', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(filterData),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // Handle the response from the backend
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         // Handle any error that occurred during the request
        //         console.error(error);
        //     });

        const filteredData = await AllPlant.filterPlantByUser(filterData);
        // console.log(filteredData);
        navigate('/filteredData', {
            state: filteredData
        })

    }

    return (
        <>
            <button className='btn' onClick={handleOpenModal}>
                Filter
            </button>
            <dialog id='my_modal_5' className='modal modal-middle sm:modal-middle'>
                <form method='dialog' className='modal-box'>
                    <button className='flex justify-between ' onClick={handleCloseModal}>
                        X
                    </button>

                    <p className='py-4'>What type of plant are you looking for?</p>
                    <div className=''>
                        <b>Add Filters</b>
                        <br />

                        <select className='select  w-full max-w-xs'
                            // value={selectedColor}
                            onChange={(e) => setSelectedColor(e.target.value)}

                        >
                            <option disabled selected>
                                Color
                            </option>
                            <option className='red'>red</option>
                            <option className='text-green-500'>green</option>
                            <option className='text-pink-500'>Pink</option>
                            <option>White</option>
                        </select>
                        <br />
                        <select className='select  w-full max-w-xs'
                            // value={selectedDifficulty}
                            onChange={(e) => setSelectedDifficulty(e.target.value)}>
                            <option disabled selected>
                                Difficulty
                            </option>
                            <option>Beginner</option>
                            <option>Experienced</option>
                            <option>Master</option>
                        </select>
                        <br />
                        <select className='select  w-full max-w-xs'
                            // value={selectedGrowth}
                            onChange={(e) => setSelectedGrowth(e.target.value)}>
                            <option disabled selected>
                                Growth
                            </option>
                            <option>Slow</option>
                            <option>Regular</option>
                        </select>
                    </div>
                    <button className='primaryBackground text-white w-4/6 p-2 rounded-lg ml-12' onClick={handleApplyFilter}>Apply Filter</button>
                </form>
            </dialog>
        </>
    );
};

export default Filter;
