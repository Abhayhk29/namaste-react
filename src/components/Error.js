import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        Some thing went wrong
        <h3>{err.status}</h3>
    </div>
  )
}

export default Error