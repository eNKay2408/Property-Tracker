import { useList } from "@refinedev/core";
import { Typography, Box, Stack } from "@mui/material";
import { useEffect } from "react";

import {
	PieChart,
	PropertyReferrals,
	TotalRevenue,
	PropertyCard,
} from "../components";

const Home = () => {
	useEffect(() => {
		document.title = "Dashboard";
	}, []);

	const { data, isLoading, isError } = useList({
		resource: "properties",
		config: {
			pagination: {
				pageSize: 5,
			},
		},
	});

	const latestProperties = data?.data ?? [];

	if (isLoading) return <Typography>Loading...</Typography>;
	if (isError) return <Typography>Error</Typography>;

	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color="#F9F7F7">
				Dashboard
			</Typography>

			<Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
				<PieChart
					title="Properties for Sale"
					value={684}
					series={[75, 25]}
					colors={["#F38181", "#393E46"]}
				/>
				<PieChart
					title="Properties for Rent"
					value={550}
					series={[65, 35]}
					colors={["#FCE38A", "#393E46"]}
				/>
				<PieChart
					title="Total customers"
					value={5684}
					series={[60, 40]}
					colors={["#95E1D3", "#393E46"]}
				/>
				<PieChart
					title="Properties for Cities"
					value={555}
					series={[80, 20]}
					colors={["#3F72AF", "#393E46"]}
				/>
			</Box>

			<Stack
				mt="25px"
				width="100%"
				direction={{ xs: "column", lg: "row" }}
				gap={4}
			>
				<TotalRevenue />
				<PropertyReferrals />
			</Stack>

			<Box
				borderRadius="15px"
				padding="20px"
				bgcolor="#272727"
				display="flex"
				flexDirection="column"
				minWidth="100%"
				mt="25px"
			>
				<Typography fontSize={18} fontWeight={600} color="#F9F7F7">
					Latest Properties
				</Typography>
				<Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
					{latestProperties.map((property) => (
						<PropertyCard
							key={property._id}
							id={property._id}
							title={property.title}
							price={property.price}
							location={property.location}
							photo={property.photo}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
