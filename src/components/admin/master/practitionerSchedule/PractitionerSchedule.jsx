// // // import React, { useState, useEffect } from 'react';
// // // import { GrAdd } from "react-icons/gr";
// // // import { BsPersonFillDown } from "react-icons/bs";
// // // import { IoClose } from "react-icons/io5";
// // // import { FiEdit, FiTrash } from 'react-icons/fi';

// // // const initialScheduleData = [
// // //     { id: 1, day: "Monday", fromDate: "2024-09-30", toDate: "2024-10-06" },
// // //     { id: 2, day: "Tuesday", fromDate: "2024-09-29", toDate: "2024-10-05" },
// // //     { id: 3, day: "Wednesday", fromDate: "2024-09-28", toDate: "2024-10-04" },
// // //     { id: 4, day: "Thursday", fromDate: "2024-09-27", toDate: "2024-10-03" },
// // //     { id: 5, day: "Friday", fromDate: "2024-09-26", toDate: "2024-10-02" }
// // // ];

// // // const Modal = ({ isOpen, onClose, onSave, schedule }) => {
// // //     const [day, setDay] = useState(schedule ? schedule.day : '');
// // //     const [fromDate, setFromDate] = useState(schedule ? schedule.fromDate : '');
// // //     const [toDate, setToDate] = useState(schedule ? schedule.toDate : '');

// // //     useEffect(() => {
// // //         if (schedule) {
// // //             setDay(schedule.day);
// // //             setFromDate(schedule.fromDate);
// // //             setToDate(schedule.toDate);
// // //         } else {
// // //             setDay('');
// // //             setFromDate('');
// // //             setToDate('');
// // //         }
// // //     }, [schedule]);

// // //     const handleSave = () => {
// // //         onSave(day, fromDate, toDate);
// // //         setDay('');
// // //         setFromDate('');
// // //         setToDate('');
// // //     };

// // //     if (!isOpen) return null;

// // //     return (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // //             <div className="bg-white p-10 rounded-lg w-full h-full flex flex-col">
// // //                 <button
// // //                     onClick={onClose}
// // //                     className="absolute top-4 right-4 text-xl text-gray-700"
// // //                 >
// // //                     <IoClose className="text-[#17469E] text-2xl" />
// // //                 </button>
// // //                 <div className="flex mb-4">
// // //                     <BsPersonFillDown className="text-2xl mr-2 mt-1 text-[#17469E]" />
// // //                     <h1 className="text-2xl text-[#17469E]">
// // //                         {schedule ? 'Edit Schedule' : 'New Schedule'}
// // //                     </h1>
// // //                 </div>
// // //                 <div className="flex flex-col items-center justify-center h-full bg-[#17469E] w-full">
// // //                     <input
// // //                         type="text"
// // //                         value={day}
// // //                         onChange={(e) => setDay(e.target.value)}
// // //                         placeholder="Day"
// // //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// // //                     />
// // //                     <input
// // //                         type="date"
// // //                         value={fromDate}
// // //                         onChange={(e) => setFromDate(e.target.value)}
// // //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// // //                     />
// // //                     <input
// // //                         type="date"
// // //                         value={toDate}
// // //                         onChange={(e) => setToDate(e.target.value)}
// // //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// // //                     />
// // //                     <button
// // //                         onClick={handleSave}
// // //                         className="bg-white text-[#17469E] rounded p-2 w-[350px] h-[50px] mt-10 text-center text-xl"
// // //                     >
// // //                         Save
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // const Medical = () => {
// // //     const [scheduleData, setScheduleData] = useState(initialScheduleData);
// // //     const [isModalOpen, setIsModalOpen] = useState(false);
// // //     const [currentSchedule, setCurrentSchedule] = useState(null);
// // //     const [searchTerm, setSearchTerm] = useState('');

// // //     const handleEdit = (id) => {
// // //         const scheduleToEdit = scheduleData.find(schedule => schedule.id === id);
// // //         setCurrentSchedule(scheduleToEdit);
// // //         setIsModalOpen(true);
// // //     };

// // //     const handleDelete = (id) => {
// // //         setScheduleData(scheduleData.filter(schedule => schedule.id !== id));
// // //     };

