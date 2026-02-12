const Filter = ({
  locations,
  setLocations,
  types,
  setTypes,
}) => {
  const locationOptions = ["Remote", "Bangalore", "Hyderabad"];
  const typeOptions = ["Full-time", "Internship", "Contract"];

  const handleCheckbox = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Filter Jobs</h2>

      {/* Location */}
      <div className="mb-4">
        <h3 className="font-medium mb-1">Location</h3>
        {locationOptions.map((loc) => (
          <label key={loc} className="block">
            <input
              type="checkbox"
              checked={locations.includes(loc)}
              onChange={() =>
                handleCheckbox(loc, locations, setLocations)
              }
              className="mr-2"
            />
            {loc}
          </label>
        ))}
      </div>

      {/* Job Type */}
      <div>
        <h3 className="font-medium mb-1">Job Type</h3>
        {typeOptions.map((type) => (
          <label key={type} className="block">
            <input
              type="checkbox"
              checked={types.includes(type)}
              onChange={() =>
                handleCheckbox(type, types, setTypes)
              }
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
