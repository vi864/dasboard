import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import { DashboardCards } from '../../data/data';
import ActivityChart from '../../components/Charts/ActivityChart';
import NetProfitChart from '../../components/Charts/NetProfitChart';
import NetProfitCard from '../../components/NetProfitCard';
import OurServices from '../../components/OurServices';
import RecentOrder from '../../components/RecentOrder';
import CustomerFeedbackList from '../../components/CustomerFeedback';

const Dashboard: React.FC = () => {
  return (
    <>
      <section className="">
        <h2 className="text-black dark:text-white text-2xl font-bold mb-6">Dashboard</h2>
        <div className="flex flex-col md:flex-row gap-6 ">
          {/* Dashboard Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-3 lg:gap-3 lg:col-span-3">
            {DashboardCards?.map((item: any, i: number) => (
              <div key={i}>
                <CardDataStats
                  title={item?.title}
                  total={item?.desc}
                  rate={item?.rate}
                  levelUp={item?.levelUp}
                  bgColor={item?.bgColor}
                >
                  <div className={`${item?.textColor}`}>
                    {item?.icon}
                  </div>
                </CardDataStats>
              </div>
            ))}
          </div>

          {/* Net Profit Card */}
          <div className=" w-full md:w-2/5 rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark lg:col-span-2">
            <NetProfitCard title="Net Profit" total="$ 6759.25" rate="3%" levelUp={true}>
              <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                <NetProfitChart />
              </div>
            </NetProfitCard>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6 my-5">
        <div className="w-full border bg-white p-3 dark:bg-gray-800 dark:border-0 rounded-lg">
          <ActivityChart />
        </div>

        <div className=" w-full md:w-2/5  ">
          <OurServices />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6 my-5">
        <div className="w-full border bg-white p-3 dark:bg-gray-800 dark:border-0 rounded-lg">
          <RecentOrder />
        </div>

        <div className=" w-full md:w-2/5  ">
         <CustomerFeedbackList/>
        </div>
      </section>

    </>
  );
};

export default Dashboard;
