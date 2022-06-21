// S = State
// T = type
// K = key
// V = value
// E = Element

type numOrStr = number | string

function useState<S extends numOrStr = string>() {
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}

const newState = useState<string>()

newState.setState(123)
console.log(newState.getState())


newState.setState('foo')
console.log(newState.getState())

newState.setState(true)
console.log(newState.getState())
