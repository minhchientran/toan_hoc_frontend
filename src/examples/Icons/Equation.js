// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function Equation({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 384 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Equation</title>
      <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Rounded-Icons"
          transform="translate(-1869.000000, -741.000000)"
          fill={colors[color] ? colors[color].main : colors.dark.main}
          fillRule="nonzero"
        >
          <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
            <g id="basket" transform="translate(153.000000, 450.000000)">
              <path
                opacity="0.4"
                d="M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM256 432H128C119.156 432 112 424.844 112 416S119.156 400 128 400H256C264.844 400 272 407.156 272 416S264.844 432 256 432ZM256 288H208V336C208 344.844 200.844 352 192 352S176 344.844 176 336V288H128C119.156 288 112 280.844 112 272S119.156 256 128 256H176V208C176 199.156 183.156 192 192 192S208 199.156 208 208V256H256C264.844 256 272 263.156 272 272S264.844 288 256 288Z"
              />
              <path d="M256 0V128H384L256 0ZM256 400H128C119.156 400 112 407.156 112 416S119.156 432 128 432H256C264.844 432 272 424.844 272 416S264.844 400 256 400ZM256 256H208V208C208 199.156 200.844 192 192 192S176 199.156 176 208V256H128C119.156 256 112 263.156 112 272S119.156 288 128 288H176V336C176 344.844 183.156 352 192 352S208 344.844 208 336V288H256C264.844 288 272 280.844 272 272S264.844 256 256 256Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of Basket
Equation.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Equation
Equation.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Equation;
