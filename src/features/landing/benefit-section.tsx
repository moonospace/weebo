import type * as React from "react";

const items: string[] = [
  "10x team scale up",
  "Best white label partner",
  "No cost surprises",
  "Fast turnarounds",
  "Professional quality",
  "Years experiences",
  "No risk",
  "Satisfaction guaranteed",
];

type ItemProps = {
  label: string;
};

function Item({ label }: ItemProps): React.ReactElement {
  return (
    <li className="group hover:-translate-y-1 flex cursor-pointer items-center gap-3 text-foreground/60 transition-all duration-300 hover:text-foreground">
      <i className="fi fi-sc-check-circle text-foreground/40 text-sm transition-all duration-300 group-hover:scale-95 group-hover:text-foreground" />
      {label}
    </li>
  );
}

export function BenefitSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center py-28" id="mission">
      <h2 className="mt-8 text-center font-medium tablet:text-5xl text-4xl leading-tight tracking-tight">
        Big deals
        <br />
        no bloated fees
      </h2>

      <div className="mt-16 flex tablet:w-10/12 w-full items-center justify-center gap-5">
        <ul className="flex flex-col gap-4">
          {items.map((item, i) => (
            <Item key={`${item}-${i}`} label={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
