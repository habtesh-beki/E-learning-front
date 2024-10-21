import { useState , useEffect } from "react"

export default function Tutorial(){
    const [courseData, setCourseData] = useState(null);
    const [videoList, setVideoList] = useState([]);
 
    useEffect(() => {
        const storedCourse = localStorage.getItem('selectedCourse');
        if (storedCourse) {
          const selectedCourse = JSON.parse(storedCourse);
    
          fetch('/data/CoursesWeb.json')
            .then((response) => response.json())
            .then((courses) => {
              
              const course = courses.find((c) => c.id === selectedCourse.id);

              if (course) {
                setCourseData(course);  
                setVideoList(course.videos); 
              }
            })
            .catch((error) => console.error('Error fetching courses:', error));
        }
      }, []);

      if (!courseData) {
        return <p>Loading...</p>;
      }

    return (
        <div className="flex flex-col bg-bg_btn h-auto w-full items-center p-10">
        <div className="w-3/4">
             <div className="flex gap-10">
           <div>
            <h1 className="text-xl">{courseData.title}</h1>
             <img src={courseData.img} alt={courseData.title} />
          </div>
          <div>
             <p className="text-xl">Instructor: {courseData.instructor}</p>
          <p>{courseData.desc}</p>
          </div>    
            </div>
         
         
    
          <h2 className="text-2xl font-bold text-center m-10 underline-offset-2">Video Tutorials</h2>
          <ul className="w-full grid grid-cols-3 ">
            {videoList.map((video, index) => (
                <video key={index}  className="w-80" controls>
                    <source src={video.url}/>
                </video>
            ))}
          </ul>
        </div>
           
        </div>
      );
}