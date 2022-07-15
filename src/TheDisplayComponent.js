import { useContext } from 'react';
import { NumberContext } from './Third';

function TheDisplayComponent() {
    const context = useContext(NumberContext);
    return (
        <div className="half">
            The data from the sibling component: {context.foo}.
        </div>
    );
}

export default TheDisplayComponent;