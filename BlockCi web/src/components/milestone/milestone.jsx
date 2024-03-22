export default function Milestone({ milestone, onToggle }) {
    return (
      <div>
        <input
          type="checkbox"
          checked={milestone.completed}
          onChange={() => onToggle(milestone)}
        />
        <h3>{milestone.title}</h3>
        <p>{milestone.description}</p>
      </div>
    );
  }