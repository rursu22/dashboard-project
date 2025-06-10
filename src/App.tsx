import "./App.css"
import Sidebar from "./Sidebar"
import { AppContainer, ContentContainer, DashBoard, TopBar, TopbarLink, TopbarLinkContainer } from "./styles"

function App() {

	return (
		<AppContainer>
			<Sidebar />
			<ContentContainer>
				<TopBar >
					<TopbarLinkContainer>
						<TopbarLink active = {true}>
							Finance
						</TopbarLink>
					</TopbarLinkContainer>
					<TopbarLinkContainer>
						<TopbarLink active = {false}>
							Maintenance
						</TopbarLink>
					</TopbarLinkContainer>
					<TopbarLinkContainer>
						<TopbarLink active = {false}>
							Marketing
						</TopbarLink>
					</TopbarLinkContainer>
					<TopbarLinkContainer>
						<TopbarLink active = {false}>
							Revenue
						</TopbarLink>
					</TopbarLinkContainer>
				</TopBar>
				<DashBoard>

				</DashBoard>
			</ContentContainer>
		</AppContainer>
	)
}

export default App
