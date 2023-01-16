import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `https://lens-mart-server-jewelhfahim.vercel.app/users/admin/${email}`,
        {
          headers: {
            // authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;