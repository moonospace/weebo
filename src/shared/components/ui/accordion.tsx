import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type * as React from "react";
import { cx } from "tailwind-variants/lite";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Item
  > | null>;
}) => (
  <AccordionPrimitive.Item
    className={cx("rounded-2xl bg-surface p-4", className)}
    ref={ref}
    {...props}
  />
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Trigger
  > | null>;
}) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cx(
        "flex flex-1 cursor-pointer items-center justify-between text-left transition-all duration-300 [&[data-state=open]>i]:rotate-180",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <i className="fi fi-sr-plus-small text-lg transition-all duration-500" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof AccordionPrimitive.Content
  > | null>;
}) => (
  <AccordionPrimitive.Content
    className={cx(
      "overflow-hidden py-4 text-foreground/60 leading-relaxed transition-all duration-700",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
