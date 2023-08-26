import { DefaultTheme, ThemeProvider } from 'styled-components';
import Sidebar from '../../components/Sidebar';
import { Container } from './styles';
import { useLottery } from '../../hooks/useLottery';
import { useEffect, useState } from 'react';
import { getTheme } from '../../utils/getTheme';
import { megasena } from '../../styles/themes';
import Result from '../../components/Result';

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
        <Result />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
