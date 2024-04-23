import { render } from '@testing-library/react';

import StoreManager from './store-manager';

describe('StoreManager', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreManager />);
    expect(baseElement).toBeTruthy();
  });
});
