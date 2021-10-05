import { Token } from '@boundless-fi/sdk'

export class SUDTToken extends Token {
  public constructor({ chainId, address, decimals, symbol }: Token, public readonly issuerLockHash: string) {
    super(chainId, address, decimals, symbol)
  }
}
