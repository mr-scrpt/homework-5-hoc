import React, { Component } from 'react';
import {getLoggedInUser} from '../utils'

/*
  Манипуляция пропами

  Первый HOC который нужно написать - enchancer.
  
  Он будет принимать проп loading и в зависимости
  от его значения показывать прелоадер,
  или обёрнутый компонент
*/

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = (Wrapper) => {

  return class extends Component {

    render() {
      const {loading, children, ...props} = this.props;

      return loading ? 'Loading...'  : <Wrapper {...props}>{children}</Wrapper>


    }
  }
};

/*
  Следующий HOC - injector, его особенность в том,
  что он не даёт перезаписать проп, который передаёт
  в оборачиваемый компонент

  Нужно написать HOC, который передаст авторизованного
  пользователя через проп user

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/


export const addLoggedInUser = (Wrapper) => {

  return class extends Component {

    render() {
      const {children, ...props} = this.props;
      const user = getLoggedInUser();
      return <Wrapper {...props} user={user}>{children}</Wrapper>
    }

  }

};

/*
  Помимо добавления новых пропов можно модифицировать те,
  что уже были переданы в компонент

  Мы будем передавать во WrappedComponent список книг
  [{title: "Harry Potter", author: "J. K. Rowling"}, ...]

  Ваша задача написать HOC, который перехватит prop books,
  отсортирует по названиям по алфавиту
  и передаст в обёрнутый компонент
*/

export const withSort = (Wrapper) => {
  return class extends Component {

    render() {
      const {children, ...props} = this.props;
      const {books, ...other} = props;

     /* const sortBook = books.filter(item => {
        //{title: "Harry Potter", author: "J. K. Rowling"}
        return item[title].sort()

      });*/

      books.sort((a,b)=> a.title > b.title ? 1 : -1 );

      return <Wrapper {...other} books={books}>{children}</Wrapper>
    }
  }
}
