import { ApexOptions } from "apexcharts";

export const TotalRevenueSeries = [
	{
		name: "Last Month",
		data: [183, 124, 115, 85, 143, 143, 96],
	},
	{
		name: "Running Month",
		data: [95, 84, 72, 44, 108, 108, 47],
	},
];

export const TotalRevenueOptions: ApexOptions = {
	chart: {
		type: "bar",
		toolbar: {
			show: false,
		},
	},
	colors: ["#3FC1C9", "#95E1D3"],
	plotOptions: {
		bar: {
			borderRadius: 4,
			horizontal: false,
			columnWidth: "55%",
		},
	},
	dataLabels: {
		enabled: false,
	},
	grid: {
		show: false,
	},
	stroke: {
		colors: ["transparent"],
		width: 4,
	},
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
		labels: {
			style: {
				colors: "#C0C0C0",
			},
		},
	},
	yaxis: {
		title: {
			text: "$ (thousands)",
			style: {
				color: "#C0C0C0",
			},
		},
		labels: {
			style: {
				colors: "#C0C0C0",
			},
		},
	},
	fill: {
		opacity: 1,
	},
	legend: {
		position: "top",
		horizontalAlign: "right",
		labels: {
			colors: "#C0C0C0",
		},
	},
	tooltip: {
		y: {
			formatter(val: number) {
				return `$ ${val} thousands`;
			},
		},
		theme: "dark",
	},
};
