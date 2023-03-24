import React from 'react'
import {useState} from'react'

const Section = ({title , date , li1 ,li2 ,li3 }) => {
    const [isVisible, setIsVisible] = useState(false);
  return (
   
            <div className="w-[25rem]  hover:shadow-gray-800 p-6 mb-10 mr-6  rounded-lg shadow-md mt-9  text-blue font-bold  bg-lime-100 ">
             
                    <div className="justify-between w-1/2 mb-4 ">
                        <div class=" w-[30rem] text-[1rem]  text-red-700 ">{title}</div>
                        <div className="w-96 ml-4 mt-3 text-[1rem] text-black ">({date})</div>
                        {isVisible ? 
                            (  <button className='mt-3 ml-4 mr-2 text-sm font-bold text-red-700 underline w-44 ' onClick={()=> {setIsVisible(false)       
                            }}> Roles and Responsibilties</button>):
                        ( <button className='mt-3 ml-1 mr-2 text-sm font-bold text-red-700 underline rounded-lg w-60 ' onClick={()=>setIsVisible(true)}>View Roles and Responsibilties</button>)
                       }  
                       
                    </div>
                    { isVisible && 
                <ul class="mb-2 pt-1 pl-9 text-[.7rem] text-justify  list-disc">
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                </ul>  }
           
 
  
</div>
   
  )
}
const Experience = () => {
    
  return (
    <>
    
    <div className=' pl-20 mt-20 bg-blue-100 h-[33.5rem] pt-20 bg-gradient-to-r from-cyan-200 to-yellow-200 '>
    <h1 className='text-4xl font-bold text-purple-700 ml-72 px-44'>Professional Experience</h1>
    <div className='flex'>
    <Section title={"Front End Developer Intern | Property Vista "} 
    date={"September 2022 - December 2022"}
    
    li1={"Developed web applications using React for Property management Pages"}
    li2={"As the sole developer, indulged in requirement gathering, UX design discussions, development, deployment, and maintenance."}
    li3={"Involved in code reviews, unit/functional test case reviews, refactoring. Used Jest for mocking functions and writing unit tests for testing component coverage reports"}
    />
    <Section title={"Teaching Assistant | Wilfrid laurier University "} 
    date={"September 2021 - April 2022"}
    li1={"Working as an Instructional Assistant for the course UI and Datascience."}
    li2={"Assigned work includes doubt Solving in JavaScript/Python, helping students"}
    li3={"Involved in grading assignments and lab and other administrative tasks."}
     />
    <Section title={"Application Development Analyst | Accenture "} 
    date={"October 2018 - August 2021"}
    li1={"Worked on ES6 features for handling asynchronous data requests, Deep functional knowledge in building reusable components and libraries for future use and also have Good Understanding of Document Object Model (DOM)"}
    li2={"Oversaw all Agile methodologies and ceremonies - sprint planning, backlog reﬁnement. Used Jira for user story tracking processes and streamlining agile planning."}
    li3={"Involved designing web pages using HTML5, CSS3, JavaScript, Bootstrap, SASS, React.js, Redux, Router."}
    
    />
    </div>
    </div>
    </>
    )}

export default Experience