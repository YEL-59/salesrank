import React from "react";

const scheduleData = [
  {
    time: "1:00",
    label: "Meeting",
    des: "Marketing Strategy Presentation",
    bgColor: "bg-blue-500",
  },
  {
    time: "3:00",
    label: "Lunch Break",
    des: "HR Policy Update Session",
    bgColor: "bg-green-500",
  },
  {
    time: "4:00",
    label: "Project Review",
    des: "Customer Feedback Analysis",
    bgColor: "bg-yellow-500",
  },
  {
    time: "6:00",
    label: "Team Standup",
    des: "Financial Reporting Session",
    bgColor: "bg-red-500",
  },
];

const Schedule = () => {
  return (
    <div className="flex flex-col space-y-6 p-4">
      {scheduleData.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          {/* Time Slot */}
          <div className="text-sm font-semibold w-12 text-right">
            {item.time}
          </div>

          {/* Vertical Dotted Line */}
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full" />
            {index !== scheduleData.length - 1 && (
              <div className="w-px h-16 border-l-2 border-dotted border-gray-400"></div>
            )}
          </div>

          {/* Event Details */}
          <div>
            {/* Badge */}
            <div
              className={`px-4 py-1 text-white text-sm font-medium rounded-full ${item.bgColor}`}
            >
              <p className="text-xs  mt-1">{item.des}</p>
              {item.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
