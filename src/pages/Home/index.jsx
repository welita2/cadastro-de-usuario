import "./style.css";
import Trash from "../../assets/icons8-lixo.svg";

function Home() {
  const users = [
    {
      id: "ehf834879",
      name: "Welita",
      age: 20,
      email: "wel@gmail.com",
    },
    {
      id: "ef83fv5879",
      name: "Maria",
      age: 33,
      email: "ali@gmail.com",
    },
    {
      id: "wf85rv5879",
      name: "Luiz",
      age: 34,
      email: "lui@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:<span>{user.name} </span></p>
            <p>Idade:<span>{user.age} </span></p>
            <p>Email:<span> {user.email} </span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
