import { useState } from 'react';
const CrownIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <path d="M5 9l3-4 4 7 4-7 3 4" stroke="#a855f7" strokeWidth="2" fill="none" />
    <rect x="6" y="18" width="12" height="2" rx="1" fill="#a855f7" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="7" width="18" height="14" rx="3" stroke="#9ca3af" strokeWidth="2" fill="none"/>
    <path d="M16 3v4M8 3v4" stroke="#9ca3af" strokeWidth="2" />
  </svg>
);

const tabs = [
  { label: '1Month', icon: null },
  { label: '3Months', icon: null },
  { label: '1Year', icon: <CrownIcon /> },
  { label: 'Custom', icon: <CalendarIcon /> },
];

const TimePeriodTabs = () => {
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 px-5 py-4 mb-4 shadow w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-500 text-sm font-medium">Time Period</span>
        <span className="text-gray-300 text-xs">dd:mm:yyyy - dd:mm:yyyy</span>
      </div>
      <div className="grid grid-cols-2 gap-2 md:flex md:gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`flex items-center justify-center font-medium px-3 py-2 rounded-full border
              transition-colors duration-200
              ${idx === activeIdx 
                ? 'bg-purple-100 border-purple-500 text-purple-600 shadow'
                : 'bg-gray-50 border-gray-200 text-gray-500'
              }
              text-sm w-full`}
            onClick={() => setActiveIdx(idx)}
          >
            {tab.icon && <span className="mr-1">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      {activeIdx === 3 && (
        <div className="mt-3 flex gap-2 items-center">
          <input
            className="w-28 p-1 text-xs border border-gray-200 rounded outline-none"
            placeholder="dd-mm-yyyy"
          />
          <span className="text-gray-300">to</span>
          <input
            className="w-28 p-1 text-xs border border-gray-200 rounded outline-none"
            placeholder="dd-mm-yyyy"
          />
        </div>
      )}
    </div>
  );
};

export default TimePeriodTabs;