import type * as React from "react";
import { CustomPlan } from "./custom-plan";
import { DetailDialog } from "./detail-dialog";
import { SubscriptionPlan } from "./subscription-plan";
import { SupportPlan } from "./support-plan";

export function PlansSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="plans">
      <h2 className="mt-8 text-center font-medium tablet:text-5xl text-4xl leading-tight tracking-tight">
        Simple pricing
        <br />
        no hidden fees
      </h2>

      <div className="mt-5 flex justify-center">
        <DetailDialog />
      </div>

      <div className="mt-16 flex laptop:w-8/12 tablet:w-9/12 w-full items-center gap-5">
        <div className="grid grid-cols-4 gap-x-3 gap-y-6">
          <CustomPlan />
          <SupportPlan />
          <SubscriptionPlan />
        </div>
      </div>
    </section>
  );
}
