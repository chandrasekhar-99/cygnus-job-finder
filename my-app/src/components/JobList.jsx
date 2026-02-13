import JobCard from "../components/JobCard";

const JobList = ({ jobs, search }) => {
  if (jobs.length === 0) {
    return <p className="text-center text-gray-500">No jobs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} search={search}/>
      ))}
    </div>
  );
} 

export default JobList;