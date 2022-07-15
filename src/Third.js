import TheButtonComponent from "./TheButtonComponent";
import TheDisplayComponent from "./TheDisplayComponent";

import { createContext, useState } from "react";
export const NumberContext = createContext();

export default function Third() {
    const [foo, changeIt] = useState(1);

    function changeNumber() {
        foo === 0 ? changeIt(1) : changeIt(0);
    }

    return (
        <NumberContext.Provider value={{ foo, changeNumber }}>
            <TheButtonComponent />
            <TheDisplayComponent />
        </NumberContext.Provider>
    );
}