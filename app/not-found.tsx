import Link from "next/link";
import { NotFoundPage } from "nextra-theme-docs";

export default function NotFound() {
  return (
    <NotFoundPage content="Submit an issue" labels="broken-link">
      <h1 className="x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:font-bold x:mt-2 x:text-4xl">
        404 Not Found
      </h1>
      <p className="x:not-first:mt-[1.25em] x:leading-7">
        The page you were looking for was not found.{" "}
        <Link
          className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font] x:mt-[1.25em]"
          href="/"
        >
          Return to home?
        </Link>
      </p>
    </NotFoundPage>
  );
}