// // //     const handleSave = (day, fromDate, toDate) => {
// // //         if (currentSchedule) {
// // //             setScheduleData(scheduleData.map(schedule =>
// // //                 schedule.id === currentSchedule.id
// // //                     ? { ...schedule, day, fromDate, toDate }
// // //                     : schedule
// // //             ));
// // //         } else {
// // //             const newId = scheduleData.length + 1;
// // //             const newSchedule = { id: newId, day, fromDate, toDate };
// // //             setScheduleData([...scheduleData, newSchedule]);
// // //         }
// // //         setCurrentSchedule(null);
// // //         setIsModalOpen(false);
// // //     };

// // //     // Filtered data based on search term
// // //     const filteredData = scheduleData.filter(schedule => 
// // //         schedule.day.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );

// // //     return (
// // //         <div className="p-5">
// // //             <div>
// // //                 <input 
// // //                     type="search" 
// // //                     value={searchTerm}
// // //                     onChange={(e) => setSearchTerm(e.target.value)}
// // //                     className="w-[800px] h-[40px] rounded-lg pl-2" 
// // //                     style={{ borderColor: '#17469E', borderWidth: '1px', borderStyle: 'solid' }} 
// // //                     placeholder="Search by day"
// // //                 />
// // //             </div>

// // //             <div className="flex row justify-end">
// // //                 <button
// // //                     onClick={() => {
// // //                         setCurrentSchedule(null);
// // //                         setIsModalOpen(true);
// // //                     }}
// // //                     className="h-[50px] w-[250px] bg-[#17469E] text-white flex items-center justify-center rounded text-xl p-2"
// // //                 >
// // //                     <span className="text-2xl mr-3"><GrAdd /></span> Add Schedule
// // //                 </button>
// // //             </div>

// // //             <table className="min-w-full mt-5 border-collapse border border-gray-300">
// // //                 <thead>
// // //                     <tr className="bg-[#17469E] text-white">
// // //                         <th className="border border-gray-300 p-2 text-center text-xl">No</th>
// // //                         <th className="border border-gray-300 p-2 text-left text-xl">Day</th>
// // //                         <th className="border border-gray-300 p-2 text-left text-xl">From Date</th>
// // //                         <th className="border border-gray-300 p-2 text-left text-xl">To Date</th>
// // //                         <th className="border border-gray-300 p-2 text-center text-xl">Action</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {filteredData.map((schedule, index) => (
// // //                         <tr key={schedule.id}>
// // //                             <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
// // //                             <td className="border border-gray-300 p-2">{schedule.day}</td>
// // //                             <td className="border border-gray-300 p-2">{schedule.fromDate}</td>
// // //                             <td className="border border-gray-300 p-2">{schedule.toDate}</td>
// // //                             <td className="border border-gray-300 p-2 flex justify-center items-center space-x-2">
// // //                                 <button
// // //                                     onClick={() => handleEdit(schedule.id)}
// // //                                     className="bg-[#17469E] hover:bg-[#17469E] text-white rounded p-2 flex items-center"
// // //                                 >
// // //                                     <FiEdit className="text-white" />
// // //                                 </button>
// // //                                 <button
// // //                                     onClick={() => handleDelete(schedule.id)}
// // //                                     className="bg-red-600 hover:bg-red-700 text-white rounded p-2 flex items-center"
// // //                                 >
// // //                                     <FiTrash className="text-white" />
// // //                                 </button>
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>

// // //             <Modal 
// // //                 isOpen={isModalOpen} 
// // //                 onClose={() => {
// // //                     setIsModalOpen(false);
// // //                     setCurrentSchedule(null);
// // //                 }} 
// // //                 onSave={handleSave} 
// // //                 schedule={currentSchedule} 
// // //             />
// // //         </div>
// // //     );
// // // };

// // // // Correct default export
// // // export default Medical;



// // // import React, { useState, useEffect } from 'react';
// // // import { GrAdd } from "react-icons/gr";
// // // import { BsPersonFillDown } from "react-icons/bs";
// // // import { IoClose } from "react-icons/io5";
// // // import { FiEdit, FiTrash } from 'react-icons/fi';

