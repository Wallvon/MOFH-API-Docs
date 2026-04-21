"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { GreenCallout } from "./Callout";
import useSWR from "swr";

const fetcher = (item: string) => localStorage.getItem(item) ?? "json";

// Why use SWR for this you may ask?
// Well, when I tried to use useState and useEffect I kept getting hydration errors.
// After hours of debugging I gave up and just went with SWR which makes it very easy.
function useFormat(format: string) {
  const { data, error, isLoading, mutate } = useSWR(format, fetcher);

  const setFormat = (newFormat: string) => {
    localStorage.setItem(format, newFormat);
    mutate(newFormat);
  };

  return {
    format: data,
    isLoading,
    isError: error,
    setFormat,
  };
}

export function ApiSwitcher() {
  const { format, isLoading, isError, setFormat } = useFormat("api-format");

  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;

  return (
    <Menu>
      {/* Hacky workaround */}
      {({ open }) => (
        <>
          <MenuButton className="inline-flex items-center gap-2 rounded-md text-gray-600 hover:text-black contrast-more:text-gray-700 contrast-more:dark:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200 border border-black/5 dark:border-white/20 px-3 py-1.5 text-sm/6 font-semibold shadow-white/10 focus:outline-none">
            API Version:
            {format === "json" ? (
              <span className="text-yellow-600 dark:text-yellow-500">JSON</span>
            ) : (
              <span className="text-red-600 dark:text-red-500">XML</span>
            )}
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              height="14"
              className={`*:origin-center *:transition-transform ${
                open ? "*:rotate-90" : ""
              }`}
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            transition
            className="z-30 focus:outline-none motion-reduce:transition-none origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 rounded-xl border border-black/5 dark:border-white/20 backdrop-blur-md p-1 text-sm/6 text-white [--anchor-gap:--spacing(1)]"
          >
            <MenuItem>
              <button
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 text-yellow-600 dark:text-yellow-500 data-focus:text-yellow-900 data-focus:dark:text-yellow-300"
                onClick={() => setFormat("json")}
              >
                JSON
                <GreenCallout>Recommended</GreenCallout>
              </button>
            </MenuItem>
            <MenuItem>
              <button
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 text-red-600 dark:text-red-500 data-focus:text-red-900 data-focus:dark:text-red-300"
                onClick={() => setFormat("xml")}
              >
                XML
              </button>
            </MenuItem>
          </MenuItems>
        </>
      )}
    </Menu>
  );
}

export function JsonOnly({ children }: { children: React.ReactNode }) {
  const { format } = useFormat("api-format");
  return format === "json" ? <>{children}</> : null;
}

export function XmlOnly({ children }: { children: React.ReactNode }) {
  const { format } = useFormat("api-format");
  return format === "xml" ? <>{children}</> : null;
}

export function SwitchFormat({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) {
  const { format, setFormat } = useFormat("api-format");
  let buttonText = "json";

  if (format === "json") {
    buttonText = "xml";
  }

  return (
    <button className={className} onClick={() => setFormat(buttonText)}>
      {children ? <>{children}</> : buttonText}
    </button>
  );
}
