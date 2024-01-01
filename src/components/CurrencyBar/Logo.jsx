
//logo component used in currencyBar component above
//left here to save messing about with css styles
const Logo = ({ currency }) => {
    const requireF = (modulePath) => { // force require
        try {
            return require(`../../assets/icons/${currency.icon}`);
        }
        catch (e) {
            console.log('requireF(): The file "' + modulePath + '" could not be loaded.');
            return "";
        }
    }
    return (
        <img
            className="Logo"
            src={requireF(currency.icon)} //needed to return empty src if module(IE FILE) fails tyo load
            alt={currency.altText}
        />
    );
};

export default Logo;