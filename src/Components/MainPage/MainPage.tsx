import { useEffect, useState } from 'react';
import { CardItem } from './CardItem';

type StateProperties = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

export const MainPage = () => {
  const [users, setUsers] = useState<StateProperties[]>([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => {
        throw error;
      });
  }, []);

  console.log(users, 'USERS');

  return (
    <>
      <header>
        <h1>Наша команда</h1>
        <p>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </p>
      </header>
      <main>
        {users.length !== 0 ? (
          <ul>
            {users.map((user) => (
              <CardItem
                id={user.id}
                firstName={user.first_name}
                lastName={user.last_name}
                avatar={user.avatar}
              />
              // <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        ) : (
          <p>No users to display</p>
        )}
      </main>
    </>
  );
};
