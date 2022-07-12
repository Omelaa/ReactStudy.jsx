import {Route, Routes} from 'react-router-dom';

import {MainLayout} from "./layout/MainLayout/MainLayout";
import {AlbumsPage, CommentsPage, PostPage, TodosPage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<PostPage/>}>

                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
