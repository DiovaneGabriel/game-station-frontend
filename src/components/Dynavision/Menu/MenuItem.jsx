import pointer from "../../../assets/dynavision/pointer.gif";

const MenuItem = (props) => {
  return (
    <li {...props}>
      <img
        src={pointer}
        alt="pointer"
        className={`pointer ${props.cursorItem == props.id ? "" : "not-visible"}`}
      />
      <span className="font-white">{props.label}</span>
    </li>
  );
};

export default MenuItem;
