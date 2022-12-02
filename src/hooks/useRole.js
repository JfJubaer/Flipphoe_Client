import { useEffect, useState } from "react";

const useRole = (email) => {
  const [role, setRole] = useState("");
  console.log("role", email);

  useEffect(() => {
    if (email) {
      fetch(`https://server-kappa-roan.vercel.app/role/${email}`)
        .then((res) => res.json())
        .then((data) => setRole(data.role));
    }
    setRole("");
  }, [email]);
  return [role];
};

export default useRole;
