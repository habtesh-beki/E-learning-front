import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
          <button className="border font-bold p-3 ml-2 border-black mt-3">Show All Web Development Course</button>
        </div>    
        </div>
        </main>
    )
}

function Course({course}){
 
  return (
    <div className="flex flex-col border h-80 rounded-lg m-2">
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