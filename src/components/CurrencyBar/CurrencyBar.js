import { Container,  CurrencyBox } from './CurrencyBar.styles'
import Tooltip from "../Tooltip/Tooltip";
import Value from './Value';
import Logo from './Logo';

const CurrencyBar = ({ Currencies }) => {

    const displayCurrencies = Object.entries(Currencies).map(([key, currency]) => {
        return (
            <CurrencyBox key={key}>
                 {/* logo component below in this file */}
                 <Tooltip text={currency.altText} >
                <Logo currency={currency} />
                </Tooltip>
                <Value value={currency.value}></Value>
            </CurrencyBox> 
        );
    });

    return (
        <Container>
            {displayCurrencies}
        </Container>
        
    )

}

export default CurrencyBar;

