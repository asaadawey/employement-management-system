import { render, screen } from "@testing-library/react";
import { mount } from "enzyme";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./error.component";

const EmptyComponent = () => null;

describe("ErrorPage & ErrorBoundary", () => {
  it("should view the error page when error is thrown", () => {
    const wrapper = mount(
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <EmptyComponent />
      </ErrorBoundary>
    );
    const error = new Error("test");

    wrapper.find(EmptyComponent).simulateError(error);
    expect(wrapper.find("Error")).not.toBeNull();
  });
});
