import {useNavigate} from "react-router-dom";

/*
<link rel="stylesheet" type="text/css" href="style.css" />
*/

const CreateAccount = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/dashboard')
    }
    return (
        <div className="create">
            <h1>Create Account</h1>

            <form>
                <p>
                    Required fields are followed by
                    <strong><span aria-label="required">*</span></strong>.
                </p>

                <p>
                    <label for="username">
                        <span>First and last name: </span>
                    </label>
                    <input type="text" id="username" name="username"/>
                </p>

                <p>
                    <label for="email">
                        <span>Email: </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="email" id="useremail" name="useremail"/>
                </p>

                <p>
                    <label for="userphone">
                        <span> Phone number: </span>
                    </label>
                    <input type="tel" id="userphone" name="userphone"/>
                </p>

                <p>
                    <label for="pwd">
                        <span> Password: </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="password" id="pwd" name="password" />
                </p>

                <p>
                    <label for="pwd">
                        <span> Confirm your password: </span>
                        <strong><span aria-label="required">*</span></strong>
                    </label>
                    <input type="password" id="pwd" name="password" />
                </p>
            </form>

            <fieldset>
                <legend> Demographics (optional) </legend>
                Are you a tourist, newcomer, or Calgary resident?
                <p>
                    <div>
                        <label for="tourist">Tourist</label>
                        <input type="radio" id="tourist" name="usertype" value="tourist" checked />
                    </div>

                    <div>
                        <label for="newcomer">Newcomer</label>
                        <input type="radio" id="newcomer" name="usertype" value="newcomer" checked />
                    </div>

                    <div>
                        <label for="resident">Resident</label>
                        <input type="radio" id="resident" name="usertype" value="resident" checked />
                    </div>
                </p>

                <p>
                    <label for="userage">How old are you? </label>
                    <input type="number" id="userage" name="userage" value="userage" checked />
                </p>
            </fieldset>

            <div>
                <button className="create-button" onClick={handleClick}>Create Account</button>
            </div>
        </div>
    )
}

export default CreateAccount
