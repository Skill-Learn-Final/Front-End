export const userHasRole = (user, role) => {
  if (user === null) return false;

  return user.roles.includes(role);
};
