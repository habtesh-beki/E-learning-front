import { useState , useEffect } from "react"

export default function Tutorial(){
   const [video , setVideo] = useState([])
   useEffect(() => {
    fetch('/data/tutorial.json')
    .then((response) => response.json())
    .then((data) => setVideo(data))
    .catch((error) => {
        console.error('error occured', error)
    })
   },[])
    return (
        <div className="flex flex-col bg-bg_btn h-auto w-full items-center pb-6 pt-10">
            <div className="flex w-2/4 gap-4">
                <div className="flex flex-col">
                <h1 className="text-3xl text-center">The Complete 2024 Web Development Bootcamp</h1>
                <h3 className="text-xl">Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</h3>
               </div>
               <div>
                <img src="/images/courseImg/webdev.jpg" alt="" className="w-80 h-48"/>
               </div>
            </div>
           
            <div>
               <div className="w-full m-10 grid grid-cols-3">
                {video.map((video) =><video className="w-80" controls>
                    <source src={video.video}/>
                </video> )}
                 </div>
            </div>
        </div>
    )
}