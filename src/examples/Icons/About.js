// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function About({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 640 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>About</title>
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
                d="M128 160C172.184 160 208 124.182 208 80S172.184 0 128 0C83.82 0 48 35.818 48 80S83.82 160 128 160ZM512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM551.92 192H490.08C477.279 192 465.195 195.037 454.221 200.24C454.834 205.475 455.814 210.604 455.814 216C455.814 249.715 443.033 280.211 422.65 304H622.385C632.113 304 640 295.641 640 285.332C640 233.785 600.566 192 551.92 192ZM185.516 200.088C174.613 194.967 162.613 192 149.92 192H88.08C39.438 192 0 233.785 0 285.332C0 295.641 7.887 304 17.615 304H217.07C196.688 280.211 183.906 249.715 183.906 216C183.906 210.551 184.889 205.371 185.516 200.088Z"
              />
              <path d="M319.859 320C377.273 320 423.814 273.436 423.814 216C423.814 158.562 377.273 112 319.859 112C262.451 112 215.904 158.562 215.904 216C215.904 273.436 262.451 320 319.859 320ZM369.887 352H270.113C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H483.578C499.273 512 512 500.059 512 485.332C512 411.693 448.377 352 369.887 352Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of Basket
About.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the About
About.propTypes = {
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

export default About;
