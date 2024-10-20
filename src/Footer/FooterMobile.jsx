import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows , faDocker,faDribbble,faStripe} from '@fortawesome/free-brands-svg-icons';

export default function FooterMobile(){
    return (
    <div className='block md:hidden bg-bg_focus'>
         <div className='flex flex-col justify-between border-b pt-6 pb-6 pl-4 pr-4'>
          <span className='text-sm text-bg_btn'>Top companies choose Udemy Business to build in-demand career skills.</span>
          <div className='text-2xl text-bg_btn flex gap-10 mt-4'>
            <FontAwesomeIcon  icon={faWindows}/>
              <FontAwesomeIcon  icon={faDocker}/>
              <FontAwesomeIcon  icon={faDribbble}/>
              <FontAwesomeIcon  icon={faStripe}/>
          </div>
         </div>
         <div className='flex flex-col text-white  justify-center justify-evenly mt-6'>
        <ul className="text-sm ml-6">
         <li className='outline-none'>Bekisen Business</li>
        <li className='outline-none'>BekiSen Tech</li>
        <li className='outline-none'>About us</li>
        <li className='outline-none'>Contact us</li>
        <li className='outline-none'>Careers</li> 
        <li className='outline-none'>Blog</li>
        <li className='outline-none'>Help and Support</li>
        <li className='outline-none'>Investors</li>
        <li className='outline-none'>Terms</li>
        <li className='outline-none'>Privacy Policy</li> 
        </ul>
     </div>
     <div className='flex justify-between mt-10 text-white p-2 items-center'>
        <span className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold'>Bekisen</span>
        <span className='text-sm'>&copy; 2024 Bekisen Inc.</span>
     </div>
    </div>
    )
}