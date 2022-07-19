import { useReduxSelector } from "./useReduxHooks";

const useCurrentRole = () => {
  const { user } = useReduxSelector((state) => state.auth);
  return user ? user.role : "";
};
const useCurrentUser = () => {
  const { user } = useReduxSelector((state) => state.auth);
  return user;
};

export { useCurrentRole, useCurrentUser };
