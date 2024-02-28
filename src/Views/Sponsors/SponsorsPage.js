import React from "react";
import yourLogo from '../../assets/SponsorLogos/Your-Logo-here.png';
import Sponsors from "../../components/Sponsors/Sponsors";

const SponsorPage = () => {
  // Example array of sponsor data
  const sponsorData = [
    { name: 'ICJC', logo: 'https://ugc.production.linktr.ee/zN8goOZPRU282WwtNhj3_image' }, // External image URL
    { name: 'Contact us to put your logo here', logo: yourLogo }, // Logo stored in the code base
  ];

  return <Sponsors sponsorData={sponsorData} />;
};

export default SponsorPage;
