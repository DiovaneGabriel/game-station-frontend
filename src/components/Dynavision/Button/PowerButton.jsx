import "./Button.scss";

const PowerButton = (props) => {
    return (
        <div className="button-container">
            <div {...props} className="button power shadow">
                <div className="pipe rounded"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe little"></div>
            </div>
            <span>power</span>
        </div >
    );
}

export default PowerButton;