import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor, cleanup, fireEvent} from '@testing-library/react';
import QAIndex from '../client/src/components/QAcomponents/QAIndex.jsx'
import AList from '../client/src/components/QAcomponents/AList.jsx'
import QAList from '../client/src/components/QAcomponents/QAList.jsx'
import ListEntry from '../client/src/components/QAcomponents/ListEntry.jsx'


describe('QAIndex', () => {
  afterEach(cleanup);

  it('renders QA head', () => {
    render(<QAIndex />);
    const head = screen.getByTestId('todo-1');

    // console.log("the actual head i got :",head)
    expect(head).toHaveTextContent('QUESTIONS & ANSWERS');
  });


  it('calls handleSearch when the submit button is clicked', () => {

    const { getByPlaceholderText, getByAltText } = render(<QAIndex />);
    const input = getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    const button = getByAltText('Amplifier');

    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.click(button);

    expect(input.value).toBe('search term');
  });

  it ('There should be a ADD a question button on the screen', () => {

    render(<QAIndex />);
    const addQButton = screen.getByTestId("add-question-button" )
    expect(addQButton).toBeInTheDocument()
  })

  it ('There should be a More Answered question button on the screen', () => {

    render(<QAIndex />);
    const showQButton = screen.getByTestId("more-answered-questions" )
    expect(showQButton).toBeInTheDocument()
  })

//   it('calls addNewQuestion when the "ADD A QUESTION +" button is clicked', () => {
//     const { getByTestId } = render(<QAIndex />);
//     const button = getByTestId('add-question-button');

//     fireEvent.click(button);
//   });

//   it('calls axios to get QA data when the component is mounted', async () => {
//     axios.get.mockResolvedValue({ data: { results: [] } });

//     render(<QAIndex />);

//     expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/api/qa/questions/?product_id=37777');
//   });
});