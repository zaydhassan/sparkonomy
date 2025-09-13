import InvoiceCard from './InvoiceCard';
import type { Status } from './InvoiceCard';

const INVOICES: { title: string; amount: string; dueDate: string; status: Status }[] = [
  { title: 'Client Name', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Unpaid' },
  { title: 'Income Trend', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Disputed' },
  { title: 'Income Trend', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Paid' },
  { title: 'Income Trend', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Paid' },
  { title: 'Income Trend', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Partially Paid' },
  { title: 'Income Trend', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Overdue' },
  { title: 'Income Trend', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Awaited' },
  { title: 'Income Trend', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Draft' },
  { title: 'Income Trend', amount: '₹1,25,000', dueDate: '2024-06-15', status: 'Paid' },
];

const InvoiceList = () => (
  <div>
    <div className="font-medium text-gray-700 mb-2 text-sm">Your Invoices</div>
    {INVOICES.map((inv, i) => (
      <InvoiceCard key={i} {...inv} />
    ))}
  </div>
);

export default InvoiceList;