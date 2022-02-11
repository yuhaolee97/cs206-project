/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import CreateProfileCard from "examples/Cards/InfoCards/CreateProfileCard";
import ProfilesList from "examples/Lists/ProfilesList";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
// import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profileCreation/components/PlatformSettings";

// Data
import profilesListData from "layouts/profileCreation/data/profilesListData";

import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import SuiButton from "components/SuiButton";
import Icon from "@mui/material/Icon";

import "./index.css"

import { useState, useEffect, React, useContext } from 'react'

import AppContext from './AppContext';



// Images
// import homeDecor1 from "assets/images/home-decor-1.jpg";
// import homeDecor2 from "assets/images/home-decor-2.jpg";
// import homeDecor3 from "assets/images/home-decor-3.jpg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

function Overview() {
  const [nameSetting, setName] = useState("")
  const [mobileSetting, setMobile] = useState("")
  const [emailSetting, setEmail] = useState("")
  const [locationSetting, setLocation] = useState("")
  const myContext = useContext(AppContext);

  const redirectToRecommender = () => {
    alert("YOU ARE GREAT");
  }

  useEffect(() => { 
    console.log("YOU ARE A GENIUS")
    console.log(myContext)
    console.log(myContext.name)
    setName(myContext.name)
    setMobile(myContext.mobile)
    setEmail(myContext.email)
    setLocation(myContext.location)
  }, []);

  return (
    <DashboardLayout>
      <Header />
      
      <SuiBox mt={5} mb={3}>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} xl={6}>
            <CreateProfileCard
              title="profile information"
              description="I am deaf and may require hearing aids during work meetings."
              info={{
                fullName: nameSetting,
                mobile: mobileSetting,
                email: emailSetting,
                location: locationSetting,
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <PlatformSettings />
          </Grid>
          {/* <Grid item xs={12} xl={4}>
            <ProfilesList title="conversations" profiles={profilesListData} />
          </Grid> */}
        </Grid>
        <div className="text-center padding-top">
        <SuiButton variant="gradient" color="dark" onClick={redirectToRecommender} >
          &nbsp;Recommend me!
        </SuiButton>
        </div>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
