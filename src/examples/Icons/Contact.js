// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function Contact({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>contact</title>
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
                d="M400 0H80C53.49 0 32 21.49 32 48V464C32 490.51 53.49 512 80 512H400C426.51 512 448 490.51 448 464V48C448 21.49 426.51 0 400 0ZM240 128C275.348 128 304 156.654 304 192S275.348 256 240 256C204.656 256 176 227.346 176 192S204.656 128 240 128ZM336 384H144C135.164 384 128 376.836 128 368C128 323.816 163.82 288 208 288H272C316.184 288 352 323.816 352 368C352 376.836 344.836 384 336 384Z"
              />
              <path d="M240 256C275.348 256 304 227.346 304 192S275.348 128 240 128C204.656 128 176 156.654 176 192S204.656 256 240 256ZM272 288H208C163.82 288 128 323.816 128 368C128 376.836 135.164 384 144 384H336C344.836 384 352 376.836 352 368C352 323.816 316.184 288 272 288ZM496 64H448V160H496C504.836 160 512 152.836 512 144V80C512 71.164 504.836 64 496 64ZM496 320H448V416H496C504.836 416 512 408.836 512 400V336C512 327.164 504.836 320 496 320ZM496 192H448V288H496C504.836 288 512 280.836 512 272V208C512 199.164 504.836 192 496 192Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of Basket
Contact.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Contact
Contact.propTypes = {
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

export default Contact;
