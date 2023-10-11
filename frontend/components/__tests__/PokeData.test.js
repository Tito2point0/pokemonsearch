import React from "react";
import { render } from "@testing-library/react";
import PokeData from "../childComponents/PokeData";


test('test for presence of pokedata',() => {
 const {getByText} =
    render(<PokeData />)
}) 