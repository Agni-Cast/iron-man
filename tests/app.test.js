import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import QAIndex from '../client/src/components/QAcomponents/QAIndex.jsx'

describe('Q&A session test', () => {

  it ('There should be Question & Answers as header', () => {
    render(<QAIndex/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
  });

})