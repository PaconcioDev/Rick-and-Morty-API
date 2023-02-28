import { PageProps } from "../../models/props.model";

function NavPage({ page, setPage }: PageProps) {
  return (
    <footer className="d-flex justify-content-between aling-items-center">
      <p>Page {page}</p>
      <button onClick={() => {
        setPage(page + 1)
        window.scrollTo(0, 0)
      }} className="btn btn-primary btn-sm my-3">{`Page ${page + 1} -->`}</button>
    </footer>
  );
}

export { NavPage };
