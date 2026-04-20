import { GreenCallout } from "@/components/Callout";
import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  apiVersion: (
    <div className="flex gap-1.5">
      <GreenCallout>GET</GreenCallout>
      API Version
    </div>
  ),
  listPackages: (
    <div className="flex gap-1.5">
      <GreenCallout>GET</GreenCallout>
      List available packages
    </div>
  ),
};

export default meta;
