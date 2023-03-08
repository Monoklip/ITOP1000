import { SetStateAction, useState } from 'react';
import './main.scss';

const Main = (props: { usd: number; eur: number; pln: number; uah: number; }) => {

    const { usd, eur, pln, uah } = props;

    const [numberUp, setNumberUp] = useState<number>();
    const [numberBottom, setNumberBottom] = useState<number>();

    const [valueSelectUp, setValueSelectUp] = useState<string>('uah');
    const [valueSelectBottom, setValueSelectBottom] = useState<string>('usd');

    const numberUpHandleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNumberUp(Number(e.target.value));

        if (valueSelectUp === 'uah') {
            if (valueSelectBottom === 'usd') {
                setNumberBottom(Number(e.target.value) / Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberBottom(Number(e.target.value) / Number(eur));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberBottom(Number(e.target.value) / Number(pln));
            }
        }
        else if (valueSelectUp === 'usd') {
            if (valueSelectBottom === 'uah') {
                setNumberBottom(Number(e.target.value) * Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberBottom(Number(e.target.value) / Number(eur));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberBottom(Number(e.target.value) / Number(pln));
            }
        }
        else if (valueSelectUp === 'eur') {
            if (valueSelectBottom === 'uah') {
                setNumberBottom(Number(e.target.value) * Number(eur));
            }
            else if (valueSelectBottom === 'usd') {
                setNumberBottom(Number(e.target.value) / Number(usd));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberBottom(Number(e.target.value) / Number(pln));
            }
        }
        else if (valueSelectUp === 'pln') {
            if (valueSelectBottom === 'uah') {
                setNumberBottom(Number(e.target.value) * Number(uah));
            }
            else if (valueSelectBottom === 'usd') {
                setNumberBottom(Number(e.target.value) / Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberBottom(Number(e.target.value) / Number(eur));
            }
        }
    };

    const numberBottomHandleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNumberBottom(e.target.value as unknown as number);

        if (valueSelectUp === 'uah') {
            if (valueSelectBottom === 'usd') {
                setNumberUp(Number(e.target.value) * Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberUp(Number(e.target.value) * Number(eur));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberUp(Number(e.target.value) * Number(pln));
            }
        }
        else if (valueSelectUp === 'usd') {
            if (valueSelectBottom === 'uah') {
                setNumberUp(Number(e.target.value) * Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberUp(Number(e.target.value) / Number(eur));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberUp(Number(e.target.value) / Number(pln));
            }
        }
        else if (valueSelectUp === 'eur') {
            if (valueSelectBottom === 'uah') {
                setNumberUp(Number(e.target.value) * Number(eur));
            }
            else if (valueSelectBottom === 'usd') {
                setNumberUp(Number(e.target.value) / Number(usd));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberUp(Number(e.target.value) / Number(pln));
            }
        }
        else if (valueSelectUp === 'pln') {
            if (valueSelectBottom === 'uah') {
                setNumberUp(Number(e.target.value) * Number(uah));
            }
            else if (valueSelectBottom === 'usd') {
                setNumberUp(Number(e.target.value) / Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberUp(Number(e.target.value) / Number(eur));
            }
        }
    };

    const valueUpHandleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setValueSelectUp(e.target.value);

        if (e.target.value === 'uah') {
            if (valueSelectBottom === 'usd') {
                setNumberBottom(Number(numberUp) / Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberBottom(Number(numberUp) / Number(eur));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberBottom(Number(numberUp) / Number(pln));
            }
        }
        else if (e.target.value === 'usd') {
            if (valueSelectBottom === 'uah') {
                setNumberBottom(Number(numberUp) * Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberBottom(Number(numberUp) / Number(eur));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberBottom(Number(numberUp) / Number(pln));
            }
        }
        else if (e.target.value === 'eur') {
            if (valueSelectBottom === 'uah') {
                setNumberBottom(Number(numberUp) * Number(eur));
            }
            else if (valueSelectBottom === 'usd') {
                setNumberBottom(Number(numberUp) / Number(usd));
            }
            else if (valueSelectBottom === 'pln') {
                setNumberBottom(Number(numberUp) / Number(pln));
            }
        }
        else if (e.target.value === 'pln') {
            if (valueSelectBottom === 'uah') {
                setNumberBottom(Number(numberUp) * Number(uah));
            }
            else if (valueSelectBottom === 'usd') {
                setNumberBottom(Number(numberUp) / Number(usd));
            }
            else if (valueSelectBottom === 'eur') {
                setNumberBottom(Number(numberUp) / Number(eur));
            }
        }
    };

    const valueBottomHandleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setValueSelectBottom(e.target.value);
    };

    return (
        <div className='main'>
            <h1>Обмін</h1>
            <div className="main-buy">
                <input type="number" onChange={numberUpHandleChange} value={numberUp} />
                <select name="" id="" onChange={valueUpHandleChange} value={valueSelectUp}>
                    <option value="uah">UAH</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="pln">PLN</option>
                </select>
            </div>
            <div className="main-buy">
                <input type="number" onChange={numberBottomHandleChange} value={numberBottom} />
                <select name="" id="" onChange={valueBottomHandleChange} value={valueSelectBottom}>
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