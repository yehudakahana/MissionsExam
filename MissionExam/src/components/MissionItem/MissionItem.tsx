import React from 'react';
import { Mission } from '../MissionManagement/MissionManagement';
import './MissionItem.css';

interface MissionItemProps {
    mission: Mission;
    deleteMission: (id: string) => void;
    updateMission:(_id:string) => void;
}

const MissionItem: React.FC<MissionItemProps> = ({ mission, deleteMission, updateMission }) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Pending":
        return "orange";
      case "In Progress":
        return "blue";
      case "Completed":
        return "green";
      default:
        return "black";
    }
  };

  return (
    <div className='MissionItem' style={{ backgroundColor: getStatusColor(mission.status) }}>
      <h3>name:{mission.name}</h3>
      <p>status:{mission.status}</p>
      <p>priority:{mission.priority}</p>
      <p>description:{mission.description}</p>
      <button className='deleteBtn' onClick={() => deleteMission(mission._id!)}>Delete Mission</button>
      <button className='updateBtn' onClick={() => updateMission(mission._id!)}>update Mission</button>
    </div>
  );
}

export default MissionItem;
