import { useReduxSelector } from "hooks/useReduxHooks";
import type { User } from "types/AuthTypes";

export default function useAuth() {
  return useReduxSelector((state) => state.auth);
}
