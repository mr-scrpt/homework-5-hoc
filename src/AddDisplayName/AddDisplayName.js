import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (Wrapper) => {

  return class extends Component{

    static displayName =  `HOC${Wrapper.displayName || 'Component'}`;

    render() {
      const {children, ...props} = this.props;
      return(
        <Wrapper {...props}>
          {children}
        </Wrapper>
        )

    }
  }
};
