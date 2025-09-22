import React from 'react';
import logo from '../assets/images/portfolio logo.svg';
import { useLocation, Link } from 'react-router-dom'; // Add Link

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const pageTheme = {
        bgColor: currentPath === '/designs' ? 'bg-des-white' : 'bg-dev-black',
        textColor: currentPath === '/designs' ? 'text-des-black' : 'text-dev-white',
        logoColor: currentPath === '/designs' ? '#0D0D0D' : '#EBEBEB',
    }

    return (
        <nav className={`w-full   ${pageTheme.bgColor} flex justify-center z-50 relative`}>
        <div className='h-[3rem] w-full max-w-[1440px] flex justify-between items-center px-[30px] py-[7px] '>
            <Link to="/">
                <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" className='h-7 w-7'>
                    <path opacity="0.98" fill-rule="evenodd" clip-rule="evenodd" d="M6.11753 12.9962C3.34229 12.9583 1.0646 12.9213 1.05601 12.9138C1.0472 12.9063 1.08792 10.302 1.14601 7.12642C1.20409 3.95086 1.25226 1.14291 1.25304 0.886545L1.25481 0.420424L5.91678 0.467798C8.48086 0.493856 10.8054 0.534644 11.0824 0.558428L11.586 0.601671L11.529 4.3411C11.4001 12.7885 11.3924 13.0509 11.2735 13.0582C11.2132 13.0619 8.89278 13.034 6.11753 12.9962Z" fill={pageTheme.logoColor} />
                    <path opacity="0.98" fill-rule="evenodd" clip-rule="evenodd" d="M30.9551 37.1415C28.1655 37.1102 25.8756 37.0745 25.8666 37.0621C24.3548 34.9886 13.2237 19.3962 13.2186 19.3449C13.2142 19.3033 15.6786 15.0817 18.6945 9.96357L24.178 0.657917L28.7498 0.667219C31.2642 0.672369 33.6758 0.697022 34.1089 0.722066L34.8964 0.767605L29.1416 9.98185C25.9765 15.0497 23.3863 19.2454 23.3856 19.3058C23.3848 19.3661 26.5992 23.4084 30.5285 28.2885C34.4578 33.1687 37.6727 37.1753 37.6727 37.192C37.6727 37.2087 37.3025 37.2169 36.85 37.2103C36.3975 37.2039 33.7448 37.1728 30.9551 37.1415Z" fill={pageTheme.logoColor} />
                    <path opacity="0.98" fill-rule="evenodd" clip-rule="evenodd" d="M0.862585 35.6473C0.835086 34.7295 0.837992 33.9574 0.868751 33.9314C0.899775 33.9054 1.18842 33.8252 1.51019 33.7532C3.09617 33.3983 4.2565 32.9004 4.88676 32.3044C5.61385 31.6167 5.87865 30.7922 5.97825 28.9058L6.02831 27.9579L5.63404 27.9105C5.4172 27.8845 4.25079 27.8629 3.04201 27.8626L0.844241 27.8619L0.866983 25.2841C0.879498 23.8663 0.909817 21.903 0.934319 20.9212L0.978914 19.1362L6.09784 19.1807C8.91324 19.2052 11.2212 19.2352 11.2266 19.2473C11.2319 19.2594 11.2165 21.5893 11.192 24.4249C11.1449 29.8861 11.129 30.1504 10.763 31.584C10.0662 34.3131 8.28347 35.9292 5.07175 36.7434C4.12128 36.9843 2.6869 37.2068 1.68668 37.2684L0.912432 37.3161L0.862585 35.6473Z" fill={pageTheme.logoColor} />
                </svg>
            </Link>
            <div className={`flex gap-7  ${pageTheme.textColor}`}>
                <Link className='font-des-font2' to="/designs">
                    Designs
                </Link>
                <Link className='font-dev-font2' to="/developments">
                    Developments
                </Link>
            </div>
        </div>
        </nav>
    )
}

export default Navbar