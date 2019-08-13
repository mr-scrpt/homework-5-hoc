import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = (Wrapped, ...propsHOC) => {

  return class extends Component {
    render() {
      //const {props} = this.props;
      //const {children} = this.props;
      //return <Wrapped {...{...props, ...propsHOC}}/>

      return <Wrapped {...propsHOC} />
    }
  }

};
