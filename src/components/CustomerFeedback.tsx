import { CustomerFeedback } from "../data/data";

const CustomerFeedbackList = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md  max-h-[450px] overflow-y-auto">
    <h2 className="text-xl  font-semibold p-2 m-4 text-gray-800 dark:text-gray-200 sticky top-0 bg-white dark:bg-gray-800 z-10">
        Customer's Feedback
    </h2>
            <div className="space-y-4">
                {CustomerFeedback?.map((feedback) => (
                    <div
                        key={feedback.id}
                        className="flex items-start gap-4 p-4 shadow-sm border-b-2 border-gray-100 dark:border-gray-700"

                    >
                        <div className="flex-1">
                            <div className="flex flex-col ">
                                <div className="flex gap-2 items-center">

                                    <img
                                        src={feedback.profile}
                                        alt={feedback.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                        {feedback.name}
                                    </h3>
                                </div>
                                <div className="flex items-center space-x-1">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span
                                            key={i}
                                            className={`${i < Number(feedback.rating)
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                                } text-lg`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Feedback Text */}
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {feedback.feedback || "No feedback provided."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerFeedbackList;
