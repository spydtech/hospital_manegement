import { useEffect, useState } from 'react';
import { FiEdit, FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const AppointmentType = () => {
  const navigate = useNavigate();
  const [appointmentTypes, setAppointmentTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [filteredAppointments, setFilteredAppointments] = useState([]); // State for filtered appointments

  // Load appointment types from local storage
  useEffect(() => {
    const storedAppointmentTypes = JSON.parse(localStorage.getItem('appointmentTypes')) || [];
    setAppointmentTypes(storedAppointmentTypes);
    setFilteredAppointments(storedAppointmentTypes); // Initially show all appointments
  }, []);

  // Handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = appointmentTypes.filter((appointment) =>
      appointment.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      appointment.type.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredAppointments(filtered);
  };

  const handleEdit = (index) => {
    navigate(`/edit-appointment-type/${index}`);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className=" ">
        <div className=" flex justify-start ml-14 w-full">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-3 border  w-[650px]  border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex justify-end p-2 mb-6">
          <button className="bg-[#17469E] text-white flex items-center px-6 py-3 rounded-lg hover:bg-[#153c80] transition">
            <FiPlus className="mr-2" />
            <Link to="/new-appointment-type">Appointment Type</Link>
          </button>
        </div>
      </div>

      <table className="mt-6 w-full border-collapse text-center">
        <thead>
          <tr className="bg-[#17469E] text-white">
            <th className="border p-4 ">ID</th>
            <th className="border  p-4">Name</th>
            <th className="border p-4">Type</th>
            <th className="border p-4">Duration (In minutes)</th>
            <th className="border p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment, index) => (
              <tr key={index}>
                <td className="border p-4 ">{index + 1}</td>
                <td className="border p-4">{appointment.name}</td>
                <td className="border p-4">{appointment.type}</td>
                <td className="border p-4">{appointment.duration}</td>
                <td className="border p-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-[#17469E] p-2 text-white rounded-lg"
                  >
                    <FiEdit />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-4 text-gray-500">No matching appointment types found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentType;

