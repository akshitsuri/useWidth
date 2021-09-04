"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWidth = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useWidth = () => {
  const [width, setWidth] = _react.default.useState(window.innerWidth);

  _react.default.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width];
};

exports.useWidth = useWidth;