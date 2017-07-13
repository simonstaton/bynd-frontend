import React from 'react';
import { render } from 'react-dom';
import * as Components from '../scripts/react';

class ComponentLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null
    };
  }
  loadComponent(e) {
    this.setState({
      component: Components.default[e.target.value]
    });
  }
  render() {
    const Component = this.state.component;
    return (
      <div>
        <select onChange={this.loadComponent.bind(this)}>
          <option disabled selected>Select Component</option>
          {Object.keys(Components.default).map((key, index) => {
            return <option value={key} key={index}>{key}</option>
          })}
        </select>
        {Component && <Component />}
      </div>
    );
  }
}

render(
  <ComponentLoader/>,
  document.getElementById('mount')
);
