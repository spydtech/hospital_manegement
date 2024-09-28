// import React, { useState } from "react";
// import { IoAdd } from "react-icons/io5";
// import { TbEdit } from "react-icons/tb";
// import { BsPersonFillAdd } from "react-icons/bs";

// const HealthCareServiceUnit = () => {
//   const initialData = [
//     { id: 1, unitType: "General Health", status: "Enabled" },
//     { id: 2, unitType: "Mental Health", status: "Disabled" },
//     { id: 3, unitType: "Dental Care", status: "Enabled" },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(initialData);
//   const [addHealth, setAddHealth] = useState(false);
//   const [editHealth, setEditHealth] = useState(null); // For editing a specific item
//   const [formData, setFormData] = useState({ unitType: "", status: "" });

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);

//     const filtered = initialData.filter((item) =>
//       item.unitType.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleAddHealth = () => {
//     setFormData({ unitType: "", status: "" });
//     setAddHealth(true);
//     setEditHealth(null); // Clear editing mode
//   };

//   const handleEditHealth = (item) => {
//     setFormData(item);
//     setEditHealth(item.id); // Set item to be edited
//     setAddHealth(true);
//   };

//   const handleCancel = () => {
//     setAddHealth(false);
//     setEditHealth(null); // Reset editing state
//   };

//   const handleSave = () => {
//     if (editHealth) {
//       // Update existing item
//       setFilteredData((prevData) =>
//         prevData.map((item) =>
//           item.id === editHealth ? { ...formData, id: editHealth } : item
//         )
//       );
//     } else {
//       // Add new item
//       const newId = filteredData.length ? filteredData[filteredData.length - 1].id + 1 : 1; // Increment ID based on existing data
//       setFilteredData((prevData) => [
//         ...prevData,
//         { ...formData, id: newId },
//       ]);
//     }
//     setAddHealth(false); // Close the form after saving
//     setEditHealth(null); // Reset editing state
//   };

//   return (
//     <div className="min-h-screen p-8 relative">
//       <div className="mb-4 mx-auto w-1/2 border border-[#17469E]">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search here..."
//           className="px-4 py-2 w-full bg-white text-[#17469E] rounded-xl placeholder:text-blue-500 focus:outline-none"
//         />
//       </div>

//       <div className="flex justify-end items-center mb-7">
//         <button
//           onClick={handleAddHealth}
//           className="flex items-center bg-[#17469E] font-serif text-[17px] text-white px-4 py-2 rounded-lg hover:bg-[#17469E] transition"
//         >
//           <IoAdd className="mr-2 text-white text-[24px]" />
//           Health Service Unit Type
//         </button>
//       </div>