// // // const initialScheduleData = [
// // //     { id: 1, day: "Monday", fromDate: "2024-09-30", toDate: "2024-10-06" },
// // //     { id: 2, day: "Tuesday", fromDate: "2024-09-29", toDate: "2024-10-05" },
// // //     { id: 3, day: "Wednesday", fromDate: "2024-09-28", toDate: "2024-10-04" },
// // //     { id: 4, day: "Thursday", fromDate: "2024-09-27", toDate: "2024-10-03" },
// // //     { id: 5, day: "Friday", fromDate: "2024-09-26", toDate: "2024-10-02" }
// // // ];

// // // const Modal = ({ isOpen, onClose, onSave, schedule }) => {
// // //     const [day, setDay] = useState(schedule ? schedule.day : '');
// // //     const [fromDate, setFromDate] = useState(schedule ? schedule.fromDate : '');
// // //     const [toDate, setToDate] = useState(schedule ? schedule.toDate : '');

// // //     useEffect(() => {
// // //         if (schedule) {
// // //             setDay(schedule.day);
// // //             setFromDate(schedule.fromDate);
// // //             setToDate(schedule.toDate);
// // //         } else {
// // //             setDay('');
// // //             setFromDate('');
// // //             setToDate('');
// // //         }
// // //     }, [schedule]);

// // //     const handleSave = () => {
// // //         onSave(day, fromDate, toDate);
// // //         setDay('');
// // //         setFromDate('');
// // //         setToDate('');
// // //     };

// // //     if (!isOpen) return null;

// // //     return (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// // //             <div className="bg-white p-10 rounded-lg w-full h-full flex flex-col">
// // //                 <button
// // //                     onClick={onClose}
// // //                     className="absolute top-4 right-4 text-xl text-gray-700"
// // //                 >
// // //                     <IoClose className="text-[#17469E] text-2xl" />
// // //                 </button>
// // //                 <div className="flex mb-4">
// // //                     <BsPersonFillDown className="text-2xl mr-2 mt-1 text-[#17469E]" />
// // //                     <h1 className="text-2xl text-[#17469E]">
// // //                         {schedule ? 'Edit Schedule' : 'New Schedule'}
// // //                     </h1>
// // //                 </div>
// // //                 <div className="flex flex-col items-center justify-center h-full bg-[#17469E] w-full">
// // //                     <input
// // //                         type="text"
// // //                         value={day}
// // //                         onChange={(e) => setDay(e.target.value)}
// // //                         placeholder="Day"
// // //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// // //                     />
// // //                     <input
// // //                         type="date"
// // //                         value={fromDate}
// // //                         onChange={(e) => setFromDate(e.target.value)}
// // //                         placeholder="From Date" // Placeholder for From Date
// // //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// // //                     />
// // //                     <input
// // //                         type="date"
// // //                         value={toDate}
// // //                         onChange={(e) => setToDate(e.target.value)}
// // //                         placeholder="To Date" // Placeholder for To Date
// // //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// // //                     />
// // //                     <button
// // //                         onClick={handleSave}
// // //                         className="bg-white text-[#17469E] rounded p-2 w-[350px] h-[50px] mt-10 text-center text-xl"
// // //                     >
// // //                         Save
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // const Medical = () => {
// // //     const [scheduleData, setScheduleData] = useState(initialScheduleData);
// // //     const [isModalOpen, setIsModalOpen] = useState(false);
// // //     const [currentSchedule, setCurrentSchedule] = useState(null);
// // //     const [searchTerm, setSearchTerm] = useState('');

// // //     const handleEdit = (id) => {
// // //         const scheduleToEdit = scheduleData.find(schedule => schedule.id === id);
// // //         setCurrentSchedule(scheduleToEdit);
// // //         setIsModalOpen(true);
// // //     };

// // //     const handleDelete = (id) => {
// // //         setScheduleData(scheduleData.filter(schedule => schedule.id !== id));
// // //     };

// // //     const handleSave = (day, fromDate, toDate) => {
// // //         if (currentSchedule) {
// // //             setScheduleData(scheduleData.map(schedule =>
// // //                 schedule.id === currentSchedule.id
// // //                     ? { ...schedule, day, fromDate, toDate }
// // //                     : schedule
// // //             ));
// // //         } else {
// // //             const newId = scheduleData.length + 1;
// // //             const newSchedule = { id: newId, day, fromDate, toDate };
// // //             setScheduleData([...scheduleData, newSchedule]);
// // //         }
// // //         setCurrentSchedule(null);
// // //         setIsModalOpen(false);
// // //     };

