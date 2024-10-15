import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function MobileHeader(){
    return (
        <div className='block md:hidden'>
        <div className=' flex justify-between items-center m-4 border-b pb-2'>
        <FontAwesomeIcon icon={faBars} aria-label="Menu" />
        <h2 className='text-xl font-bold cursor-pointer'>BekiSen</h2>
        <div className='flex gap-4'>
          <FontAwesomeIcon icon={faMagnifyingGlass} aria-label="Search" />
          <FontAwesomeIcon icon={faCartShopping} aria-label="Cart" />
        </div>
      </div>
      <div className='w-full'>
       <div className='relative bg-bg_photo h-44'>
        <div className='clip-background absolute right-0 h-44 w-2/4 '> </div>
        <img src="./images/photo.png" alt="logo photo" className='h-44 pl-20 absolute left-6'/>
       </div>
       <div className='ml-4'>
         <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold ' >Sale ends today</h1>
         <p>Get highly rated courses for as little as $11.99.</p>
       </div>
      </div>
     </div>
    )
}