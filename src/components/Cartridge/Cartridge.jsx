import "./Cartridge.scss";

const Cartridge = (props) => {
    return (
        <div {...props} className={`cartridge shadow ${props.className}`}>
            {props.children}
        </div>

    );
}

export { Cartridge as CartridgeGame };

export default Cartridge;