import { YellowCallout } from "@/components/Callout";
import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  checkIfAvailable: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Check if available
    </div>
  ),
  getUserDomains: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Get a user&apos;s domains
    </div>
  ),
  getUserByDomain: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Get a user by domain
    </div>
  ),
  getCname: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Validate domain by CNAME
    </div>
  ),
};

export default meta;
