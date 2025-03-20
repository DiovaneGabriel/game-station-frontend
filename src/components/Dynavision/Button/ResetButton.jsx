import "./Button.scss";

const ResetButton = (props) => {
    return (
        <div className="button-container">
            <div {...props} className="button reset shadow">
                <div className="pipe little"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe rounded"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe little"></div>
            </div>
            <span>reset</span>
        </div>
    );
}

export default ResetButton;