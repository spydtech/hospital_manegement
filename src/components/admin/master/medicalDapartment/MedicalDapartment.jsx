import React, { useState, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";
import { BsPersonFillDown } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FiEdit, FiTrash } from 'react-icons/fi';

const initialHospitalData = [
    { id: 1, depId: 10134567890, departmentName: "Emergency Department" },
    { id: 2, depId: 10234567890, departmentName: "Cardiology" },
    { id: 3, depId: 10334567890, departmentName: "Pediatrics" },
    { id: 4, depId: 10434567890, departmentName: "Orthopedics" },
    { id: 5, depId: 10534567890, departmentName: "Neurology" }
];

const AddDepartmentModal = ({ isOpen, onClose, onSave }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSave = () => {
        onSave(inputValue);
        setInputValue('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
            <div className=" p-10 rounded-lg bg-white w-[800px] h-full flex flex-col">
                <button onClick={onClose} className="absolute top- 4 right-[340px] text-xl text-gray-700">
                    <IoClose className="text-[#17469E] text-2xl"/>
                </button>
                <h1 className="text-2xl text-[#17469E] flex mb-1"> <BsPersonFillDown className="mr-2 mt-1"/> New Medical Department</h1>
                <div className="flex flex-col items-center justify-center h-full bg-[#17469E] w-full">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Department"
                        className="border border-gray-300 p-2 w-1/2 mb-4"
                    />
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

const EditDepartmentModal = ({ isOpen, onClose, onSave, department }) => {
    const [inputValue, setInputValue] = useState(department ? department.departmentName : '');

    useEffect(() => {
        if (department) {
            setInputValue(department.departmentName);
        } else {
            setInputValue('');
        }
    }, [department]);

    const handleSave = () => {
        onSave(inputValue);
        setInputValue('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="p-10 rounded-lg bg-white w-[800px] h-full flex flex-col">
                <button onClick={onClose} className="absolute top-4 right-[340px] text-xl text-gray-700">
                    <IoClose className="text-[#17469E] text-2xl"/>
                </button>
                <h1 className="text-2xl text-[#17469E] flex mb-1">  <BsPersonFillDown className="mr-2 mt-1"/> Edit Medical Department</h1>
                <div className="flex flex-col items-center justify-center h-full bg-[#17469E] w-full">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Department" 
                        className="border border-gray-300 p-2 w-1/2 mb-4"
                    />
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

const MedicalDapartment = () => {
    const [hospitalData, setHospitalData] = useState(initialHospitalData);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentDepartment, setCurrentDepartment] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleEdit = (id) => {
        const departmentToEdit = hospitalData.find(department => department.id === id);
        setCurrentDepartment(departmentToEdit);
        setIsEditModalOpen(true);
    };

    const handleDelete = (id) => {
        setHospitalData(hospitalData.filter(department => department.id !== id));
    };

    const handleSave = (departmentName) => {
        if (currentDepartment) {
            setHospitalData(hospitalData.map(department =>
                department.id === currentDepartment.id
                    ? { ...department, departmentName }
                    : department
            ));
        } else {
            const newId = hospitalData.length + 1;
            const newDepId = 10000000000 + newId;
            const newDepartment = { id: newId, depId: newDepId, departmentName };
            setHospitalData([...hospitalData, newDepartment]);
        }
        setCurrentDepartment(null);
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
    };

    const filteredData = hospitalData.filter(department => 
        department.departmentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        department.depId.toString().includes(searchTerm)
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
                    placeholder="Search here"
                />
            </div>

            <div className="flex row justify-end bg-white">
                <button
                    onClick={() => {
                        setCurrentDepartment(null);
                        setIsAddModalOpen(true);
                    }}
                    className="h-[50px] w-[300px] bg-[#17469E] text-white flex items-center justify-center rounded text-xl p-2"
                >
                    <span className="text-2xl mr-3"><GrAdd /></span> Medical Department
                </button>
            </div>

            <table className="min-w-full mt-5 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-[#17469E] text-white">
                        <th className="border border-gray-300 p-2 text-left text-lg">ID</th>
                        <th className="border border-gray-300 p-2 text-left text-lg">Department</th>
                        <th className="border border-gray-300 p-2 text-center text-lg">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((hospital) => (
                        <tr key={hospital.id}>
                            <td className="border border-gray-300 p-2">{hospital.depId}</td>
                            <td className="border border-gray-300 p-2">{hospital.departmentName}</td>
                            <td className="border border-gray-300 p-2 flex justify-center items-center space-x-2">
                                <button
                                    onClick={() => handleEdit(hospital.id)}
                                    className="bg-[#17469E] hover:bg-[#17469E] text-white rounded p-2 flex items-center"
                                >
                                    <FiEdit className="text-white" />
                                </button>
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <AddDepartmentModal 
                isOpen={isAddModalOpen} 
                onClose={() => setIsAddModalOpen(false)} 
                onSave={handleSave} 
            />
            <EditDepartmentModal 
                isOpen={isEditModalOpen} 
                onClose={() => {
                    setIsEditModalOpen(false);
                    setCurrentDepartment(null);
                }} 
                onSave={handleSave} 
                department={currentDepartment} 
            />
        </div>
    );
};

export default MedicalDapartment;
