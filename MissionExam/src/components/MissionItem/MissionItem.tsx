import React from 'react';
import { Mission } from '../MissionManagement/MissionManagement';
import './MissionItem.css';

interface MissionItemProps {
    mission: Mission;
    deleteMission: (id: string) => void;
}

const MissionItem: React.FC<MissionItemProps> = ({ mission, deleteMission }) => {
  return (
    <div className='MissionItem'>
      <h3>name:{mission.name}</h3>
      <p>status:{mission.status}</p>
      <p>priority:{mission.priority}</p>
      <p>description:{mission.description}</p>
      <button onClick={() => deleteMission(mission._id!)}>Delete Mission</button>
    </div>
  );
}

export default MissionItem;
