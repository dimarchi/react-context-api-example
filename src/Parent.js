import { createContext, useState } from 'react';
import FirstWrapper from './FirstWarapper';

const Sibling = createContext();

function Parent() {
    const [greeted, setGreeted] = useState('');

    function greetParent(greet = '') {
        setGreeted(greet);
    }

    return(
        <div>
            <p className='bluep'>This is a message from the parent.</p>
            <Sibling.Provider value={{message: 'The parent says hello.', greeting: greetParent}}>
                <p className='greenp'>{ greeted }</p>
                <FirstWrapper />
            </Sibling.Provider>
        </div>
    )
}

export default Parent;
export { Sibling };
