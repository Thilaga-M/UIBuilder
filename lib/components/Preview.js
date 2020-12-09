"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview() {
        _classCallCheck(this, Preview);

        return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
    }

    _createClass(Preview, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "modal fade", id: this.props.id, tabIndex: "-1", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
                _react2.default.createElement(
                    "div",
                    { className: "modal-dialog", role: "document" },
                    _react2.default.createElement(
                        "div",
                        { className: "modal-content" },
                        _react2.default.createElement(
                            "div",
                            { className: "modal-header" },
                            _react2.default.createElement(
                                "h5",
                                { className: "modal-title", id: "exampleModalLabel" },
                                "Modal title"
                            ),
                            _react2.default.createElement(
                                "button",
                                { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                                _react2.default.createElement(
                                    "span",
                                    { "aria-hidden": "true" },
                                    "\xD7"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "modal-body" },
                            this.props.fields.map(function (field, index) {
                                return _this2.renderField(field, index);
                            })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "modal-footer" },
                            _react2.default.createElement(
                                "button",
                                { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" },
                                "Close"
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps() {}
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            setTimeout(function () {
                (0, _jquery2.default)('.date_time_picker').datetimepicker({
                    timeFormat: "hh:mm tt"
                });
                (0, _jquery2.default)('.time_picker').timepicker({
                    timeFormat: "hh:mm tt"
                });
                (0, _jquery2.default)('.date_picker').datepicker();
            }, 0);
        }
    }, {
        key: "renderField",
        value: function renderField(field, index) {
            if (field === undefined || index === -1) {
                return;
            }
            if (this.props.previews) {
                var _Preview = this.props.previews.filter(function (tool) {
                    if (tool.states.toolType === field.toolType) {
                        return tool;
                    } else {
                        return false;
                    }
                })[0];
                if (_Preview) {
                    var PreviewClonedComponent = _react2.default.cloneElement(_Preview.preview, field);
                    return _react2.default.createElement(
                        "div",
                        { key: index },
                        " ",
                        PreviewClonedComponent,
                        " "
                    );
                }
            }

            if (field.toolType === 'RADIO_BUTTONS') {
                return _react2.default.createElement(
                    "div",
                    { key: index, className: "radios" },
                    _react2.default.createElement(
                        "label",
                        { className: "label", htmlFor: "" },
                        field.title
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "radios-buttons" },
                        field.radios.map(function (radio, index) {
                            return _react2.default.createElement(
                                "div",
                                { key: index, className: field.inline ? "form-check-inline" : "form-check" },
                                _react2.default.createElement("input", {
                                    name: field.multiple ? index : 'radio-group',
                                    className: "form-check-input",
                                    type: "radio",
                                    checked: radio.selected || index === field.defaultValue,
                                    value: radio.selected,
                                    id: radio.value }),
                                _react2.default.createElement(
                                    "label",
                                    { className: "form-check-label", htmlFor: radio.value },
                                    radio.title
                                )
                            );
                        })
                    ),
                    _react2.default.createElement("br", null)
                );
            } else if (field.toolType === "PARAGRAPH") {
                return _react2.default.createElement(
                    "div",
                    { key: index, className: "paragraph" },
                    _react2.default.createElement(
                        "label",
                        { className: "label", hidden: field.title === "" },
                        field.title
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "p-2", style: { textAlign: field.align, backgroundColor: field.backgroundColor, color: field.textColor } },
                        field.content
                    )
                );
            }
        }
    }]);

    return Preview;
}(_react.Component);

exports.default = Preview;
