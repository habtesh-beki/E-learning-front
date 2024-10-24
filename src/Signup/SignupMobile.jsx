export default function SignupMobile(){
    return (
        <form action="" className="flex flex-col gap-3 w-full items-center px-6 mt-10 mb-10">
            <h1 className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-center">Sign up and start learning</h1>
             <input type="text" placeholder="First name..." className="h-12 border w-full pl-6 outline-none"/>
             <input type="text" placeholder="last name..." className="h-12 border w-full pl-6 outline-none"/>
             <input type="email" placeholder="Email..." className="h-12 border w-full pl-6 outline-none"/>
             <input type="password" placeholder="password.." className="h-12 border w-full pl-6 outline-none"/>
             <input type="password" placeholder="confirem password.." className="h-12 border w-full pl-6 outline-none"/>
             <button className="border text-white hover:bg-bg_submith rounded-lg px-8 py-2 bg-bg_submit mt-8">Sign Up</button>
            <button className="border text-white hover:bg-bg_googleh bg-bg_google px-6 py-3 rounded-lg">Contiue with google</button>
        </form>
    )
}