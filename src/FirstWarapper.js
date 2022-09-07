import SecondWrapper from "./SecondWrapper";

function FirstWrapper() {
    return (
        <div>
            <p>First wrapper, no props.</p>
            <SecondWrapper />
        </div>
    )
}

export default FirstWrapper;