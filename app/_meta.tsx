import type { MetaRecord } from "nextra";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const meta: MetaRecord = {
  "####": {
    type: "separator",
    title: (
      <Menu>
        {/* Hacky workaround */}
        {/* We do a bit of stealing (the styling) */}
        <MenuButton className="x:text-sm x:contrast-more:text-gray-700 x:contrast-more:dark:text-gray-100 x:whitespace-nowrap x:text-gray-600 x:hover:text-black x:dark:text-gray-400 x:dark:hover:text-gray-200 x:ring-inset x:transition-colors x:items-center x:flex x:gap-1.5 x:cursor-pointer">
          API Version
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            height="14"
            className="x:*:origin-center x:*:transition-transform x:*:rotate-90"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </MenuButton>
        {/* TODO: Fix styling */}
        {/* TODO: useState to switch between the two */}
        <MenuItems
          anchor="bottom"
          className="x:focus-visible:nextra-focus nextra-scrollbar x:motion-reduce:transition-none x:origin-top x:transition x:duration-200 x:ease-out x:data-closed:scale-95 x:data-closed:opacity-0 x:border x:border-black/5 x:dark:border-white/20 x:z-30 x:rounded-md x:py-1 x:text-sm x:shadow-lg x:backdrop-blur-md x:bg-nextra-bg/70 x:max-h-[min(calc(100vh-5rem),256px)]!"
        >
          <MenuItem>
            <a
              className="x:flex x:py-1.5 x:gap-1.5 x:transition-colors x:ps-3 x:pe-9 x:text-gray-600 data-focus:text-gray-900 x:dark:text-gray-400 data-focus:dark:text-gray-100"
              href="/settings"
            >
              JSON
              <span className="self-center rounded-lg border text-nowrap px-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border-green-700 dark:border-green-800">
                Recommended
              </span>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              className="x:block x:py-1.5 x:transition-colors x:ps-3 x:pe-9 x:text-gray-600 data-focus:text-gray-900 x:dark:text-gray-400 data-focus:dark:text-gray-100"
              href="/support"
            >
              XML
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    ),
  },
  index: "Introduction",
  initialSetup: "Initial Setup",
  apiWrappers: "API Wrappers",
  limitations: "Limitations",
  JSON: "JSON API",
  XML: "XML API",
  errors: "Errors",
  "#": {
    type: "separator",
  },
  changelog: "Changelog",
};

export default meta;
