import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <InfinitySpin
      left="50%"
      top="50%"
      visible={true}
      width={400}
      color="#2f85e7"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
