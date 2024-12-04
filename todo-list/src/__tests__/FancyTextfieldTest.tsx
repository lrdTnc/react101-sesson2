import * as React from "react";
import {render, screen} from "@testing-library/react";
import {FancyTextfield} from "../FancyTextfield.tsx";
import {userEvent} from "@testing-library/user-event";

describe("Test suite for fancy textfield", () => {
   it("should render the FancyTextField component", () => {
       render(<FancyTextfield limit={50}></FancyTextfield>)
       const input = screen.getByRole('textbox')
       expect(input).toBeTruthy();
   });
    it("should increase counter", async () => {
        render(<FancyTextfield limit={50}></FancyTextfield>)
        const input = screen.getByRole('textbox')
        expect(input).toBeTruthy();

        await userEvent.type(input, 'Hello World')
        const counter = screen.getByText('11/50')
        expect(counter).toBeTruthy();
    });
});