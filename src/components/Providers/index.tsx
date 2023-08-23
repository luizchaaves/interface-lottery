import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import megasena from '../../styles/themes/megasena';

const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={megasena}>{children}</ThemeProvider>;
};

export default Providers;
