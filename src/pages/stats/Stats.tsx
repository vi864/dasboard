import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import ActivityChart from "../../components/Charts/ActivityChart"

const Stats = () => {
    return (
        <div>
            <div className="mx-auto ">
                <Breadcrumb pageName="Stats" />
            </div>
            <div className="max-w-xl h-[70vh] border bg-white p-3 dark:bg-gray-800 dark:border-0 rounded-lg">
                <ActivityChart />
            </div>
        </div>
    )
}

export default Stats
