import React,{useState,useEffect} from 'react'
import MissionForm from '../MissionForm/MissionForm'
import axios from 'axios'
import MissionItem from '../MissionItem/MissionItem'

export interface Mission {
    _id?: string
    name: string
    status: string
    priority: string
    description: string
}
const BASE_URL = "https://reactexambackend.onrender.com/missions/:8692870"

const MissionManagement: React.FC = () => {

    const [Missions, setMission] = useState<Mission[]>([]);

    const getMissions = async () => {
      try {
        const response = await axios.get<Mission[]>(BASE_URL);
        setMission(response.data);
      } catch (error) {
        console.error("error featching data", error);
      }
    };
    useEffect(() => {
      getMissions();
    }, []);
  
    const addMission = async (mission: Mission): Promise<void> => {
      try {
        console.log(mission)
        const response = await axios.post<Mission>(BASE_URL, 
          mission
        );
        getMissions();
        console.log(response.data);
      } catch (error) {
        console.error("cant add mission", error);
      }
    };
  
    const deleteMission = async (id: string): Promise<void> => {
      try {
        console.log(`id:${id}`)
        await axios.delete(`${BASE_URL}/${id}`);
        getMissions();
      } catch (error) {
        console.error("cant delete mission", error);
      }
    };


  return (
    <div>
        <MissionForm addMission={addMission} />

        {Missions.map((mission) => (
          <MissionItem
          key={mission._id}
            mission={mission}
            deleteMission={deleteMission}
          />
        ))}
        
    </div>
  )
}

export default MissionManagement