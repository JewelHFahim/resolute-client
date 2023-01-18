import { useEffect, useState } from "react";

const useStudent = (email) => {
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://crud-task-server.vercel.app/users/student/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsStudent(data.isStudent);
        });
    }
  }, [email]);
  return [isStudent];
};

export default useStudent;
