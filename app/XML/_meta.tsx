import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  authentication: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-yellow-50 dark:bg-yellow-700/30 text-yellow-700 dark:text-yellow-500 border-yellow-700">
        POST
      </span>
      Authentication
    </div>
  ),
  information: <i>Information</i>,
  accounts: <i>Accounts</i>,
  domains: <i>Domains</i>,
  tickets: <i>Tickets</i>,
};

export default meta;
