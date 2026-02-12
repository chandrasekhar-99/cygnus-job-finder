

const Job = ({ job }) => {
return (
  <div className="border p-4 rounded">
    <h2 className="text-lg font-semibold">{job.title}</h2>
    <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
    <p className="text-sm text-gray-500">{job.type}</p>
  </div>
) }

export default Job;