import { Sibling } from './Parent';

function Child() {
    return(
        <div>
            <p className='greenp'>This is a message from the child.</p>
            <Sibling.Consumer>
                {(val) => {
                    const {greeting, message} = val;
                    return(
                        <div className="noborder">
                            The parent's message to the child: <span className='bluep'>{message}</span>
                            <p>
                                <button onClick={() => {greeting('The child greets the parent!')}}>Greet parent!</button>
                            </p>
                        </div>
                    )
                }}
            </Sibling.Consumer>
        </div>
    )
}

export default Child;