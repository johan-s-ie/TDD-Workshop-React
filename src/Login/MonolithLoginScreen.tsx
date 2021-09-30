import React, { ReactElement, useEffect, useState } from 'react'

export const MonolithLoginScreen = (): ReactElement => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [activity, setActivity] = useState<string>('')

    useEffect(() => {
        fetch('https://www.boredapi.com/api/activity/')
            .then(body => body.json())
            .then(response => setActivity(response.activity))
    }, [])

    const onLogin = () => {

    }

    return <div>
        <h2>{activity}</h2>
        <input placeholder={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
        <input placeholder={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={onLogin}>Login</button>
    </div>
}
