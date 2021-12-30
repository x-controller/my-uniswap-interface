import { BigNumber } from '@ethersproject/bignumber'

import { useSingleCallResult } from '../state/multicall/hooks'
import { useInterfaceMulticall } from './useContract'

// 从区块链获取当前时间戳
export default function useCurrentBlockTimestamp(): BigNumber | undefined {
  const multicall = useInterfaceMulticall()
  return useSingleCallResult(multicall, 'getCurrentBlockTimestamp')?.result?.[0]
}
