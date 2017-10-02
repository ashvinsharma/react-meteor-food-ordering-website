import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <table>
                    <tr><input id={'username'} placeholder={'Username'} required={true}/></tr>
                    <tr><input id={'password'} placeholder={'Password'} required={true} type='password'/></tr>
                    <tr><input type={'submit'} title={'Sign In'}/></tr>
                    <button>Sign Up</button>
                </table>
            </form>
        </div>
    )
}

export default Login