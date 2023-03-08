import './header.scss';

const Header = (props: { usd: number; eur: number; pln: number; }) => {

    const {
        usd,
        eur,
        pln
    } = props;

    return(
        <div className="header">
            <div className="header-money">
                <p>Курс USA</p>
                <p>{usd.toFixed(2)}</p>
            </div>
            <div className="header-money">
                <p>Курс EUR</p>
                <p>{eur.toFixed(2)}</p>
            </div>
            <div className="header-money">
                <p>Курс PLN</p>
                <p>{pln.toFixed(2)}</p>
            </div>
        </div>
    )
};

export default Header;