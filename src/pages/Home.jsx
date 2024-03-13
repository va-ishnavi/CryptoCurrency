import React from "react";
import CryptoCurrencyDropDown from "../components/dropdowns/CryptoCurrencyDropDown";
import CurrencyDropDown from "../components/dropdowns/CurrencyDropDown";
import Searchbar from "../components/searchbar/Searchbar";
import TimeButton from "../components/timebuttons/TimeButton";
import ChartTypeDropDown from "../components/dropdowns/ChartTypeDropDown";
import LineChart from "../components/charts/LineChart";
import SideBar from "../components/sidebar/SideBar";
import PieChart from "../components/charts/PieChart";
import ExchangeRates from "../components/dropdowns/ExchangeRatesDropDown";
import { useSelector } from "react-redux";
import HorizontalBarChart from "../components/charts/HorizontalBarChart";
import VerticalBarChart from "../components/charts/VerticalBarChart";
import {
  Container,
  Wrapper,  
  Left,
  Top,
  Middle,
  ChartBottom,
  ChartTop,
  Bottom,
  Right,
} from "./Home.styles";
import NavBar from "../components/navbar/NavBar";

const Home = () => {
  const chartType = useSelector(
    (state) => state.selectChartType.selectedChartType
  );
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <Left>
          <Top>
            <CurrencyDropDown />
            <Searchbar />
          </Top>
          <Middle>
            <ChartTop>
              <TimeButton />
              <CryptoCurrencyDropDown />
              <ChartTypeDropDown />
            </ChartTop>
            <ChartBottom>
              {chartType === "verticalBarChart" ? (
                <VerticalBarChart />
              ) : chartType === "horizontalBarChart" ? (
                <HorizontalBarChart />
              ) : (
                <LineChart />
              )}
            </ChartBottom>
          </Middle>
          <Bottom>
            <PieChart />
            <ExchangeRates />
          </Bottom>
        </Left>
        <Right>
          <SideBar />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;