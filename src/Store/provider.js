import Context from './context'
import { useReducer } from 'react' /**sử dụng khi state ở phạm vi toan cục */
import reducer, {initState} from './reducer'
import logger from './logger'
function Provider({children})/* ôm tất cả ứng dụng */{
    const [state,dispatch] = useReducer(logger(reducer), initState)
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider

// 2. cho phép cung cấp store xuống tát cả component qua context