import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useAuth from "hooks/useAuth";
import { useReduxDispatch } from "hooks/useReduxHooks";
import { logout } from "redux/thunks/auth.thunk";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { LogoutIcon, MenuIcon } from "@heroicons/react/outline";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header: React.FC = () => {
  const { isAuthenticated, token } = useAuth();
  const dispatch = useReduxDispatch();

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
    <Navbar bg="light" expand="lg" className="shadow-lg py-3">
      <Container>
        <Navbar.Brand href="/">Somali Shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link href="/" passHref>
              <Nav.Link active>Home</Nav.Link>
            </Link>
            <Link href="/shop" passHref>
              <Nav.Link>Shop</Nav.Link>
            </Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Link href={isAuthenticated ? "/dashboard" : "/login"} passHref>
              {isAuthenticated ? (
                <>
                  <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                    <Link href="/dashboard/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </Link>
                    <Link href="/dashboard/products">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </Link>
                    <Link href="/dashboard/orders">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />

                    <Link href="/dashboard" passHref>
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link>Login</Nav.Link>
              )}
            </Link>
            {isAuthenticated && (
              <Button
                variant="dark"
                className="d-flex justify-content-center align-items-center"
                onClick={handleLogout}
              >
                <LogoutIcon
                  className="mr-2"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    verticalAlign: "middle",
                  }}
                />
                <span>Logout</span>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
