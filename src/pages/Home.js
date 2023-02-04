import NavBar from '../components/NavBar'
const Home = () => {

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
    }


    return (
        <>
            <NavBar/>
            <div className="Home">
                <h1>This the home page yo.</h1>
                <button className={"primary-button"} onClick={handleClick}>
                    {authToken ? 'Sign Out' : 'Create Account'}
                </button>

            </div>
        </>
    )
}
export default Home
