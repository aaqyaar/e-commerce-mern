import React from "react";
import Image from "next/image";
import { ShoppingCartIcon, LoginIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useReduxDispatch, useReduxSelector } from "hooks/useReduxHooks";
import { useCurrentRole, useCurrentUser } from "hooks/useCurrent";
import { logout } from "redux/thunks/auth.thunk";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { isAuthenticated, token } = useReduxSelector((state) => state.auth);
  const dispatch = useReduxDispatch();
  const userRole = useCurrentRole();
  const user = useCurrentUser();
  const handleLogout = async () => {
    const res: any = await dispatch(logout(token));
    if (res.type === "auth/logout/fulfilled") {
      toast.success("Successfully logged out");
      useRouter().push("/login");
      window.location.reload();
    } else if (res.type === "auth/logout/rejected") {
      toast.error(res.payload.message);
    }
  };
  return (
    <div className="navbar shadow-lg bg-neutral pr-6 py-4 text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link href="/" passHref>
            <a className="btn btn-ghost normal-case text-xl md:text-2xl">
              Somali Shop
            </a>
          </Link>
        </div>
        <div className="flex gap-4">
          <div>
            <Link href="/shop" passHref>
              <a className="btn btn-ghost normal-case text-md md:text-xl">
                Shop
              </a>
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <ShoppingCartIcon className="w-6 h-6 text-gray-200" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 py-1 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span>Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-dark  btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 h-10 rounded-full">
                  <Image
                    width={"40px"}
                    height={"40px"}
                    src="https://placeimg.com/80/80/people"
                  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 font-space shadow bg-base-100 rounded-box w-52"
              >
                <h1 className="text-lg font-bold text-center font-inter text-neutral-content">
                  {user?.name}
                </h1>
                <li className="menu-item">
                  <Link href="/profile" passHref>
                    <a className="menu-link">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </Link>
                </li>

                {userRole === "admin" && (
                  <li>
                    <a>Dashboard</a>
                  </li>
                )}
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a className="disabled" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link href={"/login"} passHref>
                <a className="btn btn-error normal-case text-xl ">
                  <LoginIcon className="w-6 h-6" />
                  Login
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
