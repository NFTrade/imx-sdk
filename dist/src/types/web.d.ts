import * as t from 'io-ts';
import { Observable } from 'rxjs';
import { EthAddressBrand } from './runtime';
declare const FlatETHTokenCodec: t.TypeC<{
    type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
}>;
export declare type FlatETHToken = t.TypeOf<typeof FlatETHTokenCodec>;
declare const FlatERC721TokenCodec: t.TypeC<{
    type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
    tokenId: t.StringC;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
}>;
export declare type FlatERC721Token = t.TypeOf<typeof FlatERC721TokenCodec>;
declare const FlatERC20TokenCodec: t.TypeC<{
    type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    symbol: t.StringC;
}>;
export declare type FlatERC20Token = t.TypeOf<typeof FlatERC20TokenCodec>;
export declare const FlatTokenCodec: t.UnionC<[t.TypeC<{
    type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
}>, t.TypeC<{
    type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
    tokenId: t.StringC;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
}>, t.TypeC<{
    type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    symbol: t.StringC;
}>]>;
export declare type FlatToken = t.TypeOf<typeof FlatTokenCodec>;
export declare type FlatTokenTS = t.OutputOf<typeof FlatTokenCodec>;
export declare const FlatTokenWithAmountCodec: t.UnionC<[t.IntersectionC<[t.TypeC<{
    type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
}>, t.TypeC<{
    amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
}>]>, t.TypeC<{
    type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
    tokenId: t.StringC;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
}>, t.IntersectionC<[t.TypeC<{
    type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    symbol: t.StringC;
}>, t.TypeC<{
    amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
}>]>]>;
export declare type FlatTokenWithAmount = t.TypeOf<typeof FlatTokenWithAmountCodec>;
export declare type FlatTokenWithAmountTS = t.OutputOf<typeof FlatTokenWithAmountCodec>;
export declare const FlatTokenWithAmountAndToAddressCodec: t.IntersectionC<[t.UnionC<[t.IntersectionC<[t.TypeC<{
    type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
}>, t.TypeC<{
    amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
}>]>, t.TypeC<{
    type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
    tokenId: t.StringC;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
}>, t.IntersectionC<[t.TypeC<{
    type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    symbol: t.StringC;
}>, t.TypeC<{
    amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
}>]>]>, t.TypeC<{
    toAddress: t.BrandC<t.StringC, EthAddressBrand>;
}>]>;
export declare type FlatTokenWithAmountAndToAddress = t.TypeOf<typeof FlatTokenWithAmountAndToAddressCodec>;
export declare type FlatTokenWithAmountAndToAddressTS = t.OutputOf<typeof FlatTokenWithAmountAndToAddressCodec>;
declare const TransferV2ParamsCodec: t.ArrayC<t.IntersectionC<[t.UnionC<[t.IntersectionC<[t.TypeC<{
    type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
}>, t.TypeC<{
    amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
}>]>, t.TypeC<{
    type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
    tokenId: t.StringC;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
}>, t.IntersectionC<[t.TypeC<{
    type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    symbol: t.StringC;
}>, t.TypeC<{
    amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
}>]>]>, t.TypeC<{
    toAddress: t.BrandC<t.StringC, EthAddressBrand>;
}>]>>;
export declare type TransferV2ParamsCodecTS = t.OutputOf<typeof TransferV2ParamsCodec>;
export declare enum BaseExchangeCurrency {
    USD = "usd"
}
export declare enum ProviderPreference {
    METAMASK = "metamask",
    MAGIC_LINK = "magic_link",
    WALLET_CONNECT = "wallet_connect",
    NONE = "none"
}
export declare const FlexibleDepositCodec: t.UnionC<[t.UnionC<[t.TypeC<{
    type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
}>, t.TypeC<{
    type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
    tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    symbol: t.StringC;
}>]>, t.TypeC<{
    amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
}>, t.UndefinedC]>;
export declare namespace LinkParamsCodecs {
    const Setup: t.PartialC<{
        providerPreference: t.UnionC<[t.LiteralC<ProviderPreference.WALLET_CONNECT>, t.LiteralC<ProviderPreference.METAMASK>, t.LiteralC<ProviderPreference.MAGIC_LINK>, t.LiteralC<ProviderPreference.NONE>]>;
    }>;
    const History: t.TypeC<{}>;
    const Buy: t.TypeC<{
        orderId: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>;
    const BuyV2: t.IntersectionC<[t.TypeC<{
        orderIds: t.ArrayC<t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>>;
    }>, t.PartialC<{
        fees: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
    }>]>;
    const CompleteWithdrawal: t.UnionC<[t.TypeC<{
        type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
    }>, t.TypeC<{
        type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
        tokenId: t.StringC;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>, t.TypeC<{
        type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        symbol: t.StringC;
    }>]>;
    const Deposit: t.UnionC<[t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>, t.TypeC<{
        type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
        tokenId: t.StringC;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>, t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        symbol: t.StringC;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>]>;
    const FlexibleDeposit: t.UnionC<[t.UnionC<[t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>, t.TypeC<{
        type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
        tokenId: t.StringC;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>, t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        symbol: t.StringC;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>]>, t.UnionC<[t.UnionC<[t.TypeC<{
        type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
    }>, t.TypeC<{
        type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        symbol: t.StringC;
    }>]>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>, t.UndefinedC]>]>;
    const PrepareWithdrawal: t.UnionC<[t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>, t.TypeC<{
        type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
        tokenId: t.StringC;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>, t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        symbol: t.StringC;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>]>;
    const Sell: t.IntersectionC<[t.TypeC<{
        tokenId: t.StringC;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>, t.PartialC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
        currencyAddress: t.BrandC<t.StringC, EthAddressBrand>;
        expirationTimestamp: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveIntegerStringBrand>;
        fees: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
    }>]>;
    const Transfer: t.IntersectionC<[t.UnionC<[t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>, t.TypeC<{
        type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
        tokenId: t.StringC;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>, t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        symbol: t.StringC;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>]>, t.TypeC<{
        to: t.BrandC<t.StringC, EthAddressBrand>;
    }>]>;
    const TransferV2: t.ArrayC<t.IntersectionC<[t.UnionC<[t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>, t.TypeC<{
        type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
        tokenId: t.StringC;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>, t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        symbol: t.StringC;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>]>, t.TypeC<{
        toAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>]>>;
    const BatchNftTransfer: t.ArrayC<t.IntersectionC<[t.UnionC<[t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>, t.TypeC<{
        type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
        tokenId: t.StringC;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>, t.IntersectionC<[t.TypeC<{
        type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
        tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        symbol: t.StringC;
    }>, t.TypeC<{
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>]>]>, t.TypeC<{
        toAddress: t.BrandC<t.StringC, EthAddressBrand>;
    }>]>>;
    const Cancel: t.IntersectionC<[t.TypeC<{
        orderId: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>, t.PartialC<{
        fees: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
    }>]>;
    const Claim: t.TypeC<{}>;
    const FiatToCrypto: t.PartialC<{
        cryptoCurrencies: t.ArrayC<t.StringC>;
    }>;
    const CryptoToFiat: t.PartialC<{
        cryptoCurrencies: t.ArrayC<t.StringC>;
        amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
    }>;
    const SyncState: t.TypeC<{}>;
    const Sign: t.TypeC<{
        message: import("io-ts-types").NonEmptyStringC;
        description: import("io-ts-types").NonEmptyStringC;
    }>;
    const GetPublicKey: t.TypeC<{}>;
}
export declare namespace LinkParamsF {
    type Setup = t.TypeOf<typeof LinkParamsCodecs.Setup>;
    type History = t.TypeOf<typeof LinkParamsCodecs.History>;
    type Buy = t.TypeOf<typeof LinkParamsCodecs.Buy>;
    type BuyV2 = t.TypeOf<typeof LinkParamsCodecs.BuyV2>;
    type CompleteWithdrawal = t.TypeOf<typeof LinkParamsCodecs.CompleteWithdrawal>;
    type Deposit = t.TypeOf<typeof LinkParamsCodecs.Deposit>;
    type FlexibleDeposit = t.TypeOf<typeof LinkParamsCodecs.FlexibleDeposit>;
    type PrepareWithdrawal = t.TypeOf<typeof LinkParamsCodecs.PrepareWithdrawal>;
    type Sell = t.TypeOf<typeof LinkParamsCodecs.Sell>;
    type Transfer = t.TypeOf<typeof LinkParamsCodecs.Transfer>;
    type TransferV2 = t.TypeOf<typeof LinkParamsCodecs.TransferV2>;
    type Cancel = t.TypeOf<typeof LinkParamsCodecs.Cancel>;
    type Claim = t.TypeOf<typeof LinkParamsCodecs.Claim>;
    type FiatToCrypto = t.TypeOf<typeof LinkParamsCodecs.FiatToCrypto>;
    type CryptoToFiat = t.TypeOf<typeof LinkParamsCodecs.CryptoToFiat>;
}
export declare namespace LinkParams {
    type Setup = t.OutputOf<typeof LinkParamsCodecs.Setup>;
    type History = t.OutputOf<typeof LinkParamsCodecs.History>;
    type Buy = t.OutputOf<typeof LinkParamsCodecs.Buy>;
    type BuyV2 = t.OutputOf<typeof LinkParamsCodecs.BuyV2>;
    type CompleteWithdrawal = t.OutputOf<typeof LinkParamsCodecs.CompleteWithdrawal>;
    type Deposit = t.OutputOf<typeof LinkParamsCodecs.Deposit>;
    type FlexibleDeposit = t.OutputOf<typeof LinkParamsCodecs.FlexibleDeposit>;
    type PrepareWithdrawal = t.OutputOf<typeof LinkParamsCodecs.PrepareWithdrawal>;
    type Sell = t.OutputOf<typeof LinkParamsCodecs.Sell>;
    type Transfer = t.OutputOf<typeof LinkParamsCodecs.Transfer>;
    type TransferV2 = t.OutputOf<typeof LinkParamsCodecs.TransferV2>;
    type BatchNftTransfer = t.OutputOf<typeof LinkParamsCodecs.BatchNftTransfer>;
    type Cancel = t.OutputOf<typeof LinkParamsCodecs.Cancel>;
    type Claim = t.OutputOf<typeof LinkParamsCodecs.Claim>;
    type FiatToCrypto = t.OutputOf<typeof LinkParamsCodecs.FiatToCrypto>;
    type CryptoToFiat = t.OutputOf<typeof LinkParamsCodecs.CryptoToFiat>;
    type SyncState = t.OutputOf<typeof LinkParamsCodecs.SyncState>;
    type Sign = t.OutputOf<typeof LinkParamsCodecs.Sign>;
    type GetPublicKey = t.OutputOf<typeof LinkParamsCodecs.GetPublicKey>;
}
export declare namespace LinkResultsCodecs {
    const Setup: t.TypeC<{
        address: t.BrandC<t.StringC, EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("./runtime").HexadecimalStringBrand>;
        ethNetwork: t.StringC;
        providerPreference: t.StringC;
    }>;
    const BuyV2: t.TypeC<{
        result: t.RecordC<t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>, t.UnionC<[t.TypeC<{
            status: t.LiteralC<"success">;
        }>, t.TypeC<{
            status: t.LiteralC<"error">;
            message: t.StringC;
        }>]>>;
    }>;
    const TransferV2: t.TypeC<{
        result: t.ArrayC<t.IntersectionC<[t.IntersectionC<[t.UnionC<[t.IntersectionC<[t.TypeC<{
            type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
        }>, t.TypeC<{
            amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
        }>]>, t.TypeC<{
            type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
            tokenId: t.StringC;
            tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        }>, t.IntersectionC<[t.TypeC<{
            type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
            tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
            symbol: t.StringC;
        }>, t.TypeC<{
            amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
        }>]>]>, t.TypeC<{
            toAddress: t.BrandC<t.StringC, EthAddressBrand>;
        }>]>, t.UnionC<[t.TypeC<{
            status: t.LiteralC<"success">;
            txId: t.BrandC<t.NumberC, t.IntBrand>;
        }>, t.TypeC<{
            status: t.LiteralC<"error">;
            message: t.StringC;
        }>]>]>>;
    }>;
    const BatchNftTransfer: t.TypeC<{
        result: t.ArrayC<t.IntersectionC<[t.IntersectionC<[t.UnionC<[t.IntersectionC<[t.TypeC<{
            type: t.Type<import("./runtime").ETHTokenType, import("./runtime").ETHTokenType, unknown>;
        }>, t.TypeC<{
            amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
        }>]>, t.TypeC<{
            type: t.Type<import("./runtime").ERC721TokenType, import("./runtime").ERC721TokenType, unknown>;
            tokenId: t.StringC;
            tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
        }>, t.IntersectionC<[t.TypeC<{
            type: t.Type<import("./runtime").ERC20TokenType, import("./runtime").ERC20TokenType, unknown>;
            tokenAddress: t.BrandC<t.StringC, EthAddressBrand>;
            symbol: t.StringC;
        }>, t.TypeC<{
            amount: t.BrandC<t.BrandC<t.StringC, import("./runtime").NumberStringBrand>, import("./runtime").PositiveNumberStringBrand>;
        }>]>]>, t.TypeC<{
            toAddress: t.BrandC<t.StringC, EthAddressBrand>;
        }>]>, t.UnionC<[t.TypeC<{
            status: t.LiteralC<"success">;
            txId: t.BrandC<t.NumberC, t.IntBrand>;
        }>, t.TypeC<{
            status: t.LiteralC<"error">;
            message: t.StringC;
        }>]>]>>;
    }>;
    const PrepareWithdrawal: t.TypeC<{
        withdrawalId: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    const CompleteWithdrawal: t.TypeC<{
        transactionId: t.StringC;
    }>;
    const Sign: t.TypeC<{
        result: import("io-ts-types").NonEmptyStringC;
    }>;
    const GetPublicKey: t.TypeC<{
        result: import("io-ts-types").NonEmptyStringC;
    }>;
}
export declare namespace LinkResultsF {
    type Setup = t.TypeOf<typeof LinkResultsCodecs.Setup>;
    type BuyV2 = t.TypeOf<typeof LinkResultsCodecs.BuyV2>;
    type TransferV2 = t.TypeOf<typeof LinkResultsCodecs.TransferV2>;
    type PrepareWithdrawal = t.TypeOf<typeof LinkResultsCodecs.PrepareWithdrawal>;
    type CompleteWithdrawal = t.TypeOf<typeof LinkResultsCodecs.CompleteWithdrawal>;
}
export declare enum SyncStateEventTypes {
    INIT = "INIT",
    DISCONNECT = "DISCONNECT",
    WALLET_CHANGE = "WALLET_CHANGE",
    NETWORK_CHANGE = "NETWORK_CHANGE"
}
export interface BaseSyncStatePayload {
    eventType: SyncStateEventTypes;
}
export declare type DisconnectSyncStateEvent = BaseSyncStatePayload & {
    code: number;
    reason: string;
};
export declare type ActiveWalletChangeSyncStateEvent = BaseSyncStatePayload & {
    connectedWalletAddress: t.Branded<string, EthAddressBrand> | null;
};
export declare type NetworkChangeSyncStateEvent = BaseSyncStatePayload & {
    connectedNetworkId: string;
};
export declare type InitSyncStateEvent = BaseSyncStatePayload & {
    connectedNetworkId: string;
    connectedWalletAddress: string;
};
export declare type SyncStateEventPayload = InitSyncStateEvent | DisconnectSyncStateEvent | ActiveWalletChangeSyncStateEvent | NetworkChangeSyncStateEvent;
export declare type SyncStatePostMessageEvent = {
    type: 'imx-link/syncState';
    payload: SyncStateEventPayload;
};
export declare type SyncStateObservableStream = Observable<SyncStateEventPayload>;
export declare namespace LinkResults {
    type Setup = t.OutputOf<typeof LinkResultsCodecs.Setup>;
    type BuyV2 = t.OutputOf<typeof LinkResultsCodecs.BuyV2>;
    type TransferV2 = t.OutputOf<typeof LinkResultsCodecs.TransferV2>;
    type BatchNftTransfer = t.OutputOf<typeof LinkResultsCodecs.BatchNftTransfer>;
    type PrepareWithdrawal = t.OutputOf<typeof LinkResultsCodecs.PrepareWithdrawal>;
    type CompleteWithdrawal = t.OutputOf<typeof LinkResultsCodecs.CompleteWithdrawal>;
    type SyncState = SyncStateObservableStream;
    type Sign = t.OutputOf<typeof LinkResultsCodecs.Sign>;
    type GetPublicKey = t.OutputOf<typeof LinkResultsCodecs.GetPublicKey>;
}
export {};
