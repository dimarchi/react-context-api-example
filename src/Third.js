import TheButtonComponent from "./TheButtonComponent";
import TheDisplayComponent from "./TheDisplayComponent";

import { createContext, useState } from "react";
export const NumberContext = createContext();

export default function Third() {
    const [changeThisNumber, changeIt] = useState(1);

    function changeNumber() {
        changeThisNumber === 0 ? changeIt(1) : changeIt(0);
    }

    return (
        <NumberContext.Provider value={{ changeThisNumber, changeNumber }}>
            <TheButtonComponent />
            <TheDisplayComponent />
        </NumberContext.Provider>
    );
}