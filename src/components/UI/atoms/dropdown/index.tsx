import styled from "styled-components";
import {IconArrow, IconLocation} from "@/assets";
import {useState} from "react";

const Container = styled.div`
	padding: 2rem;
	position: relative;
	display: inline-block;
	width: 100%;
`;
const Header = styled.div`
	display: flex;
	height: 20px;
	color: var(--secondary-text);
	font-size: 13px;
	font-weight: 600;
`;
const HeaderTitle = styled.div`
	padding-left: 8px;
`;
const HeaderIcon = styled.div``;
const Selector = styled.div`
	display: flex;
	justify-content: space-between;
	height: 40px;
	padding: 10px 15px 10px 10px;
	border-bottom: 1px solid var(--main-color);
	font-size: 15px;
	&:hover {
		cursor: pointer;
	}
`;
const SelectorInput = styled.div`
	justify-content: flex-start;
`;
const SelectorIcon = styled.div`
	justify-content: flex-end;
`;
const Menu = styled.div`
	position: absolute;
	width: 90.4%;
	max-height: 300px;
	overflow-y: auto;
	z-index: 1;
	border-right: 1px solid var(--main-color);
	border-bottom: 1px solid var(--main-color);
	border-left: 1px solid var(--main-color);
	background-color: white;
	font-size: 15px;
	text-align: left;
	&:hover {
		cursor: pointer;
	}
`;
const MenuItem = styled.div`
	padding: 5px 20px;
	&:hover {
		background-color: #f3f4f6;
	}
`;

interface MenuItem {
	name: string;
}

interface DropdownProps {
	title: string;
	menuItems: MenuItem[];
	onSelection: (value: MenuItem) => void;
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>(
		props.menuItems[0]
	);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const handleMenuItemChange = (menuItem: MenuItem) => {
		setSelectedMenuItem(menuItem);
		setIsMenuOpen(false);
		props.onSelection(menuItem);
	};

	const menuItems = props.menuItems.map((menuItem) => {
		return (
			<MenuItem onClick={() => handleMenuItemChange(menuItem)}>
				{menuItem.name}
			</MenuItem>
		);
	});

	const menuStyle = {
		display: isMenuOpen ? "block" : "none",
		opacity: isMenuOpen ? "1" : "0",
	};
	const selectorIconRotation = isMenuOpen ? "270" : "90";

	return (
		<Container>
			<Header>
				<HeaderIcon>
					<IconLocation color="#747474" size="100%" />
				</HeaderIcon>
				<HeaderTitle>{props.title}</HeaderTitle>
			</Header>
			<Selector onClick={() => toggleMenu()}>
				<SelectorInput>{selectedMenuItem.name}</SelectorInput>
				<SelectorIcon>
					<IconArrow
						color="#4a4e5c"
						size="100%"
						rotate={selectorIconRotation}
					/>
				</SelectorIcon>
			</Selector>
			<Menu style={menuStyle}>{menuItems}</Menu>
		</Container>
	);
};
