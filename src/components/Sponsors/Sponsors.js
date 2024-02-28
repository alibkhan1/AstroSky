import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";

const Sponsors = ({ sponsorData }) => {
  return (
    <Container>
      <Grid container spacing={4} justify="flex-start">
        {sponsorData.map((sponsor, index) => (
          <Grid item xs={6} sm={3} key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {typeof sponsor.logo === "string" ? (
              <img src={sponsor.logo} alt={`Sponsor ${index + 1}`} style={{ maxWidth: "100%", maxHeight: "100%", alignSelf: "center", fontWeight: "bold" }} />
            ) : (
              sponsor.logo
            )}
            <Typography variant="h5" align="center" style={{ marginTop: "8px" }}>{sponsor.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Sponsors;
