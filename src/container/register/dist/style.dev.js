"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = exports.Description = exports.Title = exports.RegisterContent = exports.Background = exports.RegisterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.5em;\n    max-width: 579px;\n    margin-bottom: max(2.5em);\n    @media screen and (max-width: 420px) {\n        margin: 1rem;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-weight: bold;\n    font-size: 4em;\n    margin-bottom: 3.125rem;\n    > span {\n        color: rgba(0, 219, 150, 1);\n    }\n    @media screen and (max-width: 420px) {\n        margin: 1rem;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Roboto', 'sans-serif';\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    padding: 0 2em;\n    text-align: center;\n    height: 100%;\n    @media only screen and (max-width: 1024px) {\n        font-size: 10px;\n        padding: 0;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    position: absolute;\n    max-width: 1920px;\n    grid-row: 1 / 1;\n    grid-column: 1 / 1;\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    max-width: 1920px;\n    height: 1080px;\n    overflow: hidden;\n    @media only screen and (max-width: 1024px) {\n        width: 100%;\n        height: 100vh;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Container
var RegisterContainer = _styledComponents["default"].div(_templateObject());

exports.RegisterContainer = RegisterContainer;

var Background = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.src;
}); // content components


exports.Background = Background;

var RegisterContent = _styledComponents["default"].div(_templateObject3());

exports.RegisterContent = RegisterContent;

var Title = _styledComponents["default"].h2(_templateObject4());

exports.Title = Title;

var Description = _styledComponents["default"].p(_templateObject5());

exports.Description = Description;

var ProgressBar = _styledComponents["default"].div(_templateObject6());

exports.ProgressBar = ProgressBar;