import { useAlert } from "./AlertContext";
let MainContextPage = () => {
    const {toggle} = useAlert();
    return(
        <>
            <h1>Welcome to context example</h1>
            <button onClick={toggle}>Show Alert</button>
        </>
    )
}
export default MainContextPage;