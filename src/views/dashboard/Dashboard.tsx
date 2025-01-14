import {useAppSelector} from "../../config/hooks/useRedux.ts";
const Dashboard = () => {
    const count = useAppSelector((state) => state.counter.value)
    console.log(count)
    return (
        <div>
Dashboard
        </div>
    );
};

export default Dashboard;