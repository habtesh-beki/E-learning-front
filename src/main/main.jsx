export default function Main(){
    return (
        <main >
        <div className="hidden md:flex justify-center">
           <div className=" w-5/6 relative">
          <div className="pt-10 pl-10">
           <h1 className="text-3xl font-bold">All the skills you need in one place</h1>
           <h3>From critical skills to technical topics, Udemy supports your professional development</h3>    
          </div> 

          <ul className="course-list flex gap-5 cursor-pointer mt-12 font-bold text-color_text border-b pb-3">
            <li className="active">Web Development</li>
            <li>Leadership</li>
            <li>Data Scince</li>
            <li>Communication</li>
            <li>Business Analaytics & intelligence</li>
            <li>Disgen</li>
          </ul> 
        </div>    
        </div>
         
        </main>
    )
}