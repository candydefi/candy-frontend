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
      56: '0xD51B54fcAD2d9FFE8e0546DabD4d4BE0f4Dc6A6e',
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
      56: '0x2dE1Ba1D248E100B0B08e05293A47789C73af500',
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
      56: '0x4D6031803a0EB413C71E7B0a66CB1026c113d9ba',
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
      56: '0x61A79CB32080b53Ca1a6326095db3FcE9e4A7020',
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
      56: '0x3c727612de27Ea176e669B3275e7872C760fcED4',
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
      56: '0xb52893Cf6E456f6fe5eFc4fCC2CbB8E8edA1e84d',
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
      56: '0xe8a9C452f75B5B1F8aB2aa13B08CBF1793798695',
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
      56: '0x8a4DF34facE64907DdD11387667d1F47D564DbF2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0005978',
  },
]

export default pools
