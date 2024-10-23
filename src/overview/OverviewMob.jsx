export default function OverviewMob(){
    return (
        <div className='block md:hidden w-full'>
       <div className='relative bg-bg_photo h-44'>
        <div className='clip-background absolute right-0 h-44 w-2/4 '> </div>
        <img src="./images/photo.png" alt="logo photo" className='h-44 pl-20 absolute left-6'/>
       </div>
       <div className='ml-4'>
         <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold ' >Sale ends today</h1>
         <p>Get highly rated courses for as little as $11.99.</p>
       </div>
      </div>
    )
}