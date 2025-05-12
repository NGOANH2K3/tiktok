// 7.
function logger(reducer) {
    return (prevstate, action) => {
        console.group(action.type)
        console.log('prevstate: ',prevstate)
        console.log('action: ',action)
        const nextState = reducer(prevstate,action)
        console.log('nextState: ',nextState)
        console.groupEnd()
        return nextState
    }
}

export default logger