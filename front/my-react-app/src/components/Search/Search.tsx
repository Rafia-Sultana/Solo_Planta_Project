import React, { ChangeEvent, useState } from 'react';
import Plants from '../../Interfaces/Plants.interface';
import SearchLottiePlayer from '../Lottie/SearchLotti.component';
import Filter from '../Filter/Filter';
const BASE_URL = 'http://localhost:5000';
const Search: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    // const [dataExist, setDataExist] = useState<boolean>(false);
    const [searchedData, setSearchedData] = useState<Plants[]>([]);


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

    };

    if (inputValue) {

        fetch(`${BASE_URL}/searchByName/${inputValue}`)
            .then((response) => response.json())
            .then((data) => {

                setSearchedData(data);
            })
            .catch((error) => {

                console.error(error);
            });
    }

    const handleClearInput = () => {
        setInputValue('')
    }

    return (
        <div>
            <input
                type="text"
                autoFocus={true}
                placeholder="search here"
                className="relative input input-bordered w-4/6 mr-2 "
                value={inputValue}
                onChange={handleInputChange}
            />

            <button className="absolute right-36 top-4 transform cursor-pointer" onClick={handleClearInput}>
                X
            </button>

            <Filter></Filter>
            {/* {!inputValue && <b className='flex justify-center items-center my-10'>Search By Plant Name</b>} */}
            {
                searchedData.length > 0 ? (
                    <div className="flex flex-col gap-4 my-3">
                        {searchedData.map((singleSearchedData) => (
                            <div key={singleSearchedData._id} className="border-2 border-green-800 rounded-xl p-4">
                                <p>{singleSearchedData.Common_name}</p>
                                <p>{singleSearchedData.wateringDifficulty}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="my-3">

                        <SearchLottiePlayer />
                    </p>
                )
            }


        </div>


    );
};

export default Search;
