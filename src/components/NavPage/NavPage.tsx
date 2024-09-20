import "./nav-page.css";
import { PageProps } from "../../types/props";
import { toPage } from "../../service/navPage.service";
import { GrNext, GrPrevious } from "../../../node_modules/react-icons/gr";

function NavPage ({ page, pages = 0, setPage }: PageProps) {
  return (
    <>
      <footer className="d-flex align-items-center justify-content-between">
        <>
          {page <= 1 ? (
            <button className="btn btn-sm my-3 invisible-btn">{`<-- Page 0`}</button>
          ) : (
            <button
              onClick={() => {
                toPage({ page, setPage, prevOrNext: "prev" });
              }}
              className={page > 1 ? "btn btn-page btn-sm my-3" : "d-none"}
            >
              <GrPrevious /> Page {page - 1}
            </button>
          )}
          <p className="fw-bolder mb-0">{page}</p>
          {page >= pages ? (
            <button className="btn btn-sm my-3 invisible-btn">{`Page 0 -->`}</button>
          ) : (
            <button
              onClick={() => {
                toPage({ page, setPage, prevOrNext: "next" });
              }}
              className="btn btn-page btn-sm my-3"
            >Page {page + 1} <GrNext /></button>
          )}
        </>
      </footer>
    </>
  );
}

export { NavPage };
