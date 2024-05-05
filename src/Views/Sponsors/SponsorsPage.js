import React from "react";
import Aymin from '../../assets/SponsorLogos/Aymin.jpg';
import Urology from '../../assets/SponsorLogos/Urology.jpg';
import Urgent from '../../assets/SponsorLogos/UrgentCare.jpg';
import goddardSchool from '../../assets/SponsorLogos/goddardSchool.png';
import LiveActive from '../../assets/SponsorLogos/LiveActive.png';
import Sponsors from '../../components/Sponsors/Sponsors.js';



const SponsorPage = () => {
  // Example array of sponsor data
  const sponsorData = [
    { name: 'ICJC', logo: 'https://ugc.production.linktr.ee/zN8goOZPRU282WwtNhj3_image' }, // External image URL
    { name: 'Aymin', logo: Aymin }, // Logo stored in the code base
    { name: 'KU Urology', logo: Urology }, // Logo stored in the code base
    { name: 'Urgent Care of Kansas', logo: Urgent }, // Logo stored in the code base
    { name: 'The Goddard School', logo: goddardSchool }, // Logo stored in the code base
    { name: 'LiveActive Primary Care', logo: LiveActive }, // Logo stored in the code base
  ];

  return <Sponsors sponsorData={sponsorData} />;
};

export default SponsorPage;