// // //     // Filtered data based on search term
// // //     const filteredData = scheduleData.filter(schedule => 
// // //         schedule.day.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );

// // //     return (
// // //         <div className="p-5">
// // //             <div>
// // //                 <input 
// // //                     type="search" 
// // //                     value={searchTerm}
// // //                     onChange={(e) => setSearchTerm(e.target.value)}
// // //                     className="w-[800px] h-[40px] rounded-lg pl-2" 
// // //                     style={{ borderColor: '#17469E', borderWidth: '1px', borderStyle: 'solid' }} 
// // //                     placeholder="Search by day"
// // //                 />
// // //             </div>

// // //             <div className="flex row justify-end">
// // //                 <button
// // //                     onClick={() => {
// // //                         setCurrentSchedule(null);
// // //                         setIsModalOpen(true);
// // //                     }}
// // //                     className="h-[50px] w-[250px] bg-[#17469E] text-white flex items-center justify-center rounded text-xl p-2"
// // //                 >
// // //                     <span className="text-2xl mr-3"><GrAdd /></span> Add Schedule
// // //                 </button>
// // //             </div>

// // //             <table className="min-w-full mt-5 border-collapse border border-gray-300">
// // //                 <thead>
// // //                     <tr className="bg-[#17469E] text-white">
// // //                         <th className="border border-gray-300 p-2 text-center text-xl">No</th>
// // //                         <th className="border border-gray-300 p-2 text-left text-xl">Day</th>
// // //                         <th className="border border-gray-300 p-2 text-left text-xl">From Date</th>
// // //                         <th className="border border-gray-300 p-2 text-left text-xl">To Date</th>
// // //                         <th className="border border-gray-300 p-2 text-center text-xl">Action</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {filteredData.map((schedule, index) => (
// // //                         <tr key={schedule.id}>
// // //                             <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
// // //                             <td className="border border-gray-300 p-2">{schedule.day}</td>
// // //                             <td className="border border-gray-300 p-2">{schedule.fromDate}</td>
// // //                             <td className="border border-gray-300 p-2">{schedule.toDate}</td>
// // //                             <td className="border border-gray-300 p-2 flex justify-center items-center space-x-2">
// // //                                 <button
// // //                                     onClick={() => handleEdit(schedule.id)}
// // //                                     className="bg-[#17469E] hover:bg-[#17469E] text-white rounded p-2 flex items-center"
// // //                                 >
// // //                                     <FiEdit className="text-white" />
// // //                                 </button>
// // //                                 <button
// // //                                     onClick={() => handleDelete(schedule.id)}
// // //                                     className="bg-red-600 hover:bg-red-700 text-white rounded p-2 flex items-center"
// // //                                 >
// // //                                     <FiTrash className="text-white" />
// // //                                 </button>
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>

// // //             <Modal 
// // //                 isOpen={isModalOpen} 
// // //                 onClose={() => {
// // //                     setIsModalOpen(false);
// // //                     setCurrentSchedule(null);
// // //                 }} 
// // //                 onSave={handleSave} 
// // //                 schedule={currentSchedule} 
// // //             />
// // //         </div>
// // //     );
// // // };

// // // // Correct default export
// // // export default Medical;



// // import React, { useState, useEffect } from 'react';
// // import { GrAdd } from "react-icons/gr";
// // import { BsPersonFillDown } from "react-icons/bs";
// // import { IoClose } from "react-icons/io5";
// // import { FiEdit, FiTrash } from 'react-icons/fi';

// // const initialScheduleData = [
// //     { id: 1, day: "Monday", fromDate: "2024-09-30", toDate: "2024-10-06", status: 'Active' },
// //     { id: 2, day: "Tuesday", fromDate: "2024-09-29", toDate: "2024-10-05", status: 'Inactive' },
// //     { id: 3, day: "Wednesday", fromDate: "2024-09-28", toDate: "2024-10-04", status: 'Active' },
// //     { id: 4, day: "Thursday", fromDate: "2024-09-27", toDate: "2024-10-03", status: 'Inactive' },
// //     { id: 5, day: "Friday", fromDate: "2024-09-26", toDate: "2024-10-02", status: 'Active' }
// // ];

