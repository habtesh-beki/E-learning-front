import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Fuse from 'fuse.js';
import { useNavigate } from "react-router-dom";

export default function CourseSearch() {
  const [loading, setLoading] = useState(true);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [searchParams] = useSearchParams(); 
  

  const searchTerm = searchParams.get('query') || ''; 

  useEffect(() => {
    fetch('/data/CoursesWeb.json')
      .then(response => response.json())
      .then(data => {
        setAllCourses(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const fuse = new Fuse(allCourses, {
        keys: ['title', 'instructor', 'desc' , 'field'],
        threshold: 0.3,
      });

      const results = fuse.search(searchTerm);
      setFilteredCourses(results.map(result => result.item));
    } else {
      setFilteredCourses(allCourses); 
    }
  }, [searchTerm, allCourses]); 

  return (
    <div className="min-h-screen h-auto w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredCourses.map((cour) => <Search key={cour.id} cour={cour} />)
      )}
    </div>
  );
}



function Search({ cour }) {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('selectedCourse', JSON.stringify({
      id:cour.id,
      img: cour.img,
      title: cour.title,
      instructor: cour.instructor
    }))
    navigate('/tutorial')
  }

  return (
    <div className="flex  flex-col m-10 items-center" >
      <div className="flex gap-4 border w-7/12 cursor-pointer hover:border-black" onClick={handleClick}>
        <img className="w-48 h-48" src={cour.img} alt={cour.title} />
        <div>
          <div className="text-xl mb-2">{cour.title}</div>
          <p className="w-9/12 text-sm">{cour.desc}</p>
          <div className="flex justify-between mt-3">
            <p>{cour.instructor}</p>
            <p className="mr-10">{cour.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


