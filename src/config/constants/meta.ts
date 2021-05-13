import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CandySwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CandySwap), NFTs, and more, on a platform you can trust.',
  image: 'https://candyswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | CandySwap',
  },
  '/competition': {
    title: 'Trading Battle | CandySwap',
  },
  '/prediction': {
    title: 'Prediction | CandySwap',
  },
  '/farms': {
    title: 'Farms | CandySwap',
  },
  '/pools': {
    title: 'Pools | CandySwap',
  },
  '/lottery': {
    title: 'Lottery | CandySwap',
  },
  '/collectibles': {
    title: 'Collectibles | CandySwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | CandySwap',
  },
  '/teams': {
    title: 'Leaderboard | CandySwap',
  },
  '/profile/tasks': {
    title: 'Task Center | CandySwap',
  },
  '/profile': {
    title: 'Your Profile | CandySwap',
  },
}
