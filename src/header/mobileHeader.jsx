import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars,faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function MobileHeader(){

  function handleremove(){
    localStorage.removeItem('selectedCourse')
    localStorage.removeItem('searchCourse')
  }
    return (
        <div className='block md:hidden'>
        <div className=' flex justify-between items-center m-4 border-b pb-2'>
        <FontAwesomeIcon icon={faBars} aria-label="Menu" />
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