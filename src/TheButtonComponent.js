import { useContext } from 'react';
import { NumberContext } from './Third';

function TheButtonComponent() {
    const { changeNumber } = useContext(NumberContext)
    return (
        <div className="half">
            <button onClick={() => changeNumber()}>Click me</button>
        </div>
    );
}

export default TheButtonComponent;