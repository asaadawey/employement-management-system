import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import * as Enzyme from "enzyme";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jsdom-global/register";

Enzyme.configure({
  adapter: new Adapter(),
});
