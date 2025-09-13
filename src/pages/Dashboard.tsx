import Header from '../components/Header';
import CreateInvoiceCard from '../components/CreateInvoiceCard';
import TimePeriodTabs from '../components/TimePeriodTabs';
import SummaryCards from '../components/SummaryCards';
import IncomeTrendChart from '../components/IncomeTrendChart';
import InvoiceList from '../components/InvoiceList';

const Dashboard = () => (
  <main className="bg-pink-100 min-h-screen px-2 py-4 flex justify-center">
    <div className="w-full max-w-sm flex flex-col gap-4">
      <Header />
      <CreateInvoiceCard />
      <TimePeriodTabs />
      <SummaryCards />
      <IncomeTrendChart />
      <InvoiceList />
      <footer className="text-center text-xs text-gray-400 mt-8 select-none">
        <span>Spark</span>
        <span className="text-purple-500 font-semibold">nomy</span>
        <span> sparking the creator economy</span>
      </footer>
    </div>
  </main>
);

export default Dashboard;