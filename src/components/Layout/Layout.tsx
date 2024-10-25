import "./Layout.css"
import { LayoutProps } from '../../types/props';
import { NavPage } from '../NavPage/NavPage';

function Layout ({
  loading,
  page,
  pages,
  setPage,
  children
}: LayoutProps) {
  return (
    <div className='layout container'>
      {
        loading
          ?
          (
            <h1 className='text-center pb-4'>Loading...</h1>
          )
          :
          (
            <div className='d-flex flex-column justify-content-between h-100'>
              <div className='row'>
                {children}
              </div>
              <NavPage page={page} pages={pages} setPage={setPage} />
            </div>
          )
      }
    </div>
  );
}

export { Layout };
