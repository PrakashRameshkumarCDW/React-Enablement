import React, { useState } from "react";
const Lottery = React.lazy(() => import("../components/Lottery/Lottery"));
import BannerImage from "../containers/BannerImage/BannerImage";
import { AD_CONFIG } from "../Constants/APP_CONSTANTS";

const OriginalShortTeaserSection = React.lazy(
  () => import("../containers/ShortTeasersSection/ShortTeaserSection")
);
const TrailerSection = React.lazy(
  () => import("../containers/TrailerSection/TrailerSection")
);
import LanguageSelection from "../containers/LanguageSelection/LanguageSelection";
import withAdvertisement from "../components/WithAdvertisement/WithAdvertisement";

const ShortTeaserWithAd = withAdvertisement(
  OriginalShortTeaserSection,
  AD_CONFIG
);

const HomePage = () => {
  const [triggerKey] = useState(Date.now());
  return (
    <>
      <BannerImage />

      <React.Suspense fallback="Loading Lottery...">
        <Lottery />
      </React.Suspense>

      <React.Suspense fallback="Loading TrailerSection...">
        <TrailerSection />
      </React.Suspense>

      <React.Suspense fallback="Loading ShortTeaserSection....">
        <ShortTeaserWithAd triggerKey={triggerKey} />
      </React.Suspense>

      <LanguageSelection />
    </>
  );
};

export default HomePage;
