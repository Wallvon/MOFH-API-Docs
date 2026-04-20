import { YellowCallout } from "@/components/Callout";
import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  create: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Create
    </div>
  ),
  suspend: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Suspend
    </div>
  ),
  unsuspend: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Unsuspend
    </div>
  ),
  remove: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Remove
    </div>
  ),
  changePassword: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Change password
    </div>
  ),
  changePackage: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Change package
    </div>
  ),
};

export default meta;
