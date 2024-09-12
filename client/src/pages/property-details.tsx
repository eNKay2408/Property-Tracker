import { Typography, Box, Stack } from "@mui/material";
import { useDelete, useGetIdentity, useShow } from "@refinedev/core";
import { useParams, useNavigate } from "react-router-dom";
import {
	ChatBubble,
	Delete,
	Edit,
	Phone,
	Place,
	Star,
} from "@mui/icons-material";
import { useEffect } from "react";

import { CustomButton } from "../components";

function checkImage(url: any) {
	const img = new Image();
	img.src = url;
	return img.width !== 0 && img.height !== 0;
}

const PropertyDetails = () => {
	useEffect(() => {
		document.title = "Property Details";
	}, []);

	const navigate = useNavigate();
	const { data: user } = useGetIdentity();
	const { id } = useParams();
	const { mutate } = useDelete();
	const { queryResult } = useShow();

	const { data, isLoading, isError } = queryResult;

	const propertyDetails = data?.data ?? {};

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error...</div>;

	const isCurrentUser = user.email === propertyDetails.creator.email;

	const handleDeleteProperty = () => {
		const response = confirm("Are you sure you want to delete this property?");
		if (response) {
			mutate(
				{
					resource: "properties",
					id: id as string,
				},
				{
					onSuccess: () => {
						navigate("/properties");
					},
				}
			);
		}
	};

	return (
		<Box borderRadius="15px" padding="20px" bgcolor="#272727" width="100%">
			<Typography fontSize={25} fontWeight={700} color="#F9F7F7">
				Details
			</Typography>

			<Box
				mt="20px"
				display="flex"
				flexDirection={{ xs: "column", md: "row" }}
				gap={4}
			>
				<Box flex={1}>
					<img
						src={propertyDetails.photo}
						alt={propertyDetails.title}
						height={546}
						style={{ objectFit: "cover", borderRadius: "10px" }}
						className="property_details-img"
					/>

					<Box mt="15px">
						<Stack
							direction="row"
							justifyContent="space-between"
							flexWrap="wrap"
							alignItems="center"
						>
							<Typography
								fontSize={18}
								fontWeight={500}
								color="#A6E3E9"
								textTransform="capitalize"
							>
								{propertyDetails.propertyType}
							</Typography>
							<Box>
								{[1, 2, 3, 4, 5].map((star) => (
									<Star key={`star-${star}`} sx={{ color: "#F2C94C" }} />
								))}
							</Box>
						</Stack>

						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							gap={5}
						>
							<Box>
								<Typography
									fontSize={22}
									fontWeight={600}
									color="#F9F7F7"
									textTransform="capitalize"
								>
									{propertyDetails.title}
								</Typography>
								<Stack mt={0.5} direction="row" alignItems="center" gap={0.5}>
									<Place sx={{ color: "#CBF1F5" }} />
									<Typography fontSize={14} color="#C0C0C0">
										{propertyDetails.location}
									</Typography>
								</Stack>
							</Box>

							<Box>
								<Typography fontSize={25} fontWeight={700} color="#3FC1C9">
									${propertyDetails.price}
								</Typography>
								<Typography
									fontSize={16}
									fontWeight={600}
									color="#F9F7F7"
									textAlign="right"
								>
									Per day
								</Typography>
							</Box>
						</Stack>

						<Stack mt="25px" direction="column" gap="10px">
							<Typography fontSize={18} color="#F9F7F7">
								Description
							</Typography>
							<Typography fontSize={14} color="#C0C0C0">
								{propertyDetails.description}
							</Typography>
						</Stack>
					</Box>
				</Box>

				<Box display="flex" flexDirection="column" gap="20px">
					<Stack
						flex={1}
						width="100%"
						p={2}
						direction="column"
						justifyContent="center"
						alignItems="center"
						border="1px solid #808080"
						borderRadius={2}
					>
						<Stack
							mt={2}
							justifyContent="center"
							alignItems="center"
							textAlign="center"
						>
							<img
								src={
									checkImage(propertyDetails.creator.avatar)
										? propertyDetails.creator.avatar
										: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
								}
								alt="avatar"
								width={90}
								height={90}
								style={{ borderRadius: "100%", objectFit: "cover" }}
							/>

							<Box mt="15px">
								<Typography fontSize={18} fontWeight={600} color="#F9F7F7">
									{propertyDetails.creator.name}
								</Typography>
								<Typography
									mt="5px"
									fontSize={14}
									fontWeight={400}
									color="#D3D3D3"
								>
									Agent
								</Typography>
							</Box>

							<Stack mt="10px" direction="row" alignItems="center" gap={1}>
								<Place sx={{ color: "#C0C0C0" }} />
								<Typography fontSize={14} fontWeight={400} color="#C0C0C0">
									Ho Chi Minh City, Vietnam
								</Typography>
							</Stack>

							<Typography mt={1} fontSize={16} fontWeight={600} color="#F9F7F7">
								{propertyDetails.creator.allProperties.length} properties
							</Typography>
						</Stack>

						<Stack
							width="100%"
							mt="25px"
							direction="row"
							flexWrap="wrap"
							gap={2}
						>
							<CustomButton
								title={!isCurrentUser ? "Message" : "Edit"}
								backgroundColor="#112D4E"
								color="#F9F7F7"
								fullWidth
								icon={!isCurrentUser ? <ChatBubble /> : <Edit />}
								handleClick={() => {
									if (isCurrentUser) {
										navigate(`/properties/edit/${propertyDetails._id}`);
									}
								}}
							/>
							<CustomButton
								title={!isCurrentUser ? "Call" : "Delete"}
								backgroundColor={!isCurrentUser ? "#FCE38A" : "#FC5185"}
								color="#112D4E"
								fullWidth
								icon={!isCurrentUser ? <Phone /> : <Delete />}
								handleClick={() => {
									if (isCurrentUser) handleDeleteProperty();
								}}
							/>
						</Stack>
					</Stack>

					<Box display="flex" flex={1} flexDirection="column" gap={2}>
						<Stack>
							<img
								src="https://serpmedia.org/scigen/images/googlemaps-nyc-standard.png?crc=3787557525"
								width="100%"
								height={306}
								style={{ borderRadius: 10, objectFit: "cover" }}
							/>
						</Stack>
						<Box>
							<CustomButton
								title="Book Now"
								backgroundColor="#3FC1C9"
								color="#F9F7F7"
								fullWidth
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PropertyDetails;
