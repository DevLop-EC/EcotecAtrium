import { Menu } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

const DropdownLink = ({ children, ...props }) => (
  <Menu.Item>
    {({ active }) => (
      <NavLink
        {...props}
        className={`w-full text-left block px-4 
      py-2 text-sm leading-5 text-gray-700 ${({ isActive }) =>
        isActive
          ? 'bg-gray-100'
          : ''} focus:outline-none transition duration-150 ease-in-out`}
      >
        {children}
      </NavLink>
    )}
  </Menu.Item>
);

export const DropdownButton = ({ children, ...props }) => (
  <Menu.Item>
    {({ active }) => (
      <li className="relative flex items-center pr-2">
        <ul
          dropdown-menu=""
          className="text-size-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer"
        >
          <li className="relative mb-2">
            <a
              className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
              href="#"
            >
              <div className="flex py-1">
                <div className="my-auto">
                  <img
                    src="../assets/img/team-2.jpg"
                    className="inline-flex items-center justify-center mr-4 text-white text-size-sm h-9 w-9 max-w-none rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="mb-1 font-normal leading-normal text-size-sm">
                    <span className="font-semibold">New message</span> from Laur
                  </h6>
                  <p className="mb-0 leading-tight text-size-xs text-slate-400">
                    <i className="mr-1 fa fa-clock" aria-hidden="true"></i>
                    13 minutes ago
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="relative">
            <a
              className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
              href="#"
            >
              <div className="flex py-1">
                <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-size-sm bg-gradient-slate h-9 w-9 rounded-xl">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 43 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>credit-card</title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-2169.000000, -745.000000)"
                        fill="#FFFFFF"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(453.000000, 454.000000)">
                            <path
                              className="color-background"
                              d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                              opacity="0.593633743"
                            ></path>
                            <path
                              className="color-background"
                              d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <button
                    className={`w-full gap-3 flex px-2 py-2 
        text-sm leading-2  text-gray-500 ${active ? 'bg-gray-100' : ''}
         focus:outline-none transition duration-150 ease-in-out`}
                    {...props}
                  >
                    {children}
                  </button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </li>
    )}
  </Menu.Item>
);

export default DropdownLink;