// // const Modal = ({ isOpen, onClose, onSave, schedule }) => {
// //     const [day, setDay] = useState(schedule ? schedule.day : '');
// //     const [fromDate, setFromDate] = useState(schedule ? schedule.fromDate : '');
// //     const [toDate, setToDate] = useState(schedule ? schedule.toDate : '');
// //     const [status, setStatus] = useState(schedule ? schedule.status : 'Active');

// //     useEffect(() => {
// //         if (schedule) {
// //             setDay(schedule.day);
// //             setFromDate(schedule.fromDate);
// //             setToDate(schedule.toDate);
// //             setStatus(schedule.status);
// //         } else {
// //             setDay('');
// //             setFromDate('');
// //             setToDate('');
// //             setStatus('Active');
// //         }
// //     }, [schedule]);

// //     const handleSave = () => {
// //         onSave(day, fromDate, toDate, status);
// //         setDay('');
// //         setFromDate('');
// //         setToDate('');
// //         setStatus('Active');
// //     };

// //     if (!isOpen) return null;

// //     return (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //             <div className="bg-white p-10 rounded-lg w-[800px] h-full flex flex-col">
                
// //                 <button
// //                     onClick={onClose}
// //                     className="absolute top-4 right-4 text-5xl text-gray-700"
// //                 >
// //                     <IoClose className="text-[#17469E] text-2xl" />
// //                 </button>
// //                 <div className="flex mb-4">
// //                     <BsPersonFillDown className="text-2xl mr-2 mt-1 text-[#17469E]" />
// //                     <h1 className="text-2xl text-[#17469E]">
// //                         {schedule ? 'Edit Schedule' : 'New Schedule'}
// //                     </h1>
// //                 </div>
// //                 <div className="flex flex-col items-center justify-center h-full bg-[#17469E] w-full">
// //                     <input
// //                         type="text"
// //                         value={day}
// //                         onChange={(e) => setDay(e.target.value)}
// //                         placeholder="Day"
// //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// //                     />
// //                     <input
// //                         type="date"
// //                         value={fromDate}
// //                         onChange={(e) => setFromDate(e.target.value)}
// //                         placeholder="From Date"
// //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// //                     />
// //                     <input
// //                         type="date"
// //                         value={toDate}
// //                         onChange={(e) => setToDate(e.target.value)}
// //                         placeholder="To Date"
// //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// //                     />
// //                     <select
// //                         value={status}
// //                         onChange={(e) => setStatus(e.target.value)}
// //                         className="border border-gray-300 p-2 w-1/2 mb-4"
// //                     >
// //                         <option value="Active">Active</option>
// //                         <option value="Inactive">Inactive</option>
// //                     </select>
// //                     <button
// //                         onClick={handleSave}
// //                         className="bg-white text-[#17469E] rounded p-2 w-[350px] h-[50px] mt-10 text-center text-xl"
// //                     >
// //                         Save
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // const Practitioner = () => {
// //     const [scheduleData, setScheduleData] = useState(initialScheduleData);
// //     const [isModalOpen, setIsModalOpen] = useState(false);
// //     const [currentSchedule, setCurrentSchedule] = useState(null);
// //     const [searchTerm, setSearchTerm] = useState('');

// //     const handleEdit = (id) => {
// //         const scheduleToEdit = scheduleData.find(schedule => schedule.id === id);
// //         setCurrentSchedule(scheduleToEdit);
// //         setIsModalOpen(true);
// //     };

// //     const handleDelete = (id) => {
// //         setScheduleData(scheduleData.filter(schedule => schedule.id !== id));
// //     };

// //     const handleSave = (day, fromDate, toDate, status) => {
// //         if (currentSchedule) {
// //             setScheduleData(scheduleData.map(schedule =>
// //                 schedule.id === currentSchedule.id
// //                     ? { ...schedule, day, fromDate, toDate, status }
// //                     : schedule
// //             ));
// //         } else {
// //             const newId = scheduleData.length + 1;
// //             const newSchedule = { id: newId, day, fromDate, toDate, status };
// //             setScheduleData([...scheduleData, newSchedule]);
// //         }
// //         setCurrentSchedule(null);
// //         setIsModalOpen(false);
// //     };

