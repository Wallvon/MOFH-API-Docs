import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  create: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-yellow-50 dark:bg-yellow-700/30 text-yellow-700 dark:text-yellow-500 border-yellow-700">
        POST
      </span>
      Create
    </div>
  ),
  userReply: (
    <div className="flex gap-1.5">
      <span className="self-center rounded-lg border text-nowrap px-1 bg-yellow-50 dark:bg-yellow-700/30 text-yellow-700 dark:text-yellow-500 border-yellow-700">
        POST
      </span>
      User reply
    </div>
  ),
};

export default meta;
