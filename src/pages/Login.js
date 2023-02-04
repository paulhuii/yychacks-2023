const Login = () => {
    return (
        <div>
            <h1>Log in</h1>

            <form name = "loginForm">
                <p>
                    <label for="email">
                        <span>Email: </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="email" id="useremail" name="useremail"/>
                </p>

                <p>
                    <label for="pwd">
                        <span> Password: </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="password" id="pwd" name="password"/>
                </p>
            </form>

            <div>
                <button type="submit">Create Account</button>
            </div>
        </div>
    )
}
export default Login
