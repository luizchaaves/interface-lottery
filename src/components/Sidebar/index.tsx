import { Container, Content } from './styles';
import Logo from '../Logo';
import Select from '../Select';
import Contest from '../Contest';

const Sidebar = () => {
  return (
    <Container>
      <Content>
        <Select />
        <Logo />
        <Contest />
      </Content>
    </Container>
  );
};

export default Sidebar;
