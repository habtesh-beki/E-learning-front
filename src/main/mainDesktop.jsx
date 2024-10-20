import { useState , useEffect } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple,faStackOverflow ,faPaypal,faWindows , faDocker,faDribbble,faStripe,faWordpress,faDiscord} from '@fortawesome/free-brands-svg-icons';
import Overview from "../overview/Overview";
 
export default function MainDesktop(){
  const [clickField , setClickField] = useState(0)
  const [selectedField , setSelectedField] = useState('Web Development')
  const [webNich , setWebNich] = useState([])
  const [mostPopular , setMostPopular] = useState([])
  const [CoursesWeb , setCoursesWeb] = useState([])
  const [comment , setComment] = useState([])

  const courses = [
    'Web Development',
    'Leadership',
    'Data Science',
    'Communication',
    // 'Business Analytics & Intelligence',
    'Design'
  ];

  const filteredWebNich = selectedField 
  ? webNich.filter((list) => list.nich === selectedField)
  : webNich; 
 
  const filteredCourse = selectedField
  ? CoursesWeb.filter((list) => list.field === selectedField)
  : CoursesWeb;

useEffect(() => {
  const fetchData = async () => {
 try{
  const [webNichData, mostPopularData , courseWebData , commentData] =await Promise.all([
    fetch('/data/webNich.json').then((response) => response.json()),
    fetch('/data/mostPopular.json').then((response) => response.json()),
    fetch('/data/CoursesWeb.json').then((response) => response.json()),
    fetch('/data/comment.json').then((response) => response.json())
  ])
   setWebNich(webNichData) 
   setMostPopular(mostPopularData)
   setCoursesWeb(courseWebData)
   setComment(commentData)
 }catch(error){
  console.error('Error fetching data:', error);
 }
  }
  fetchData()
},[])


function handleclickField(index,course){
  setClickField(index)
  setSelectedField(course)
}
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return (
      <>
      <Overview />
       <div className="hidden md:flex justify-center">
           <div className=" w-5/6 relative">
          <div className="pt-10 pl-10">
           <h1 className="text-3xl font-bold">All the skills you need in one place</h1>
           <h3>From critical skills to technical topics, Udemy supports your professional development</h3>    
          </div> 

      <ul className="course-list flex gap-5 cursor-pointer mt-12 font-bold text-color_text border-b pb-3">
        {courses.map((course, index) => (
        <li
         
          key={index}
          onClick={() => handleclickField(index,course)} 
          className={`${
            clickField === index ? 'text-black' : 'text-color_text'
          }`} 
        >
          {course}
         </li>
         ))}
        </ul>
          <ul className="flex gap-8 mt-4 ">
            {/* webNich */}
          {filteredWebNich.map((list) => <WebList list = {list}/>)}
          </ul>
          <div className="mt-6 gap-2 ">
            <Slider {...settings}>
            {filteredCourse.map(course => <Course course = {course} />)}
            </Slider>
          </div>
          <button className="border font-bold p-3 ml-2 border-black mt-8 hover:bg-bg_btn">Show All Web Development Course</button>
          <div className="flex flex-col items-center mt-16 mb-16">
            <h2 className="text-xl">Tursted by over 16,000 companies and milion of learner in the world</h2>
            <div className="flex text-5xl gap-20 mt-6">
              <FontAwesomeIcon icon={faApple}/>
              <FontAwesomeIcon  icon={faStackOverflow}/>
              <FontAwesomeIcon  icon={faPaypal}/>
              <FontAwesomeIcon  icon={faWindows}/>
              <FontAwesomeIcon  icon={faDocker}/>
              <FontAwesomeIcon  icon={faDribbble}/>
              <FontAwesomeIcon  icon={faStripe}/>
              <FontAwesomeIcon  icon={faWordpress}/>
              <FontAwesomeIcon  icon={faDiscord}/>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl">Most Popular</h1>
            </div>
            <div className="mt-6 gap-2">
            <Slider {...settings}>
            {mostPopular.map(popcourse => <PopularCourse popcourse = {popcourse} />)}
            </Slider>
          </div>
          </div>
          <div className="mt-10 mb-10">
            <div className="mb-4">
               <h1>See what others are achieving through learning</h1>
            </div>
           <div className="flex gap-4">
          {comment.map(com => <Comment com = {com} />)}
           </div>   
          </div>
        </div>    
        </div>
      </>
       
    )
}

function Comment({com}){
    return (
      <div className="border pl-4 pt-6">
        <div className="text-5xl">&#8220;</div>
        <span className="text-sm">{com.comment}</span>
        <div className="flex mt-10 mb-8">
          <img src={com.img} alt={com.img} className="w-10 h-10 rounded-full mr-3"/>
          <div className="flex flex-col">
            <span>{com.name}</span>
            <span className="text-xs">{com.title}</span>
          </div>
        </div>
      </div>
    )
  }
  
  function PopularCourse({popcourse}){
    return (
      <div className="flex flex-col border h-80 rounded-lg m-2 cursor-pointer gap-2">
    <img src={popcourse.img} alt={popcourse.image} className="w-full h-40 rounded-t-lg"/>
   <span className="font-bold text-sm pl-4">{popcourse.title}</span>
   <span className="text-sm pl-4">{popcourse.instructor}</span>
   <span className="pl-4 font-bold">{popcourse.price}</span>
   </div> 
    )
  }
  
  function Course({course}){
    return (
      <div className="flex flex-col border h-80 rounded-lg m-2 cursor-pointer gap-2">
         <img src={course.img} alt={course.image} className="w-full h-40 rounded-t-lg"/>
        <span className="font-bold text-sm mt-3 pl-4">{course.title}</span>
        <span className="text-sm pl-4">{course.instructor}</span>
        <span className="text-sm pl-4 font-bold">{course.price}</span>
      </div>  
    )
  }
  

  function WebList({list}){
    return (
      <li className="flex flex-col px-4 items-center rounded-2xl bg-bg_btn cursor-pointer ">
      <span>{list.type}</span>
      <span>{list.learner}</span>
      </li>
    )
  }