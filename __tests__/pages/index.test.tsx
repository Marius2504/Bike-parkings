import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../src/pages/index";

describe("Bikes page - Gent Dampoort", () => {
  it("should render", () => {
    const mockDampoortData = {
      results: [
        {
          name: "Gent Dampoort",
          bikes_available: 10,
          bikes_in_use: 5,
        },
      ],
    };
    const mockSintData = {
      results: [
        {
          name: "Sint Pieters",
          bikes_available: 15,
          bikes_in_use: 3,
        },
      ],
    };
    render(<Home Dampoort={mockDampoortData} Sint={mockSintData} />);

    const heading = screen.getByText("Blue Bike deelfietsen Gent Dampoort");
    const pName = screen.getByText("Name: Gent Dampoort")
    const pAmount = screen.getByText("Amount of available bikes: 10")
    const pTotal = screen.getByText("Total amount of bikes: 15")
    expect(heading).toBeInTheDocument();
    expect(pName).toBeInTheDocument();
    expect(pAmount).toBeInTheDocument();
    expect(pTotal).toBeInTheDocument();
  });
});


describe("Bikes page - Sint Pieters", () => {
    it("should render", () => {
      const mockDampoortData = {
        results: [
          {
            name: "Gent Dampoort",
            bikes_available: 10,
            bikes_in_use: 5,
          },
        ],
      };
      const mockSintData = {
        results: [
          {
            name: "Sint Pieters",
            bikes_available: 15,
            bikes_in_use: 3,
          },
        ],
      };
      render(<Home Dampoort={mockDampoortData} Sint={mockSintData} />);
  
      const heading = screen.getByText("Blue Bike deelfietsen Gent Dampoort");
      const pName = screen.getByText("Name: Sint Pieters")
      const pAmount = screen.getByText("Amount of available bikes: 15")
      const pTotal = screen.getByText("Total amount of bikes: 18")
      expect(heading).toBeInTheDocument();
      expect(pName).toBeInTheDocument();
      expect(pAmount).toBeInTheDocument();
      expect(pTotal).toBeInTheDocument();
    });
  });