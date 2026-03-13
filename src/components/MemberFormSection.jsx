export default function MemberFormSection({ query = "", onQueryChange }) {
  return (
    <section id="join" className="mx-auto">
      <div className="bg-white p-8 sm:p-12 lg:p-16">
        <div className="max-w-md mx-auto">
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-black text-center">
            Start a{" "}
            <span className="font-serif italic text-dark-green">
              conversation
            </span>{" "}
            with Courtlay
          </h2>
          <p className="mt-3 text-black/80 text-base sm:text-lg text-center">
            Share a few details and we&apos;ll follow up about how Courtlay can
            work with your broadcasts.
          </p>

          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-4 rounded-full font-sans text-black bg-white border border-black/10 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-bright-green transition-shadow"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-full font-sans text-black bg-white border border-black/10 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-bright-green transition-shadow"
            />
            <input
              type="text"
              placeholder="Enter your query"
              value={query}
              onChange={(e) => onQueryChange?.(e.target.value)}
              className="w-full px-5 py-4 rounded-full font-sans text-black bg-white border border-black/10 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-bright-green transition-shadow"
            />
            <p className="text-center font-sans text-black/70 text-sm">
              By submitting this form, you agree to be contacted about
              Courtlay&apos;s products and services.
            </p>
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-bright-green text-black font-sans font-semibold text-base hover:bg-bg-pale transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
