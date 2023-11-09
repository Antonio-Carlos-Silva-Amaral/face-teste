"use client"

import React, { useEffect, useState } from "react";

interface Usuario {
  id: string;
  email: string;
  senha: string;
}

const Teste: React.FC = () => {
  const [users, setUsers] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch("/api/usuarios")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className=" m-5 ">
      {users.map((user) => (
        <div key={user.id} className="grid grid-cols-2 md:grid-cols-1">
          <div>
            <h1 className="font-bold">EMAIL:</h1>
            <p>{user.email}</p>
          </div>
          <div>
            <h1 className="font-bold">SENHA:</h1>
            <p>{user.senha}</p>
          </div>
          <div className="w-[900px] h-[2px] bg-black"></div>
        </div>
      ))}
    </div>
  );
};

export default Teste;
