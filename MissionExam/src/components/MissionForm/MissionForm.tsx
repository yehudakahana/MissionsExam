import React, { useState } from 'react'
// import './MissionForm.css'
import { Mission } from '../../components/MissionManagement/MissionManagement'

interface MissionFormProps {
    addMission: (mission: Mission) => void
}

const MissionForm: React.FC<MissionFormProps> = ({ addMission }) => {
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Pending')
    const [priority, setPriority] = useState('Low')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const mission: Mission = {
            name,
            description,
            status,
            priority
        }
        addMission(mission)
        setName('')
        setDescription('')
        setStatus('Pending')
        setPriority('Low')
    }

    return (
        <div className="MissionForm">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select 
                    name="status" 
                    id="status" 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <select 
                    name="priority" 
                    id="priority" 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Mission</button>
            </form>
        </div>
    )
}

export default MissionForm



// import React, { useState } from "react";
// import { Mission } from "../../components/MissionManagement/MissionManagement";
// import "./MissionForm.css";
// interface MissionFormProps {
//   addMission: (mission: Mission) => void;
// }
// const MissionForm: React.FC<MissionFormProps> = ({ addMission }) => {
//   const [formData, setFormData] = useState<Mission>({
//     name: "",
//     status: "",
//     priority: "",
//     description: "",
//   });
//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // if (
//     //   !formData.name ||
//     //   !formData.description ||
//     //   !formData.status ||
//     //   !formData.priority
//     // ) {
//     //   return;
//     // }
//     addMission(formData);
//     setFormData({
//       name: "",
//       status: "",
//       priority: "",
//       description: "",
//     });
//   };
//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>
//             <input
//               type="text"
//               name="name"
//               placeholder="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </label>
//           <label htmlFor="">
//             <select
//               name="status"
//               value={formData.status}
//               onChange={(e) => handleChange(e)}
//             >
//               <option value="Pending">Pending</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//             </select>
//           </label>
//           <label htmlFor="">
//             <select
//               name="priority"
//               value={formData.priority}
//               onChange={(e) => handleChange(e)}
//             >
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//             </select>
//           </label>
//           <label>
//             <input
//               type="text"
//               name="description"
//               placeholder="description"
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default MissionForm;




