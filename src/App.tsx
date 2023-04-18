import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-10 bg-gradient-to-tr from-fuchsia-300 to-sky-500">
      <div className="flex space-x-10">
        <div className="p-5 space-y-5 bg-sky-100 rounded">
          <h1 className="text-center tracking-wide text-3xl text-gray-900">Supply</h1>
          <ul className="p-5 space-y-5">
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"getsupply"}>Get supply</Link>
            </li>
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"getidsupply"}>Get supply by id</Link>
            </li>
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"postsupply"}>Create new supply</Link>
            </li>
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"putsupply"}>Change existing supply</Link>
            </li>
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"deletesupply"}>Delete existing supply</Link>
            </li>
          </ul>
        </div>
        <div className="p-5 space-y-5 bg-sky-100 rounded">
          <h1 className="text-center tracking-wide text-3xl text-gray-900">Sale</h1>
          <ul className="p-5 space-y-5">
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"getsale"}>Get sale</Link>
            </li>
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"getidsale"}>Get sale by id</Link>
            </li>
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"postsale"}>Create new sale</Link>
            </li>
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"putsale"}>Change existing sale</Link>
            </li>
            <li className="underline underline-offset-8 hover:text-blue-500">
              <Link to={"deletesale"}>Delete existing sale</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-5 space-y-5 w-1/3 text-center bg-sky-100 rounded">
        <h1 className="tracking-wide text-3xl text-gray-900">Report</h1>
        <div>
          <Link
            to={"getreport"}
            className="underline underline-offset-8 hover:text-blue-500"
          >
            Get report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
