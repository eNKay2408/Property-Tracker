import {
	AuthBindings,
	Authenticated,
	GitHubBanner,
	Refine,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
	ErrorComponent,
	notificationProvider,
	RefineSnackbarProvider,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
	CatchAllNavigate,
	DocumentTitleHandler,
	NavigateToResource,
	UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import axios from "axios";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { CredentialResponse } from "./interfaces/google";
import { parseJwt } from "./utils/parse-jwt";

import { ThemedLayoutV2 } from "./components/layout";
import {
	Login,
	Home,
	Agents,
	MyProfile,
	PropertyDetails,
	AllProperties,
	CreateProperty,
	AgentProfile,
	EditProperty,
	Wip,
} from "./pages";
import {
	AccountCircleOutlined,
	ChatBubbleOutlined,
	PeopleAltOutlined,
	StarOutlineRounded,
	VillaOutlined,
	DashboardOutlined,
} from "@mui/icons-material";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (config.headers) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}

	return config;
});

function App() {
	const authProvider: AuthBindings = {
		login: async ({ credential }: CredentialResponse) => {
			const profileObj = credential ? parseJwt(credential) : null;

			// Save user to MongoDB...
			if (profileObj) {
				const response = await fetch("http://localhost:8080/api/v1/users", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: profileObj.name,
						email: profileObj.email,
						avatar: profileObj.picture,
					}),
				});

				const data = await response.json();

				if (response.status === 200) {
					localStorage.setItem(
						"user",
						JSON.stringify({
							...profileObj,
							avatar: profileObj.picture,
							userid: data._id,
						})
					);
				} else {
					return {
						success: false,
						error: {
							message: "User not found",
							name: "User not found",
						},
					};
				}

				localStorage.setItem("token", `${credential}`);

				return {
					success: true,
					redirectTo: "/",
				};
			}

			return {
				success: false,
			};
		},
		logout: async () => {
			const token = localStorage.getItem("token");

			if (token && typeof window !== "undefined") {
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				axios.defaults.headers.common = {};
				window.google?.accounts.id.revoke(token, () => {
					return {};
				});
			}

			return {
				success: true,
				redirectTo: "/login",
			};
		},
		onError: async (error) => {
			console.error(error);
			return { error };
		},
		check: async () => {
			const token = localStorage.getItem("token");

			if (token) {
				return {
					authenticated: true,
				};
			}

			return {
				authenticated: false,
				error: {
					message: "Check failed",
					name: "Token not found",
				},
				logout: true,
				redirectTo: "/login",
			};
		},
		getPermissions: async () => null,
		getIdentity: async () => {
			const user = localStorage.getItem("user");
			if (user) {
				return JSON.parse(user);
			}

			return null;
		},
	};

	return (
		<BrowserRouter>
			<RefineKbarProvider>
				<ColorModeContextProvider>
					<CssBaseline />
					<GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
					<RefineSnackbarProvider>
						<DevtoolsProvider>
							<Refine
								dataProvider={dataProvider("http://localhost:8080/api/v1")}
								notificationProvider={notificationProvider}
								routerProvider={routerBindings}
								authProvider={authProvider}
								resources={[
									{
										name: "dashboard",
										list: "/",
										options: { label: "Dashboard" },
										icon: <DashboardOutlined />,
									},
									{
										name: "properties",
										list: "/properties",
										create: "/properties/create",
										edit: "/properties/edit/:id",
										show: "/properties/show/:id",
										icon: <VillaOutlined />,
									},
									{
										name: "agents",
										list: "/agents",
										show: "/agents/show/:id",
										icon: <PeopleAltOutlined />,
									},
									{
										name: "reviews",
										list: "/reviews",
										icon: <StarOutlineRounded />,
									},
									{
										name: "messages",
										list: "/messages",
										icon: <ChatBubbleOutlined />,
									},
									{
										name: "my-profile",
										options: { label: "My Profile" },
										list: "/my-profile",
										icon: <AccountCircleOutlined />,
									},
								]}
								options={{
									syncWithLocation: true,
									warnWhenUnsavedChanges: true,
									useNewQueryKeys: true,
									projectId: "WuerTi-I83KNh-YBe2Gi",
								}}
							>
								<Routes>
									<Route
										element={
											<Authenticated
												key="authenticated-inner"
												fallback={<CatchAllNavigate to="/login" />}
											>
												<ThemedLayoutV2>
													<Outlet />
												</ThemedLayoutV2>
											</Authenticated>
										}
									>
										<Route path="/" element={<Home />} />

										<Route path="/properties">
											<Route index element={<AllProperties />}></Route>
											<Route path="create" element={<CreateProperty />}></Route>
											<Route path="edit/:id" element={<EditProperty />}></Route>
											<Route
												path="show/:id"
												element={<PropertyDetails />}
											></Route>
										</Route>

										<Route path="/agents">
											<Route index element={<Agents />} />
											<Route path="show/:id" element={<AgentProfile />} />
										</Route>

										<Route path="/my-profile" element={<MyProfile />} />

										<Route path="/reviews" element={<Wip title="Reviews" />} />
										<Route
											path="/messages"
											element={<Wip title="Messages" />}
										/>

										<Route path="*" element={<ErrorComponent />} />
									</Route>

									<Route
										element={
											<Authenticated
												key="authenticated-outer"
												fallback={<Outlet />}
											>
												<NavigateToResource />
											</Authenticated>
										}
									>
										<Route path="/login" element={<Login />} />
									</Route>
								</Routes>

								<RefineKbar />
								<UnsavedChangesNotifier />
								<DocumentTitleHandler />
							</Refine>
						</DevtoolsProvider>
					</RefineSnackbarProvider>
				</ColorModeContextProvider>
			</RefineKbarProvider>
		</BrowserRouter>
	);
}

export default App;