// //     // Filtered data based on search term
// //     const filteredData = scheduleData.filter(schedule => 
// //         schedule.day.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     return (
// //         <div className="p-5">
// //             <div>
// //                 <input 
// //                     type="search" 
// //                     value={searchTerm}
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                     className="w-[800px] h-[40px] rounded-lg pl-2" 
// //                     style={{ borderColor: '#17469E', borderWidth: '1px', borderStyle: 'solid' }} 
// //                     placeholder="Search by day"
// //                 />
// //             </div>

// //             <div className="flex row justify-end">
// //                 <button
// //                     onClick={() => {
// //                         setCurrentSchedule(null);
// //                         setIsModalOpen(true);
// //                     }}
// //                     className="h-[50px] w-[250px] bg-[#17469E] text-white flex items-center justify-center rounded text-xl p-2"
// //                 >
// //                     <span className="text-2xl mr-3"><GrAdd /></span> Practitioner Schedule
// //                 </button>
// //             </div>

// //             <table className="min-w-full mt-5 border-collapse border border-gray-300">
// //                 <thead>
// //                     <tr className="bg-[#17469E] text-white">
// //                         <th className="border border-gray-300 p-2 text-center text-xl">No</th>
// //                         <th className="border border-gray-300 p-2 text-left text-xl">Day</th>
// //                         <th className="border border-gray-300 p-2 text-left text-xl">From Date</th>
// //                         <th className="border border-gray-300 p-2 text-left text-xl">To Date</th>
// //                         <th className="border border-gray-300 p-2 text-left text-xl">Status</th>
// //                         <th className="border border-gray-300 p-2 text-center text-xl">Action</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {filteredData.map((schedule, index) => (
// //                         <tr key={schedule.id}>
// //                             <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
// //                             <td className="border border-gray-300 p-2">{schedule.day}</td>
// //                             <td className="border border-gray-300 p-2">{schedule.fromDate}</td>
// //                             <td className="border border-gray-300 p-2">{schedule.toDate}</td>
// //                             <td className="border border-gray-300 p-2">
// //                                 <span
// //                                     className={`${
// //                                         schedule.status === 'Active' ? 'text-green-600' : 'text-red-600'
// //                                     } font-semibold`}
// //                                 >
// //                                     {schedule.status}
// //                                 </span>
// //                             </td>
// //                             <td className="border border-gray-300 p-2 flex justify-center items-center space-x-2">
// //                                 <button
// //                                     onClick={() => handleEdit(schedule.id)}
// //                                     className="bg-[#17469E] hover:bg-[#17469E] text-white rounded p-2 flex items-center"
// //                                 >
// //                                     <FiEdit className="text-white" />
// //                                 </button>
// //                                 {/* <button
// //                                     onClick={() => handleDelete(schedule.id)}
// //                                     className="bg-red-600 hover:bg-red-700 text-white rounded p-2 flex items-center"
// //                                 >
// //                                     <FiTrash className="text-white" />
// //                                 </button> */}
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>

// //             <Modal 
// //                 isOpen={isModalOpen} 
// //                 onClose={() => {
// //                     setIsModalOpen(false);
// //                     setCurrentSchedule(null);
// //                 }} 
// //                 onSave={handleSave} 
// //                 schedule={currentSchedule} 
// //             />
// //         </div>
// //     );
// // };


// // export default Practitioner;

// const Modal = ({ isOpen, onClose, onSave, schedule }) => {
//     const [day, setDay] = useState(schedule ? schedule.day : '');
//     const [fromDate, setFromDate] = useState(schedule ? schedule.fromDate : '');
//     const [toDate, setToDate] = useState(schedule ? schedule.toDate : '');
//     const [status, setStatus] = useState(schedule ? schedule.status : 'Active');

//     useEffect(() => {
//         if (schedule) {
//             setDay(schedule.day);
//             setFromDate(schedule.fromDate);
//             setToDate(schedule.toDate);
//             setStatus(schedule.status);
//         } else {
//             setDay('');
//             setFromDate('');
//             setToDate('');
//             setStatus('Active');
//         }
//     }, [schedule]);

