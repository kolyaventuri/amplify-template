import React from 'react';
import test from 'ava';
import {render, screen} from '@testing-library/react';

import Home from '../../src/pages';

test('renders', (t) => {
  render(<Home />);

  t.not(screen.getByText('Amplify App'), null);
});
