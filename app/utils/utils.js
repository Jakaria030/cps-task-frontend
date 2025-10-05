export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (token && user && user.email) return { token, user };

  return null;
};
