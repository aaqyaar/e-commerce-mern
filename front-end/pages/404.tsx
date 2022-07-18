import { HomeIcon } from "@heroicons/react/outline";
import Link from "next/link";

function NotFound() {
  return (
    <div className="hero min-h-[80vh]">
      <div className="text-center hero-content">
        <div className="max-w-lg mx-auto">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page Not Found!</p>
          <Link href="/" passHref>
            <a className="btn btn-primary btn-lg">
              <HomeIcon className="mr-2 w-10 h-10" />
              Back To Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
