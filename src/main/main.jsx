import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple,faStackOverflow ,faPaypal,faWindows , faDocker,faDribbble,faStripe,faWordpress,faDiscord} from '@fortawesome/free-brands-svg-icons';
const coursesType = [
  {
    type:'Web Development',
    nich:'Web development'
  },
  {
    type:'Leadership',
  },
  {
    type:'Data Scince',
  },
  {
    type:'Communication',
  },
  {
    type:'Business Analaytics & intelligence',
  },
  {
    type:'Disgen',
  },
]

const webNich = [
  {
    type:'Web Development',
    learner:'10M+ learner'
  },
  {
    type:'JavaScript',
    learner:'12M+ learner'
  },
  {
    type:'ReactJS',
    learner:'10M+ learner'
  },
  {
    type:'Ios Development',
    learner:'10M+ leaner'
  },
  {
    type:'Java',
    learner:'10M+ learner'
  },
  {
    type:'Android development',
    learner:'10M+ learner'
  },
  {
    type:'CSS',
    learner:'10M+ learner'
  },
]

const mostPopular = [
  {
    title:'Angular tutorial from scrach',
    img:'/images/courseImg/Angular1.jpg',
    price:'$120',
    instructor:'Tomas devid',
    desc:'Angular is a comprehensive JavaScript framework for building complex, enterprise-level web applications. In this course, you will learn the essentials of Angular, including components, services, routing, and data binding, to develop scalable and maintainable apps'
  },
  { 
    title:'JavaScript zero to hero',
    img:'/images/courseImg/Javascript.jpg',
    price:'$130',
    instructor:'jonas miki',
    desc:'JavaScript is the language of the web, used to make web pages interactive. This course covers the basics of JavaScript, including variables, functions, DOM manipulation, and events, to create dynamic and responsive websites.'
  },
  {
    title:'pyton crush crouse from zero to hero',
    img:'/images/courseImg/python1.webp',
    price:'$100',
    instructor:'Mosh hamidani',
    desc:'Python is a beginner-friendly programming language known for its simplicity and versatility. In this course, you will learn the fundamentals of Python, including variables, data types, loops, and functions, and how to use Python to solve realworld problems'
  },
  {
    title:'ultimate react course',
    img:'/images/courseImg/reactjs1.jpg',
    price:'$90',
    instructor:'jonas',
    desc:'ReactJS is a powerful JavaScript library for building user interfaces, particularly for single-page applications. This course introduces React fundamentals like components, state, and props, allowing you to build dynamic, scalable web applications'
  },
]

const Courses = [
  {
    title:'Angular tutorial from scrach',
    img:'/images/courseImg/Angular1.jpg',
    price:'$120',
    instructor:'Tomas devid',
    desc:'Angular is a comprehensive JavaScript framework for building complex, enterprise-level web applications. In this course, you will learn the essentials of Angular, including components, services, routing, and data binding, to develop scalable and maintainable apps'
  },
  { 
    title:'JavaScript zero to hero',
    img:'/images/courseImg/Javascript.jpg',
    price:'$130',
    instructor:'jonas miki',
    desc:'JavaScript is the language of the web, used to make web pages interactive. This course covers the basics of JavaScript, including variables, functions, DOM manipulation, and events, to create dynamic and responsive websites.'
  },
  {
    title:'pyton crush crouse from zero to hero',
    img:'/images/courseImg/python1.webp',
    price:'$100',
    instructor:'Mosh hamidani',
    desc:'Python is a beginner-friendly programming language known for its simplicity and versatility. In this course, you will learn the fundamentals of Python, including variables, data types, loops, and functions, and how to use Python to solve realworld problems'
  },
  {
    title:'ultimate react course',
    img:'/images/courseImg/reactjs1.jpg',
    price:'$90',
    instructor:'jonas',
    desc:'ReactJS is a powerful JavaScript library for building user interfaces, particularly for single-page applications. This course introduces React fundamentals like components, state, and props, allowing you to build dynamic, scalable web applications'
  },
  {
    title:'The complete 2024 web development bootcamp',
    img:'/images/courseImg/webdev.jpg',
    price:'$140',
    instructor:'mikila ted',
    desc:'This course provides an overview of web development, covering both front-end and back-end technologies. You will learn how to build and deploy full-stack web applications, starting with HTML/CSS/JavaScript for the front-end and progressing to server-side programming and databases'
  },
  {
   title:'HTML and CSS from scrach',
   img:'/images/courseImg/html.png',
   price:'$70',
   instructor:'nikola',
   desc:'HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the building blocks of web design. In this course, you will learn how to structure web pages with HTML and style them beautifully with CSS to create modern, responsive websites'
  },
]
const comment = [
 { 
  comment:'Bekisen courses have helped me upskill in ways I never thought possible. The flexibility is unmatched!',
  name:'Sarah Collins',
  title:'CTO of BlueTech Solutions'
 },
{
  comment:'Thanks to Bekisen, I was able to master JavaScript in just a few months. Highly recommended!',
  name:'Michael Tanner',
  title:'Lead Developer at CodeCrafters Inc'
},
{
  comment:'The course quality on Bekisen is exceptional. It has changed the way I approach learning new skills.',
  name:'Emily Warren',
  title:'CEO of Horizon Industries'
},
{
  comment:'I found the instructors on Bekisn to be extremely knowledgeable and approachable. Its a game-changer!',
  name:'Robert Kingsley',
  title:'Founder of InnovateNow'
}
]


export default function Main(){
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
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
            {/* {courses.type.map((list) => <List list = {list} />)} */}
          </ul> 
          <ul className="flex gap-8 mt-4">
          {webNich.map((list) => <WebList list = {list}/>)}
          </ul>
          <div className="mt-6 gap-2">
            <Slider {...settings}>
            {Courses.map(course => <Course course = {course} />)}
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
        </main>
    )
}

function Comment({com}){
  return (
    <div className="border pl-4 pt-6">
      <div className="text-5xl">&#8220;</div>
      <span className="text-sm">{com.comment}</span>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

function PopularCourse({popcourse}){
  return (
    <div className="flex flex-col border h-80 rounded-lg m-2 cursor-pointer">
  <img src={popcourse.img} alt={popcourse.image} className="w-full h-40 rounded-t-lg"/>
 <span className="font-bold text-lg pl-4">{popcourse.title}</span>
 <span className="pl-4">{popcourse.instructor}</span>
 <span className="pl-4 font-bold">{popcourse.price}</span>
 </div> 
  )
}

function Course({course}){
 
  return (
    <div className="flex flex-col border h-80 rounded-lg m-2 cursor-pointer">
       <img src={course.img} alt={course.image} className="w-full h-40 rounded-t-lg"/>
      <span className="font-bold text-lg pl-4">{course.title}</span>
      <span className="pl-4">{course.instructor}</span>
      <span className="pl-4 font-bold">{course.price}</span>
    </div>  
  )
}

function WebList({list}){
  return (
    <li className="flex flex-col px-4 items-center rounded-2xl bg-bg_btn cursor-pointer">
    <span>{list.type}</span>
    <span>{list.learner}</span>
    </li>
  )
}