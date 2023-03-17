import { render } from '@testing-library/react';
import { Map } from 'components/Map';

describe('Map Component', () => {
  test('renders without crashing', () => {
    render(<Map />);

    expect(document.querySelector('.mapContainer')).toBeInTheDocument();
    expect(document.querySelector('iframe')).toBeInTheDocument();
  });
});
