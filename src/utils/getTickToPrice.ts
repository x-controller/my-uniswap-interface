import { Price, Token } from '@uniswap/sdk-core'
import { tickToPrice } from '@uniswap/v3-sdk'

// 按价格计价
export function getTickToPrice(baseToken?: Token, quoteToken?: Token, tick?: number): Price<Token, Token> | undefined {
  if (!baseToken || !quoteToken || typeof tick !== 'number') {
    return undefined
  }
  return tickToPrice(baseToken, quoteToken, tick)
}
