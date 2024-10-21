import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faApple,faStackOverflow ,faPaypal,faWindows , faDocker,faStripe,faWordpress,faDiscord} from '@fortawesome/free-brands-svg-icons';
// const typeCorse = [
//     {
//         name:'Web Development',
//     },
//     {
//         name:'Leadership',
//     },
//     {
//         name:'Data Scince',
//     },
//     {
//         name:'Communication',
//     },
//     {
//         name:'Business Analaytics & intelligence',
//     },
//     {
//         name:'Disgn',
//     },
// ]
const typeCorse = [
  { name: 'Web Development' },
  { name: 'Leadership' },
  { name: 'Data Science' },
  { name: 'Communication' },
  { name: 'Business Analytics & Intelligence' },
  { name: 'Design' },
];


export default function MainMobile(){

  const [webNich , setWebNich] = useState([])
  const [mostPopular , setMostPopular] = useState([])
  const [Courses , setCourses] = useState([])
  const [comment , setComment] = useState([])

useEffect(() => {
  const fetchData = async () => {
 try{
  const [webNichData, mostPopularData , courseData , commentData] =await Promise.all([
    fetch('/data/webNich.json').then((response) => response.json()),
    fetch('/data/mostPopular.json').then((response) => response.json()),
    fetch('/data/Courses.json').then((response) => response.json()),
    fetch('/data/comment.json').then((response) => response.json())
  ])
   setWebNich(webNichData) 
   setMostPopular(mostPopularData)
   setCourses(courseData)
   setComment(commentData)
 }catch(error){
  console.error('Error fetching data:', error);
 }
  }
  fetchData()
},[])
    return (
        <div className="block md:hidden px-2">
            <div className='relative'>
                <input type="text" placeholder="What do you want to learn ?" className="outline-none border w-4/5 border-black px-2  py-2 ml-10 mt-16"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute bottom-3 right-7'/>
            </div>
            <div className='p-3 mt-10 border-b'>
            <h1 className="text-xl font-bold">All the skills you need in one place</h1>
            <h3>From critical skills to technical topics, Udemy supports your professional development</h3> 
            </div>
           <select className='outline-none'>{typeCorse.map((type) => <option>{type.name}</option>) }</select>
           <ul className="flex gap-6 mt-4 overflow-scroll no-scrollbar">
          {webNich.map((list) => <WebList list = {list} key={index}/>)}
          </ul>
          <div className="mt-6 gap-2 flex overflow-x-scroll no-scrollbar">
            {Courses.map(course => <Course course = {course} key={index}/>)}
          </div>
          <button className='border mt-4 w-4/5 py-2 ml-6 mb-8 border-black'>Show All Webdevelopment</button>
          <div className="flex flex-col items-center p-4 mt-16 mb-16">
            <h2 className="text-sm">Tursted by over 16,000 companies and milion of learner in the world</h2>
            <div className="grid grid-cols-4 text-2xl gap-12 mt-6 w-2/4">
              <FontAwesomeIcon icon={faApple}/>
              <FontAwesomeIcon  icon={faStackOverflow}/>
              <FontAwesomeIcon  icon={faPaypal}/>
              <FontAwesomeIcon  icon={faWindows}/>
              <FontAwesomeIcon  icon={faDocker}/>
              <FontAwesomeIcon  icon={faStripe}/>
              <FontAwesomeIcon  icon={faWordpress}/>
              <FontAwesomeIcon  icon={faDiscord}/>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl">Most Popular</h1>
            </div>
            <div className="flex mt-6 gap-2 overflow-x-scroll no-scrollbar">
            {mostPopular.map(popcourse => <PopularCourse popcourse = {popcourse} key={index}/>)}
          </div>
          </div>
          <div className="mt-10 mb-10">
            <div className="mb-4">
               <h1>See what others are achieving through learning</h1>
            </div>
           <div className="flex gap-4 overflow-x-scroll no-scrollbar">
          {comment.map(com => <Comment com = {com} key={index}/>)}
           </div>   
          </div>
        </div>
    )
}
function Comment({com}){
  return (
    <div className="border min-w-full pl-4 pt-6">
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
    <div className="flex flex-col min-w-full border h-72 rounded-lg m-2 cursor-pointer">
  <img src={popcourse.img} alt={popcourse.image} className="w-full h-40 rounded-t-lg"/>
 <span className="font-bold text-lg pl-4">{popcourse.title}</span>
 <span className="pl-4">{popcourse.instructor}</span>
 <span className="pl-4 font-bold">{popcourse.price}</span>
 </div> 
  )
}

function Course({course}){
   
    return (
      <div className="flex  flex-col min-w-full ml-2 mr-2 border  h-72  m-2 cursor-pointer">
         <img src={course.img} alt={course.image} className="w-full h-40 "/>
        <span className="font-bold text-lg pl-4">{course.title}</span>
        <span className="pl-4">{course.instructor}</span>
        <span className="pl-4 font-bold">{course.price}</span>

      </div>  
    )
  }

function WebList({list}){
    return (
      <li className="flex flex-col h-13 px-4  items-center rounded-2xl bg-bg_btn cursor-pointer whitespace-nowrap">
      <span>{list.type}</span>
      <span className='text-sm'>{list.learner}</span>
      </li>
    )
  }