//       <table className="w-full bg-white text-black rounded-lg">
//         <thead>
//           <tr className="bg-[#17469E]">
//             <th className="px-4 py-3 border-r text-center text-white font-semibold">ID</th>
//             <th className="px-4 py-3 border-r text-center text-white font-semibold">Service Unit Type</th>
//             <th className="px-4 py-3 border-r text-center text-white font-semibold">Status</th>
//             <th className="px-4 py-3 border-r text-center text-white font-semibold">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length > 0 ? (
//             filteredData.map((item) => (
//               <tr key={item.id} className="border-b border-l border-r border-opacity-30 border-[#17469E]">
//                 <td className="px-4 py-2 border-r border-opacity-30 border-[#17469E] text-center text-[#17469E] font-semibold">{item.id}</td>
//                 <td className="px-4 py-2 border-r border-opacity-30 border-[#17469E] text-center text-[#17469E] font-semibold">{item.unitType}</td>
//                 <td
//                   className={`px-4 py-2 border-r border-opacity-30 border-[#17469E] text-center text-white font-semibold ${
//                     item.status === "Enabled" ? "bg-[#1A98F2] p-4 " : "bg-red-500 p-4"
//                   }`}
//                 >
//                   {item.status}
//                 </td>
//                 <td className="px-4 py-2 border-opacity-30 border-[#17469E] text-center text-[#17469E] font-semibold border-r">
//                   <button onClick={() => handleEditHealth(item)} className="text-[#17469E] text-[22px]">
//                     <TbEdit />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="px-4 py-2 text-center">
//                 No matching results
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {addHealth && (
//         <div className="inset-0 flex flex-col mt-4 justify-center items-center bg-white bg-opacity-80 absolute">
//           <div className="flex items-start justify-start w-1/2 text-left mt-5 gap-x-3 text-[#17469E] font-serif text-[20px]">
//             <BsPersonFillAdd className="text-[#17469E]" />
//             {editHealth ? "Edit HealthCare Service Unit Type" : "New HealthCare Service Unit Type"}
//           </div>
//           <div className="bg-[#17469E] mb-20 w-1/2 mx-auto h-full mt-4 rounded-md">
//             <div className="p-[70px]">
//               <div className="grid grid-cols-2 gap-10 text-[#17469E]">
//                 <div className="flex justify-end items-center">
//                   <input
//                     className="px-8 py-2 placeholder:text-[#17469E]"
//                     value={formData.unitType}
//                     onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
//                     placeholder="Service Unit Type"
//                   />
//                   {editHealth && <TbEdit className="text-[#17469E] absolute text-[20px] mr-2" />}
//                 </div>
//                 <div className="flex justify-end items-center">
//                   <input
//                     className="px-8 py-2 placeholder:text-[#17469E]"
//                     value={formData.status}
//                     onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                     placeholder="Status"
//                   />
//                   {editHealth && <TbEdit className="text-[#17469E] absolute text-[20px] mr-2" />}
//                 </div>
//                 <div className="flex justify-end items-center">
//                   <input
//                     className="px-8 py-2 placeholder:text-[#17469E]"
//                     placeholder="Warehouse"
//                   />
//                   {editHealth && <TbEdit className="text-[#17469E] absolute text-[20px] mr-2" />}
//                 </div>
//               </div>
//               <div className="mt-10">
//                 <label className="flex items-center mb-5">
//                   <input type="checkbox" name="inGroup" className="form-checkbox h-5 w-5 text-blue-600" />
//                   <span className="ml-2 text-white text-[16px]">In Group</span>
//                 </label>
//                 <label className="flex items-center mb-5">
//                   <input type="checkbox" name="allowAppointments" className="form-checkbox h-5 w-5 text-blue-600" />
//                   <span className="ml-2 text-white text-[16px]">Allow Appointments</span>
//                 </label>
//                 <label className="flex items-center mb-7">
//                   <input type="checkbox" name="inpatientOccupancy" className="form-checkbox h-5 w-5 text-blue-600" />
//                   <span className="ml-2 text-white text-[16px]">Inpatient Occupancy</span>
//                 </label>
//               </div>
//               <div className="flex gap-x-5 mt-6">
//               <button onClick={handleSave} className="w-1/2 mx-auto py-3 rounded-lg text-[22px] bg-white text-[#17469E] flex justify-center items-center">
//               {editHealth ? "Update" : "Save"}
//                 </button>
//                 <button className="w-1/2 mx-auto py-3 rounded-lg text-[22px] bg-[#17469E] border border-white text-white flex justify-center items-center" onClick={handleCancel}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HealthCareServiceUnit;
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { BsPersonFillAdd } from "react-icons/bs";

const HealthCareServiceUnit = () => {
  const initialData = [
    { id: 1, unitType: "General Health", status: "Enabled" },
    { id: 2, unitType: "Mental Health", status: "Disabled" },
    { id: 3, unitType: "Dental Care", status: "Enabled" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);
  const [addHealth, setAddHealth] = useState(false);
  const [editHealth, setEditHealth] = useState(null); // For editing a specific item
  const [formData, setFormData] = useState({ unitType: "", status: "" });

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = initialData.filter((item) =>
      item.unitType.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleAddHealth = () => {
    setFormData({ unitType: "", status: "" });
    setAddHealth(true);
    setEditHealth(null); // Clear editing mode
  };

  const handleEditHealth = (item) => {
    setFormData(item);
    setEditHealth(item.id); // Set item to be edited
    setAddHealth(true);
  };

  const handleCancel = () => {
    setAddHealth(false);
    setEditHealth(null); // Reset editing state
  };

  const handleSave = () => {
    if (editHealth) {
      // Update existing item
      setFilteredData((prevData) =>
        prevData.map((item) =>
          item.id === editHealth ? { ...formData, id: editHealth } : item
        )
      );
    } else {
      // Add new item
      const newId = filteredData.length ? Math.max(filteredData.map(item => item.id)) + 1 : 1; // Increment ID based on existing data
      setFilteredData((prevData) => [
        ...prevData,
        { ...formData, id: newId },
      ]);
    }
    setAddHealth(false); // Close the form after saving
    setEditHealth(null); // Reset editing state
  };

  return (
    <div className="min-h-screen p-8 relative">
      <div className="mb-4 mx-auto w-1/2 border border-[#17469E]">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search here..."
          className="px-4 py-2 w-full bg-white text-[#17469E] rounded-xl placeholder:text-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex justify-end items-center mb-7">
        <button
          onClick={handleAddHealth}
          className="flex items-center bg-[#17469E] font-serif text-[17px] text-white px-4 py-2 rounded-lg hover:bg-[#1A98F2] transition"
        >
          <IoAdd className="mr-2 text-white text-[24px]" />
          Health Service Unit Type
        </button>
      </div>

      <table className="w-full bg-white text-black rounded-lg">
        <thead>
          <tr className="bg-[#17469E]">
            <th className="px-4 py-3 border-r text-center text-white font-semibold">ID</th>
            <th className="px-4 py-3 border-r text-center text-white font-semibold">Service Unit Type</th>
            <th className="px-4 py-3 border-r text-center text-white font-semibold">Status</th>
            <th className="px-4 py-3 border-r text-center text-white font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id} className="border-b border-opacity-30 border-[#17469E]">
                <td className="px-4 py-2 border-r border-opacity-30 border-[#17469E] text-center text-[#17469E] font-semibold">{item.id}</td>
                <td className="px-4 py-2 border-r border-opacity-30 border-[#17469E] text-center text-[#17469E] font-semibold">{item.unitType}</td>
                <td className="px-4 py-2 border-r border-opacity-30 border-[#17469E] text-center text-[#17469E] font-semibold">
                  <button className={`py-2 px-4 rounded-md ${item.status === "Enabled" ? "bg-green-500" : "bg-red-500"} text-white`}>
                    {item.status}
                  </button>
                </td>
                <td className="px-4 py-2 border-opacity-30 border-[#17469E] text-center text-[#17469E] font-semibold border-r">
                  <button onClick={() => handleEditHealth(item)} className="text-[#17469E] text-[22px]">
                    <TbEdit />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-2 text-center">
                No matching results
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {addHealth && (
        <div className="inset-0 flex flex-col  justify-center items-center bg-black bg-opacity-50 absolute">
       

         <div className=" bg-white flex items-center justify-center h-[60px] pt-4  w-1/2 text-left mt-5 gap-x-3 text-[#17469E] font-serif text-[24px]">
           <div>
           <BsPersonFillAdd className="text-[#17469E]" />
            </div> 
         
         <div>
         {editHealth ? "Edit HealthCare Service Unit Type" : "New HealthCare Service Unit Type"}
         </div>
          </div>
          <div className="bg-[#17469E] mb-20 w-1/2 mx-auto h-full  rounded-md">
            <div className="p-[70px]">
              <div className="grid grid-cols-2 gap-10 text-[#17469E]">
                <div className="flex justify-end items-center">
                  <input
                    className="px-8 py-2 placeholder:text-[#17469E]"
                    value={formData.unitType}
                    onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                    placeholder="Service Unit Type"
                  />
                </div>
                <div className="flex justify-end items-center">
                  <input
                    className="px-8 py-2 placeholder:text-[#17469E]"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    placeholder="Status"
                  />
                </div>
              </div>
              <div className="mt-10">
                <label className="flex items-center mb-5">
                  <input type="checkbox" name="inGroup" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-white text-[16px]">In Group</span>
                </label>
                <label className="flex items-center mb-5">
                  <input type="checkbox" name="allowAppointments" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-white text-[16px]">Allow Appointments</span>
                </label>
                <label className="flex items-center mb-7">
                  <input type="checkbox" name="inpatientOccupancy" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-white text-[16px]">Inpatient Occupancy</span>
                </label>
              </div>
              <div className="flex gap-x-5 mt-6">
                <button onClick={handleSave} className="w-1/2 mx-auto py-3 rounded-lg text-[22px] bg-white text-[#17469E] flex justify-center items-center">
                  {editHealth ? "Update" : "Save"}
                </button>
                <button className="w-1/2 mx-auto py-3 rounded-lg text-[22px] bg-[#17469E] border border-white text-white flex justify-center items-center" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
       
        </div>
      )}
    </div>
  );
};

export default HealthCareServiceUnit;
