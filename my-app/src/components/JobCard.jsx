

const Job = ({ job , search}) => {
  const highlightText = (text, keyword) => {
    if (!keyword) return text;

    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={index} className="bg-blue-300">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
return (
  <div className="border p-4 rounded">
    <h2 className="text-lg font-semibold">
        {highlightText(job.title, search)}
      </h2>
    <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
    <p className="text-sm text-gray-500">{job.type}</p>
  </div>
) }

export default Job;