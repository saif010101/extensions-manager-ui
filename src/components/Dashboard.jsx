import { useState } from "react";
import Dashboardextension from "./DashboardItem.jsx";
import data from "../../assets/data.json";

export default function Dashboard({ btnState }) {
  const [isExtenstionActive, setIsExtenstionActive] = useState(Array(data.length).fill(true));
  const [isRemoved, setIsRemoved] = useState(Array(data.length).fill(false));

  function toggleExtensionState(id) {
    const updatedState = isExtenstionActive.slice();
    updatedState[id] = !updatedState[id];
    setIsExtenstionActive(updatedState);
  }

  function removeExtension (id) {
    const updatedState = isRemoved.slice();
    updatedState[id] = true;
    setIsRemoved(updatedState);
  }

  // filter data based on button state
  const filteredData = data.filter((extension) => {
    if (btnState === 0) return !isRemoved[extension.id];
    else if (btnState === 1)
      return isExtenstionActive[extension.id] && !isRemoved[extension.id];
    else return !isExtenstionActive[extension.id] && !isRemoved[extension.id];
  });

  return (
    <div className="dashboard">
      {filteredData.map((extension) => (
        <Dashboardextension
          key={extension.id}
          img={extension.logo}
          title={extension.name}
          description={extension.description}
          state={isExtenstionActive[extension.id]}
          handleToggleSwitch={() => toggleExtensionState(extension.id)}
          handleRemoveBtn = {() => removeExtension(extension.id)}
        />
      ))}
    </div>
  );
}
