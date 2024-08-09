import { Link } from "@remix-run/react";
import { useRerender } from "~/use-rerender";

export default function WorkingExample() {
  useRerender();
  return (
    <div className="flex flex-col space-y-4 p-4">
      <h2>Working Example</h2>
      <Link to="/" discover="none">
        Home
      </Link>
      <Link to="/broken" discover="none">
        Broken
      </Link>
      <Link to="/working" discover="none">
        Working
      </Link>
    </div>
  );
}
