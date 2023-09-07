import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { frontendData } from "../../frontend-data-set";
import NavigationComponent from "../NavigationComponent";
import { styled } from "styled-components";

const Container = styled.div`
  label {
    padding: 0 10px;
  }
`;
const ChartWrapper = styled.div`
  position: relative;
  background-color: whitesmoke;
  border-radius: 30px;
  border-style: solid;
`;
const Header = styled.h1`
  text-align: center;
  font-size: 400%;
`;
const StyledButton = styled.button`
  width: 10vw;
  height: 2.5vh;
  font-size: 20;
  font-weight: 700;
  margin: 10px;
`;

export default function DashboardPageComponent() {
  const [showChart, setShowChart] = useState(false);
  const [startDate, setStartDate] = useState("2020-01-01");
  const [endDate, setEndDate] = useState("2022-10-01");
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    scales: {
      y: {
        max: 180000000,
        min: 90000000,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: "20px" },
        },
      },
      title: {
        display: true,
        text: "Active User Comparison Between:",
        font: { size: "20px" },
      },
    },
  };

  const labels = [
    ...new Set(
      frontendData
        .filter((item) => item.date > startDate && item.date < endDate)
        .map((item) => {
          return item.date;
        })
    ),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "League of Legends",
        data: frontendData
          .filter(
            (item) =>
              item.game === "League of Legends" &&
              item.date > startDate &&
              item.date < endDate
          )
          .map((item) => {
            return item.activeUsers;
          }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Minecraft",
        data: frontendData
          .filter(
            (item) =>
              item.game === "Minecraft" &&
              item.date > startDate &&
              item.date < endDate
          )
          .map((item) => {
            return item.activeUsers;
          }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <Container>
      <NavigationComponent />
      <Header>Dashboard</Header>
      <StyledButton onClick={() => setShowChart(true)}>Line Chart</StyledButton>
      <StyledButton onClick={() => setShowChart(false)}>Bar Chart</StyledButton>
      <label htmlFor="fromDate">From Date: </label>
      <input
        type="date"
        id="fromDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      ></input>
      <label htmlFor="toDate">To Date: </label>
      <input
        type="date"
        id="toDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      ></input>
      <ChartWrapper>
        {showChart ? (
          <Line options={options} data={data} />
        ) : (
          <Bar options={options} data={data} />
        )}
      </ChartWrapper>
    </Container>
  );
}
