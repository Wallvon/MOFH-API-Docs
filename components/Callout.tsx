export function GreenCallout({ children }: { children: React.ReactNode }) {
  return (
    <span className="self-center rounded-lg border text-nowrap px-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border-green-700 dark:border-green-800">
      {children}
    </span>
  );
}

export function YellowCallout({ children }: { children: React.ReactNode }) {
  return (
    <span className="self-center rounded-lg border text-nowrap px-1 bg-yellow-50 dark:bg-yellow-700/30 text-yellow-700 dark:text-yellow-500 border-yellow-700">
      {children}
    </span>
  );
}

export function RedCallout({ children }: { children: React.ReactNode }) {
  return (
    <span className="self-center rounded-lg border text-nowrap px-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-500 border-red-700 dark:border-red-600">
      {children}
    </span>
  );
}
