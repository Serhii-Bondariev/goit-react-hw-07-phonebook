import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <InfinitySpin
      visible={true}
      width={200}
      color="#2f85e7"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
