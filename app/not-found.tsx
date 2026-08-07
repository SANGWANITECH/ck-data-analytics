import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad bg-paper pt-[72px]">
      <div className="container-page flex flex-col items-center text-center gap-6 py-20">
        <h1 className="display text-navy">404</h1>
        <h2 className="h2 text-navy">Page not found</h2>
        <p className="body-text text-warmgray max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-4">
          Return home
        </Link>
      </div>
    </section>
  );
}