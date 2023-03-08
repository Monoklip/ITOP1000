import { Route, Routes} from 'react-router-dom';
import Money from './Money/Money';

const Task = () => {
    return(
        <Routes>
            <Route path={'/ITOP1000'} element={<Money/>}></Route>
        </Routes>
    )
};

export default Task;