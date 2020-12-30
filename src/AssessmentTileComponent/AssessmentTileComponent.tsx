import React from "react";

import { AssessmentTileComponentProps } from "./AssessmentTileComponent.types";

import "./AssessmentTileComponent.scss";

const AssessmentTileComponent: React.FC<AssessmentTileComponentProps> = ({ theme }) => (
  <div
    data-assessmenttileid="assessment-tile-component"
    className={`assessment-tile-component assessment-tile-component-${theme}`}
  >
    <div className="assessment-name">Windows Client Assessment</div>
    <div className="failed-recommendations">Failed Recommendations: 12</div>
    <div className="passed-recommendations">Passed Recommendations: 47</div>
  </div>
);

export default AssessmentTileComponent;
