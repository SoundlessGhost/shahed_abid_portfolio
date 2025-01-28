import Link from "next/link";
import { buttonVariants } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="flex justify-between items-center h-[100vh] w-[100vh] mx-auto font">
      <div>
        <div className="flex items-center">
          <h2 className="font-bold px-4 border-0 border-r border-gray-600 text-2xl">
            404
          </h2>
          <p className="px-4">Could not find requested resource 😞</p>
        </div>
        
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "link",
          })}`}
        >
          &larr; Return Home
        </Link>
      </div>
    </div>
  );
}
