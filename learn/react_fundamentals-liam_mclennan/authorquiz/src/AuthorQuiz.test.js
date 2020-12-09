import { render, screen } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';
import React from 'react';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  // render(<AuthorQuiz/>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

describe("Author Quiz", ()=>{
  it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz/>,div);
  })
})
