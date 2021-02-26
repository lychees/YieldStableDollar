import React from 'react';

import ysdLogo from '../../assets/img/YSD.png';
import yssLogo from '../../assets/img/YSS.png';
import ysbLogo from '../../assets/img/YSB.png';
import yCRVLogo from '../../assets/img/ycrv.png';
import DAILogo from '../../assets/img/DAI.png';
import sUSDLogo from '../../assets/img/sUSD.png';
import USDCLogo from '../../assets/img/USDC.png';
import USDTLogo from '../../assets/img/USDT.png';
import BUSDLogo from '../../assets/img/BUSD.png';

const logosBySymbol: {[title: string]: string} = {
  'YSD': ysdLogo,
  'YSB': ysbLogo,
  'YSS': yssLogo,
  'yCRV': yCRVLogo,
  'DAI': DAILogo,
  'SUSD': sUSDLogo,
  'USDC': USDCLogo,
  'USDT': USDTLogo,
  'BUSD': BUSDLogo,
  'YSD_BUSD-UNI-LPv2': ysdLogo,
  'YSS_BUSD-UNI-LPv2': ysdLogo,
};

type BasisLogoProps = {
  symbol: string;
  size?: number;
}

const TokenSymbol: React.FC<BasisLogoProps> = ({ symbol, size = 54 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid BasisLogo symbol: ${symbol}`);
  }
  return (
    <img
      src={logosBySymbol[symbol]}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
    />
  )
};

export default TokenSymbol;
