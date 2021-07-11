import ThemeSwitch from '../ThemeSwitch';

function TopBar() {
  return (
    <div className="w-full p-2 bg-green-500">
      <div className="w-10/12 m-auto">
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default TopBar;
