/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

import SuiButton from "components/SuiButton";

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import React, { useState, useContext } from 'react';


import "./index.css"

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



function CreateProfileCard({ title, description, info, social, action }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [displayTranscript, setDisplayTranscript] = useState(true)



  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true })
  }

  const stopListening = () => {
    SpeechRecognition.stopListening();
    console.log(transcript)
  }

  const [editProfile, setEditProfile] = useState(false);

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <SuiBox key={label} display="flex" py={1} pr={2}>
      <SuiTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </SuiTypography>
      <SuiTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </SuiTypography>
    </SuiBox>
  ));

  const editOwnProfile = () => {
    setEditProfile(!editProfile);
  }

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <SuiBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </SuiBox>
  ));

  return (
    <div>
    {editProfile ? 
    
    
    <Card sx={{ height: "100%" }}>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SuiTypography>
        <SuiTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </SuiTypography>
      </SuiBox>
      <SuiBox p={2}>

        <TextField
        id="input-with-icon-textfield"
        label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </SuiBox>
      <SuiBox p={2}>

        <TextField
        id="input-with-icon-textfield"
        label="Mobile"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </SuiBox>
      <SuiBox p={2}>

        <TextField
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </SuiBox>
      <SuiBox p={2}>

        <TextField
        id="input-with-icon-textfield"
        label="Status"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </SuiBox>

      <SuiBox p={2}>
      <div>
        Record additional profile information here
        

        </div>
        <p>
            Microphone: {listening ? 'on' : 'off'}
          </p>

      <button type = "button" className='btn btn-custom btn-lg btn-padding' onClick={startListening}>Start</button>
      <button type = "button" className='btn btn-custom btn-lg btn-padding' onClick={stopListening}>Stop</button>

      <p>{displayTranscript ? transcript : <div>NULL</div>}</p>
      </SuiBox>
        {/* <SuiBox>
          {renderItems}
          <SuiBox display="flex" py={1} pr={2}>
            <SuiTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </SuiTypography>
            {renderSocial}
          </SuiBox>
        </SuiBox> */}
      <div className = "center">
        <SuiButton variant="gradient" color="dark" onClick={editOwnProfile} >
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;Save Profile
        </SuiButton>
      </div>

      
    </Card>
    
    
    
    :


    <Card sx={{ height: "100%" }}>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SuiTypography>
        <SuiTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </SuiTypography>
      </SuiBox>
      <SuiBox p={2}>
        <SuiBox mb={2} lineHeight={1}>
          <SuiTypography variant="button" color="text" fontWeight="regular">
            {description}
          </SuiTypography>
        </SuiBox>
        <SuiBox opacity={0.3}>
          <Divider />
        </SuiBox>
        <SuiBox>
          {renderItems}
          <SuiBox display="flex" py={1} pr={2}>
            <SuiTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </SuiTypography>
            {renderSocial}
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <div className = "center">
        <SuiButton variant="gradient" color="dark" onClick={editOwnProfile} >
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;Edit Profile
        </SuiButton>
      </div>
      
    </Card>
    }
    </div>
    
  );
}

// Typechecking props for the ProfileInfoCard
CreateProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreateProfileCard;