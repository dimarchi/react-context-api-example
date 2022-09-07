import Child from "./Child";

function ThirdWrapper() {
    return (
        <div>
            <p>Third wrapper, no props.</p>
            <Child />
        </div>
    )
}

export default ThirdWrapper;