/* eslint-disable no-console */
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';

function onSelect({ key }) {
  console.log(`${key} selected`);
}

function onVisibleChange(visible) {
  console.log(visible);
}

const menu = (
  <Menu onSelect={onSelect}>
    <MenuItem key="1"><a href="/">one</a></MenuItem>
    <Divider />
    <MenuItem key="2"><a href="/">two</a></MenuItem>
    <MenuItem key="3"><a href="/">three</a></MenuItem>
  </Menu>
);

ReactDOM.render(
  <div style={{ margin: 20 }}>
    <div style={{ height: 100 }}/>
    <div>
      <Dropdown
        trigger={['focus']}
        overlay={menu}
        animation="slide-up"
        onVisibleChange={onVisibleChange}
        getPopupContainer={trigger => trigger}
      >
        <button style={{ width: 100 }}>open</button>
      </Dropdown>

      <button>Close</button>
    </div>
  </div>
, document.getElementById('__react-content'));
