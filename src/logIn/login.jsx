
export default function LogIn(){
    return (
        <div className="flex bg-bg_btn h-screen w-full justify-center items-center">
            <div className=" flex justify-between items-center">
            <img src="/images/login.png" alt="loginphoto" className="h-3/4" />
            <form action="" className="flex flex-col gap-3 w-2/5 items-center">
                <h1 className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-center">Log in to continue your learning journey</h1>
                <input type="email" placeholder="Email..." className="h-12 border w-full pl-6 outline-none"/>
                 <input type="password" placeholder="password.." className="h-12 border w-full pl-6 outline-none"/>
                 <button className="border text-white hover:bg-bg_submith rounded-lg px-8 py-2 bg-bg_submit mt-8">LogIn</button>
                <button className="border text-white hover:bg-bg_googleh bg-bg_google px-6 py-3 rounded-lg">Contiue with google</button>
            </form>
          </div>
        </div>
       
        
    )
}