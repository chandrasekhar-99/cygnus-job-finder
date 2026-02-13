import { useState } from "react";
import {jobs} from "../data/jobs";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import Filter from "../components/Filter";


const Home = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState([]);
  const [jobType, setJobType] = useState([]);

   const filteredJobs = jobs.filter((job) => {
    const matchTitle = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchLocation =
      location.length === 0 ||
      location.includes(job.location);

    const matchType =
      jobType.length === 0 ||
      jobType.includes(job.type);

    return matchTitle && matchLocation && matchType;
  });

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <Filter locations={location} setLocations={setLocation} types={jobType} setTypes={setJobType} />
        </div>
        <div className="w-full md:w-3/4 space-y-6">
          <SearchBar search={search} setSearch={setSearch} />
          <JobList jobs={filteredJobs} search={search}/>
        </div>
      </div>
    </>
); }

export default Home;