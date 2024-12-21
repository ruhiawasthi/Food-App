import { useRouteError } from "react-router-dom";
const Error = () => {
  const val = useRouteError();
  console.log(val);
  return (
    <div>
      <h1>Oops! Someting went wrong!</h1>
      <h1>{val.status + val.statusText}</h1>
      <h4>{val.data}</h4>
    </div>
  );
};

export default Error;
