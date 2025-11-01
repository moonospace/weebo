import {
  BenefitSection,
  CTASection,
  FAQSesction,
  HeroSection,
  PlansSection,
  ProcessSection,
} from "@features/landing";
import { generateMetaTags } from "@shared/libs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generateMetaTags({
      title: "Lead web design & development partner | Weebo",
      description:
        "Unlimited web design partner for growing startups, agencies & enterprises",
    }),
  }),
  component: PageComponent,
});

function PageComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <BenefitSection />
      <ProcessSection />
      <PlansSection />
      <FAQSesction />
      <CTASection />
    </main>
  );
}
