// import React from 'react';
// import { InfinitySpin } from 'react-loader-spinner';

// const Loader = () => {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         margin: 'auto',
//       }}
//     >
//       <InfinitySpin
//         visible={true}
//         width={80}
//         color="#2f85e7"
//         ariaLabel="infinity-spin-loading"
//       />
//     </div>
//   );
// };

// export default Loader;

import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000, // Задайте потрібний вам значення zIndex
      }}
    >
      <InfinitySpin
        visible={true}
        width={80}
        color="#2f85e7"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
