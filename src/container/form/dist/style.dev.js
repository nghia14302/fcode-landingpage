"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormImage = exports.ImageContainer = exports.SubmitButton = exports.CheckBox = exports.FormLineWrap = exports.SmallOption = exports.SmallSelect = exports.Option = exports.Select = exports.OptionContainer = exports.InputFull = exports.InputSmallLeft = exports.Input = exports.NameInput = exports.Label = exports.FormWrap = exports.FormDetail = exports.FormHead = exports.FormTitle = exports.FormContent = exports.FormContainer = exports.SectionWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    margin-top: auto;\n    flex: 0 0 50%;\n    @media (max-width: 1200px) {\n        display: none;\n    }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    width: 448px;\n    height: 44px;\n    background: #00d17d;\n    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),\n        0px 2px 4px rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    margin-top: 50px;\n    color: white;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s;\n    &:hover {\n        filter: brightness(95%);\n    }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 12px;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    width: 50%;\n    margin-right: 13px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    outline: none;\n    width: 211px;\n    height: 56px;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n    padding-left: 15px;\n    padding-right: 15px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    height: 100px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    width: 448px;\n    height: 56px;\n    padding-left: 15px;\n    padding-right: 15px;\n    outline: none;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n    margin-bottom: 20px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    margin-bottom: 20px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 56px;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n    box-sizing: border-box;\n    border-radius: 4px;\n    padding-left: 15px;\n    padding-right: 15px;\n    &:focus {\n        outline: none;\n    }\n    ::placeholder {\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 16px;\n        line-height: 19px;\n        color: rgba(0, 0, 0, 0.36);\n    }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 211px;\n    height: 56px;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n    box-sizing: border-box;\n    border-radius: 4px;\n    margin-right: 26px;\n    padding-left: 15px;\n    padding-right: 15px;\n    &:focus {\n        outline: none;\n    }\n    ::placeholder {\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 16px;\n        line-height: 19px;\n        color: rgba(0, 0, 0, 0.36);\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    height: 56px;\n    width: 448px;\n    border: 1px solid rgba(0, 0, 0, 0.36);\n    box-sizing: border-box;\n    border-radius: 4px;\n    margin-right: 26px;\n    padding-left: 15px;\n    margin-bottom: 20px;\n    padding-right: 15px;\n    &:focus {\n        outline: none;\n    }\n    ::placeholder {\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 16px;\n        line-height: 19px;\n        color: rgba(0, 0, 0, 0.36);\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 16px;\n    color: rgba(0, 0, 0, 0.6);\n    margin-bottom: 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 50px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 24px;\n    color: rgba(0, 0, 0, 0.6);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 64px;\n    color: #262727;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 450px;\n    align-items: center;\n    margin: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-top: 100px;\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SectionWrapper = _styledComponents["default"].div(_templateObject());

exports.SectionWrapper = SectionWrapper;

var FormContainer = _styledComponents["default"].div(_templateObject2());

exports.FormContainer = FormContainer;

var FormContent = _styledComponents["default"].div(_templateObject3());

exports.FormContent = FormContent;

var FormTitle = _styledComponents["default"].div(_templateObject4());

exports.FormTitle = FormTitle;

var FormHead = _styledComponents["default"].h2(_templateObject5());

exports.FormHead = FormHead;

var FormDetail = _styledComponents["default"].p(_templateObject6());

exports.FormDetail = FormDetail;

var FormWrap = _styledComponents["default"].form(_templateObject7());

exports.FormWrap = FormWrap;

var Label = _styledComponents["default"].label(_templateObject8());

exports.Label = Label;

var NameInput = _styledComponents["default"].div(_templateObject9());

exports.NameInput = NameInput;

var Input = _styledComponents["default"].input(_templateObject10());

exports.Input = Input;

var InputSmallLeft = _styledComponents["default"].input(_templateObject11());

exports.InputSmallLeft = InputSmallLeft;

var InputFull = _styledComponents["default"].input(_templateObject12());

exports.InputFull = InputFull;

var OptionContainer = _styledComponents["default"].div(_templateObject13());

exports.OptionContainer = OptionContainer;

var Select = _styledComponents["default"].select(_templateObject14());

exports.Select = Select;

var Option = _styledComponents["default"].option(_templateObject15());

exports.Option = Option;

var SmallSelect = _styledComponents["default"].select(_templateObject16());

exports.SmallSelect = SmallSelect;

var SmallOption = _styledComponents["default"].option(_templateObject17());

exports.SmallOption = SmallOption;

var FormLineWrap = _styledComponents["default"].div(_templateObject18());

exports.FormLineWrap = FormLineWrap;

var CheckBox = _styledComponents["default"].input(_templateObject19());

exports.CheckBox = CheckBox;

var SubmitButton = _styledComponents["default"].button(_templateObject20());

exports.SubmitButton = SubmitButton;

var ImageContainer = _styledComponents["default"].div(_templateObject21());

exports.ImageContainer = ImageContainer;

var FormImage = _styledComponents["default"].img(_templateObject22());

exports.FormImage = FormImage;