import { Component } from 'react';
import view from './example.view';

class Example extends Component {

  render() {
    return view.call(this);
  }

};

export default Example;
