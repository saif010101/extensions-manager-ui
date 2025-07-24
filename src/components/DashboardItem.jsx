export default function DashboardItem({
  img,
  title,
  description,
  state,
  handleToggleSwitch,
  handleRemoveBtn,
}) {
  return (
    <div className="dashboard__item">
      <img src={img} alt="" />
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="actions">
        <button onClick={handleRemoveBtn}>Remove</button>
        <div
          className="toggleSwitch"
          data-state={state ? "active" : ""}
          onClick={handleToggleSwitch}
        >
          <input type="checkbox" />
          <span className="slider "></span>
        </div>
      </div>
    </div>
  );
}
