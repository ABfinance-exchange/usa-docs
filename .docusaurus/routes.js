import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/usa-docs/zh-TW/markdown-page',
    component: ComponentCreator('/usa-docs/zh-TW/markdown-page', '12c'),
    exact: true
  },
  {
    path: '/usa-docs/zh-TW/search',
    component: ComponentCreator('/usa-docs/zh-TW/search', '6e8'),
    exact: true
  },
  {
    path: '/usa-docs/zh-TW/',
    component: ComponentCreator('/usa-docs/zh-TW/', 'b8f'),
    exact: true
  },
  {
    path: '/usa-docs/zh-TW/',
    component: ComponentCreator('/usa-docs/zh-TW/', 'e1e'),
    routes: [
      {
        path: '/usa-docs/zh-TW/changelog/v5',
        component: ComponentCreator('/usa-docs/zh-TW/changelog/v5', '603'),
        exact: true,
        sidebar: "changelogSidebar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/account-info',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/account-info', 'c2c'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/batch-set-collateral',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/batch-set-collateral', '533'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/borrow-history',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/borrow-history', 'a9a'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/collateral-info',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/collateral-info', '1fa'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/dcp-info',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/dcp-info', 'd3c'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/fee-rate',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/fee-rate', '73e'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/get-user-setting-config',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/get-user-setting-config', 'a85'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/instrument',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/instrument', 'e01'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/set-collateral',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/set-collateral', '10d'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/set-price-limit',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/set-price-limit', '015'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/smp-group',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/smp-group', '3b4'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/transaction-log',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/transaction-log', '9cb'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/unified-trans-amnt',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/unified-trans-amnt', '403'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/account/wallet-balance',
        component: ComponentCreator('/usa-docs/zh-TW/v5/account/wallet-balance', 'ee1'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/announcement',
        component: ComponentCreator('/usa-docs/zh-TW/v5/announcement', 'ea9'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/balance/account-coin-balance',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/balance/account-coin-balance', '493'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/balance/all-balance',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/balance/all-balance', '1bf'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/balance/delay-amount',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/balance/delay-amount', '066'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/coin-info',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/coin-info', 'a22'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/convert/apply-quote',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/convert/apply-quote', 'a83'),
        exact: true
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/convert/confirm-quote',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/convert/confirm-quote', '9a8'),
        exact: true
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/convert/convert-coin-list',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/convert/convert-coin-list', '271'),
        exact: true
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/convert/get-convert-history',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/convert/get-convert-history', '03e'),
        exact: true
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/convert/get-convert-result',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/convert/get-convert-result', '270'),
        exact: true
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/convert/guideline',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/convert/guideline', '2fb'),
        exact: true
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/deposit/deposit-record',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/deposit/deposit-record', '342'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/deposit/internal-deposit-record',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/deposit/internal-deposit-record', 'ba0'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/deposit/master-deposit-addr',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/deposit/master-deposit-addr', 'aca'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/deposit/set-deposit-acct',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/deposit/set-deposit-acct', '41b'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/deposit/sub-deposit-addr',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/deposit/sub-deposit-addr', 'ce6'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/deposit/sub-deposit-record',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/deposit/sub-deposit-record', '6a0'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/exchange',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/exchange', 'c4f'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/sub-uid-list',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/sub-uid-list', '137'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/transfer/create-inter-transfer',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/transfer/create-inter-transfer', '505'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/transfer/inter-transfer-list',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/transfer/inter-transfer-list', '4cb'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/transfer/transferable-coin',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/transfer/transferable-coin', 'fdd'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/transfer/unitransfer',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/transfer/unitransfer', 'c56'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/transfer/unitransfer-list',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/transfer/unitransfer-list', 'a30'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/withdraw',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/withdraw', '69f'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/withdraw/cancel-withdraw',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/withdraw/cancel-withdraw', 'a8f'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/withdraw/vasp-list',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/withdraw/vasp-list', 'b74'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/withdraw/withdraw-address',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/withdraw/withdraw-address', '37f'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/asset/withdraw/withdraw-record',
        component: ComponentCreator('/usa-docs/zh-TW/v5/asset/withdraw/withdraw-record', '2f5'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/earn/create-order',
        component: ComponentCreator('/usa-docs/zh-TW/v5/earn/create-order', '425'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/earn/hourly-yield',
        component: ComponentCreator('/usa-docs/zh-TW/v5/earn/hourly-yield', 'c6b'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/earn/order-history',
        component: ComponentCreator('/usa-docs/zh-TW/v5/earn/order-history', '09a'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/earn/position',
        component: ComponentCreator('/usa-docs/zh-TW/v5/earn/position', 'f31'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/earn/product-info',
        component: ComponentCreator('/usa-docs/zh-TW/v5/earn/product-info', '01c'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/earn/yield-history',
        component: ComponentCreator('/usa-docs/zh-TW/v5/earn/yield-history', '828'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/enum',
        component: ComponentCreator('/usa-docs/zh-TW/v5/enum', '7ac'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/error',
        component: ComponentCreator('/usa-docs/zh-TW/v5/error', 'd31'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/guide',
        component: ComponentCreator('/usa-docs/zh-TW/v5/guide', '746'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/intro',
        component: ComponentCreator('/usa-docs/zh-TW/v5/intro', '763'),
        exact: true
      },
      {
        path: '/usa-docs/zh-TW/v5/market/index-components',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/index-components', 'c83'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/market/instrument',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/instrument', 'ba7'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/market/kline',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/kline', '183'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/market/order-price-limit',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/order-price-limit', 'a86'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/market/orderbook',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/orderbook', '6be'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/market/recent-trade',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/recent-trade', 'a9f'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/market/rpi-orderbook',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/rpi-orderbook', '518'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/market/tickers',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/tickers', '010'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/market/time',
        component: ComponentCreator('/usa-docs/zh-TW/v5/market/time', 'c6d'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/amend-order',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/amend-order', '124'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/batch-amend',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/batch-amend', '0f0'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/batch-cancel',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/batch-cancel', 'bf4'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/batch-place',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/batch-place', '485'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/cancel-all',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/cancel-all', '003'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/cancel-order',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/cancel-order', '9d5'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/create-order',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/create-order', '1b1'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/dcp',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/dcp', '347'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/execution',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/execution', '0c8'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/open-order',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/open-order', 'd2a'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/order-list',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/order-list', '790'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/order/spot-borrow-quota',
        component: ComponentCreator('/usa-docs/zh-TW/v5/order/spot-borrow-quota', '1fa'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/rate-limit',
        component: ComponentCreator('/usa-docs/zh-TW/v5/rate-limit', '3b6'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/apilimit-query',
        component: ComponentCreator('/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/apilimit-query', '68e'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/apilimit-query-all',
        component: ComponentCreator('/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/apilimit-query-all', 'f98'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/apilimit-query-cap',
        component: ComponentCreator('/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/apilimit-query-cap', '8a3'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/apilimit-set',
        component: ComponentCreator('/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/apilimit-set', '1c3'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/introduction',
        component: ComponentCreator('/usa-docs/zh-TW/v5/rate-limit/rules-for-pros/introduction', 'ddf'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/rate-limit/rules-for-vips',
        component: ComponentCreator('/usa-docs/zh-TW/v5/rate-limit/rules-for-vips', '8bf'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/smp',
        component: ComponentCreator('/usa-docs/zh-TW/v5/smp', '7a5'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/apikey-info',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/apikey-info', 'eaf'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/create-subuid',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/create-subuid', '716'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/create-subuid-apikey',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/create-subuid-apikey', '256'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/froze-subuid',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/froze-subuid', '36e'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/fund-subuid-list',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/fund-subuid-list', 'a8d'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/list-sub-apikeys',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/list-sub-apikeys', '295'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/modify-master-apikey',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/modify-master-apikey', '988'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/modify-sub-apikey',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/modify-sub-apikey', '4e1'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/page-subuid',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/page-subuid', 'fbf'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/rm-master-apikey',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/rm-master-apikey', 'ef8'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/rm-sub-apikey',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/rm-sub-apikey', '1cc'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/rm-subuid',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/rm-subuid', '93b'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/subuid-list',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/subuid-list', 'aa4'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/user/wallet-type',
        component: ComponentCreator('/usa-docs/zh-TW/v5/user/wallet-type', '1bf'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/private/dcp',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/private/dcp', 'ac1'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/private/execution',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/private/execution', '997'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/private/fast-execution',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/private/fast-execution', '15a'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/private/order',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/private/order', '230'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/private/wallet',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/private/wallet', '306'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/public/kline',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/public/kline', 'f04'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/public/order-price-limit',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/public/order-price-limit', '0b0'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/public/orderbook',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/public/orderbook', '582'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/public/orderbook-rpi',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/public/orderbook-rpi', '91e'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/public/ticker',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/public/ticker', '458'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/public/trade',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/public/trade', '584'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/websocket/trade/guideline',
        component: ComponentCreator('/usa-docs/zh-TW/v5/websocket/trade/guideline', 'd7e'),
        exact: true,
        sidebar: "v5SideBar"
      },
      {
        path: '/usa-docs/zh-TW/v5/ws/connect',
        component: ComponentCreator('/usa-docs/zh-TW/v5/ws/connect', '7dc'),
        exact: true,
        sidebar: "v5SideBar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
