import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './navbar';

function renderComponent() {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
}

describe('navbar.tsx', () => {
  it('should render a header with fixed position', () => {
    renderComponent();

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('fixed');
  });

  it('should show page title on navbar', () => {
    renderComponent();

    const pageTitle = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent('Altimetrik');
  });

  it('should show nav with one list and two links', () => {
    renderComponent();

    const nav = screen.getByRole('navigation');
    const list = screen.getByRole('li');
    const links = screen.getAllByRole('StyledNavLink');

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(links).toHaveLength(2);
  });

  it('should render a home link', () => {
    renderComponent();
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should render a learn more link', () => {
    renderComponent();
    const learnMoreLink = screen.getByRole('link', { name: /filter/i });
    expect(learnMoreLink).toHaveAttribute('href', '/filter');
  });
});
