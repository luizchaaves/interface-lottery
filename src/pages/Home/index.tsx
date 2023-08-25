import { DefaultTheme, ThemeProvider } from 'styled-components';
import Sidebar from '../../components/Sidebar';
import { Container, Content } from './styles';
import { useLottery } from '../../hooks/useLottery';
import { useEffect, useState } from 'react';
import { getTheme } from '../../utils/getTheme';
import { megasena } from '../../styles/themes';

const Home = () => {
  const { filter } = useLottery();
  const [theme, setTheme] = useState<DefaultTheme>(megasena);

  useEffect(() => {
    setTheme(getTheme(filter));
  }, [filter]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Sidebar />
        <Content>content</Content>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
