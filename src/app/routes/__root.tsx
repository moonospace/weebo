import { Button } from "@shared/components/ui/button";
import styles from "@shared/styles/globals.css?url";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

type RootComponentProps = {
  children: React.ReactNode;
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Lead Web Design & Development Partner | Weebo",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles,
      },
    ],
  }),
  shellComponent: RootComponent,
  notFoundComponent: NotFondComponent,
  errorComponent: ErrorComponent,
});

function RootComponent({ children }: RootComponentProps) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="container mx-auto laptop:px-0 px-5">
          <div className="mx-auto min-h-screen laptop:w-8/12 w-full laptop:px-20 py-20 tablet:pt-0 tablet:pb-36">
            {children}
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}

function NotFondComponent(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="font-mono text-foreground/40 text-sm tracking-tight">
            404.
          </span>
          <h2 className="mt-2 font-medium text-lg">Not found.</h2>

          <p className="mt-6 text-pretty leading-7">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="mt-10 flex">
          <Button asChild variant={"secondary"}>
            <a href="/">
              <i className="fi fi-sr-arrow-alt-circle-left" />
              Bring me back
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}

function ErrorComponent(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="font-mono text-foreground/40 text-sm tracking-tight">
            500.
          </span>
          <h2 className="mt-2 font-medium text-lg">Error found.</h2>

          <p className="mt-6 text-pretty leading-7">
            It seems like something went wrong on our end. Please try again
            later, or contact support if the problem persists.
          </p>
        </div>

        <div className="mt-10 flex">
          <Button asChild variant={"secondary"}>
            <a href="/">
              <i className="fi fi-sr-arrow-alt-circle-left" />
              Bring me back
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
