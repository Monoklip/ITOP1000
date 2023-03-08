import { SetStateAction, useState } from 'react';
import './main.scss';

const Main = (props: { usd: number; eur: number; pln: number; uah: number; }) => {

    const { usd, eur, pln, uah } = props;

    const [numberTop, setNumberTop] = useState<number>(0);
    const [numberBot, setNumberBot] = useState<number>(0);

    const [selectTop, setSelectTop] = useState<string>('uah');
    const [selectBot, setSelectBot] = useState<string>('usd');

    const numberTopHandleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        if(Number(e.target.value)){
            setNumberTop(Number(e.target.value));
        
            if (selectTop === 'uah') {
                if (selectBot === 'usd') {
                    setNumberBot(Number(e.target.value) / usd);
                }
                else if (selectBot === 'eur') {
                    setNumberBot(Number(e.target.value) / eur);
                }
                else if (selectBot === 'pln') {
                    setNumberBot(Number(e.target.value) / pln);
                }
                else{
                    setNumberBot(Number(e.target.value));
                }
            }
            else if (selectTop === 'usd') {
                if (selectBot === 'uah') {
                    setNumberBot(Number(e.target.value) * usd);
                }
                else if (selectBot === 'eur') {
                    setNumberBot(Number(e.target.value) * usd / eur);
                }
                else if (selectBot === 'pln') {
                    setNumberBot(Number(e.target.value) * usd / pln);
                }
                else{
                    setNumberBot(Number(e.target.value));
                }
            }
            else if (selectTop === 'eur') {
                if (selectBot === 'uah') {
                    setNumberBot(Number(e.target.value) * eur);
                }
                else if (selectBot === 'usd') {
                    setNumberBot(Number(e.target.value) * eur / usd);
                }
                else if (selectBot === 'pln') {
                    setNumberBot(Number(e.target.value) * eur / pln);
                }
                else{
                    setNumberBot(Number(e.target.value));
                }
            }
            else if (selectTop === 'pln') {
                if (selectBot === 'uah') {
                    setNumberBot(Number(e.target.value) * pln / uah);
                }
                else if (selectBot === 'usd') {
                    setNumberBot(Number(e.target.value) * pln / usd);
                }
                else if (selectBot === 'eur') {
                    setNumberBot(Number(e.target.value) * pln / eur);
                }
                else{
                    setNumberBot(Number(e.target.value));
                }
            }
        }
    };

    const numberBotHandleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        if(Number(e.target.value)){
            setNumberBot(Number(e.target.value));

            if (selectTop === 'uah') {
                if (selectBot === 'usd') {
                    setNumberTop(Number(e.target.value) * usd);
                }
                else if (selectBot === 'eur') {
                    setNumberTop(Number(e.target.value) * eur);
                }
                else if (selectBot === 'pln') {
                    setNumberTop(Number(e.target.value) * pln);
                }
                else{
                    setNumberTop(Number(e.target.value));
                }
            }
            else if (selectTop === 'usd') {
                if (selectBot === 'uah') {
                    setNumberTop(Number(e.target.value) / usd);
                }
                else if (selectBot === 'eur') {
                    setNumberTop(Number(e.target.value) / usd * eur);
                }
                else if (selectBot === 'pln') {
                    setNumberTop(Number(e.target.value) / usd * pln);
                }
                else{
                    setNumberTop(Number(e.target.value));
                }
            }
            else if (selectTop === 'eur') {
                if (selectBot === 'uah') {
                    setNumberTop(Number(e.target.value) / eur);
                }
                else if (selectBot === 'usd') {
                    setNumberTop(Number(e.target.value) / eur * usd);
                }
                else if (selectBot === 'pln') {
                    setNumberTop(Number(e.target.value) / eur * pln);
                }
                else{
                    setNumberTop(Number(e.target.value));
                }
            }
            else if (selectTop === 'pln') {
                if (selectBot === 'uah') {
                    setNumberTop(Number(e.target.value) / pln * uah);
                }
                else if (selectBot === 'usd') {
                    setNumberTop(Number(e.target.value) / pln * usd);
                }
                else if (selectBot === 'eur') {
                    setNumberTop(Number(e.target.value) / pln * eur);
                }
                else{
                    setNumberTop(Number(e.target.value));
                }
            }
        }
    };

    const selectTopHandleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectTop(e.target.value);

        if (e.target.value === 'uah') {
            if (selectBot === 'usd') {
                setNumberTop(Number(numberBot) * usd);
            }
            else if (selectBot === 'eur') {
                setNumberTop(Number(numberBot) * eur);
            }
            else if (selectBot === 'pln') {
                setNumberTop(Number(numberBot) * pln);
            }
            else{
                setNumberTop(Number(numberBot));
            }
        }
        else if (e.target.value === 'usd') {
            if (selectBot === 'uah') {
                setNumberTop(Number(numberBot) / usd);
            }
            else if (selectBot === 'eur') {
                setNumberTop(Number(numberBot) / usd * eur);
            }
            else if (selectBot === 'pln') {
                setNumberTop(Number(numberBot) / usd * pln);
            }
            else{
                setNumberTop(Number(numberBot));
            }
        }
        else if (e.target.value === 'eur') {
            if (selectBot === 'uah') {
                setNumberTop(Number(numberBot) / eur);
            }
            else if (selectBot === 'usd') {
                setNumberTop(Number(numberBot) / eur * usd);
            }
            else if (selectBot === 'pln') {
                setNumberTop(Number(numberBot) / eur * pln);
            }
            else{
                setNumberTop(Number(numberBot));
            }
        }
        else if (e.target.value === 'pln') {
            if (selectBot === 'uah') {
                setNumberTop(Number(numberBot) / pln);
            }
            else if (selectBot === 'usd') {
                setNumberTop(Number(numberBot) / pln * usd);
            }
            else if (selectBot === 'eur') {
                setNumberTop(Number(numberBot) / pln * eur);
            }
            else{
                setNumberTop(Number(numberBot));
            }
        }
    };

    const selectBotHandleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectBot(e.target.value);

        if (e.target.value === 'uah') {
            if (selectTop === 'usd') {
                setNumberBot(Number(numberTop) * usd);
            }
            else if (selectTop === 'eur') {
                setNumberBot(Number(numberTop) * eur);
            }
            else if (selectTop === 'pln') {
                setNumberBot(Number(numberTop) * pln);
            }
            else{
                setNumberBot(Number(numberTop));
            }
        }
        else if (e.target.value === 'usd') {
            if (selectTop === 'uah') {
                setNumberBot(Number(numberTop) / usd);
            }
            else if (selectTop === 'eur') {
                setNumberBot(Number(numberTop) / usd * eur);
            }
            else if (selectTop === 'pln') {
                setNumberBot(Number(numberTop) / usd * pln);
            }
            else{
                setNumberBot(Number(numberTop));
            }
        }
        else if (e.target.value === 'eur') {
            if (selectTop === 'uah') {
                setNumberBot(Number(numberTop) / eur);
            }
            else if (selectTop === 'usd') {
                setNumberBot(Number(numberTop) / eur * usd);
            }
            else if (selectTop === 'pln') {
                setNumberBot(Number(numberTop) / eur * pln);
            }
            else{
                setNumberBot(Number(numberTop));
            }
        }
        else if (e.target.value === 'pln') {
            if (selectTop === 'uah') {
                setNumberBot(Number(numberTop) / pln);
            }
            else if (selectTop === 'usd') {
                setNumberBot(Number(numberTop) / pln * usd);
            }
            else if (selectTop === 'eur') {
                setNumberBot(Number(numberTop) / pln * eur);
            }
            else{
                setNumberBot(Number(numberTop));
            }
        }
    };

    return (
        <div className='main'>
            <h1>Обмін</h1>
            <div className="main-buy">
                <input type="text" onChange={numberTopHandleChange}  value={Number(numberTop.toFixed(2))} />
                <select name="" id="" onChange={selectTopHandleChange} value={selectTop}>
                    <option value="uah">UAH</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="pln">PLN</option>
                </select>
            </div>
            <div className="main-buy">
                <input type="text" onChange={numberBotHandleChange} value={Number(numberBot.toFixed(2))} />
                <select name="" id="" onChange={selectBotHandleChange} value={selectBot}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="pln">PLN</option>
                    <option value="uah">UAH</option>
                </select>
            </div>
        </div>
    )
};

export default Main;