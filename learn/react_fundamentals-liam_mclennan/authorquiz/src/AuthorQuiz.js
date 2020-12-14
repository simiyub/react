import logo from './logo.svg';
 import './App.css';
import './bootstrap.min.css';
import React from 'react';
import PropTypes from 'prop-types'
function Hero(){
  return (
  <div className="jumbotron col-10 offset-1">
    <h1>Author Quiz</h1>
    <p>Please select the book written by ther author shown< /p>

  </div>);
};

function Book({title, clickHandler}){
  return(
    <div className="answer" onClick={() =>{clickHandler(title)}}>
      <h4>{title}</h4>
    </div>
  
  );
}
function Turn ({author, books, highlight, onAnswerSelected }) {

  function highlightToBackgroundColor(highlight) {
    const mapping = {
      'none':'',
      'correct':'green',
      'wrong':'red'
    };
    return mapping[highlight];
  }


return (<div className="row turn" style={{ backgroundColor:highlightToBackgroundColor(highlight) }}>

  <div className="col-4 offset-1">
<img src={author.imageUrl} className="authorimage" alt="Author"/>
  </div>
  <div className="col-6">  
    {books.map((title) => <Book title={title} key={title} clickHandler = {onAnswerSelected}/>)}
    </div>

  </div>);

Turn.propTypes = {
  author: PropTypes.shapte({
    name:PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswereSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
}

};
function Continue() {
  return <div/>
};

function Footer(){
return (<div id="footer" className="row">
<div className="col-12 off-set-1">
  <p className="text-muted credit">
    All images from <a href="http://commons.wikimedia.org/wiki/Main"/>
  </p>
</div>
</div >);
}


function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid" >
      <Hero/>
      <Turn {...turnData} highlight={highlight} onAnswerSelected = {onAnswerSelected}/>
      <Continue/>
      <Footer/>
    </div>
  ); 
}  

export default AuthorQuiz;
