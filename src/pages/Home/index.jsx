import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/icons8-lixo.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const inputName = useRef();
  const inputEmail = useRef();
  const inputAge = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");
    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";

    setSuccessMessage("Usuário cadastrado com sucesso!");
    setTimeout(() => setSuccessMessage(""), 3000);

    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Email" name="email" type="email" ref={inputEmail} />
        <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
        <button type="button" onClick={createUsers}>Cadastrar</button>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Idade: <span>{user.age}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Excluir" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
