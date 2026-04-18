import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  apiVersion: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border-green-700 dark:border-green-800">
        GET
      </span>
      API Version
    </div>
  ),
  listPackages: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 border-green-700 dark:border-green-800">
        GET
      </span>
      List available packages
    </div>
  ),
};

export default meta;
