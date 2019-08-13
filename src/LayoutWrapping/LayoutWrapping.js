import React, { Component } from 'react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = (...props) => {

  return (Wrapped) => {
    return class extends Component {
      render(){
        return <div style={{position: 'absolute'}}><Wrapped {...props}/></div>
      }
    }
}
};