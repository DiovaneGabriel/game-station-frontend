import { useDynavision } from "../../../contexts/Dynavision";

import ResetButton from "../Button/ResetButton";
import PowerButton from "../Button/PowerButton";
import Led from "../../Led/Led";

import Logo from "../Logo/Logo";

import "./Panel.scss";
import { useEffect, useState } from "react";

const Panel = ({ short = false }) => {
    const { isOn, power, reset } = useDynavision();
    const [isShort, setIsShort] = useState(false);

    useEffect(() => {
        setIsShort(short);
    }, [short]);

    return (
        <div className={`panel shadow ${!isOn || !isShort ? '' : 'short'}`} onMouseEnter={() => setIsShort(false)} onMouseLeave={() => setIsShort(true)}>
            <div className="buttons">
                <ResetButton onClick={reset} />
                <Led on={isOn} />
                <PowerButton onClick={power} />
            </div>
            <div className="logo">
                <Logo />
            </div>
        </div>);
}

export default Panel;