import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import './PortalMenu.css';

const PortalMenu = ({ menus, history }) => (
  <div className="PortalMenu">
    <Menu className="MainMenu" borderless fluid vertical inverted>    
      {menus.map((menu, menuIndex) => (
        <Menu.Item key={menuIndex}>
          <Menu.Header className="MenuHeader">{menu.title}</Menu.Header>
          <Menu.Menu>
            {menu.items.map((item, itemIndex) => (
              <Menu.Item
                key={itemIndex}
                name={item.title}
                onClick={() => history.push(item.href)}
              />
            ))}
          </Menu.Menu>
        </Menu.Item>
      ))}
    </Menu>
  </div>
);

export default withRouter(PortalMenu);
