/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import RepairLandingPage from "./pages/RepairLandingPage";
import { captureAttribution } from "./lib/attribution";

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    captureAttribution();

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const normalizedPath = currentPath.replace(/\/$/, "");
  const isRepairPage = normalizedPath === "/vending-repair-maintenance";

  if (isRepairPage) {
    return <RepairLandingPage />;
  }

  return <HomePage />;
}
