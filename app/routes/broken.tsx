import { Link } from "@remix-run/react";
import { useRerender } from "~/use-rerender";

export default function BrokenExample() {
  useRerender();
  return (
    <div className="flex flex-col space-y-4 p-4">
      <h2>Broken Example</h2>
      <Link to="/">Home</Link>
      <Link to="/broken">Broken</Link>
      <Link to="/working">Working</Link>
    </div>
  );
}
