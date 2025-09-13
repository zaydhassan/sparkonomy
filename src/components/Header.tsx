import avatarImg from '../assets/avatar.png';

const Header = () => (
  <header className="flex items-center justify-between pt-2 pb-4">
    <button className="text-gray-700 text-sm">&lt; Back</button>
    <div className="font-bold text-lg text-gray-800">Dashboard</div>
    <img
      className="w-9 h-9 rounded-full object-cover"
      src={avatarImg}
      alt="User"
    />
  </header>
);

export default Header;