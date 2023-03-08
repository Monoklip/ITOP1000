import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import './money.scss';


const Money = () => {

    const [url, setUrl] = useState<string>("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");

    const [usd, setUsd] = useState<number>(0);
    const [eur, setEur] = useState<number>(0);
    const [pln, setPln] = useState<number>(0);

    const [uah, setUah] = useState<number>(1);

    const getMoneyUsd = async() => {
        const response = await fetch(url);
        const data = await response.json();

        setUsd(data[24].rate);
        setEur(data[31].rate);
        setPln(data[32].rate);
    };        

    useEffect(()=>{
        getMoneyUsd();
    },[]);

    return(
        <div className='money'>
            <Header usd={usd} eur={eur} pln={pln} uah={uah}/>
            <Main usd={usd} eur={eur} pln={pln} uah={uah}/>
        </div>
    )
};

export default Money;