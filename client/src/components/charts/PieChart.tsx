import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";
import { PieChartProps } from "../../interfaces/home";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
	return (
		<Box
			id="chart"
			display="flex"
			flex={1}
			bgcolor="#272727"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			pl={3.5}
			py={2}
			borderRadius="15px"
			minHeight="110px"
		>
			<Stack direction="column">
				<Typography fontSize={14} color="#C0C0C0">
					{title}
				</Typography>
				<Typography fontSize={24} color="#F9F7F7" fontWeight={700} mt={1}>
					{value}
				</Typography>
			</Stack>

			<ReactApexChart
				options={{
					chart: { type: "donut" },
					colors,
					legend: { show: false },
					dataLabels: { enabled: false },
					stroke: { width: 0 },
				}}
				series={series}
				type="donut"
				width="120px"
			/>
		</Box>
	);
};

export default PieChart;
