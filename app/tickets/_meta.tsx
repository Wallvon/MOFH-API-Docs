import { YellowCallout } from "@/components/Callout";
import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  create: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      Create
    </div>
  ),
  userReply: (
    <div className="flex gap-1.5">
      <YellowCallout>POST</YellowCallout>
      User reply
    </div>
  ),
};

export default meta;
