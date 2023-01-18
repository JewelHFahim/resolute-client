import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://crud-task-server.vercel.app/users/admin/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
        });
    }
  }, [email]);
  return [isAdmin];
};

export default useAdmin;
