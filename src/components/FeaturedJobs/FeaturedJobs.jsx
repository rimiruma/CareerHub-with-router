import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

useEffect(() =>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data));
}, [])
    return (
        <div>
            <div className=" text-3xl text-center">
            <h2>Featured Jobs: {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" mx-auto grid grid-cols-3 gap-6">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;