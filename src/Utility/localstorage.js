const getStoredJobApplication = () =>{
    const storedjobApplication = localStorage.getItem('job-applications');
    if(storedjobApplication){
        return JSON.parse(storedjobApplication);
    }
    return [];
}


const saveJobApplication = id=>{
const storedjobApplication = getStoredJobApplication();
const exists = storedjobApplication.find(jobId => jobId === id);
if(!exists){
    storedjobApplication.push(id);
    localStorage.setItem('job-applications', JSON.stringify(storedjobApplication));
}
}

export { getStoredJobApplication, saveJobApplication}