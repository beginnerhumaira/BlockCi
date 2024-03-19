import Milestone from './milestone'
export default function MilestoneList({ milestones, onToggle }) {
    return (
      <div>
        {milestones.map((milestone, index) => (
          <Milestone key={index} milestone={milestone} onToggle={onToggle} />
        ))}
      </div>
    );
  }
  