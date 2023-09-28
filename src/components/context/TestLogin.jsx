import React, { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

export function TestAdmin({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  function restAdmin() {
    const accountInfo = localStorage.getItem("accaunt_info");
    const malumot = JSON.parse(accountInfo);
    console.log(malumot);
    if (malumot && malumot.admin === true) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }

  useEffect(() => {
    restAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, restAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdminContext() {
  return useContext(AdminContext);
}
