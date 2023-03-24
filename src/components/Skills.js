import React from 'react'

const Skill = ({source, alt, title}) => {
  return (
    
       <img className='w-20 p-5 ml-3 lg:w-24 lg:ml-20 hover:animate-pulse ' src={source} alt={alt} title={title}/>

   
  )
}
const Skills =()=> {
  return (
      <div className="h-[44rem]   bg-gradient-to-r from-cyan-200 to-yellow-200">
             

             <h1 className='p-3 mt-20 text-xl font-bold text-center md:text-xl lg:text-3xl pt-28 lg:mt-3 hover:animate-pulse'><span className='text-orange-600'>SkillSet</span></h1>
             
          <div className="grid items-center grid-cols-4 gap-1">
           
              <Skill   source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for Js" title="Java Script"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
              <Skill source="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="The logo icon for Redux" title="Redux"/>
              <Skill source="https://miro.medium.com/max/768/1*0j4xd4B_o-jxiaM9QYqgWw.png" alt="The logo icon for Hooks" title="Hooks"/>
              <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
          
           
           <Skill  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="The logo icon for AWS" title="AWS"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt="The logo icon for Babel " title="Babel"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg" alt="The logo icon for bitbucket" title="bitbucket"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg" alt="The logo icon for Confluence" title="Confluence "/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="The logo icon for Firebase" title="Firebase"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
           <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="The logo icon for Mango DB" title="mango Db"/>
       </div>            
      </div>
  )
}

    
    // <div className='flex h-screen mt-5 bg-gradient-to-r from-green-200 to-blue-200 hover:from-pink-200 hover:to-yellow-200'>
    //   <h1 className='items-center font-bold capitalize'>Professional Skills</h1>
    //   <img className='ml-8 bg-white rounded-full mt-44 h-14 ' alt="github" 
    //         src="https://freeiconshop.com/wp-content/uploads/edd/html-flat.png"/>
    //         <img className='ml-8 bg-white rounded-full mt-44 h-14 ' alt="github" 
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRthCq3mPuMJKkDSx0JMU69vY6yTsHL1B2h1eHIepPxoiqcjvS-eKCxal8Frjes04MCiU&usqp=CAU"/>
    //         <img className='ml-8 bg-white rounded-full mt-44 h-14 ' alt="github" 
    //         src="https://www.chevtek.io/content/images/2021/02/ezgif.com-gif-maker.png"/>
    //          <img className='ml-8 bg-white rounded-full mt-44 h-14 ' alt="github" 
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtHHUcKFgsB-spAXxKx5Wg3OWcvmNqw5cew&usqp=CAU
    //         "/>
    //          <img className='ml-8 bg-white rounded-full mt-44 h-14 ' alt="github" 
    //         src="https://www.chevtek.io/content/images/2021/02/ezgif.com-gif-maker.png"/>
            
           
    //   </div>
      
  //       <img className='h-20 ml-10 rounded-full hover:animate-spin mt-44 bg-slate-500'
  //       alt="skills"
  //       src="https://www.seekpng.com/png/detail/969-9690881_honestly-priced-skills-icon-without-background.png" />
  //       <div className='p-20 ml-2 hover:animate-bounce mt-36 h-96 hover:shadow-2xl'>
  //           <h1 className='mb-3 text-2xl font-bold '>Languages</h1>
  //           <ul className="text-xl rounded-full text-violet-700 ">
  //                   <li>Html</li>
  //                   <li>CSS</li>
  //                   <li>Sass</li>
  //                   <li>JavaScript</li>
  //                   <li>Java</li>
  //                </ul>
  //       </div>
  //       <div className='p-20 ml-8 hover:animate-bounce mt-36 h-96 hover:shadow-2xl'>
  //       <h1 className='mb-3 text-2xl font-bold '>Technologies</h1>
  //               <ul className="text-xl rounded-full text-violet-700 ">
  //                   <li >React</li>
  //                   <li>ES6</li>
  //                   <li >Typescript</li>
  //                   <li >Node js</li>
  //                   <li>Tailwind css</li>
  //                   <li>Redux</li>
  //                   <li>Jest</li>
  //                   <li>React Router</li>
  //                   <li>React Hooks</li>

  //                </ul>
  //       </div>
  //       <div className='p-20 ml-8 hover:animate-bounce mt-36 h-96 hover:shadow-2xl'>
  //       <h1 className='mb-3 text-2xl font-bold '>Platform</h1>
  //               <ul className="text-xl rounded-full text-violet-700 ">
  //                   <li >Git</li>
  //                   <li >Bitbucket</li>
  //                   <li>Webpack</li>
  //                   <li>Parcel</li>
  //                   <li>Material UI</li>
  //                   <li >MangoDb</li>
                    

  //                </ul>
  //       </div>
  //       <div className='p-20 ml-8 hover:animate-bounce mt-36 h-96 hover:shadow-2xl'>
  //       <h1 className='mb-3 text-2xl font-bold '>Tools</h1>
  //               <ul className="text-xl rounded-full text-violet-700 ">
  //                   <li >Microsoft VSCode</li>
  //                   <li >Eclipse</li>
  //                   <li >Gitlab</li>
  //                   <li>jira</li>
  //                   <li>Confluence</li>
  //                </ul>
  //       </div>
  
  //  </div>



export default Skills