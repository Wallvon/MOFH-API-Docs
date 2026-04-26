import type { MetaRecord } from "nextra";
import { ApiSwitcher } from "@/components/ApiSwitcher";
import { YellowCallout } from "@/components/Callout";

const meta: MetaRecord = {
  "####": {
    type: "separator",
    title: <ApiSwitcher />,
  },
  index: "Introduction",
  initialSetup: "Initial Setup",
  apiWrappers: "API Wrappers",
  limitations: "Limitations",
  callbacks: "Callbacks",
  errors: "Errors",
  "#": {
    type: "separator",
  },
  APIReference: {
    type: "separator",
    title: "API Reference",
  },
  authentication: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Authentication
    </div>
  ),
  information: <i>Information</i>,
  accounts: <i>Accounts</i>,
  domains: <i>Domains</i>,
  tickets: <i>Tickets</i>,
  "##": {
    type: "separator",
  },
  XML: "XML API",
  changelog: "Changelog",
};

export default meta;
