import { Web3Provider } from '@ethersproject/providers';
import { IWalletConnectProviderOptions } from '@walletconnect/types';
import * as TE from 'fp-ts/TaskEither';
import { Observable } from 'rxjs';
import { BalanceInfo } from '../types';
interface GetReadOnlyProviderInput {
    rpcUrl: string;
    interval?: number;
}
interface GetERC20BalanceV2Input extends GetReadOnlyProviderInput {
    owner: string;
    tokenAddress: string;
}
interface GetBalanceV2Input extends GetReadOnlyProviderInput {
    address: string;
}
declare type GetProviderOptionInput = {
    walletConnectProviderOption?: IWalletConnectProviderOptions;
};
export declare const getProvider: (options?: GetProviderOptionInput) => TE.TaskEither<Error, Web3Provider>;
export declare const ethBalance: (address: string, interval?: number, providerOptions?: GetProviderOptionInput) => Observable<BalanceInfo>;
export declare const erc20Balance: (owner: string, tokenAddress: string, interval?: number, providerOptions?: GetProviderOptionInput) => Observable<BalanceInfo>;
export declare const ethBalanceV2: ({ address, rpcUrl, interval, }: GetBalanceV2Input) => Observable<BalanceInfo>;
export declare const erc20BalanceV2: ({ owner, tokenAddress, rpcUrl, interval, }: GetERC20BalanceV2Input) => Observable<BalanceInfo>;
export {};
