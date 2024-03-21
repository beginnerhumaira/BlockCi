import React, { useState } from 'react';

const Milestones = () => {
  const [milestones, setMilestones] = useState([
    { name: '', image: null },
    { name: '', image: null },
    { name: '', image: null }
  ]);

  const handleNameChange = (e, index) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index].name = e.target.value;
    setMilestones(updatedMilestones);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const updatedMilestones = [...milestones];
    updatedMilestones[index].image = file;
    setMilestones(updatedMilestones);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((milestone, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={milestone.name}
                  onChange={(e) => handleNameChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, index)}
                  accept="image/*"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Milestones;
