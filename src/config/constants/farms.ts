import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CANDY',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xC10d6fEc060745809D1c8836B80B1F2f74b7B60a',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CANDY-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x73bF4Af2634bD6f51802175A81f629bbd86fD5f3',
    },
    token: tokens.candy,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ALPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4cC442220BE1cE560C1f2573f8CA8f460B3E4172',
    },
    token: tokens.alpa,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'JGN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7275278C94b5e20708380561C4Af98F38dDC6374',
    },
    token: tokens.jgn,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'ARPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9730c791743300E9f984C9264395ce705A55Da7c',
    },
    token: tokens.arpa,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'TRX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3cd338c3BB249B6b3C55799F85a589FEbBBFf9Dd',
    },
    token: tokens.trx,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'BTT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x946696344e7d4346b223e1Cf77035a76690d6A73',
    },
    token: tokens.btt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'WIN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x894bd57afD8EFc93D9171cb585d11d0977557425',
    },
    token: tokens.win,
    quoteToken: tokens.wbnb,
  },
]

export default farms
