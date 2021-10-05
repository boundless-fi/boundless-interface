import { MenuEntry } from '@yokaiswap/interface-uikit'

const config: MenuEntry[] = [
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
    ],
  },
  {
    label: 'Equilizer',
    icon: 'FarmIcon',
    href: 'https://dev.yokaiswap.com/farms',
  }
]

export default config
