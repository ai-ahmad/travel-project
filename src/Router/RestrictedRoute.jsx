import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { USERS } from "./path-to-your-context"; // Путь к вашему контексту с информацией о пользователе

// HOC для ограничения доступа к роутам
const RestrictedRoute = ({ roles, fallback, children }) => {
  const { user } = useContext(USERS);

  // Проверяем роль пользователя
  if (roles.includes(user.role)) {
    return children;
  }

  // Если у пользователя нет доступа, перенаправляем его на fallback или показываем ошибку
  return fallback || <Navigate to="/access-denied" />;
};

export default RestrictedRoute;
