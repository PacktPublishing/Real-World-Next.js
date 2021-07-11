import UserCard from '../components/UserCard';
import users from '../data/users';

export default function Home() {
  return (
    <div>
      <h1 className="dark:text-white text-5xl font-bold text-center">ACME Corporation Employees</h1>
      <div className="grid gap-8 grid-cols-3 mt-14">
        {users.map((user) => (
          <div key={user.id}>
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
}
