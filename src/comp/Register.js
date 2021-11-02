import React, { useState } from "react";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2109-lsu-web-ft/users/register`,
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: "username",
            password: "password",
          },
        }),
      }
    );
    const parsedResponse = await response.json();
    const token = parsedResponse.data.token;

    window.localStorage.setItem("token", token);
  }

  return (
    <div>
      <h1>Register for the App!</h1>
      <form>
        <input
          value={username}
          placeholder="Choose Your Username!"
          onChange={handleUsername}
        />
        <input
          value={password}
          placeholder="Choose Your Password!"
          onChange={(e)=>setPassword(e.target.value)}

        />
        <button type="submit">Register!</button>
      </form>
    </div>
  );
}

export default Register;
