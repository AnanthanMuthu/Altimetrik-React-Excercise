/* eslint-disable global-require */
import { NavLink } from 'react-router-dom';

function StyledNavLink({ href, title }: { href: string; title: string }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? 'block rounded bg-blue-700 px-3 py-2 md:bg-transparent md:p-0 md:text-blue-700  md:dark:text-blue-500'
          : 'block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:bg-gray-700  md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
      }
    >
      {title}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <nav className="border-gray-200">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            Altimetrik
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse ">
            <li>
              <StyledNavLink href="/" title="Home" />
            </li>
            <li>
              <StyledNavLink href="/services" title="Services" />
            </li>
            <li>
              <StyledNavLink href="/filter" title="Gallery" />
            </li>
            <li>
              <StyledNavLink href="/contact-us" title="Contact Us" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
