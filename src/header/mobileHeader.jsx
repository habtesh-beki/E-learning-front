import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars,faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function MobileHeader(){
  const [clickMenu , setClickMenu] = useState(false)

  function handleremove(){
    localStorage.removeItem('selectedCourse')
    localStorage.removeItem('searchCourse')
  }
  function handleClickManu(){
    setClickMenu(click => !click)
  }
    return (
        <div className='block md:hidden'>
        <div className=' flex justify-between items-center m-4 border-b pb-2 '>
        <FontAwesomeIcon icon={faBars} aria-label="Menu" onClick={handleClickManu}/>
        <div className={`flex transition-all flex-col absolute top-10  w-1/2 h-1/4 bg-black z-10  text-white ${clickMenu ? 'left-2': '-left-1/2'}`}>
          <div className='pl-4 mt-4'>Login or create account</div>
            <Link to='/loginmobile' onClick={handleClickManu} className='pl-3 mt-4 text-bg_submit text-lg'>Login</Link>
            <Link to='/signupmobile' onClick={handleClickManu} className='pl-3 text-bg_submit text-lg'>Signup</Link>
          </div>
        <Link to="/" className='ml-10 text-xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'
        onClick={handleremove}
        >BekiSen</Link>
        <div className='flex gap-4'>
          <FontAwesomeIcon icon={faCartShopping} aria-label="Cart" />
        </div>
      </div>
     </div>
    )
}