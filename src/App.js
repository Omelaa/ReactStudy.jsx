import {Comments, Posts} from "./components";

const App = () => {
    return (
        <div style={{display: 'flex'}}>
            <div>
                <h2>- Posts -</h2>
                <Posts/>
            </div>
            <div>
                <h2>- Comments -</h2>
            <Comments/>
            </div>
        </div>
    );
};

export default App;
