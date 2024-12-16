import exp from "constants"

function Message() {
    const name = 'Daigle'
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hellow World</h1>

}

export default Message;