import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor, cleanup, fireEvent, waitForElement} from '@testing-library/react';
import Overview from '../client/src/components/OverviewComponents/Overview.jsx';
import MainPhoto from '../client/src/components/OverviewComponents/MainPhoto.jsx';


describe('QAIndex', () => {
  afterEach(cleanup);
  const user = userEvent.setup()

  // it ('snap shots tests for Overview ', () => {

  //   const { container } = render(<Overview produnctID={1} />);

  //   expect(container).toMatchSnapshot();
  // })

  it ('snap shots tests for Checkout ', () => {

    const { container } = render(<MainPhoto styleEntry= {{produnctID: 37311, photoNumber:1, setPhotoNumber: null, styleNumber: 0}}/>);

    expect(container).toMatchSnapshot();
  })



  // it('renders QA head', () => {
  //   render(<QAIndex />);
  //   const head = screen.getByTestId('todo-1');

  //   // console.log("the actual head i got :",head)
  //   expect(head).toHaveTextContent('QUESTIONS & ANSWERS');
  // });




})