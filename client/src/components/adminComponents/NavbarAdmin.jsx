// import { useEffect, useState } from 'react';
// import DarkModeButton from './darkModeButton/DarkModeButton';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import AdminPanelNavbar from './AdminPanelNavBar/AdminPanelNavbar';
// import { Link } from 'react-router-dom';

// const NavbarAdmin = () => {
//   const [activeMobileMenu, setActiveMobileMenu] = useState(false);
//   useEffect(() => {
//     document.body.style.overflow = 'auto';
//   }, []);
//   return (
//     <nav className='bg-white -mt-1'>
//       <div className='fixed w-full z-20 bg-white'>
//         <div className='flex justify-between p-4 items-center dark:bg-gray-900 dark:text-white bg-white relative'>
//           <div
//             className='block w-full '
//             onClick={() => {
//               setActiveMobileMenu(!activeMobileMenu);
//             }}
//           >
//             <GiHamburgerMenu className='cursor-pointer h-12 w-12' />
//           </div>

//           <div className='w-full  justify-center flex'>
//             <Link to='/' className='uppercase cursor-pointer font-bold '>
//               Inicio
//             </Link>
//           </div>
//           <div className='w-full  flex justify-end'>
//             <DarkModeButton />
//           </div>
//         </div>
//         <div className='relative'>
//           <section
//             className={`h-screen w-screen absolute top-0 -translate-x-full ${
//               activeMobileMenu && 'translate-x-0'
//             } transition-all z-40`}
//             onClick={(e) => {
//               const navbarElement = document.querySelector(
//                 '.admin-panel-navbar'
//               ); // Ejemplo de selector
//               if (
//                 e.target === navbarElement ||
//                 navbarElement.contains(e.target)
//               ) {
//                 e.stopPropagation();
//               } else {
//                 setActiveMobileMenu(false);
//               }
//             }}
//           >
//             <AdminPanelNavbar setActiveMobileMenu={setActiveMobileMenu} />
//           </section>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarAdmin;
import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';
import { useContext, createContext, useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarContext = createContext();

const NavbarAdmin = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <aside className={`h-screen fixed z-40 ${expanded ? 'w-fit' : 'w-fit'}`}>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
          <div className='p-4 pb-2 flex justify-between items-center'>
            <Link to='/'>
              <img
                src='https://img.logoipsum.com/243.svg'
                className={`overflow-hidden transition-all ${
                  expanded ? 'w-32' : 'w-0 hidden'
                }`}
                alt=''
              />
            </Link>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className='flex-1 px-3'>{children}</ul>
          </SidebarContext.Provider>

          <div className='border-t flex p-3'>
            <img
              src='https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true'
              alt=''
              className='w-10 h-10 rounded-md'
            />
            <div
              className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}
            >
              <div className='leading-4'>
                <h4 className='font-semibold'>John Doe</h4>
                <span className='text-xs text-gray-600'>johndoe@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
      {expanded && (
        <div
          className='bg-custom_transparent fixed top-0 h-screen w-screen z-20'
          onClick={() => setExpanded(false)}
        ></div>
      )}
    </div>
  );
};

export function SideBarItem({ icon, text, active, url }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center my-1
        font-medium rounded-md cursor-pointer
        transition-colors group 
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }
    `}
    >
      <Link
        to={url}
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group 
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }
    `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all capitalize ${
            expanded ? 'w-52 ml-3' : 'w-0'
          }`}
        >
          {text}
        </span>

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 capitalize
      `}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  );
}

export default NavbarAdmin;
