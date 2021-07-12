import UserCard from '../components/UserCard';
import users from '../data/users';

export default function Home() {
  return (
    <div className="sm:w-9/12 sm:m-auto pt-16 pb-16">
      <h1 className="dark:text-white text-5xl font-bold text-center">ACME Corporation Employees</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 mt-14 ml-8 mr-8 sm:mr-0 sm:ml-0">
        {users.map((user) => (
          <div key={user.id}>
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
}
