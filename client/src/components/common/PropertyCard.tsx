import { Place } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
	Typography,
	Box,
	Card,
	CardMedia,
	CardContent,
	Stack,
} from "@mui/material";

import { PropertyCardProps } from "../../interfaces/property";

const PropertyCard = ({
	id,
	title,
	location,
	price,
	photo,
}: PropertyCardProps) => {
	return (
		<Card
			component={Link}
			to={`/properties/show/${id}`}
			sx={{
				maxWidth: "330px",
				padding: "10px",
				"&:hover": {
					boxShadow: "0px 22px 45px 2px rgba(176,176,176,0.1)",
				},
				cursor: "pointer",
				backgroundColor: "#272727",
			}}
			elevation={0}
		>
			<CardMedia
				component="img"
				width="100%"
				height={210}
				image={photo}
				alt="card image"
				sx={{ borderRadius: "10px" }}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					gap: "10px",
					paddingX: "5px",
				}}
			>
				<Stack direction="column" gap={1}>
					<Typography fontSize={16} fontWeight={500} color="#F9F7F7">
						{title}
					</Typography>
					<Stack direction="row" gap={0.5} alignItems="flex-start">
						<Place
							sx={{
								fontSize: 18,
								color: "#F38181",
								marginTop: 0.5,
							}}
						/>
						<Typography fontSize={14} color="#C0C0C0">
							{location}
						</Typography>
					</Stack>
				</Stack>
				<Box
					px={1.5}
					py={0.5}
					borderRadius={1}
					bgcolor="#A6E3E9"
					height="fit-content"
				>
					<Typography fontSize={12} fontWeight={600} color="#364F6B">
						${price}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default PropertyCard;
