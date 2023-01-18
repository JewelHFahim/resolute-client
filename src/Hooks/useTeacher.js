import { useEffect, useState } from "react";

const useTeacher = (email) => {
  const [isTeacher, setIsTeacher] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://crud-task-server.vercel.app/users/teacher/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsTeacher(data.isTeacher);
        });
    }
  }, [email]);
  return [isTeacher];
};

export default useTeacher;
