import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { Plus, EllipsisVertical } from "lucide-react";

const scheduleData = [
  {
    date: "October 18, 2030",
    time: "9:00 AM",
    title: "Orientation Session",
    participant: "Olivia Smith",
    role: "HR Manager",
    color: "bg-yellow-200",
  },
  {
    date: "October 19, 2030",
    time: "11:00 AM",
    title: "Team Introduction",
    participant: "James Carter",
    role: "Project Lead",
    color: "bg-blue-200",
  },
  {
    date: "October 20, 2030",
    time: "2:00 PM",
    title: "Workplace Policies",
    participant: "Sophia Lee",
    role: "Compliance Officer",
    color: "bg-green-200",
  },
];

const OnboardingCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Calendar Section */}
      <div className="flex flex-col items-center w-full space-y-4">
        <h2 className="text-xl font-semibold text-primary">Select a Date</h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-md p-4"
        />
      </div>

      {/* Schedule Header */}
      <div className="py-4 flex justify-between items-center border-b">
        <h1 className="text-lg font-bold text-primary">Schedule</h1>
        <button className="p-2 bg-primary text-white rounded-full hover:bg-primary/80">
          <Plus size={20} />
        </button>
      </div>

      {/* Schedule List */}
      <div className="mt-4 space-y-4">
        {scheduleData.map((event, index) => (
          <div key={index} className="bg-[#E6EAF0] rounded-lg shadow-sm p-4">
            <div className="flex items-center text-gray-500 text-sm">
              <span>{event.date}</span>
              <span className="mx-2">•</span>
              <span>{event.time}</span>
            </div>

            <div className="flex justify-between items-center mt-2">
              {/* Event Details */}
              <div>
                <h1 className="text-lg font-semibold text-primary">
                  {event.title}
                </h1>
                <div className="flex items-center gap-2 mt-1 text-gray-700">
                  <div className={`h-6 w-6 rounded-full ${event.color}`}></div>
                  <span className="font-medium">{event.participant}</span>
                  <span className="text-sm text-gray-500">({event.role})</span>
                </div>
              </div>

              {/* More Options */}
              <div className="h-10 w-10 rounded-lg bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300">
                <EllipsisVertical size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingCalendar;
