webpackJsonp([0],{

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(189);


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_dropdown__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_menu__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_dropdown_assets_index_less__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_dropdown_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rc_dropdown_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* eslint-disable no-console */






function onSelect(_ref) {
  var key = _ref.key;

  console.log(key + ' selected');
}

function onVisibleChange(visible) {
  console.log(visible);
}

var menu = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_rc_menu__["c" /* default */],
  { onSelect: onSelect },
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_rc_menu__["b" /* Item */],
    { key: '1' },
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'a',
      { href: '/' },
      'one'
    )
  ),
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_menu__["a" /* Divider */], null),
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_rc_menu__["b" /* Item */],
    { key: '2' },
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'a',
      { href: '/' },
      'two'
    )
  ),
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_rc_menu__["b" /* Item */],
    { key: '3' },
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'a',
      { href: '/' },
      'three'
    )
  )
);

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
  'div',
  { style: { margin: 20 } },
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { style: { height: 100 } }),
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_rc_dropdown___default.a,
      {
        trigger: ['click'],
        overlay: menu,
        animation: 'slide-up',
        onVisibleChange: onVisibleChange,
        getPopupContainer: function getPopupContainer(trigger) {
          return trigger;
        }
      },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'button',
        { style: { width: 100 } },
        'open'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'button',
      null,
      'Close'
    )
  )
), document.getElementById('__react-content'));

/***/ })

},[188]);
//# sourceMappingURL=simple.js.map