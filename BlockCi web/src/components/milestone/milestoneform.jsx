import React, { useState } from 'react';

export default function MilestoneForm() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
   const [milestones, setMilestones] = useState([{title:title, description:description, completed:completed }]);
  
 
  
   const handleSubmit = () => {
    const newMilestone = { title:"", description:"", completed:"" };
    setMilestones([...milestones, newMilestone]);
    setTitle('')
    setDescription('')
    setCompleted(false)
  };

  const updatetitle=(e)=>{
    setTitle(e)
    setMilestones(...milestones);
  }

  return (
    <div>
        {milestones.map((milestone, index) => (
        <div key={index}>
       
<div>
      <input
        type="text"
        placeholder="Milestone Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => updatetitle(e.target.value)}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <input type='button' value={'add'} onClick={handleSubmit}/>
      </label>
      </div>
      </div>
   ))}
{/* 
<div>
      <input
        type="text"
        placeholder="Milestone Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <input type='button' value={'add'} onClick={handleSubmit}/>
      </label>
      </div> */}
       {/* Render Input Fields for Milestones
       {milestones.map((milestone, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Milestone Title"
            value={milestone.title}
            onChange={(e) =>
              setMilestones((prevMilestones) =>
                prevMilestones.map((m, i) =>
                  i === index ? { ...m, title: e.target.value } : m
                )
              )
            }
          />
          <textarea
            placeholder="Description"
            value={milestone.description}
            onChange={(e) =>
              setMilestones((prevMilestones) =>
                prevMilestones.map((m, i) =>
                  i === index ? { ...m, description: e.target.value } : m
                )
              )
            }
          />
          <label>
            Completed:
            <input
              type="checkbox"
              checked={milestone.completed}
              onChange={(e) =>
                setMilestones((prevMilestones) =>
                  prevMilestones.map((m, i) =>
                    i === index ? { ...m, completed: e.target.checked } : m
                  )
                )
              }
            />
          </label>
        </div>
      ))} */}
    </div>
  );
}
