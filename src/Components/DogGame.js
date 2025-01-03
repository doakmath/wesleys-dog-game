import React from 'react';
import {useState, useEffect} from 'react';
import './DogGameStyles.css'

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
                console.log("api data: ", data);
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
        {counter === 0 &&
        <div className = "button-container">
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setDog1(choice1);
                    }}><img src={choice1} alt='dog1' />
                </button>
            </div>
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setDog1(choice2);
                    }}><img src={choice2} alt='dog2' />
                </button>
            </div>
        </div>
        }
        {counter === 1 &&
        <div className = "button-container">
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setDog2(choice3);
                    }}><img src={choice3} alt='dog3' />
                </button>
            </div>
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setDog2(choice4);
                    }}><img src={choice4} alt='dog4' />
                </button>
            </div>
        </div>
        }
        {counter === 2 &&
        <div className = "button-container">
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setDog3(choice5);
                    }}><img src={choice5} alt='dog5' />
                </button>
            </div>
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setDog3(choice6);
                    }}><img src={choice6} alt='dog6' />
                </button>
            </div>
        </div>
        }
        {counter === 3 &&
        <div className = "button-container">
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setWinner(dog1);
                    }}><img src={dog1} alt='winner dog 1' />
                </button>
            </div>
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setWinner(dog2);
                    }}><img src={dog2} alt='winner dog 2' />
                </button>
            </div>
        </div>
        }
        {counter === 4 &&
        <div className = "button-container">
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                    }}><img src={winner} alt='winner dog' />
                </button>
            </div>
            <div className = "button-box">
                <button
                    onClick = {() => {
                        increaseCounter();
                        setWinner(dog3);
                    }}><img src={dog3} alt='winner dog 3' />
                </button>
            </div>
        </div>
        }
        {counter === 5 &&
        <div>
            <h2>Winner</h2>
            <div>
                <img src={winner} alt="winner dog" />
            </div>
            <div>
                <button
                    onClick= {() => {
                        setCounter(0);
                        fetchDogData();
                        }
                    }>
                        Play Again?
                    </button>
            </div>
        </div>
        }
        </>
    )
}

export default DogGame;
