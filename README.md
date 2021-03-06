# ImmutableX Javascript SDK

This repository contains everything partners need to launch the link, and make transactions on IMX. For all documentation needs, please go to [docs.x.immutable.com](https://docs.x.immutable.com/)

Note: Currently our SDK is only compatible with Node v12 and v14.

# CHANGELOG

## Index

- [1.16.0](#1.16.0)
- [1.15.0](#1.15.0)
- [1.14.1](#1.14.1)
- [1.14.0](#1.14.0)
- [1.13.0](#1.13.0)
- [1.12.0](#1.12.0)
- [1.11.1](#1.11.1)
- [1.11.0](#1.11.0)
- [1.10.2](#1.10.2)
- [1.10.1](#1.10.1)
- [1.10.0](#1.10.0)
- [1.9.1](#1.9.1)
- [1.9.0](#1.9.0)
- [1.8.3](#1.8.3)
- [1.8.2](#1.8.2)
- [1.8.0](#1.8.0)
- [1.7.0](#1.7.0)
- [1.6.1](#1.6.1)
- [1.6.0](#1.6.0)
- [1.5.0](#1.5.0)
- [1.4.0](#1.4.0)
- [1.3.53](#1.3.53)
- [1.3.52](#1.3.52)
- [1.3.51](#1.3.51)
- [1.3.50](#1.3.50)
- [1.3.49](#1.3.49)
- [1.3.48](#1.3.48)
- [1.3.47](#1.3.47)
- [1.3.46](#1.3.46)
- [1.3.45](#1.3.45)
- [1.3.44](#1.3.44)
- [1.3.43](#1.3.43)
- [1.3.42](#1.3.42)
- [1.3.41](#1.3.41)
- [1.3.40](#1.3.40)
- [1.3.39](#1.3.39)
- [1.3.38](#1.3.38)
- [1.3.37](#1.3.37)
- [1.3.36](#1.3.36)
- [1.3.35](#1.3.35)
- [1.3.34](#1.3.34)
- [1.3.33](#1.3.33)
- [1.3.32](#1.3.32)
- [1.3.31](#1.3.31)
- [1.3.30](#1.3.30)
- [1.3.29](#1.3.29)
- [1.3.28](#1.3.28)
- [1.3.27](#1.3.27)
- [1.3.26](#1.3.26)
- [1.3.25](#1.3.25)
- [1.3.24](#1.3.24)
- [1.3.23](#1.3.23)
- [1.3.22](#1.3.22)
- [1.3.21](#1.3.21)
- [1.3.20](#1.3.20)
- [1.3.19](#1.3.19)
- [1.3.18](#1.3.18)
- [1.3.17](#1.3.17)
- [1.3.16](#1.3.16)
- [1.3.15](#1.3.15)
- [1.3.14](#1.3.14)
- [1.3.13](#1.3.13)
- [1.3.12](#1.3.12)
- [1.3.11](#1.3.11)
- [1.3.10](#1.3.10)
- [1.3.9](#1.3.9)
- [1.3.8](#1.3.8)
- [1.3.7](#1.3.7)
- [1.3.6](#1.3.6)
- [1.3.5](#1.3.5)
- [1.3.4](#1.3.4)
- [1.3.3](#1.3.3)
- [1.3.2](#1.3.2)
- [1.3.1](#1.3.1)
- [1.3.0](#1.3.0)
- [1.2.8](#1.2.8)
- [1.2.7](#1.2.7)
- [1.2.6](#1.2.6)
- [1.2.5](#1.2.5)
- [1.2.4](#1.2.4)
- [1.1.7](#1.1.7)
- [1.1.6](#1.1.6)
- [1.1.5](#1.1.5)
- [1.1.4](#1.1.4)
- [1.1.3](#1.1.3)
- [1.1.2](#1.1.2)
- [1.1.1](#1.1.1)
- [1.1.0](#1.1.0)
- [1.0.2](#1.0.2)
- [1.0.1](#1.0.1)
- [1.0.0](#1.0.0)

### 1.16.0
- Add a new method to get public encryption key getPublicKey()

### 1.15.0
- Add `ethBalanceV2` and `erc20BalanceV2` to support read balances via a provider without connect to the wallet

### 1.14.1
- Remove experimental flag for sign()

### 1.14.0
- Update dependency: `etherjs` to `5.6.0`

### 1.13.0
- Add a new experimental method sign()

### 1.12.0
- Add new walletconnect provider
- Updated `getProvider` to accept optional provider options

### 1.11.1

- Add crypto-to-fiat awareness on `getExchanges`

### 1.11.0

- Removed method `getExchangesV1F`
- Removed method `getExchangesV1`
- Removed method `createExchangeV1`
- Removed method `getExchangeV1`
- Removed param version on method `getMoonpaySignature`

### 1.10.2

- Fix Exchange transfer to use V1 Params

### 1.10.1

- Updated `getCurrencies` to return currencies list by exchange type

### 1.10.0

- **Experimental** Added `syncState` method. link.syncState() will:
  1 - add a persistant invisible iframe to the dom, and
  2 - resolve with an observable, which will stream events as they come in from link, whenever the user changes their wallet, network or disconnects etc.

### 1.9.1

- `getExchange` returns optional provider wallet address

### 1.9.0

- **Experimental** Added `getCurrencies` method

### 1.8.3

- `validateCurrencyAmount` returns null or number for min_amount and max_amount

### 1.8.2

- **Experimental** Removed `validateCurrencyAmount` method
- **Experimental** Added `getCurrencyLimits` method

### 1.8.0

- Added calculation function `calculateFeeBreakdownFromPriceAmounts`
- Updated `calculateFeeBreakdownFromBasePrice` to allow for protocol fees to be supplied
- Updated `calculateFeeBreakdownFromFullPrice` to allow for protocol fees to be supplied

### 1.7.0

- **Experimental** Added `signableTransferDetails` and `createExchangeTransfer` methods
- **Experimental** Add `amount` parameter to `cryptoToFiat`
- **Experimental** Add `validateCurrencyAmount` method

### 1.6.1

- Ease `CryptoCurrencies` validation to allow string. Link will validate it

### 1.6.0

- Added `WALLET_CONNECT` in ProviderPreference enum

### 1.5.0

- Added calculation functions for order price and fee breakdowns
- `calculateFeeBreakdownFromBasePrice`: specify the base price and all fees to be applied
- `calculateFeeBreakdownFromFullPrice`: specify the price inclusive of fees and all fees applied to it

### 1.4.0

- **Experimental** Added `cryptoToFiat` method

### 1.3.53

- Bugfix for missing ERC20 type

### 1.3.52

- Enable batch transfer for NFTs `batchNftTransfer`

### 1.3.51

- `listBalances` fix bug to support multiple symbols

### 1.3.50

- `createExchange` now use v2 endpoints
- `createExchangeV1` support the old functionality

### 1.3.49

- Removes experimental warnings from methods involving maker/taker fees

### 1.3.48

- Fix fee floating point precision bug for createOrder

### 1.3.47

- `getExchanges` and `getExchange` now use v2 endpoints
- `getExchangesV1` and `getExchangeV1` support the old functionality

### 1.3.46

- **Experimental** Update types for link batch transfer

### 1.3.45

- Add support for exchange v2 endpoints

### 1.3.44

- Update request type for method `getMoonpaySignature`

### 1.3.43

- **Experimental** Add more types for transfer v2 endpoint

### 1.3.42

- Updated response type for ImmutableXClient method `cancelOrder`

### 1.3.41

- **Experimental** Allow specifying fees to Link.cancel

### 1.3.40

- **Experimental** Add transfer v2 endpoint support

### 1.3.39

- Bugfix: fix getTrade() types
- Update request and response types for experimental method `getProjects`
- Update type for `ProjectResult`

### 1.3.38

- Updated fiatToCrypto() to accept cryptoCurrencies

### 1.3.37

- **Experimental** Allow specifying fees on getAssets()

### 1.3.36

- Added pagination for the exchanges list endpoint

### 1.3.35

- Bugfix: restore the types and funcitonality of `sell_token_name` inside of getOrdersF()

### 1.3.34

- Enable order expiration date override from Link

### 1.3.33

- Remove **Experimental** flag from fiatToCrypto method

### 1.3.32

- Allow user to override the order expiration date

### 1.3.31

- Renamed the exchange() method to fiatToCrypto()

### 1.3.30

- Remove **Experimental** flag from deposit without params or without amount or token

### 1.3.29

- **Experimental** Updated experimental maker/taker fees with bindings for Link

### 1.3.28

- Update transfers to allow transfer of more than 50 assets at a time
- Implemented update transfers to allow transfer of more than 50 assets at a time, not yet enabled

### 1.3.27

- Refactoring the exchange history
- Adding currency parameter for the exchange

### 1.3.26

- Fix listTokens query param generation for `symbols` filter

### 1.3.25

- **Experimental** Update deposit to allow to send request without amount or without any params

### 1.3.24

- Bugfix for detecting wallet extensions

### 1.3.23

- Handle multiple wallet extensions when getting Etherum provider

### 1.3.22

- **Experimental** Updated experimental maker/taker fees feature to allow specifying fee percentages with 2 d.p. of precision.

### 1.3.21

- **Experimental** Update fee param name for getOrder and getOrders

### 1.3.20

- **Experimental** Added taker fees to getOrder and getOrders

### 1.3.19

- **Experimental** Added taker fees to createTrade

### 1.3.18

- Retry on throttled requests (HTTP 429) to API.

### 1.3.17

- Remove **Experimental** flag from sell flow.

### 1.3.16

- **Experimental** Added currency information to exchange types

### 1.3.15

- **Experimental** Added functions to retrieve the exchange history by user.

### 1.3.14

- Rename get orders parameter from buy_token_contract to buy_token_address
- **Experimental** Updated the codec types for `exchange` methods.

### 1.3.13

- **Experimental** Updated Magic api key.

### 1.3.12

- Fix for ImmutableXClient; default apiUrl in axios config.

### 1.3.11

- Added optional `apiKey` header to all requests to the IMX public api, for use with ratelimiting.

### 1.3.10

### 1.3.9

- **Experimental** Bugfixes for the `exchange` method

### 1.3.8

- Added optional `enableDebug` header to constructor of ImmutableXClient, to enable debug logging.

### 1.3.7

- Adding `providerPreference` and `ethNetwork` to `link.setup()` response.
- Exporting `LocalStorageKeys` enum with the keys used internally.

### 1.3.6

- The `getCollection` and `getCollections` methods were updated to have new field `metadata_url` in the response incorrectly. This fixes the error by changing it to `metadata_api_url`.
- Adds `getMetadataSchema` method
- Update request/response objects for collection and metadata APIs

### 1.3.5

- The `getCollection` and `getCollections` methods returns a new field `metadata_url` in the response.
- Specify supported node versions (12 and 14) in package.json engines.s

### 1.3.4

- `ImmutableSellOrderCodec`: update buy_decimals to be an optional and add contract_address, status as optional fields.
- `ImmutableBuyOrderCodec`: update sell_decimals to be an optional and add contract_address, status as optional fields.

### 1.3.3

- **Experimental** support for `projects` and `collections` functionality.

### 1.3.2

- **Experimental** support to new `exchange` method.

### 1.3.1

- Refactor internal implementation for experimental features.

### 1.3.0

- Added missing type definition for sell param + check location.origin instead of referrer
- `SellParamsCodec`: update amount to be an optional and add currencyAddress as an optional param as well.

### 1.2.8

- Bugfix on mint v2 response typing

### 1.2.7

- Update mint v2 endpoint's response schema to `{token_id, contract_address, tx_id}`

### 1.2.6

Renaming `ProviderPreference` options.

### 1.2.5

- **Experimental** temporary testing mint v2 endpoint with response as a mapping of NFTs to tx IDs

### 1.2.4

- **Experimental** support to easy login with Magic when used via Link.

### 1.1.6

- signMessage() function added to Client
- Controller's signVerifyEth() parametrized and renamed

### 1.1.6

- Add signAuthHeader for new Authentication process

### 1.1.5

- Claim routes added

### 1.1.4

- Fix import recovery param for ledger signing

### 1.1.3

- `include_fees` param for POST requests placed in POST body instead of in query param

### 1.1.2

- Bug fix on createOrders

### 1.1.1

- Add allowance and approve methods for ERC20 tokens
- Remove uneccessary fields from mintv2

### 1.1.0

Includes royalty fees by default in the following endpoints:

- `link.getOrder`
- `link.getAssets`
- `link.getOrder`
- `link.getAsset`
- `link.createOrder`
- `link.createTrade`

which will include a fee body with fee information (if exists).

### 1.0.2

Updated responses for link methods

- `link.prepareWithdrawal` now contains `withdrawalId`
- `link.completeWithdrawal` now contains `transactionId`

### 1.0.1

SDK JS is now built with node 12 instead of node 14.

### 1.0.0

1.0.0 marks the first public release of @imtbl/imx-sdk. Bundled in this release, are the following features:

- Transfer functionality has been refactored to support multiple transfers at once [imx-docs](https://docs.x.immutable.com/docs/linktransfer)

# Maintainers

- [Docs for Maintainers](./docs/MAINTAINERS.md)
- [How to release](./docs/RELEASE.md)
