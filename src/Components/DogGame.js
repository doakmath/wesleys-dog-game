import React from 'react';
import {useState, useEffect} from 'react';

const DogGame = () => {
    const [choice1, setChoice1] = useState('');
    const [choice2, setChoice2] = useState('');
    const [choice3, setChoice3] = useState('');
    const [choice4, setChoice4] = useState('');
    const [choice5, setChoice5] = useState('');
    const [choice6, setChoice6] = useState('');
    const [dog1, setDog1] = useState('');
    const [dog2, setDog2] = useState('');
    const [dog3, setDog3] = useState('');
    const [winner, setWinner] = useState('');
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        fetchDogData()
    }, [])

    const fetchDogData = async () => {
        const url = 'https://dog.ceo/api/breeds/image/random/6';
        const response = await fetch(url);
        try {
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setChoice1(data.message[0]);
                setChoice2(data.message[1]);
                setChoice3(data.message[2]);
                setChoice4(data.message[3]);
                setChoice5(data.message[4]);
                setChoice6(data.message[5]);
            }
        } catch (error) {
            console.error("error retrieving api data", error);
        }
    }

    const increaseCounter = () => {
        setCounter(counter + 1);
    }


    console.log("counter: ", counter);


    return(
        <>
        {choice1 &&
        <div>
            <div>
                <button
                    onClick = {() => {
                        increaseCounter();
                    }}><img src={choice1} alt='dog1' />
                </button>
            </div>
            <div>
                <button
                    onClick = {() => {
                        increaseCounter();
                    }}><img src={choice2} alt='dog2' />
                </button>
            </div>
        </div>
        }
        </>
    )
}

export default DogGame;
