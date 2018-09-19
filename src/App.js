import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import routes from './routes';
import PortalMenu from './PortalMenu';
import menus from './menus';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div style={{ display: 'flex', height: '100%' }}>
          <PortalMenu menus={menus} />
          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component} />
            ))} 
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
