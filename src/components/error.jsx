import { selectError, useSelector } from 'redux/selectors';

const Error = () => {
  const error = useSelector(selectError);
  return (
    <div>
      <h4>{error}</h4>
    </div>
  );
};

export default Error;
