import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/lib/firebase";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!analytics) return;

    logEvent(analytics, "page_view", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}

export default AnalyticsTracker;
