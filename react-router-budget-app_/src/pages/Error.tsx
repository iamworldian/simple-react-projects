import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
export default function Error() {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <h1>Error Occured</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button
          className="btn btn--dark"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowUturnLeftIcon width={20}></ArrowUturnLeftIcon>
          <span>Go back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20}></HomeIcon>
          <span>Go Home</span>
        </Link>
      </div>
    </>
  );
}
