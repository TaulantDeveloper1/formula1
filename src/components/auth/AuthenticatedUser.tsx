import React from "react";
import Drivers from "../Drivers";
import DriverDetails from "../DriverDetails";
import PageNotFound from "../PageNotFound";
import { Routes, Route } from "react-router-dom";

export default function AuthenticatedUser() {
  return (
    <Routes>
      <Route path="/" element={<Drivers />} />
      <Route path="/driverDetails" element={<DriverDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
