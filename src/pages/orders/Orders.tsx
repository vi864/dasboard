import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import RecentOrder from "../../components/RecentOrder"

const Orders = () => {
    return (
        <div>
            <div className="mx-auto ">
                <Breadcrumb pageName="Orders" />
            </div>
            <RecentOrder />
        </div>
    )
}

export default Orders
