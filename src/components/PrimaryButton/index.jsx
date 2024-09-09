import { Fragment, useState } from "react";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
  black: {
    default: "black",
    hover: "black"
  }
};

const btnStyle = (props, isHover) => ({
  backgroundColor: isHover ? `${theme[props.btnTheme].hover}` : `${theme[props.btnTheme].default}`,
  color: "white",
  padding: "5px 30px",
  borderRadius: "5px",
  outline: 0,
  border: 0,
  textTransform: "uppercase",
  margin: "10px 5px",
  cursor: "pointer",
  transition: "ease background-color 250ms",
  fontSize: "25px"
})

const PrimaryButton = ({
  onClick,
  label,
  theme = {
    btnTheme: "blue"
  },
  ...props
}) => {
  const [hover, setIsHover] = useState(false)

  return (
    <Fragment>
      <button
        onClick={onClick}
        style={btnStyle(theme, hover)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        {...props}
      >
        {label}
      </button>
    </Fragment>
  );
};

export default PrimaryButton;
