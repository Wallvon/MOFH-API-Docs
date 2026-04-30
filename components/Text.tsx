export function GreenText({ children }: { children: React.ReactNode }) {
  return <span className="text-green-700 dark:text-green-500">{children}</span>;
}

export function RedText({ children }: { children: React.ReactNode }) {
  return <span className="text-red-700 dark:text-red-500">{children}</span>;
}
