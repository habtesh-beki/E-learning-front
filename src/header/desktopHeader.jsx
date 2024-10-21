import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function DesktopHeader(){

  function handleremove(){
    localStorage.removeItem('selectedCourse')
  }
    return (
        <div className='hidden md:block'> 
               <div >
              <div className='md:flex justify-between items-center m-4 border-b pb-2'>
            <div className='flex gap-3'>
              <Link to="/" className='ml-10 text-xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold' onClick={handleremove}>BekiSen</Link>
               {/* <h3 className='text-lg cursor-pointer'>Categories</h3>  */}
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="border w-3/5 border-gray-300 px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className='flex gap-4 items-center'>
              <FontAwesomeIcon icon={faCartShopping} aria-label="Cart" className='cursor-pointer text-xl'/>
              <Link to={'/login'} className="px-4 py-2 border border-black text-black bg-white rounded hover:bg-blue-600 hover:text-white">LogIn</Link>
              <Link to="/signup" className="px-4 py-2 bg-black text-white rounded hover:bg-green-600">Sign Up</Link>
            </div>
          </div>
         </div>
        </div>
    )
}