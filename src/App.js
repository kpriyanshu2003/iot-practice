import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./components/auth";
import Business from "./components/business";
import Success from "./components/success";
import Dashboard from "./components/dashboard";
import Test from "./components/temp";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="auth" element={<Auth />} />
          <Route path="business" element={<Business />} />
          <Route path="success" element={<Success />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

function Error() {
  return <h1>This is an Error Page</h1>;
}
