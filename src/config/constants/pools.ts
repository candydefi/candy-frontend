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
      56: '0xED82dd49Fa76369a3Ae26Be6c4eBaAD169Db8FA0',
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
      56: '0xf371cE1C583120A15492286Aaf8041A15E5855fa',
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
      56: '0x9ABB11Aa1DBb635817dA48658682292e6F8AD677',
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
      56: '0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5',
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
      56: '0xAD60922335F33A3922160c58D7E17DE2bD1a3c0e',
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
      56: '0x73e89DCeC3A28034026fdB97bB0Fec98344E005F',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0005978',
  },
  {
    sousId: 94,
    stakingToken: tokens.candy,
    earningToken: tokens.btt,
    contractAddress: {
      97: '',
      56: '0x31A0816401B88950f58B88E06fF40D8C5543483A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0005978',
  },
  {
    sousId: 95,
    stakingToken: tokens.candy,
    earningToken: tokens.win,
    contractAddress: {
      97: '',
      56: '0xe66F31651b71c15B3E72C6908bBcDB97649054bb',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0005978',
  },
]

export default pools
