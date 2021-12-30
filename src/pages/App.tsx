import Loader from 'components/Loader' // 加载中组件
import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader' // 使用Ape模式查询参数读取器
import { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'

import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter' // 分析/谷歌分析通讯员
import AddressClaimModal from '../components/claim/AddressClaimModal' // 断言/地址断言模式
import ErrorBoundary from '../components/ErrorBoundary' // 误差边界
import Header from '../components/Header' // 头部
import Polling from '../components/Header/Polling' // 头部/轮询
import Popups from '../components/Popups'// 弹出窗口
import Web3ReactManager from '../components/Web3ReactManager'
import { useModalOpen, useToggleModal } from '../state/application/hooks'// 使用模态打开,使用切换模式
import { ApplicationModal } from '../state/application/reducer' // 减速器
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader' // 暗模式查询参数读取器
import AddLiquidity from './AddLiquidity' // 添加流动性
import { RedirectDuplicateTokenIds } from './AddLiquidity/redirects' // 重定向 / 重定向重复的令牌ID
import { RedirectDuplicateTokenIdsV2 } from './AddLiquidityV2/redirects' // 重定向 / 重定向重复的令牌ID v2
import Earn from './Earn' // 赚
import Manage from './Earn/Manage'
import MigrateV2 from './MigrateV2'
import MigrateV2Pair from './MigrateV2/MigrateV2Pair'
import Pool from './Pool' // 池
import { PositionPage } from './Pool/PositionPage'// 位置页
import PoolV2 from './Pool/v2'
import PoolFinder from './PoolFinder' // 池查找器
import RemoveLiquidity from './RemoveLiquidity' // 移除流动性
import RemoveLiquidityV3 from './RemoveLiquidity/V3' // 移除流动性 v3
import Swap from './Swap' // 交易
import { OpenClaimAddressModalAndRedirectToSwap, RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
// 重定向
// 打开声明地址模式并重定向到交换,将路径重定向为仅交换,重定向到交换

const Vote = lazy(() => import('./Vote')) // 惰性加载投票

// app包装器
const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`
// body包装器
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 16px 0px 16px;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 4rem 8px 16px 8px;
  `};
`

// 头部包装器
const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

// 边距
const Marginer = styled.div`
  margin-top: 5rem;
`

// 顶级情态动词
function TopLevelModals() {
  // 打开
  const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
  // 切换
  const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
  // 地址断言模态框组件
  return <AddressClaimModal isOpen={open} onDismiss={toggle} />
}

export default function App() {
  return (
    <ErrorBoundary>
      <Route component={GoogleAnalyticsReporter} />
      <Route component={DarkModeQueryParamReader} />
      <Route component={ApeModeQueryParamReader} />
      <Web3ReactManager>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Popups />
            <Polling />
            <TopLevelModals />
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route strict path="/vote" component={Vote} />
                <Route exact strict path="/create-proposal">
                  <Redirect to="/vote/create-proposal" />
                </Route>
                <Route exact strict path="/claim" component={OpenClaimAddressModalAndRedirectToSwap} />
                <Route exact strict path="/uni" component={Earn} />
                <Route exact strict path="/uni/:currencyIdA/:currencyIdB" component={Manage} />

                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/swap" component={Swap} />

                <Route exact strict path="/pool/v2/find" component={PoolFinder} />
                <Route exact strict path="/pool/v2" component={PoolV2} />
                <Route exact strict path="/pool" component={Pool} />
                <Route exact strict path="/pool/:tokenId" component={PositionPage} />

                <Route
                  exact
                  strict
                  path="/add/v2/:currencyIdA?/:currencyIdB?"
                  component={RedirectDuplicateTokenIdsV2}
                />
                <Route
                  exact
                  strict
                  path="/add/:currencyIdA?/:currencyIdB?/:feeAmount?"
                  component={RedirectDuplicateTokenIds}
                />

                <Route
                  exact
                  strict
                  path="/increase/:currencyIdA?/:currencyIdB?/:feeAmount?/:tokenId?"
                  component={AddLiquidity}
                />

                <Route exact strict path="/remove/v2/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route exact strict path="/remove/:tokenId" component={RemoveLiquidityV3} />

                <Route exact strict path="/migrate/v2" component={MigrateV2} />
                <Route exact strict path="/migrate/v2/:address" component={MigrateV2Pair} />

                <Route component={RedirectPathToSwapOnly} />
              </Switch>
            </Suspense>
            <Marginer />
          </BodyWrapper>
        </AppWrapper>
      </Web3ReactManager>
    </ErrorBoundary>
  )
}
