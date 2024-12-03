import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Footer() {

    const contacts = {
        email: 'boxmail@gmail.com',
        phone: '0998004876'
    }

    return(
        
        <footer className="bg-white rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Resume</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <p className='p-4'>{contacts.email}</p>
                        </li>
                        <li>
                            <p >{contacts.phone}</p>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Resume™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer