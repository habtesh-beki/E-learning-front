export default function Overview(){
    return (
        <div className='flex justify-center'>
        <div className='w-5/6 h-96 bg-gray-200 relative bg-bg_photo'>
          <div className='clip-background-des absolute right-0 h-96 w-2/4'> </div>
          <img src="./images/photo.png" alt="photo img" className='h-96 absolute right-36' />

          <div className='flex flex-col gap-4 absolute h-36 bg-white ml-12 mt-10 pt-10  shadow-lg w-2/4 items-center'>
             <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-4xl' >Learning that gets you</h1>
             <p>Skills for your present (and your future). Get started with us</p>
           </div>
        </div>
       </div>
    )
}