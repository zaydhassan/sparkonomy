const SummaryCards = () => (
  <div className="grid grid-cols-3 gap-2 my-2 select-none">
    <div className="bg-white rounded-md p-2.5 text-center shadow">
      <div className="text-[11px] text-gray-500">Total Earnings</div>
      <div className="font-bold text-purple-700 text-base mt-1">₹1,25,000</div>
    </div>
    <div className="bg-white rounded-md p-2.5 text-center shadow">
      <div className="text-[11px] text-gray-500">Payment Awaited</div>
      <div className="font-bold text-pink-600 text-base mt-1">₹25,000</div>
    </div>
    <div className="bg-white rounded-md p-2.5 text-center shadow">
      <div className="text-[11px] text-gray-500">Payment Overdue</div>
      <div className="font-bold text-red-600 text-base mt-1">₹25,000</div>
    </div>
  </div>
);

export default SummaryCards;