//     const handleSave = () => {
//         onSave(day, fromDate, toDate, status);
//         setDay('');
//         setFromDate('');
//         setToDate('');
//         setStatus('Active');
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-10 rounded-lg w-full h-full flex flex-col relative">
                
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-2xl text-gray-700"
//                     aria-label="Close Modal"
//                 >
//                     <IoClose className="text-[#17469E]" />
//                 </button>
//                 <div className="flex mb-4">
//                     <BsPersonFillDown className="text-2xl mr-2 mt-1 text-[#17469E]" />
//                     <h1 className="text-2xl text-[#17469E]">
//                         {schedule ? 'Edit Schedule' : 'New Schedule'}
//                     </h1>
//                 </div>
//                 <div className="flex flex-col items-center justify-center h-full bg-[#17469E] w-full p-4 rounded-lg">
//                     <input
//                         type="text"
//                         value={day}
//                         onChange={(e) => setDay(e.target.value)}
//                         placeholder="Day"
//                         className="border border-gray-300 p-2 w-1/2 mb-4"
//                     />
//                     <input
//                         type="date"
//                         value={fromDate}
//                         onChange={(e) => setFromDate(e.target.value)}
//                         className="border border-gray-300 p-2 w-1/2 mb-4"
//                     />
//                     <input
//                         type="date"
//                         value={toDate}
//                         onChange={(e) => setToDate(e.target.value)}
//                         className="border border-gray-300 p-2 w-1/2 mb-4"
//                     />
//                     <select
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                         className="border border-gray-300 p-2 w-1/2 mb-4"
//                     >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                     </select>
//                     <div className="flex space-x-4 mt-10">
//                         <button
//                             onClick={handleSave}
//                             className="bg-white text-[#17469E] rounded p-2 w-[150px] h-[50px] text-center text-xl"
//                         >
//                             Save
//                         </button>
//                         <button
//                             onClick={onClose}
//                             className="bg-gray-200 text-[#17469E] rounded p-2 w-[150px] h-[50px] text-center text-xl"
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React, { useState, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";
import { BsPersonFillDown } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FiEdit, FiTrash } from 'react-icons/fi';

const initialScheduleData = [
    { id: 1, day: "Monday", fromDate: "2024-09-30", toDate: "2024-10-06", status: 'Active' },
    { id: 2, day: "Tuesday", fromDate: "2024-09-29", toDate: "2024-10-05", status: 'Inactive' },
    { id: 3, day: "Wednesday", fromDate: "2024-09-28", toDate: "2024-10-04", status: 'Active' },
    { id: 4, day: "Thursday", fromDate: "2024-09-27", toDate: "2024-10-03", status: 'Inactive' },
    { id: 5, day: "Friday", fromDate: "2024-09-26", toDate: "2024-10-02", status: 'Active' }
];

