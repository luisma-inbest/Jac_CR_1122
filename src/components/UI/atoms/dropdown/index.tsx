import styled from "styled-components";
import { IconArrow, IconLocation } from "@/assets";
import { useState } from "react";

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
    background-color: #F3F4F6;
  }
`;

interface Distributor {
  name: string;
}

interface DropdownProps {
  title: string;
  distributors: Distributor[];
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDistributor, setSelectedDistributor] = useState<Distributor>(props.distributors[0]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDistributorChange = (distributor: Distributor) => {
    setSelectedDistributor(distributor);
    setIsMenuOpen(false);
    // Redirect?
  };

  const menuItems = props.distributors.map(distributor => {
    return <MenuItem onClick={() => handleDistributorChange(distributor)}>{distributor.name}</MenuItem>;
  });

  const menuStyle = {
    display: isMenuOpen ? 'block' : 'none',
    opacity: isMenuOpen ? '1' : '0',
  };
  const selectorIconRotation = isMenuOpen ? '270' : '90';

  return (
    <Container>
      <Header>
        <HeaderIcon>
          <IconLocation color="#747474" size="100%" />
        </HeaderIcon>
        <HeaderTitle>{props.title}</HeaderTitle>
      </Header>
      <Selector onClick={() => toggleMenu()}>
        <SelectorInput>{selectedDistributor.name}</SelectorInput>
        <SelectorIcon>
          <IconArrow color="#4a4e5c" size="100%" rotate={selectorIconRotation} />
        </SelectorIcon>
      </Selector>
      <Menu style={menuStyle}>
        {menuItems}
      </Menu>
    </Container>
  );
};
