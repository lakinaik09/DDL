import React from 'react'

const CourseCard = ({title,image}) => {
  return (
    <div className='course-card relative  rounded-md w-72 bg-slate-100 p-2'>
        <div className="bg-img  z-10 top-0 left-0 h-44">
            <img src={image} alt="" className=' h-full object-cover'/>
        </div>
        <div className='course-details z-10 bg-white text-center p-4'>
                <h2 className="course-title text-2xl font-bold">{title}</h2>
        </div>
    </div>
  )
}

export default CourseCard