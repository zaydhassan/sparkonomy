import React from 'react';

export type Status =
  | 'Unpaid'
  | 'Paid'
  | 'Draft'
  | 'Overdue'
  | 'Disputed'
  | 'Partially Paid'
  | 'Awaited';

interface InvoiceCardProps {
  title: string;
  amount: string;
  dueDate: string;
  status: Status;
}

const statusStyles: Record<Status, string> = {
  Unpaid: 'bg-gray-100 text-gray-500',
  Paid: 'bg-green-100 text-green-700',
  Draft: 'bg-gray-50 text-gray-400',
  Overdue: 'bg-red-100 text-red-700',
  Disputed: 'bg-pink-100 text-pink-600',
  'Partially Paid': 'bg-yellow-100 text-yellow-800',
  Awaited: 'bg-yellow-50 text-yellow-600',
};

const InvoiceCard: React.FC<InvoiceCardProps> = ({ title, amount, dueDate, status }) => (
  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white mb-2 shadow-sm">
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-xs text-gray-400">
        {amount}, Due: {dueDate}
      </div>
    </div>
    <span className={`rounded-xl px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  </div>
);

export default InvoiceCard;
