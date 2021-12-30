# Uniswap 界面

[![单元测试](https://github.com/Uniswap/uniswap-interface/actions/workflows/unit-tests.yaml/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions/workflows/unit-tests.yaml)
[![集成测试](https://github.com/Uniswap/uniswap-interface/actions/workflows/integration-tests.yaml/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions/workflows/integration-tests.yaml)
[![绒毛](https://github.com/Uniswap/uniswap-interface/actions/workflows/lint.yml/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions/workflows/lint.yml)
[![发布](https://github.com/Uniswap/uniswap-interface/actions/workflows/release.yaml/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions/workflows/release.yaml)
[![Crowdin](https://badges.crowdin.net/uniswap-interface/localized.svg)](https://crowdin.com/project/uniswap-interface)

Uniswap 的开源界面 —— 以太坊 token 分散交换协议。

- 网站: [uniswap.org](https://uniswap.org/)
- 界面: [app.uniswap.org](https://app.uniswap.org)
- 文档: [uniswap.org/docs/](https://docs.uniswap.org/)
- Twitter: [@Uniswap](https://twitter.com/Uniswap)
- Reddit: [/r/Uniswap](https://www.reddit.com/r/Uniswap/)
- Email: [contact@uniswap.org](mailto:contact@uniswap.org)
- Discord: [Uniswap](https://discord.gg/FCfyBSbCU5)
- 白皮书:
  - [V1](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)
  - [V2](https://uniswap.org/whitepaper.pdf)
  - [V3](https://uniswap.org/whitepaper-v3.pdf)

## 访问 Uniswap 界面

要访问 Uniswap 界面，请使用来自的IPFS网关链接[latest release](https://github.com/Uniswap/uniswap-interface/releases/latest),
或者访问 [app.uniswap.org](https://app.uniswap.org).

## 不受支持的 tokens

检查 `useUnsupportedTokenList()` 于 [src/state/lists/hooks.ts](./src/state/lists/hooks.ts) 用于阻止接口实例中的令牌。

您可以通过传入像 [这里](./src/constants/lists.ts) 这样的代币列表来阻止整个代币列表, 也可以通过将特定代币添加到 [unsupported.tokenlist.json](./src/constants/tokenLists/unsupported.tokenlist.json)来阻止它们.

## Contributions

For steps on local deployment, development, and code contribution, please see [CONTRIBUTING](./CONTRIBUTING.md).

## Accessing Uniswap V2

The Uniswap Interface supports swapping, adding liquidity, removing liquidity and migrating liquidity for Uniswap protocol V2.

- Swap on Uniswap V2: https://app.uniswap.org/#/swap?use=v2
- View V2 liquidity: https://app.uniswap.org/#/pool/v2
- Add V2 liquidity: https://app.uniswap.org/#/add/v2
- Migrate V2 liquidity to V3: https://app.uniswap.org/#/migrate/v2

## Accessing Uniswap V1

The Uniswap V1 interface for mainnet and testnets is accessible via IPFS gateways
linked from the [v1.0.0 release](https://github.com/Uniswap/uniswap-interface/releases/tag/v1.0.0).
