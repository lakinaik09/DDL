import React from 'react'
import Layout from '../Layout/Layout'
import '../App.css'
import CourseCard from '../components/Cards/CourseCard'
import CoursesDb from '../CourseDb'

const Home = () => {
  return (  
    <Layout>
      <section className="hero-section flex items-center justify-between md:gap-20 bg-sky-600 text-white md:px-10 lg:px-16">
          <div className='md:py-40 w-1/2'>
           <div className='text-wrapper'>
           <h6 className='text-slate-300'>Start Learning Today</h6>
            <h1 className='text-6xl font-bold my-4 tracking-wide leading-[65px]'>The Best <br /> Platform to Enroll <br /> in Your Special Courses </h1>
            <p className="text-slate-200">Our mission is to provide the best courses - offline and help students learn from anywhere. </p>
           </div>
            <div className='hero-section-button-group flex gap-3 md:mt-3'>
              <button className='md:px-4 py-2 border-2 rounded-sm bg-yellow-200 text-black border-yellow-200 hover:bg-transparent duration-300 hover:text-white font-semibold'>Get Started</button>
              <button className='md:px-4 py-2 border- bg-slate-100 bg-opacity-30 hover:bg-opacity-15 duration-300 rounded-sm'>Learn More</button>
            </div>
          </div>
          <div className='hero-img-wrapper w-1/2'>
              <img src={"./assets/student.png"} alt="student" className=''/>
          </div>
      </section>

      {/* ============Highlight Card============= */}

      <section className="highlight-card-section flex gap-10 justify-between md:px-14 relative -top-24">
          <div className="highlight-card-1 p-16 flex flex-col items-center justify-center bg-[#DFFBCE] rounded-xl">
            <h2 className="md:text-5xl text-green-700">81 %</h2>
            <h6 className="text-xl text-center text-green-700 mt-6">Learner Saw Sareer Growth</h6>
          </div>
          <div className="highlight-card-2 p-16 flex flex-col items-center justify-center bg-[#FFFDD4] rounded-xl">
            <h2 className="md:text-5xl text-orange-700">1100 +</h2>
            <h6 className="text-xl text-center text-orange-700 mt-6">Successful Transitions</h6>
          </div>
          <div className="highlight-card-3 p-16 flex flex-col items-center justify-center bg-[#ECF7FD] rounded-xl">
            <h2 className="md:text-5xl text-blue-700">56 %</h2>
            <h6 className="text-xl text-center text-blue-700 mt-6">Average Salary Hike</h6>
          </div>
          <div className="highlight-card-4 p-16 flex flex-col items-center justify-center bg-[#F7D6FC] rounded-xl">
            <h2 className="md:text-5xl text-pink-700">60 +</h2>
            <h6 className="text-xl text-center text-pink-700 mt-6">Hiring Partners</h6>
          </div>
      </section>


      {/* ==================Featured Courses================== */}

      <section className="featured-courses-section md:px-14 my-20">
        <div className="section-header text-center">
          <h2 className="text-4xl font-semibold mb-3">Featured Course</h2>
          <p className='md:px-36 text-base text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias voluptatum, repellendus autem temporibus praesentium molestiae explicabo possimus obcaecati eligendi commodi nulla repudiandae  consequatur, beatae voluptatem est.</p>
        </div>

        {/* =========Courses============== */}

          <div className="courses-wrapper my-10 flex justify-center gap-6 gap-y-10 flex-wrap">
            {
              CoursesDb.map((data,index)=>{
                return(
                  <CourseCard key={index} title={data.title} image={data.image} />
                )
              })
            }
          </div>

      </section>

    </Layout>
  )
}

export default Home