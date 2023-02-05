const Login = () => {
    return (
        <div>
            <h1 className='loginh1'>Log in</h1>

            {/* <div class="row">
                <div class="column">
                    
                </div>
                
                <div class="column">
                    
                </div>
            </div> */}
            
            <div>
                <img src="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview" alt="google" height="35" name="google" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="facebook" height="35" name="facebook" ></img>
            </div>

            <form className="loginForm">
                <p>
                    <label for="email">
                        <span>Email: </span>
                    </label>
                    <input type="email" id="useremail" name="useremail"/>
                </p>

                <p>
                    <label for="pwd">
                        <span> Password: </span>
                    </label>
                    <input type="password" id="pwd" name="password"/>
                </p>
            </form>

            <div className="wrapper1">
                <button type="submit">Log in</button>
            </div>
        </div>
    )
}
export default Login