import { useAppSelector } from '../../store/hooks';
import { Link, useLocation } from 'react-router-dom';

export const User = () => {
  const { userList } = useAppSelector((state) => state.users);
  const { pathname } = useLocation();
  const currentUserId = Number(pathname.split('/').slice(-1)[0]);
  const currentUser = userList
    ?.filter((user) => user.id === currentUserId)
    .flat();
  // const { firstName, lastName, email, avatar } = currentUser?.[0];
  const firstName = currentUser?.[0].first_name;
  const lastName = currentUser?.[0].last_name;
  const avatar = currentUser?.[0].avatar;
  const email = currentUser?.[0].email;
  console.log(currentUser?.[0].email, 'USER');
  return (
    <>
      <header>
        <nav>
          <Link to={'/'}>НАЗАД</Link>
          <button></button>
        </nav>
        <h2>
          {firstName} {lastName}
        </h2>
        <h3>Партнер</h3>
        <img src={avatar} alt={`Фото пользователя ${firstName} ${lastName}`} />
      </header>
      <p>+7 (954) 333-44-55</p>
      <p>{email}</p>
      <p>
        Клиенты видят в нем эксперта по вопросам разработки комплексных решений
        финансовых продуктов, включая такие аспекты, как организационная
        структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам
        лучше понимать структуру рисков их бизнеса, улучшать процессы за счет
        применения новейших технологий и увеличивать продажи, используя самые
        современные аналитические инструменты.
      </p>
      <p>
        В работе с клиентами недостаточно просто решить конкретную проблему или
        помочь справиться с трудностями. Не менее важно уделять внимание обмену
        знаниями: "Один из самых позитивных моментов — это осознание того, что
        ты помог клиенту перейти на совершенно новый уровень компетентности,
        уверенность в том, что после окончания проекта у клиента есть все
        необходимое, чтобы дальше развиваться самостоятельно".
      </p>
      <p>
        Помимо разнообразных проектов для клиентов финансового сектора, Сорин
        ведет активную предпринимательскую деятельность. Он является
        совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей
        инновационный подход к красоте, а также инвестором других
        бизнес-проектов.
      </p>
    </>
  );
};
