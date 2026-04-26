import type { MetaRecord } from "nextra";
import { RedCallout } from "@/components/Callout";

const meta: MetaRecord = {
  addAllowedIp: (
    <div className="flex gap-1.5">
      <RedCallout>REQUIRED</RedCallout>
      Add Allowed IP
    </div>
  ),
  addCallbackURL: "Add Callback URL",
};

export default meta;
