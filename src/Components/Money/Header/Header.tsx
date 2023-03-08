import './header.scss';

const Header = (props: { usd: number; eur: number; pln: number; uah: number; }) => {

    const {
        usd,
        eur,
        pln,
        uah
    } = props;

    return(
        <div className="header">
            <div className="header-money">
                <p>Курс USA</p>
                <p>{usd}</p>
            </div>
            <div className="header-money">
                <p>Курс EUR</p>
                <p>{eur}</p>
            </div>
            <div className="header-money">
                <p>Курс PLN</p>
                <p>{pln}</p>
            </div>
        </div>
    )
};

export default Header;