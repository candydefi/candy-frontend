import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.candy,
    earningToken: tokens.candy,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xDdA32389Fc96f5890Cc300f9265f045DEccA1e0E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 110,
    stakingToken: tokens.candy,
    earningToken: tokens.hakka,
    contractAddress: {
      97: '',
      56: '0xd623a32da4a632ce01766c317d07cb2cad56949b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3.4722',
  },
  {
    sousId: 103,
    stakingToken: tokens.candy,
    earningToken: tokens.perl,
    contractAddress: {
      97: '',
      56: '0xa8d32b31ECB5142f067548Bf0424389eE98FaF26',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.1574',
  },
  {
    sousId: 99,
    stakingToken: tokens.candy,
    earningToken: tokens.arpa,
    contractAddress: {
      97: '',
      56: '0x40918EF8efFF4aA061656013a81E0e5A8A702eA7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.949',
  },
  {
    sousId: 100,
    stakingToken: tokens.candy,
    earningToken: tokens.eps,
    contractAddress: {
      97: '',
      56: '0xebb87dF24D65977cbe62538E4B3cFBD5d0308642',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.07716',
  },
  {
    sousId: 92,
    stakingToken: tokens.candy,
    earningToken: tokens.easy,
    contractAddress: {
      97: '',
      56: '0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0072338',
  },
    
  {
    sousId: 93,
    stakingToken: tokens.candy,
    earningToken: tokens.trx,
    contractAddress: {
      97: '',
      56: '0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0072338',
  },
  {
    sousId: 94,
    stakingToken: tokens.candy,
    earningToken: tokens.btt,
    contractAddress: {
      97: '',
      56: '0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0072338',
  },
  {
    sousId: 95,
    stakingToken: tokens.candy,
    earningToken: tokens.win,
    contractAddress: {
      97: '',
      56: '0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0072338',
  },
]

export default pools
