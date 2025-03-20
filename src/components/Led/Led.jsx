import "./Led.scss";

const Led = ({ on }) => {
    return <div className={`led ${on ? "on" : ""}`}></div>;
}

export default Led;