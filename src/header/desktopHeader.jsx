import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export default function DesktopHeader(){
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchCourse = () => {
    localStorage.setItem('searchCourse', searchTerm); 
    navigate(`/searchCourse?query=${encodeURIComponent(searchTerm)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchCourse();
    }
  };

 function handleClickSearch(){
  handleSearchCourse()
  }

  function handleremove(){
    localStorage.removeItem('selectedCourse')
    localStorage.removeItem('searchCourse')
    searchTerm('')
  }

  
    return (
        <div className='hidden md:block'> 
               <div >
              <div className='md:flex justify-between items-center m-4 border-b pb-2'>
            <div className='flex gap-3'>
              <Link to="/" className='ml-10 text-xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold' onClick={handleremove}>BekiSen</Link>
              <FontAwesomeIcon className='text-xl absolute right-96 cursor-pointer top-7' onClick={handleClickSearch}  icon={faMagnifyingGlass}/>
            </div>
            <input
      type="text"
      placeholder="Search for courses..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleKeyDown} 
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