import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function DesktopHeader(){
    return (
        <div className='hidden md:block'> 
               <div >
              <div className='md:flex justify-between items-center m-4 border-b pb-2'>
            <div className='flex gap-3'>
               <h1 className='text-xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>BekiSen</h1>
               <h3 className='text-lg cursor-pointer'>Categories</h3> 
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="border w-3/5 border-gray-300 px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className='flex gap-4 items-center'>
              <FontAwesomeIcon icon={faCartShopping} aria-label="Cart" className='cursor-pointer text-xl'/>
              <button className="px-4 py-2 border border-black text-black bg-white rounded hover:bg-blue-600 hover:text-white">Log In</button>
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-green-600">Sign Up</button>
            </div>
          </div>
         </div>
         
         <div className='flex justify-center'>
        <div className='w-5/6 h-96 bg-gray-200 relative bg-bg_photo'>
          <div className='clip-background-des absolute right-0 h-96 w-2/4'> </div>
          <img src="./images/photo.png" alt="photo img" className='h-96 absolute right-36' />

          <div className='flex flex-col gap-4 absolute h-36 bg-white ml-12 mt-10  shadow-lg w-2/4 items-center'>
             <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-4xl' >Sale ends today</h1>
             <p>Get highly rated courses for as little as $11.99.</p>
           </div>
        </div>
       </div>
        </div>
    )
}