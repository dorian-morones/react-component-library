import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('UI Button', () => {
  const renderComponent = () => render(<Button text='UI Component' />);

  it("Button Render", () => {
    const { getByTestId } = renderComponent();
    const testComponent = getByTestId('button_test');
    
    expect(testComponent).toHaveClass('ui_button')
  })
})