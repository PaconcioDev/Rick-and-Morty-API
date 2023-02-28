import { PageProps } from "../models/props.model"

function toPage({ page, setPage, prevOrNext}: PageProps) {
  prevOrNext === "next" ?  setPage(page + 1) : prevOrNext === "prev" ? setPage(page - 1) : setPage(1)
  window.scrollTo(0, 0)
}

export {toPage}