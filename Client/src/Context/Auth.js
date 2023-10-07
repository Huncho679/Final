import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

function AuthProvider({ children }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [realName, setRealName] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [users, setUsers] = useState();

  const navigate = useNavigate();

  useEffect(function () {
    async function fetchUsers() {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/users`);
        const data = await res.json();
        setUsers(data[0].users);
      } catch {
        console.log("Error: Couldn't Fetch Users");
      }
    }
    fetchUsers();
  }, []);

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/login");
      }
    },
    [isAuthenticated, navigate]
  );

  function updateUserName(newUserName) {
    setUserName(newUserName);
  }

  function updatePassword(newPassword) {
    setPassword(newPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const search = users.find((user) => {
      return user.userName === userName;
    });

    if (search === undefined) return;

    if (search.password === password && search.userName === userName) {
      setIsAuthenticated(true);
      setRealName(search.name);
      setLoggedInUser(userName);
      navigate("/dashboard");
      setPassword("");
      setUserName("");
    }
  }

  return (
    <authContext.Provider
      value={{
        userName,
        password,
        updatePassword,
        updateUserName,
        handleSubmit,
        setIsAuthenticated,
        isAuthenticated,
        loggedInUser,
        realName,
        setLoggedInUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  const context = useContext(authContext);
  if (context === undefined) throw new Error("Context is undefined :(");
  return context;
}

export { useAuth, AuthProvider };
