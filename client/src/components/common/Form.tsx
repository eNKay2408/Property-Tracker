import {
	Box,
	Typography,
	FormControl,
	FormHelperText,
	TextField,
	TextareaAutosize,
	Stack,
	Select,
	MenuItem,
	Button,
} from "@mui/material";

import { FormProps } from "../../interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
	type,
	register,
	handleSubmit,
	handleImageChange,
	formLoading,
	onFinishHandler,
	propertyImage,
}: FormProps) => {
	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color="#F9F7F7">
				{type} a Property
			</Typography>

			<Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#272727">
				<form
					style={{
						marginTop: "20px",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: "20px",
					}}
					onSubmit={handleSubmit(onFinishHandler)}
				>
					<FormControl>
						<FormHelperText
							sx={{
								fontWeight: 500,
								margin: "10px 0",
								fontSize: 16,
								color: "#F9F7F7",
							}}
						>
							Enter Property Name
						</FormHelperText>
						<TextField
							fullWidth
							required
							id="outlined-basic"
							color="info"
							variant="outlined"
							{...register("title", { required: true })}
							inputProps={{ style: { color: "#D3D3D3" } }}
						/>
					</FormControl>

					<FormControl>
						<FormHelperText
							sx={{
								fontWeight: 500,
								margin: "10px 0",
								fontSize: 16,
								color: "#F9F7F7",
							}}
						>
							Enter Description
						</FormHelperText>
						<TextareaAutosize
							minRows={5}
							required
							placeholder="Write description"
							color="info"
							style={{
								width: "100%",
								background: "transparent",
								fontSize: "16px",
								borderRadius: 6,
								padding: 10,
								color: "#D3D3D3",
							}}
							{...register("description", { required: true })}
						/>
					</FormControl>

					<Stack direction={{ sx: "column", sm: "row" }} gap={4}>
						<FormControl sx={{ flex: 1 }}>
							<FormHelperText
								sx={{
									fontWeight: 500,
									margin: "10px 0",
									fontSize: 16,
									color: "#F9F7F7",
								}}
							>
								Select Property Type
							</FormHelperText>
							<Select
								variant="outlined"
								color="info"
								displayEmpty
								required
								inputProps={{ "aria-label": "Without label" }}
								style={{ color: "#D3D3D3" }}
								defaultValue="apartment"
								{...register("propertyType", { required: true })}
							>
								<MenuItem value="apartment">Apartment</MenuItem>
								<MenuItem value="villa">Villa</MenuItem>
								<MenuItem value="farmhouse">Farmhouse</MenuItem>
								<MenuItem value="condos">Condos</MenuItem>
								<MenuItem value="townhouse">Townhouse</MenuItem>
								<MenuItem value="duplex">Duplex</MenuItem>
								<MenuItem value="studio">Studio</MenuItem>
								<MenuItem value="chalet">Chalet</MenuItem>
							</Select>
						</FormControl>

						<FormControl>
							<FormHelperText
								sx={{
									fontWeight: 500,
									margin: "10px 0",
									fontSize: 16,
									color: "#F9F7F7",
								}}
							>
								Enter Property Price
							</FormHelperText>
							<TextField
								fullWidth
								required
								id="outlined-basic"
								color="info"
								type="number"
								variant="outlined"
								{...register("price", { required: true })}
								inputProps={{ style: { color: "#D3D3D3" } }}
							/>
						</FormControl>
					</Stack>

					<FormControl>
						<FormHelperText
							sx={{
								fontWeight: 500,
								margin: "10px 0",
								fontSize: 16,
								color: "#F9F7F7",
							}}
						>
							Enter Location
						</FormHelperText>
						<TextField
							fullWidth
							required
							id="outlined-basic"
							color="info"
							variant="outlined"
							{...register("location", { required: true })}
							inputProps={{ style: { color: "#D3D3D3" } }}
						/>
					</FormControl>

					<Stack direction="column" gap={1} justifyContent="center" mb={2}>
						<Stack direction="row" gap={2}>
							<Typography
								color="#F9F7F7"
								fontSize={16}
								fontWeight={500}
								my="10px"
							>
								Property Photo
							</Typography>

							<Button
								component="label"
								sx={{
									width: "fit-content",
									color: "#FC5185",
									textTransform: "capitalize",
									fontSize: 16,
									border: "1px solid #FC5185",
								}}
							>
								Upload *
								<input
									hidden
									accept="image/*"
									type="file"
									onChange={(e) => {
										if (e.target.files) {
											handleImageChange(e.target.files[0]);
										}
									}}
								/>
							</Button>
						</Stack>

						<Typography
							fontSize={14}
							color="#D3D3D3"
							sx={{ wordBreak: "break-all" }}
						>
							{propertyImage?.name}
						</Typography>
					</Stack>

					<CustomButton
						type="submit"
						title={formLoading ? "Submitting..." : "Submit"}
						backgroundColor="#3FC1C9"
						color="#112D4E"
					></CustomButton>
				</form>
			</Box>
		</Box>
	);
};

export default Form;
