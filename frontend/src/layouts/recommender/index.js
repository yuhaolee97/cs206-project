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
import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import RecoList from "layouts/recommender/components/RecoList";

function Recommender() {

  // hardcoded data, replace with khai loong's 
  const data = [
    {id: 1, company : "Koufu", title : "Software Engineer", desc : "Job description. Lorem ipsum dolor sit amet."},
    {id: 2, company : "SMU", title : "Cleaner", desc : "Job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh, imperdiet id imperdiet id, rhoncus nec nisi."},
    {id: 3, company : "Google", title : "Chef", desc : "Job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh, imperdiet id imperdiet id, rhoncus nec nisi."},
    {id: 4, company : "DBS Bank", title : "Comedian", desc : "Job description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh, imperdiet id imperdiet id, rhoncus nec nisi."},
  ]

  const [filteredData, setFilteredData] = useState(data); // data that user searched for
  const [search, setSearch] = useState(""); // records the input user types in search bar
  const [buttonLabel, setButtonLabel] = useState("Filter") // label for the button, toggles between Filter / Clear
  const [firstFilter, setFirstFilter] = useState(true); // true only when the Filter button has not been clicked before upon loading page

  // useEffect activated everytime user types in the search bar
  useEffect(() => {
    if (search.length === 0 && !firstFilter) {
      setButtonLabel("Clear");
    } else {
      setButtonLabel("Filter");
    }
  }, [search])

  // handles the case when user types in search bar 
  const handleTyping = event => {
    setSearch(event.target.value);
    // console.log(event.target.value);
  }

  // handles the case when user clicks Filter / Clear 
  const handleSearch = () => {
    if (buttonLabel === "Clear") {
      setButtonLabel("Filter");
    }

    const keyword = search;
    const tempData = [];

    // should we allow them to search in description? (Line 84)
    for (let i = 0; i < data.length; i+=1) {
      if (data[i].company.toLowerCase().includes(keyword.toLowerCase()) ||
      data[i].title.toLowerCase().includes(keyword.toLowerCase()) ||
      data[i].desc.toLowerCase().includes(keyword.toLowerCase())) {
        tempData.push(data[i]);
      }
    }

    console.log(tempData);
    setFilteredData(tempData);
    setFirstFilter(false);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox p={0}>
        <Grid container spacing={2}>
          <Grid item xs={8} lg={6}>
            <SuiInput
              type="search"
              placeholder="Search for Company/Job Title..."
              icon={{ component: "search", direction: "left" }}
              onChange={handleTyping}
            />
          </Grid>
          <Grid item xs={2} lg={2}>
            <SuiButton variant="gradient" color="info" onClick={handleSearch}>
              {buttonLabel}
            </SuiButton>
          </Grid>
        </Grid>
      </SuiBox>
      <RecoList jobs={filteredData}/>
      <Footer />
    </DashboardLayout>
  );
}

export default Recommender;