import { FC } from 'react';

type Status =
  | 'Unpaid'
  | 'Paid'
  | 'Draft'
  | 'Overdue'
  | 'Disputed'
  | 'Partially Paid'
  | 'Awaited';

const statusStyles: Record<Status, string> = {
  Unpaid: 'bg-gray-100 text-gray-500',
  Paid: 'bg-green-100 text-green-700',
  Draft: 'bg-gray-100 text-gray-400 border border-gray-300',
  Overdue: 'bg-red-100 text-red-700',
  Disputed: 'bg-pink-100 text-pink-600',
  'Partially Paid': 'bg-yellow-100 text-yellow-800',
  Awaited: 'bg-yellow-50 text-yellow-600 border border-yellow-100',
};
const BellIcon = ({ color = "#bbb" }) => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path d="M12 21a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V10a6 6 0 0 0-5-5.91V4a1 1 0 1 0-2 0v.09A6 6 0 0 0 6 10v5l-1.29 1.29A1 1 0 0 0 6 19h12a1 1 0 0 0 .71-1.71L18 15z" stroke={color} strokeWidth="1.5" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="#a855f7" strokeWidth="2" fill="none"/></svg>
);

interface InvoiceCardProps {
  title: string;
  amount: string;
  dueDate: string;
  status: Status;
  index?: number;
}

const InvoiceCard: FC<InvoiceCardProps> = ({ title, amount, dueDate, status, index }) => (
  <div className="bg-white rounded-2xl flex items-center justify-between px-4 py-3 mb-2 shadow-sm transition hover:shadow-md">
    <div>
      <div className="font-medium text-[15px]">{title}</div>
      <div className="text-xs text-gray-400">{amount}, Due: {dueDate}</div>
    </div>
    
    <div className="flex items-center gap-2">

      {index === 0 ? (
        <button className="bg-purple-500 text-white text-xs px-4 py-1.5 rounded-full font-semibold shadow-sm flex items-center gap-1">
          Update Status
          <span>
            <ArrowIcon />
          </span>
        </button>
      ) : status === "Unpaid" ? (
        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-semibold">
          Unpaid
        </span>
      ) : status === "Disputed" ? (
        <span className="bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-xs font-semibold">
          Disputed
        </span>
      ) : status === "Paid" ? (
        <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-semibold">
          Paid
        </span>
      ) : status === "Partially Paid" ? (
        <span className="bg-yellow-100 text-yellow-900 px-4 py-1.5 rounded-full text-xs font-semibold">
          Partially Paid
        </span>
      ) : status === "Overdue" ? (
        <>
          <span className="bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-semibold mr-1">
            Overdue
          </span>
          <BellIcon color="#ee9191" />
        </>
      ) : status === "Awaited" ? (
        <>
          <span className="bg-yellow-50 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-semibold mr-1 border border-yellow-300">
            Awaited
          </span>
          <BellIcon color="#eab308" />
        </>
      ) : status === "Draft" ? (
        <span className="bg-gray-100 text-gray-500 px-4 py-1.5 rounded-full text-xs font-semibold border border-gray-300 flex items-center gap-1">
          Draft
          <svg width="15" height="15" fill="none" viewBox="0 0 20 20"><rect x="3" y="8" width="14" height="8" rx="2" stroke="#bdbdbd" /><rect x="6.5" y="11.5" width="7" height="1" rx=".5" fill="#bdbdbd" /></svg>
        </span>
      ) : null}
    </div>
  </div>
);

export default InvoiceCard;