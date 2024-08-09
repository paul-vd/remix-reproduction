import { useMatches } from "@remix-run/react";

const rerenders = new Map<string, number>();
export function useRerender(name?: string) {
  const matches = useMatches();
  if (!name) {
    name = matches.map((m) => m.id).join("/");
  }

  let rerendersCount = rerenders.get(name);
  if (rerendersCount === undefined) {
    rerendersCount = 0;
  }
  rerenders.set(name, rerendersCount + 1);
  console.log(`rerenders (${name}): ${rerendersCount}`);
  return rerendersCount;
}
