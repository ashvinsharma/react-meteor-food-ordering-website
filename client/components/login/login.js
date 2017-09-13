import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <table>
                    <tr><input id={'username'} placeholder={'Username'} required={true}/></tr>
                    <tr><input id={'password'} placeholder={'Password'} required={true} type='password'/></tr>
                    <tr><input type={'submit'} title={'Login'}/></tr>
                </table>
            </form>
        </div>
    )
}

export default Login