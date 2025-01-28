import Form from "next/form";
import SearchFormResetBtn from "./SearchFormResetBtn";
import { Search } from "lucide-react";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form" data-search-form>
      <label htmlFor="startup-search-input" className="sr-only">
        Search startups
      </label>

      <input
        type="text"
        name="query"
        id="startup-search-input"
        defaultValue={query}
        placeholder="Search Startups..."
        className="search-input"
      />

      <div className="flex gap-2">
        {query && <SearchFormResetBtn />}

        <button
          type="submit"
          aria-label="Search startups"
          className="search-btn text-white"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}