const Modal = ({ isOpen, onClose, onSave, schedule }) => {
    const [day, setDay] = useState(schedule ? schedule.day : '');
    const [fromDate, setFromDate] = useState(schedule ? schedule.fromDate : '');
    const [toDate, setToDate] = useState(schedule ? schedule.toDate : '');
    const [status, setStatus] = useState(schedule ? schedule.status : 'Active');

    useEffect(() => {
        if (schedule) {
            setDay(schedule.day);
            setFromDate(schedule.fromDate);
            setToDate(schedule.toDate);
            setStatus(schedule.status);
        } else {
            setDay('');
            setFromDate('');
            setToDate('');
            setStatus('Active');
        }
    }, [schedule]);

    const handleSave = () => {
        onSave(day, fromDate, toDate, status);
        setDay('');
        setFromDate('');
        setToDate('');
        setStatus('Active');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg w-[800px] h-full flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top- 4 right-[340px] text-xl text-gray-700"
                >
                    <IoClose className="text-[#17469E] text-2xl" />
                </button>
                <div className="flex mb-4">
                    <BsPersonFillDown className="text-2xl mr-2 mt-1 text-[#17469E]" />
                    <h1 className="text-2xl text-[#17469E]">
                        {schedule ? 'Edit Schedule' : 'New Schedule'}
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center h-full bg-[#17469E] w-full">
                    <input
                        type="text"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        placeholder="Day"
                        className="border border-gray-300 p-2 w-1/2 mb-4"
                    />
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        placeholder="From Date"
                        className="border border-gray-300 p-2 w-1/2 mb-4"
                    />
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        placeholder="To Date"
                        className="border border-gray-300 p-2 w-1/2 mb-4"
                    />
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border border-gray-300 p-2 w-1/2 mb-4"
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <button
                        onClick={handleSave}
                        className="bg-white text-[#17469E] rounded p-2 w-[350px] h-[50px] mt-10 text-center text-xl"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

const PractitionerSchedule = () => {
    const [scheduleData, setScheduleData] = useState(initialScheduleData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSchedule, setCurrentSchedule] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleEdit = (id) => {
        const scheduleToEdit = scheduleData.find(schedule => schedule.id === id);
        setCurrentSchedule(scheduleToEdit);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        setScheduleData(scheduleData.filter(schedule => schedule.id !== id));
    };

    const handleSave = (day, fromDate, toDate, status) => {
        if (currentSchedule) {
            setScheduleData(scheduleData.map(schedule =>
                schedule.id === currentSchedule.id
                    ? { ...schedule, day, fromDate, toDate, status }
                    : schedule
            ));
        } else {
            const newId = scheduleData.length + 1;
            const newSchedule = { id: newId, day, fromDate, toDate, status };
            setScheduleData([...scheduleData, newSchedule]);
        }
        setCurrentSchedule(null);
        setIsModalOpen(false);
    };

    // Filtered data based on search term
    const filteredData = scheduleData.filter(schedule => 
        schedule.day.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-5">
            <div>
                <input 
                    type="search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[800px] h-[40px] rounded-lg pl-2" 
                    style={{ borderColor: '#17469E', borderWidth: '1px', borderStyle: 'solid' }} 
                    placeholder="Search by day"
                />
            </div>

            <div className="flex row justify-end">
                <button
                    onClick={() => {
                        setCurrentSchedule(null);
                        setIsModalOpen(true);
                    }}
                    className="h-[50px] w-[350px] bg-[#17469E] text-white flex items-center justify-center rounded text-xl p-2"
                >
                    <span className="text-lg mr-3"><GrAdd /></span> Practitioner Schedule
                </button>
            </div>

            <table className="min-w-full mt-5 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-[#17469E] text-white">
                        <th className="border border-gray-300 p-2 text-center text-xl">No</th>
                        <th className="border border-gray-300 p-2 text-left text-xl">Day</th>
                        <th className="border border-gray-300 p-2 text-left text-xl">From Date</th>
                        <th className="border border-gray-300 p-2 text-left text-xl">To Date</th>
                        <th className="border border-gray-300 p-2 text-left text-xl">Status</th>
                        <th className="border border-gray-300 p-2 text-center text-xl">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((schedule, index) => (
                        <tr key={schedule.id}>
                            <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                            <td className="border border-gray-300 p-2">{schedule.day}</td>
                            <td className="border border-gray-300 p-2">{schedule.fromDate}</td>
                            <td className="border border-gray-300 p-2">{schedule.toDate}</td>
                            <td className="border border-gray-300 p-2">
                                <span
                                    className={`${
                                        schedule.status === 'Active' ? 'text-green-600' : 'text-red-600'
                                    } font-semibold`}
                                >
                                    {schedule.status}
                                </span>
                            </td>
                            <td className="border border-gray-300 p-2 flex justify-center items-center space-x-2">
                                <button
                                    onClick={() => handleEdit(schedule.id)}
                                    className="bg-[#17469E] hover:bg-[#17469E] text-white rounded p-2 flex items-center"
                                >
                                    <FiEdit className="text-white" />
                                </button>
                                {/* <button
                                    onClick={() => handleDelete(schedule.id)}
                                    className="bg-red-600 hover:bg-red-700 text-white rounded p-2 flex items-center"
                                >
                                    <FiTrash className="text-white" />
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => {
                    setIsModalOpen(false);
                    setCurrentSchedule(null);
                }} 
                onSave={handleSave} 
                schedule={currentSchedule} 
               
            />
        </div>
    );
};

// Correct default export
export default PractitionerSchedule;

