import ThirdWrapper from "./ThirdWrapper";

function SecondWrapper() {
    return (
        <div>
            <p>Second wrapper, no props.</p>
            <ThirdWrapper />
        </div>
    )
}

export default SecondWrapper;