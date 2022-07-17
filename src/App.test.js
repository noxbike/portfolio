import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from './components/navigation/Navigation';

// test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
// });

test('should render an active class', async () => {
    const { container } = render(<Navigation />)
    const inactive = container.getElementsByClassName('Portfolio')
    fireEvent.click(inactive[0])
    expect(inactive[0]).toHaveClass('Portfolio active')
})