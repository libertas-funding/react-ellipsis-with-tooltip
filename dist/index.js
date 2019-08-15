'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ellipsisDefaultStyle = {
  overflow: 'hidden',
  overflowWrap: 'break-word',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordBreak: 'break-all'
};

var EllipisWithTooltip = function (_React$Component) {
  _inherits(EllipisWithTooltip, _React$Component);

  function EllipisWithTooltip(props) {
    _classCallCheck(this, EllipisWithTooltip);

    var _this = _possibleConstructorReturn(this, (EllipisWithTooltip.__proto__ || Object.getPrototypeOf(EllipisWithTooltip)).call(this, props));

    _this.state = {
      hasOverflowingChildren: false,
      text: undefined
    };
    _this.updateOverflow = _this.updateOverflow.bind(_this);
    return _this;
  }

  _createClass(EllipisWithTooltip, [{
    key: 'updateOverflow',
    value: function updateOverflow(e) {
      var el = e.target;
      var _state = this.state,
          hasOverflowingChildren = _state.hasOverflowingChildren,
          text = _state.text;


      if (!hasOverflowingChildren && el.scrollWidth > el.clientWidth) {
        this.setState({ hasOverflowingChildren: true });
        if (el.textContent !== text) {
          this.setState({ text: el.textContent });
        }
      } else {
        this.setState({ hasOverflowingChildren: false });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children === this.props.children) return;
      this.setState({ hasOverflowingChildren: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          hasOverflowingChildren = _state2.hasOverflowingChildren,
          text = _state2.text;
      var _props = this.props,
          _props$placement = _props.placement,
          placement = _props$placement === undefined ? 'top' : _props$placement,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          delayShow = _props.delayShow,
          delayHide = _props.delayHide,
          children = _props.children;

      var tooltip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'tooltip-' + (0, _v2.default)() },
        text
      );

      var ellipsisStyle = _extends({}, ellipsisDefaultStyle, style);

      return hasOverflowingChildren ? _react2.default.createElement(
        _reactBootstrap.OverlayTrigger,
        {
          placement: placement,
          overlay: tooltip,
          delayShow: delayShow,
          delayHide: delayHide
        },
        _react2.default.createElement(
          'div',
          { style: ellipsisStyle },
          children
        )
      ) : _react2.default.createElement(
        'div',
        { style: ellipsisStyle, onMouseEnter: this.updateOverflow },
        children
      );
    }
  }]);

  return EllipisWithTooltip;
}(_react2.default.Component);

EllipisWithTooltip.propTypes = {
  placement: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  style: _propTypes2.default.object,
  delayShow: _propTypes2.default.number,
  delayHide: _propTypes2.default.number
};

EllipisWithTooltip.defaultProps = {
  placement: undefined,
  style: undefined,
  delayHide: undefined,
  delayShow: undefined
};

exports.default = EllipisWithTooltip;