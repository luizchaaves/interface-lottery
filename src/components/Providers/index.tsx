import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { LotteryProvider } from '../../contexts/LotteryContext';
import { megasena } from '../../styles/themes';
import { QueryClient, QueryClientProvider } from 'react-query';

const Providers = ({ children }: PropsWithChildren) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <LotteryProvider>
        <ThemeProvider theme={megasena}>{children}</ThemeProvider>
      </LotteryProvider>
    </QueryClientProvider>
  );
};

export default Providers;
