import React, { useState } from 'react';


const Age: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | string>("");
    // const isNumber = (num: string): boolean => /^\d+$/.test(num);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    }
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // setAge(+event.target.value)

        const newAge = event.target.value;
        if (newAge === "") {
            setAge("")
        } else {
            setAge(+event.target.value);
        }
    }
    // }
    // const handleSubmit(Age: number): string => {
    //     let ageresult = Age * 365
    //     return ` your eta should be ${ageresult}`
    // };


    function handleClick() {

    }
    return (
        <form className='calculate-div'>
            <div className='nametag'>
                <label htmlFor='name'> Name: </label>
                <input
                    id="name"
                    type="text"
                    placeholder=" enter Name"
                    value={name}
                    onChange={handleNameChange}></input>
            </div>
            <div className='agetag'>
                <label htmlFor="age"> Age  :  </label>
                <input
                    id='age'
                    type="number"
                    placeholder=' 0 '
                    value={age}
                    onChange={handleAgeChange}
                />
            </div>
            <div>
                <button className="submit" onClick={handleClick} title='button'> Enter </button>
            </div>
        </form>
    );
}
export default Age;