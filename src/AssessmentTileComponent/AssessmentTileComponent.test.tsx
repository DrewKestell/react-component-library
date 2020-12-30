import React from "react";
import { render } from "@testing-library/react";

import AssessmentTileComponent from "./AssessmentTileComponent";
import { AssessmentTileComponentProps } from "./AssessmentTileComponent.types";

describe("Assessment Tile Component", () => {
  let props: AssessmentTileComponentProps;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<AssessmentTileComponent {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const assessmentTileComponent = getByTestId("assessment-tile-component");

    expect(assessmentTileComponent).toHaveClass("assessment-tile-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const assessmentTileComponent = getByTestId("assessment-tile-component");

    expect(assessmentTileComponent).toHaveClass("assessment-tile-component-primary");
  });
});
