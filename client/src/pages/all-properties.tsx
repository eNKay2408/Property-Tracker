import { Add } from "@mui/icons-material";
import { useTable } from "@refinedev/core";
import {
	Box,
	Stack,
	Typography,
	TextField,
	Select,
	MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useEffect } from "react";

import { PropertyCard, CustomButton } from "../components";

const AllProperties = () => {
	useEffect(() => {
		document.title = "All Properties";
	}, []);
	if (document.title !== "All Properties") document.title = "All Properties";

	const navigate = useNavigate();

	const {
		tableQueryResult: { data, isLoading, isError },
		current,
		setCurrent,
		setPageSize,
		pageCount,
		sorters,
		setSorters,
		filters,
		setFilters,
	} = useTable({
		sorters: {
			initial: [
				{
					field: "price",
					order: "asc",
				},
			],
		},
	});

	const allProperties = data?.data ?? [];

	const currentPrice = sorters.find((item) => item.field === "price")?.order;

	const toggleSort = (field: string) => {
		setSorters([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
	};

	const currentFilterValues = useMemo(() => {
		const logicalFilters = filters.flatMap((item) =>
			"field" in item ? item : []
		);

		return {
			title: logicalFilters.find((item) => item.field === "title")?.value || "",
			propertyType:
				logicalFilters.find((item) => item.field === "propertyType")?.value ||
				"",
		};
	}, [filters]);

	if (isLoading) return <Typography>Loading...</Typography>;
	if (isError) return <Typography>Error...</Typography>;

	return (
		<Box>
			<Stack direction="column" width="100%">
				<Typography fontSize={25} fontWeight={700} color="#F9F7F7">
					{!allProperties.length ? "There are no properties" : "All Properties"}
				</Typography>
				<Box
					mb={2}
					mt={3}
					display="flex"
					width="84%"
					justifyContent="space-between"
					flexWrap="wrap"
				>
					<Box
						display="flex"
						gap={2}
						flexWrap="wrap"
						mb={{ xs: "20px", sm: 0 }}
					>
						<CustomButton
							title="Add Property"
							handleClick={() => navigate("/properties/create")}
							backgroundColor="#3FC1C9"
							color="#112D4E"
							icon={<Add />}
						></CustomButton>
						<TextField
							variant="outlined"
							color="info"
							placeholder="Search by title"
							value={currentFilterValues.title}
							onChange={(e) => {
								setFilters([
									{
										field: "title",
										operator: "contains",
										value: e.currentTarget.value
											? e.currentTarget.value
											: undefined,
									},
								]);
							}}
						/>
						<Select
							variant="outlined"
							color="info"
							displayEmpty
							required
							inputProps={{ "aria-label": "Without label" }}
							defaultValue=""
							value={currentFilterValues.propertyType}
							onChange={(e) => {
								setFilters(
									[
										{
											field: "propertyType",
											operator: "eq",
											value: e.target.value,
										},
									],
									"replace"
								);
							}}
						>
							<MenuItem value="">All</MenuItem>
							{[
								"Apartment",
								"Villa",
								"Farmhouse",
								"Condos",
								"Townhouse",
								"Duplex",
								"Studio",
								"Chalet",
							].map((type) => (
								<MenuItem key={type} value={type.toLowerCase()}>
									{type}
								</MenuItem>
							))}
						</Select>
						<CustomButton
							title={`Sort price ${currentPrice === "asc" ? "↓" : "↑"}`}
							handleClick={() => toggleSort("price")}
							backgroundColor="#112D4E"
							color="#F9F7F7"
						/>
					</Box>
				</Box>
			</Stack>

			<Box
				mt="20px"
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 3,
				}}
			>
				{allProperties.map((property) => (
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

			{allProperties.length > 0 && (
				<Box
					display="flex"
					gap={2}
					mt={3}
					flexWrap="wrap"
					justifyContent={{ xs: "flex-start", sm: "center" }}
				>
					<CustomButton
						title="Previous"
						handleClick={() => setCurrent((prev) => prev - 1)}
						backgroundColor="#112D4E"
						color="#F9F7F7"
						disabled={!(current > 1)}
					/>
					<Box
						display={{ xs: "hidden", sm: "flex" }}
						alignItems="center"
						gap="5px"
					>
						Page{" "}
						<strong>
							{current} of {pageCount}
						</strong>
					</Box>
					<CustomButton
						title="Next"
						handleClick={() => setCurrent((prev) => prev + 1)}
						backgroundColor="#112D4E"
						color="#DBE2EF"
						disabled={!(current < pageCount)}
					/>
					<Select
						variant="outlined"
						color="info"
						displayEmpty
						required
						inputProps={{ "aria-label": "Without label" }}
						defaultValue={10}
						onChange={(e) =>
							setPageSize(e.target.value ? Number(e.target.value) : 10)
						}
					>
						{[10, 20, 30, 40, 50].map((size) => (
							<MenuItem key={size} value={size}>
								Show {size}
							</MenuItem>
						))}
					</Select>
				</Box>
			)}
		</Box>
	);
};

export default AllProperties;
