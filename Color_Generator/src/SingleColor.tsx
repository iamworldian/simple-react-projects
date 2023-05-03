import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

import Style from './SingleColor.module.css';

export default function SingleColor({ rgb, weight, index, hex }) {
  const bg_color = rgb.join(',');
  //console.log(hex);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={Style.colorBox}
      style={{ backgroundColor: `rgb(${bg_color})` }}
      onClick={() => {
        navigator.clipboard.writeText(hex);
        toast('🦄 Copied', {
          position: 'bottom-left',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }}
    >
      <p>#{hex}</p>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
