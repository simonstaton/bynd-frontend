import React from 'react';
import { render } from 'react-dom';
import * as Components from '../scripts/react';

class ComponentLoader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      component: null,
      propTypes: null,
      props: {}
    };
  }

  loadComponent(e) {
    const component = Components.default[e.target.value];
    const propTypes = component.prototype.constructor.propTypes;
    this.setState({
      component,
      propTypes
    });
  }

  setProp(key, e) {
    const props = this.state.props;
    props[key] = this.parseProps(e.target.value);
    this.setState({
      props: props
    });
  }

  parseProps(value) {
    try {
      value = (new Function(`return ${value};`))();
    } catch(err) {}
    return value;
  }

  render() {
    const Component = this.state.component;
    const props = this.state.props;
    return (
      <div>
        <fieldset>
          <legend>Component</legend>
          <select onChange={this.loadComponent.bind(this)} value="default">
            <option disabled value="default">Select Component</option>
            {Object.keys(Components.default).map((key, index) => {
              let value;
              const onChange = (e) => value = e.target.value;
              return <option value={key} value={value} key={index}>{key}</option>
            })}
          </select>
        </fieldset>
        {Component && this.state.propTypes && <fieldset>
          <legend>Props</legend>
          {Object.keys(this.state.propTypes).map((key, index) => {
            return <div key={index}><label>{key} <input type="text" onBlur={this.setProp.bind(this, key)}/></label></div>
          })}
        </fieldset>}
        {Component && <fieldset><Component {...props} /></fieldset>}
      </div>
    );
  }

}

render(
  <ComponentLoader/>,
  document.getElementById('mount')
);
