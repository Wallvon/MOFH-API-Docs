import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  checkIfAvailable: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-yellow-50 dark:bg-yellow-700/30 text-yellow-700 dark:text-yellow-500 border-yellow-700">
        POST
      </span>
      Check if available
    </div>
  ),
  getUserDomains: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-yellow-50 dark:bg-yellow-700/30 text-yellow-700 dark:text-yellow-500 border-yellow-700">
        POST
      </span>
      Get a user&apos;s domains
    </div>
  ),
  getUserByDomain: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-yellow-50 dark:bg-yellow-700/30 text-yellow-700 dark:text-yellow-500 border-yellow-700">
        POST
      </span>
      Get a user by domain
    </div>
  ),
  getCname: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-yellow-50 dark:bg-yellow-700/30 text-yellow-700 dark:text-yellow-500 border-yellow-700">
        POST
      </span>
      Validate domain by CNAME
    </div>
  ),
};

export default meta;
