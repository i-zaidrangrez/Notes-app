import React from 'react'
import Sidebar from '../components/Sidebar'
import Welcome from '../components/Welcome'
import Note from '../components/Note.jsx'



const Notes = () => {
  const notes = [
  {
    id: 1,
    title: "React Concepts",
    content:
      "Learn useState, useEffect, component lifecycle and conditional rendering.",
    createdAt: "2026-06-15",
    favorite: true,
  },
  {
    id: 2,
    title: "Backend Roadmap",
    content:
      "Authentication, CRUD APIs, validation, error handling and deployment.",
    createdAt: "2026-06-14",
    favorite: false,
  },
  {
    id: 3,
    title: "MongoDB Queries",
    content:
      "Practice find(), findOne(), updateOne(), deleteOne() and aggregation.",
    createdAt: "2026-06-13",
    favorite: true,
  },
  {
    id: 4,
    title: "Project Ideas",
    content:
      "Notes App, Expense Tracker, URL Shortener and Chat Application.",
    createdAt: "2026-06-12",
    favorite: false,
  },
  {
    id: 5,
    title: "Today's Tasks",
    content:
      "Finish Notes UI, connect API, create NoteCard component.",
    createdAt: "2026-06-11",
    favorite: false,
  },
  {
    id: 6,
    title: "Deployment Notes",
    content:
      "Deploy frontend on Vercel and backend on Render.",
    createdAt: "2026-06-10",
    favorite: true,
  },
  {
  id: 7,
  title: "JavaScript ES6",
  content:
    "Revise destructuring, spread operator, rest parameters and template literals.",
  createdAt: "2026-06-09",
  favorite: false,
},
{
  id: 8,
  title: "Node.js Basics",
  content:
    "Understand event loop, modules, streams and asynchronous programming.",
  createdAt: "2026-06-08",
  favorite: true,
},
{
  id: 9,
  title: "Express Middleware",
  content:
    "Learn custom middleware, error middleware and request validation.",
  createdAt: "2026-06-07",
  favorite: false,
},
{
  id: 10,
  title: "JWT Authentication",
  content:
    "Practice generating tokens, verifying users and protecting routes.",
  createdAt: "2026-06-06",
  favorite: true,
},
{
  id: 11,
  title: "Git Commands",
  content:
    "Review branching, merging, rebasing and resolving merge conflicts.",
  createdAt: "2026-06-05",
  favorite: false,
},
{
  id: 12,
  title: "Tailwind CSS",
  content:
    "Explore responsive design, flexbox, grid and utility-first styling.",
  createdAt: "2026-06-04",
  favorite: false,
},
{
  id: 13,
  title: "TypeScript Notes",
  content:
    "Learn types, interfaces, generics and type narrowing techniques.",
  createdAt: "2026-06-03",
  favorite: true,
},
{
  id: 14,
  title: "Next.js Learning",
  content:
    "Understand routing, layouts, server components and data fetching.",
  createdAt: "2026-06-02",
  favorite: false,
},
{
  id: 15,
  title: "Database Indexing",
  content:
    "Study indexes, query optimization and performance improvements.",
  createdAt: "2026-06-01",
  favorite: true,
},
{
  id: 16,
  title: "Interview Preparation",
  content:
    "Practice DSA, system design basics and common MERN interview questions.",
  createdAt: "2026-05-31",
  favorite: false,
}
  
];


  return (
    <div className='flex h-screen'>
      <div className='hidden md:block md:w-64 border rounded border-gray-600 '>
      <Sidebar/>
    </div>
    <div className=' h-screen w-full p-5'>
      <div className='flex h-2/10 md:h-1/10 lg:h-1/10 w-full '>
        <Welcome/>
           </div>
        <div className='h-8/10 w-full mt-[5%] overflow-y-auto'>
           <div className='flex h-1/2 gap-5 flex-2 flex-wrap w-full '>
          {notes.map((elem)=>{
            return <Note elem = {elem}/>
          })}
        </div>
        </div>
       
    </div>
    </div>
  )
}

export default Notes