import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ArrowDownToLine,
  Trash2,
  Star,
  EllipsisVertical,
  CornerUpLeft,
  CornerUpRight,
} from "lucide-react";

// Sample Messages Data
const messages = [
  {
    id: 1,
    sender: "Emily Carter",
    email: "emily@company.com",
    subject: "Update on Team Meeting",
    preview: "Please see the new agenda for tomorrow's meeting attached.",
    body: `Dear Team,
    
    I hope this message finds you well. Please review the attached agenda for tomorrow's meeting.`,
    timestamp: "Oct 14, 9:00 AM",
  },
  {
    id: 2,
    sender: "Jessica Davis",
    email: "j.davis@company.com",
    subject: "Budget Approval Needed",
    preview: "We need to finalize the budget for the upcoming quarter.",
    body: `Dear Team,

    Please review the proposed budget carefully and provide your feedback by Wednesday.`,
    timestamp: "Oct 8, 1:30 PM",
  },
];

const Inbox = () => {
  const [selectedMessage, setSelectedMessage] = useState(messages[0]); // Default first message

  return (
    <div className="grid grid-cols-12 gap-5 bg-white rounded">
      {/* Left Sidebar - Message List */}
      <div className="col-span-4 p-3 border-r">
        <div className="mb-3">
          <div className="flex gap-2">
            <Input type="email" placeholder="Search email" />
            <div className="h-9 w-10 bg-slate-400 rounded"></div>
            <div className="h-9 w-10 bg-slate-400 rounded"></div>
          </div>
        </div>

        {/* Messages List */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => setSelectedMessage(msg)}
            className={`cursor-pointer p-3 rounded-lg border-b ${
              selectedMessage?.id === msg.id
                ? "bg-gray-100"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex gap-2">
              <div className="h-10 w-10 rounded-full bg-[#FCE38A]"></div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h1 className="text-[14px] font-semibold">{msg.sender}</h1>
                  <p className="text-[12px] text-gray-500">{msg.timestamp}</p>
                </div>
                <h2 className="text-[12px] font-medium py-1">{msg.subject}</h2>
                <p className="text-[12px] text-gray-500">{msg.preview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar - Message Content */}
      <div className="col-span-8 bg-gray-100 p-5 rounded-lg">
        {selectedMessage ? (
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex justify-between">
              <div>
                <h1 className="text-primary font-semibold">
                  {selectedMessage.sender}
                </h1>
                <p className="text-sm text-gray-500">{selectedMessage.email}</p>
              </div>
              <p className="text-sm text-gray-500">
                {selectedMessage.timestamp}
              </p>
            </div>

            <h1 className="text-lg font-semibold py-3">
              {selectedMessage.subject}
            </h1>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedMessage.body}
            </p>

            <div className="flex gap-3 py-4">
              <button className="flex items-center gap-2 text-blue-600">
                <CornerUpLeft /> Reply
              </button>
              <button className="flex items-center gap-2 text-blue-600">
                <CornerUpRight /> Forward
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a message to view</p>
        )}
      </div>
    </div>
  );
};

export default Inbox;
