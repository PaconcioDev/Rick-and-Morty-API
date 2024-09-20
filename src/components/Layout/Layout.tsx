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
    <div className='container'>
      {
        loading
          ?
          (
            <h1 className='text-center pb-4'>Loading...</h1>
          )
          :
          (
            <div className='d-flex flex-column justify-content-between'>
              <div className='row'>
                {children}
                <NavPage page={page} pages={pages} setPage={setPage} />
              </div>
            </div>
          )
      }
    </div>
  );
}

export { Layout };
