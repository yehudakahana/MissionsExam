import React from 'react'

const MissionForm = () => {
  return (
    <div className='missionForm'>
        <form >
            <input type="text" placeholder='name' />
             <select name="status" id="status">
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
             </select>
             <select name="priority" id="priority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
             </select>
            <input type="text" placeholder='description' />
            <button type='submit'>Add</button>
        </form>

    </div>
  )
}

export default MissionForm