import { Subject } from 'rxjs';
import { ConfigurableIframeOptions, ERC721TokenType, FullIframeOptions, LinkParams, LinkResults, SyncStateEventPayload, SyncStateObservableStream, SyncStatePostMessageEvent } from './types';
export declare const getFullIframeOptions: () => FullIframeOptions;
export declare const handleSyncStateEvent: (subject: Subject<SyncStateEventPayload>, event: MessageEvent<SyncStatePostMessageEvent>) => void;
export declare const initIframeDom: (fullIframeOptions: FullIframeOptions, url: string, onCloseIframe?: (() => void) | undefined) => {
    containerDom: HTMLDivElement;
    iframeDom: HTMLIFrameElement;
};
export declare class Link {
    private webUrl;
    private iframeOptions;
    constructor(webUrl?: string, iframeOptions?: ConfigurableIframeOptions);
    private buildUrl;
    private openIframeOrWindow;
    private openSyncStateIframe;
    private openIframe;
    private openWindow;
    history: (params: {}) => Promise<void>;
    setup: (params: LinkParams.Setup) => Promise<LinkResults.Setup>;
    buy: (params: {
        orderIds: string[];
    } & {
        fees?: {
            recipient: string;
            percentage: number;
        }[] | undefined;
    }) => Promise<{
        result: {
            [x: string]: {
                status: "success";
            } | {
                status: "error";
                message: string;
            };
        };
    }>;
    sell: (params: {
        tokenId: string;
        tokenAddress: string;
    } & {
        amount?: string | undefined;
        currencyAddress?: string | undefined;
        expirationTimestamp?: string | undefined;
        fees?: {
            recipient: string;
            percentage: number;
        }[] | undefined;
    }) => Promise<void>;
    deposit: (params?: LinkParams.FlexibleDeposit) => Promise<void>;
    prepareWithdrawal: (params: {
        type: ERC721TokenType;
        tokenId: string;
        tokenAddress: string;
    } | ({
        type: import("./types").ETHTokenType;
    } & {
        amount: string;
    }) | ({
        type: import("./types").ERC20TokenType;
        tokenAddress: string;
        symbol: string;
    } & {
        amount: string;
    })) => Promise<{
        withdrawalId: number;
    }>;
    completeWithdrawal: (params: {
        type: import("./types").ETHTokenType;
    } | {
        type: ERC721TokenType;
        tokenId: string;
        tokenAddress: string;
    } | {
        type: import("./types").ERC20TokenType;
        tokenAddress: string;
        symbol: string;
    }) => Promise<{
        transactionId: string;
    }>;
    transfer: (params: (({
        type: ERC721TokenType;
        tokenId: string;
        tokenAddress: string;
    } & {
        toAddress: string;
    }) | ({
        type: import("./types").ETHTokenType;
    } & {
        amount: string;
    } & {
        toAddress: string;
    }) | ({
        type: import("./types").ERC20TokenType;
        tokenAddress: string;
        symbol: string;
    } & {
        amount: string;
    } & {
        toAddress: string;
    }))[]) => Promise<{
        result: (({
            type: ERC721TokenType;
            tokenId: string;
            tokenAddress: string;
        } & {
            toAddress: string;
        } & {
            status: "success";
            txId: number;
        }) | ({
            type: ERC721TokenType;
            tokenId: string;
            tokenAddress: string;
        } & {
            toAddress: string;
        } & {
            status: "error";
            message: string;
        }) | ({
            type: import("./types").ETHTokenType;
        } & {
            amount: string;
        } & {
            toAddress: string;
        } & {
            status: "success";
            txId: number;
        }) | ({
            type: import("./types").ETHTokenType;
        } & {
            amount: string;
        } & {
            toAddress: string;
        } & {
            status: "error";
            message: string;
        }) | ({
            type: import("./types").ERC20TokenType;
            tokenAddress: string;
            symbol: string;
        } & {
            amount: string;
        } & {
            toAddress: string;
        } & {
            status: "success";
            txId: number;
        }) | ({
            type: import("./types").ERC20TokenType;
            tokenAddress: string;
            symbol: string;
        } & {
            amount: string;
        } & {
            toAddress: string;
        } & {
            status: "error";
            message: string;
        }))[];
    }>;
    batchNftTransfer: (params: (({
        type: ERC721TokenType;
        tokenId: string;
        tokenAddress: string;
    } & {
        toAddress: string;
    }) | ({
        type: import("./types").ETHTokenType;
    } & {
        amount: string;
    } & {
        toAddress: string;
    }) | ({
        type: import("./types").ERC20TokenType;
        tokenAddress: string;
        symbol: string;
    } & {
        amount: string;
    } & {
        toAddress: string;
    }))[]) => Promise<{
        result: (({
            type: ERC721TokenType;
            tokenId: string;
            tokenAddress: string;
        } & {
            toAddress: string;
        } & {
            status: "success";
            txId: number;
        }) | ({
            type: ERC721TokenType;
            tokenId: string;
            tokenAddress: string;
        } & {
            toAddress: string;
        } & {
            status: "error";
            message: string;
        }) | ({
            type: import("./types").ETHTokenType;
        } & {
            amount: string;
        } & {
            toAddress: string;
        } & {
            status: "success";
            txId: number;
        }) | ({
            type: import("./types").ETHTokenType;
        } & {
            amount: string;
        } & {
            toAddress: string;
        } & {
            status: "error";
            message: string;
        }) | ({
            type: import("./types").ERC20TokenType;
            tokenAddress: string;
            symbol: string;
        } & {
            amount: string;
        } & {
            toAddress: string;
        } & {
            status: "success";
            txId: number;
        }) | ({
            type: import("./types").ERC20TokenType;
            tokenAddress: string;
            symbol: string;
        } & {
            amount: string;
        } & {
            toAddress: string;
        } & {
            status: "error";
            message: string;
        }))[];
    }>;
    cancel: (params: {
        orderId: string;
    } & {
        fees?: {
            recipient: string;
            percentage: number;
        }[] | undefined;
    }) => Promise<void>;
    claim: () => Promise<void>;
    fiatToCrypto: (params: {
        cryptoCurrencies?: string[] | undefined;
    }) => Promise<{
        address: string;
        starkPublicKey: string;
        ethNetwork: string;
        providerPreference: string;
    }>;
    cryptoToFiat: (params: LinkParams.CryptoToFiat) => Promise<void>;
    syncState: (params: LinkParams.SyncState) => Promise<SyncStateObservableStream>;
    sign: (params: {
        message: string;
        description: string;
    }) => Promise<{
        result: string;
    }>;
    getPublicKey: (params: {}) => Promise<{
        result: string;
    }>;
}
