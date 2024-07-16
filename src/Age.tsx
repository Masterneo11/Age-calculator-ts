import React from 'react';

const Age: React.FC = () => {
    function age(Age: number): string {
        let ageresult = Age * 365
        return ` your eta should be ${ageresult}`
    };
    function handleClick() {

    }
    return (
        <div className='calculate-div'>
            <button onClick={handleClick} title='button'> Enter </button>
            <input id='speed'  ></input>
            <label htmlFor="eta"> Your age is </label>
        </div>
    );
}
export default Age;