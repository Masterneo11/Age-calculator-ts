import React, { useState } from 'react';


const Age: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | string>("");
    const [result, setResult] = useState<string | null>(null);
    // const isNumber = (num: string): boolean => /^\d+$/.test(num);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // storing the event to a string value
        setName(event.target.value);
    }
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // setAge(+event.target.value)
        // storing the event to a string value
        const newAge = event.target.value;
        if (newAge === "") {
            setAge("")
            // storing the event to a  number value
        } else { setAge(+event.target.value); }
    }
    // function handleClick to execute what will happem
    // when the enter button is clicked 
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        // handle for re-setting return value
        // trust me you want it there
        event.preventDefault();
        // proper ts type annotation below 
        const ageNumber: number = Number(age);
        const namegiven: string = name;
        const Days: number = 365;
        const ageCalculation: number = ageNumber * Days;
        const result: string = `${namegiven} you have lived: ${ageCalculation} days! `;
        setResult(result)
        console.log(result)

    };
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
                <button
                    className="submit"
                    onClick={handleClick}
                    title='button'
                > Enter </button>
            </div>
            {/* if not null then returns result */}
            {result !== null && (
                <div className="result">
                    <p>{result}</p>
                </div>
            )}
        </form>
    );
}
export default Age;