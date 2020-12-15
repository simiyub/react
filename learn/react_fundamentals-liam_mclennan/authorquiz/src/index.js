import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import reportWebVitals from './reportWebVitals';
import {shuffle, sample} from 'underscore';
import {BrowserRouter, Route } from 'react-router-dom';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];

function getTurnData(authors){
  const allBooks = authors.reduce(function(p, c, i){
    return p.concat(c.books); 
  }, []);
  
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks); 
 
  return {
    books: fourRandomBooks, 
    author: authors.find((author) => 
    author.books.some((title) =>
    title === answer))    
  }
}
const state = {
  turnData:getTurnData(authors),
  highlight:'' 
}

function onAnswerSelected(answer){
  const correct = state.turnData.author.books.some((book)=> book === answer);
  state.highlight = correct ? 'correct' : 'wrong';
  render(); 
} 

function App(){
  return (<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>);
}

function AddAuthorForm({match}){
  return <div>
    <h1>
      Add Author
    </h1>
    <p>{JSON.stringify(match)} </p>

  </div>;
}

function render() {
ReactDOM.render(
  <BrowserRouter>
  <React.Fragment>
  <Route exact path="/" component={App}/>
  <Route path="/add"  component={AddAuthorForm }/>
  </React.Fragment>
  </BrowserRouter>,    
  document.getElementById('root')
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
render();
reportWebVitals();
