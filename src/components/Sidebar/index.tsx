import { Container, Content } from './styles';
import Logo from '../Logo';
import Select from '../Select';

const Sidebar = () => {
  return (
    <Container>
      <Content>
        <Select />
        <Logo />
        <div>Concurso</div>
      </Content>
    </Container>
  );
};

export default Sidebar;
