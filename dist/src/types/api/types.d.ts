import * as t from 'io-ts';
export declare enum ImmutableOrderStatus {
    created = "created",
    accepted = "accepted",
    partially_filled = "partially_filled",
    filled = "filled",
    cancelled = "cancelled",
    expired = "expired",
    pending = "pending",
    active = "active"
}
export declare enum ImmutableExchangeType {
    fiat_to_crypto = "fiat-to-crypto",
    crypto_to_fiat = "crypto-to-fiat"
}
export declare const ImmutableOrderStatusCodec: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
export declare enum ImmutableTransactionStatus {
    pending = "pending",
    accepted = "accepted",
    rejected = "rejected",
    confirmed = "confirmed",
    rolledBack = "rolledBack",
    withdrawn = "withdrawn",
    success = "success"
}
export declare const ImmutableTransactionStatusCodec: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
export declare enum ImmutableAssetStatus {
    imx = "imx",
    eth = "eth",
    preparing_withdrawal = "preparing_withdrawal",
    withdrawable = "withdrawable",
    burned = "burned"
}
export declare const ImmutableAssetStatusCodec: t.Type<ImmutableAssetStatus, ImmutableAssetStatus, unknown>;
export declare enum ImmutableRollupStatus {
    included = "included",
    confirmed = "confirmed"
}
export declare const ImmutableRollupStatusCodec: t.Type<ImmutableRollupStatus, ImmutableRollupStatus, unknown>;
export declare enum ImmutableFeeType {
    royalty = "royalty",
    ecosystem = "ecosystem",
    protocol = "protocol"
}
export declare const ImmutableFeeTypeCodec: t.Type<ImmutableFeeType, ImmutableFeeType, unknown>;
export declare const ImmutableFeeInfoCodec: t.TypeC<{
    fee_limit: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    source_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
    asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
}>;
export declare namespace ImmutableMethodParams {
    const ImmutableRegisterParamsCodec: t.TypeC<{
        etherKey: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
    }>;
    const ImmutableSignParamsCodec: t.StringC;
    type ImmutableSignParams = t.TypeOf<typeof ImmutableSignParamsCodec>;
    type ImmutableRegisterParams = t.TypeOf<typeof ImmutableRegisterParamsCodec>;
    type ImmutableRegisterParamsTS = t.OutputOf<typeof ImmutableRegisterParamsCodec>;
    const ImmutableStarkRegisterParamsCodec: t.TypeC<{
        etherKey: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        operatorSignature: t.StringC;
    }>;
    type ImmutableStarkRegisterParams = t.TypeOf<typeof ImmutableStarkRegisterParamsCodec>;
    type ImmutableStarkRegisterParamsTS = t.OutputOf<typeof ImmutableStarkRegisterParamsCodec>;
    const ImmutableGetUserParamsCodec: t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    type ImmutableGetUserParams = t.TypeOf<typeof ImmutableGetUserParamsCodec>;
    type ImmutableGetUserParamsTS = t.OutputOf<typeof ImmutableGetUserParamsCodec>;
    const ImmutableGetSignableDepositParamsCodec: t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>;
    type ImmutableGetSignableDepositParams = t.TypeOf<typeof ImmutableGetSignableDepositParamsCodec>;
    type ImmutableGetSignableDepositParamsTS = t.OutputOf<typeof ImmutableGetSignableDepositParamsCodec>;
    const ImmutableGetSignableRegistrationParamsCodec: t.TypeC<{
        etherKey: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
    }>;
    type ImmutableGetSignableRegistrationParams = t.TypeOf<typeof ImmutableGetSignableRegistrationParamsCodec>;
    type ImmutableGetSignableRegistrationParamsTS = t.OutputOf<typeof ImmutableGetSignableRegistrationParamsCodec>;
    const ImmutableDepositCancelParamsCodec: t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type ImmutableDepositCancelParams = t.TypeOf<typeof ImmutableDepositCancelParamsCodec>;
    const ImmutableDepositReclaimParamsCodec: t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type ImmutableDepositReclaimParams = t.TypeOf<typeof ImmutableDepositReclaimParamsCodec>;
    const ImmutableWithdrawalParamsCodec: t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        nonce: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type ImmutableWithdrawalParams = t.TypeOf<typeof ImmutableWithdrawalParamsCodec>;
    const ImmutableGetSignableWithdrawalParamsCodec: t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>;
    type ImmutableGetSignableWithdrawalParams = t.TypeOf<typeof ImmutableGetSignableWithdrawalParamsCodec>;
    const ImmutableTransferParamsCodec: t.TypeC<{
        sender: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    type ImmutableTransferParams = t.TypeOf<typeof ImmutableTransferParamsCodec>;
    type ImmutableTransferParamsTS = t.OutputOf<typeof ImmutableTransferParamsCodec>;
    const SignableTransferV2Codec: t.TypeC<{
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        amount: t.StringC;
    }>;
    const ImmutableGetSignableTransferV2ParamsCodec: t.TypeC<{
        sender_ether_key: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        signable_requests: t.ArrayC<t.TypeC<{
            receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
            amount: t.StringC;
        }>>;
    }>;
    type ImmutableGetSignableTransferV2Params = t.TypeOf<typeof ImmutableGetSignableTransferV2ParamsCodec>;
    type ImmutableGetSignableTransferV2ParamsTS = t.OutputOf<typeof ImmutableGetSignableTransferV2ParamsCodec>;
    const ImmutableTransferRequestV2Codec: t.TypeC<{
        stark_signature: t.StringC;
        sender_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
        receiver_stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        receiver_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
        amount: t.StringC;
        asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        expiration_timestamp: t.BrandC<t.NumberC, t.IntBrand>;
        nonce: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableTransferRequestV2 = t.TypeOf<typeof ImmutableTransferRequestV2Codec>;
    const ImmutableTransferRequestCodec: t.TypeC<{
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    type ImmutableTransferRequest = t.TypeOf<typeof ImmutableTransferRequestCodec>;
    type ImmutableTransferRequestTS = t.OutputOf<typeof ImmutableTransferRequestCodec>;
    const ImmutableTransferV2ParamsCodec: t.TypeC<{
        sender_ether_key: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        transfer_request: t.ArrayC<t.TypeC<{
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
            amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        }>>;
    }>;
    type ImmutableTransferV2Params = t.TypeOf<typeof ImmutableTransferV2ParamsCodec>;
    type ImmutableTransferV2ParamsTS = t.OutputOf<typeof ImmutableTransferV2ParamsCodec>;
    const ImmutableBurnParamsCodec: t.TypeC<{
        sender: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>;
    type ImmutableBurnParams = t.TypeOf<typeof ImmutableBurnParamsCodec>;
    type ImmutableBurnParamsTS = t.OutputOf<typeof ImmutableBurnParamsCodec>;
    const ImmutableOffchainMintParamsCodec: t.TypeC<{
        mints: t.ArrayC<t.TypeC<{
            etherKey: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            tokens: t.ArrayC<t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>>;
            nonce: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
            authSignature: t.StringC;
        }>>;
    }>;
    type ImmutableOffchainMintParams = t.TypeOf<typeof ImmutableOffchainMintParamsCodec>;
    type ImmutableOffchainMintParamsTS = t.OutputOf<typeof ImmutableOffchainMintParamsCodec>;
    const ImmutableOffchainMintV2ParamsCodec: t.ArrayC<t.IntersectionC<[t.TypeC<{
        users: t.ArrayC<t.TypeC<{
            etherKey: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            tokens: t.ArrayC<t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>>;
        }>>;
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>, t.PartialC<{
        royalties: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
    }>]>>;
    type ImmutableOffchainMintV2Params = t.TypeOf<typeof ImmutableOffchainMintV2ParamsCodec>;
    type ImmutableOffchainMintV2ParamsTS = t.OutputOf<typeof ImmutableOffchainMintV2ParamsCodec>;
    const ImmutableCreateOrderParamsCodec: t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        sell: t.TypeC<{
            vaultId: t.BrandC<t.NumberC, t.IntBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        }>;
        buy: t.TypeC<{
            vaultId: t.BrandC<t.NumberC, t.IntBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        }>;
        nonce: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        expirationTimestamp: t.BrandC<t.NumberC, import("../runtime").PositiveIntegerT>;
        signature: t.StringC;
    }>;
    type ImmutableCreateOrderParams = t.TypeOf<typeof ImmutableCreateOrderParamsCodec>;
    const ImmutableCancelOrderParamsCodec: t.BrandC<t.NumberC, t.IntBrand>;
    type ImmutableCancelOrderParamsTS = t.OutputOf<typeof ImmutableCancelOrderParamsCodec>;
    const ImmutableGetSignableOrderParamsCodec: t.IntersectionC<[t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        tokenSell: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        amountSell: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        tokenBuy: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        amountBuy: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>, t.PartialC<{
        include_fees: t.BooleanC;
        fees: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
        expiration_timestamp: t.BrandC<t.NumberC, import("../runtime").PositiveIntegerT>;
    }>]>;
    type ImmutableGetSignableOrderParams = t.TypeOf<typeof ImmutableGetSignableOrderParamsCodec>;
    type ImmutableGetSignableOrderParamsTS = t.OutputOf<typeof ImmutableGetSignableOrderParamsCodec>;
    const ImmutableGetSignableTradeParamsCodec: t.IntersectionC<[t.TypeC<{
        orderId: t.BrandC<t.NumberC, t.IntBrand>;
    }>, t.IntersectionC<[t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        tokenSell: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        amountSell: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        tokenBuy: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        amountBuy: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>, t.PartialC<{
        include_fees: t.BooleanC;
        fees: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
        expiration_timestamp: t.BrandC<t.NumberC, import("../runtime").PositiveIntegerT>;
    }>]>]>;
    type ImmutableGetSignableTradeParams = t.TypeOf<typeof ImmutableGetSignableTradeParamsCodec>;
    type ImmutableGetSignableTradeParamsTS = t.OutputOf<typeof ImmutableGetSignableTradeParamsCodec>;
    const ImmutableCreateTradeParamsCodec: t.IntersectionC<[t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        sell: t.TypeC<{
            vaultId: t.BrandC<t.NumberC, t.IntBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        }>;
        buy: t.TypeC<{
            vaultId: t.BrandC<t.NumberC, t.IntBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        }>;
        nonce: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        expirationTimestamp: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        signature: t.StringC;
        orderId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>, t.PartialC<{
        fee_info: t.TypeC<{
            fee_limit: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            source_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
            asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        }>;
    }>]>;
    type ImmutableCreateTradeParams = t.TypeOf<typeof ImmutableCreateTradeParamsCodec>;
    const ImmutableGetTokenParamsCodec: t.PartialC<{
        tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    type ImmutableGetTokenParams = t.TypeOf<typeof ImmutableGetTokenParamsCodec>;
    type ImmutableGetTokenParamsTS = t.OutputOf<typeof ImmutableGetTokenParamsCodec>;
    const ImmutableListTokensParamsCodec: t.PartialC<{
        symbols: t.ArrayC<t.StringC>;
        cursor: t.StringC;
    }>;
    type ImmutableListTokensParams = t.TypeOf<typeof ImmutableListTokensParamsCodec>;
    type ImmutableListTokensParamsTS = t.OutputOf<typeof ImmutableListTokensParamsCodec>;
    const ImmutableGetBalancesParamsCodec: t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    type ImmutableGetBalancesParams = t.TypeOf<typeof ImmutableGetBalancesParamsCodec>;
    type ImmutableGetBalancesParamsTS = t.OutputOf<typeof ImmutableGetBalanceParamsCodec>;
    const ImmutableGetBalanceParamsCodec: t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
    }>;
    type ImmutableGetBalanceParams = t.TypeOf<typeof ImmutableGetBalanceParamsCodec>;
    type ImmutableGetBalanceParamsTS = t.OutputOf<typeof ImmutableGetBalanceParamsCodec>;
    const ImmutableListBalancesParamsCodec: t.IntersectionC<[t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>, t.PartialC<{
        cursor: t.StringC;
        symbols: t.ArrayC<t.StringC>;
    }>]>;
    type ImmutableListBalancesParams = t.TypeOf<typeof ImmutableListBalancesParamsCodec>;
    type ImmutableListBalancesParamsTS = t.OutputOf<typeof ImmutableListBalancesParamsCodec>;
    const ImmutableGetVaultsParamsCodec: t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
    }>;
    type ImmutableGetVaultsParams = t.TypeOf<typeof ImmutableGetVaultsParamsCodec>;
    const ImmutableGetOrderParamsCodec: t.IntersectionC<[t.TypeC<{
        orderId: t.BrandC<t.NumberC, t.IntBrand>;
    }>, t.PartialC<{
        include_fees: t.BooleanC;
    }>, t.PartialC<{
        auxiliaryFees: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
    }>]>;
    type ImmutableGetOrderParams = t.TypeOf<typeof ImmutableGetOrderParamsCodec>;
    type ImmutableGetOrderParamsTS = t.OutputOf<typeof ImmutableGetOrderParamsCodec>;
    const ImmutableGetLastAvailableNonceParamsCodec: t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
    }>;
    type ImmutableGetLastAvailableNonceParams = t.TypeOf<typeof ImmutableGetLastAvailableNonceParamsCodec>;
    enum ImmutableSortOrder {
        asc = "asc",
        desc = "desc"
    }
    const ImmutableSortOrderCodec: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    const ImmutablePaginatedParamsCodec: t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>;
    type ImmutablePaginatedParams = t.TypeOf<typeof ImmutablePaginatedParamsCodec>;
    type ImmutablePaginatedParamsTS = t.OutputOf<typeof ImmutablePaginatedParamsCodec>;
    const ImmutableGetOrdersParamsCodec: t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
        min_timestamp: t.StringC;
        max_timestamp: t.StringC;
        buy_token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        buy_token_id: t.StringC;
        buy_token_address: t.UnionC<[t.BrandC<t.StringC, import("../runtime").EthAddressBrand>, t.StringC]>;
        buy_min_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        buy_max_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        buy_metadata: t.StringC;
        sell_token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        sell_token_id: t.StringC;
        sell_token_address: t.UnionC<[t.BrandC<t.StringC, import("../runtime").EthAddressBrand>, t.StringC]>;
        sell_token_name: t.StringC;
        sell_min_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        sell_max_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        sell_metadata: t.StringC;
        include_fees: t.BooleanC;
        auxiliaryFees: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
    }>]>;
    type ImmutableGetOrdersParams = t.TypeOf<typeof ImmutableGetOrdersParamsCodec>;
    type ImmutableGetOrdersParamsTS = t.OutputOf<typeof ImmutableGetOrdersParamsCodec>;
    const ImmutableGetAssetsParamsCodec: t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.Type<ImmutableAssetStatus, ImmutableAssetStatus, unknown>;
        metadata: t.StringC;
        collection: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        name: t.StringC;
        sell_orders: t.BooleanC;
        buy_orders: t.BooleanC;
        include_fees: t.BooleanC;
        auxiliaryFees: t.ArrayC<t.TypeC<{
            recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            percentage: t.NumberC;
        }>>;
    }>]>;
    type ImmutableGetAssetsParams = t.TypeOf<typeof ImmutableGetAssetsParamsCodec>;
    type ImmutableGetAssetsParamsTS = t.OutputOf<typeof ImmutableGetAssetsParamsCodec>;
    const ImmutableGetCollectionsParamsCodec: t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>;
    type ImmutableGetCollectionsParams = t.TypeOf<typeof ImmutableGetCollectionsParamsCodec>;
    type ImmutableGetCollectionsParamsTS = t.OutputOf<typeof ImmutableGetCollectionsParamsCodec>;
    const ImmutableGetApplicationsParamsCodec: t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>;
    type ImmutableGetApplicationsParams = t.TypeOf<typeof ImmutableGetApplicationsParamsCodec>;
    type ImmutableGetApplicationsParamsTS = t.OutputOf<typeof ImmutableGetApplicationsParamsCodec>;
    const ImmutableGetTransactionParamsCodec: t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        rollup_status: t.Type<ImmutableRollupStatus, ImmutableRollupStatus, unknown>;
        min_timestamp: t.StringC;
        max_timestamp: t.StringC;
        token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        token_id: t.StringC;
        token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        min_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        max_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        metadata: t.StringC;
    }>]>;
    type ImmutableGetTransactionParams = t.TypeOf<typeof ImmutableGetTransactionParamsCodec>;
    type ImmutableGetTransactionParamsTS = t.OutputOf<typeof ImmutableGetTransactionParamsCodec>;
    const ImmutableGetDepositsParamsCodec: t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        rollup_status: t.Type<ImmutableRollupStatus, ImmutableRollupStatus, unknown>;
        min_timestamp: t.StringC;
        max_timestamp: t.StringC;
        token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        token_id: t.StringC;
        token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        min_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        max_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        metadata: t.StringC;
    }>]>;
    type ImmutableGetDepositsParams = t.TypeOf<typeof ImmutableGetDepositsParamsCodec>;
    type ImmutableGetDepositsParamsTS = t.OutputOf<typeof ImmutableGetDepositsParamsCodec>;
    const ImmutableGetWithdrawalsParamsCodec: t.IntersectionC<[t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        rollup_status: t.Type<ImmutableRollupStatus, ImmutableRollupStatus, unknown>;
        min_timestamp: t.StringC;
        max_timestamp: t.StringC;
        token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        token_id: t.StringC;
        token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        min_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        max_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        metadata: t.StringC;
    }>]>, t.PartialC<{
        withdrawn_to_wallet: t.BooleanC;
    }>]>;
    type ImmutableGetWithdrawalsParams = t.TypeOf<typeof ImmutableGetWithdrawalsParamsCodec>;
    type ImmutableGetWithdrawalsParamsTS = t.OutputOf<typeof ImmutableGetWithdrawalsParamsCodec>;
    const ImmutableGetTransfersParamsCodec: t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        rollup_status: t.Type<ImmutableRollupStatus, ImmutableRollupStatus, unknown>;
        min_timestamp: t.StringC;
        max_timestamp: t.StringC;
        token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        token_id: t.StringC;
        token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        min_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        max_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        metadata: t.StringC;
    }>]>;
    type ImmutableGetTransfersParams = t.TypeOf<typeof ImmutableGetTransfersParamsCodec>;
    type ImmutableGetTransfersParamsTS = t.OutputOf<typeof ImmutableGetTransfersParamsCodec>;
    const ImmutableGetBurnsParamsCodec: t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        rollup_status: t.Type<ImmutableRollupStatus, ImmutableRollupStatus, unknown>;
        min_timestamp: t.StringC;
        max_timestamp: t.StringC;
        token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        token_id: t.StringC;
        token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        min_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        max_quantity: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        metadata: t.StringC;
    }>]>;
    type ImmutableGetBurnsParams = t.TypeOf<typeof ImmutableGetBurnsParamsCodec>;
    type ImmutableGetBurnsParamsTS = t.OutputOf<typeof ImmutableGetBurnsParamsCodec>;
    const ImmutableGetExchangesParamsCodec: t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        wallet_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.StringC;
        exchange: t.StringC;
        transfer_id: t.StringC;
        id: t.NumberC;
    }>]>;
    type ImmutableGetExchangesParams = t.TypeOf<typeof ImmutableGetExchangesParamsCodec>;
    type ImmutableGetExchangesParamsTS = t.OutputOf<typeof ImmutableGetExchangesParamsCodec>;
    const ImmutableGetTradesParamsCodec: t.IntersectionC<[t.PartialC<{
        order_by: t.StringC;
        page_size: t.BrandC<t.NumberC, t.IntBrand>;
        cursor: t.StringC;
        direction: t.Type<ImmutableSortOrder, ImmutableSortOrder, unknown>;
    }>, t.PartialC<{
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        min_timestamp: t.StringC;
        max_timestamp: t.StringC;
    }>, t.PartialC<{
        party_a_token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        party_a_token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        party_a_token_id: t.StringC;
        party_b_token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
        party_b_token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        party_b_token_id: t.StringC;
    }>]>;
    type ImmutableGetTradesParams = t.TypeOf<typeof ImmutableGetTradesParamsCodec>;
    type ImmutableGetTradesParamsTS = t.OutputOf<typeof ImmutableGetTradesParamsCodec>;
    const ImmutableGetAssetParamsCodec: t.IntersectionC<[t.TypeC<{
        address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        id: t.StringC;
    }>, t.PartialC<{
        include_fees: t.BooleanC;
    }>]>;
    type ImmutableGetAssetParams = t.TypeOf<typeof ImmutableGetAssetParamsCodec>;
    type ImmutableGetAssetParamsTS = t.OutputOf<typeof ImmutableGetAssetParamsCodec>;
    const ImmutableGetCollectionParamsCodec: t.TypeC<{
        address: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
    }>;
    type ImmutableGetCollectionParams = t.TypeOf<typeof ImmutableGetCollectionParamsCodec>;
    type ImmutableGetCollectionParamsTS = t.OutputOf<typeof ImmutableGetCollectionParamsCodec>;
    const ImmutableGetDepositParamsCodec: t.TypeC<{
        id: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableGetDepositParams = t.TypeOf<typeof ImmutableGetDepositParamsCodec>;
    type ImmutableGetDepositParamsTS = t.OutputOf<typeof ImmutableGetDepositParamsCodec>;
    const ImmutableGetTransferParamsCodec: t.TypeC<{
        id: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableGetTransferParams = t.TypeOf<typeof ImmutableGetTransferParamsCodec>;
    type ImmutableGetTransferParamsTS = t.OutputOf<typeof ImmutableGetTransferParamsCodec>;
    const ImmutableGetBurnParamsCodec: t.TypeC<{
        id: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableGetBurnParams = t.TypeOf<typeof ImmutableGetBurnParamsCodec>;
    type ImmutableGetBurnParamsTS = t.OutputOf<typeof ImmutableGetBurnParamsCodec>;
    const ImmutableGetWithdrawalParamsCodec: t.TypeC<{
        id: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableGetWithdrawalParams = t.TypeOf<typeof ImmutableGetWithdrawalParamsCodec>;
    type ImmutableGetWithdrawalParamsTS = t.OutputOf<typeof ImmutableGetWithdrawalParamsCodec>;
    const ImmutableGetTradeParamsCodec: t.TypeC<{
        id: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableGetTradeParams = t.TypeOf<typeof ImmutableGetTradeParamsCodec>;
    type ImmutableGetTradeParamsTS = t.OutputOf<typeof ImmutableGetTradeParamsCodec>;
    const ImmutableStarkApproveNFTParamsCodec: t.TypeC<{
        tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        tokenId: t.StringC;
    }>;
    type ImmutableStarkApproveNFTParams = t.TypeOf<typeof ImmutableStarkApproveNFTParamsCodec>;
    type ImmutableStarkApproveNFTParamsTS = t.OutputOf<typeof ImmutableStarkApproveNFTParamsCodec>;
    const ImmutableStarkApproveERC20ParamsCodec: t.TypeC<{
        tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>;
    type ImmutableStarkApproveERC20Params = t.TypeOf<typeof ImmutableStarkApproveERC20ParamsCodec>;
    type ImmutableStarkApproveERC20ParamsTS = t.OutputOf<typeof ImmutableStarkApproveERC20ParamsCodec>;
    const ImmutableMintNFTParamsCodec: t.TypeC<{
        tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    type ImmutableMintNFTParams = t.TypeOf<typeof ImmutableMintNFTParamsCodec>;
    type ImmutableMintNFTParamsTS = t.OutputOf<typeof ImmutableMintNFTParamsCodec>;
    const ImmutablePrepareWithdrawalParamsCodec: t.TypeC<{
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>;
    type ImmutablePrepareWithdrawalParams = t.TypeOf<typeof ImmutablePrepareWithdrawalParamsCodec>;
    type ImmutablePrepareWithdrawalParamsTS = t.OutputOf<typeof ImmutablePrepareWithdrawalParamsCodec>;
    const ImmutableCompleteWithdrawalParamsCodec: t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
    }>;
    type ImmutableCompleteWithdrawalParams = t.TypeOf<typeof ImmutableCompleteWithdrawalParamsCodec>;
    type ImmutableCompleteWithdrawalParamsTS = t.OutputOf<typeof ImmutableCompleteWithdrawalParamsCodec>;
    const ImmutableGetMintableTokenParamsCodec: t.TypeC<{
        tokenAddress: t.StringC;
        tokenId: t.StringC;
    }>;
    type ImmutableGetMintableTokenParams = t.TypeOf<typeof ImmutableGetMintableTokenParamsCodec>;
    type ImmutableGetMintableTokenParamsTS = t.OutputOf<typeof ImmutableGetMintableTokenParamsCodec>;
}
export declare namespace StarkMethodParams {
    const StarkAccountParamsCodec: t.TypeC<{
        layer: t.StringC;
        application: t.StringC;
        index: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkAccountParams = t.TypeOf<typeof StarkAccountParamsCodec>;
    const StarkRegisterParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        etherKey: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        operatorSignature: t.StringC;
    }>;
    type StarkRegisterParams = t.TypeOf<typeof StarkRegisterParamsCodec>;
    type StarkRegisterParamsTS = t.OutputOf<typeof StarkRegisterParamsCodec>;
    const StarkDepositParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        quantizedAmount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        assetId: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkDepositParams = t.TypeOf<typeof StarkDepositParamsCodec>;
    type StarkDepositParamsTS = t.OutputOf<typeof StarkDepositParamsCodec>;
    const StarkDepositCancelParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkDepositCancelParams = t.TypeOf<typeof StarkDepositCancelParamsCodec>;
    const StarkDepositReclaimParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkDepositReclaimParams = t.TypeOf<typeof StarkDepositReclaimParamsCodec>;
    const StarkTransferParamsCodec: t.TypeC<{
        from: t.TypeC<{
            starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
            vaultId: t.BrandC<t.NumberC, t.IntBrand>;
        }>;
        to: t.TypeC<{
            starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
            vaultId: t.BrandC<t.NumberC, t.IntBrand>;
        }>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        nonce: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        expirationTimestamp: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkTransferParams = t.TypeOf<typeof StarkTransferParamsCodec>;
    const StarkCreateOrderParamsCodec: t.TypeC<{
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        sell: t.TypeC<{
            vaultId: t.BrandC<t.NumberC, t.IntBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        }>;
        buy: t.TypeC<{
            vaultId: t.BrandC<t.NumberC, t.IntBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        }>;
        nonce: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        expirationTimestamp: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkCreateOrderParams = t.TypeOf<typeof StarkCreateOrderParamsCodec>;
    const StarkWithdrawalParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
    }>;
    type StarkWithdrawalParams = t.TypeOf<typeof StarkWithdrawalParamsCodec>;
    const StarkFullWithdrawalParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkFullWithdrawalParams = t.TypeOf<typeof StarkFullWithdrawalParamsCodec>;
    const StarkFreezeParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkFreezeParams = t.TypeOf<typeof StarkFreezeParamsCodec>;
    const StarkVerifyEscapeParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        proof: t.ArrayC<t.StringC>;
    }>;
    type StarkVerifyEscapeParams = t.TypeOf<typeof StarkVerifyEscapeParamsCodec>;
    const StarkEscapeParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>;
    type StarkEscapeParams = t.TypeOf<typeof StarkEscapeParamsCodec>;
    const StarkRegisterTokenParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
    }>;
    type StarkRegisterTokenParams = t.TypeOf<typeof StarkRegisterTokenParamsCodec>;
    const StarkGetEthKeyParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    type StarkGetEthKeyParams = t.TypeOf<typeof StarkGetEthKeyParamsCodec>;
    const StarkGetDepositBalanceParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
    }>;
    type StarkGetDepositBalanceParams = t.TypeOf<typeof StarkGetDepositBalanceParamsCodec>;
    const StarkGetWithdrawalBalanceParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
    }>;
    type StarkGetWithdrawalBalanceParams = t.TypeOf<typeof StarkGetWithdrawalBalanceParamsCodec>;
    const StarkMintNFTParamsCodec: t.TypeC<{
        tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        to: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        tokenId: t.StringC;
        tokenUri: t.StringC;
    }>;
    type StarkMintNFTParams = t.TypeOf<typeof StarkMintNFTParamsCodec>;
    const StarkApproveNFTParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        tokenId: t.StringC;
    }>;
    type StarkApproveNFTParams = t.TypeOf<typeof StarkApproveNFTParamsCodec>;
    type StarkApproveNFTParamsTS = t.OutputOf<typeof StarkApproveNFTParamsCodec>;
    const StarkApproveERC20ParamsCodec: t.TypeC<{
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    type StarkApproveERC20Params = t.TypeOf<typeof StarkApproveERC20ParamsCodec>;
    type StarkApproveERC20ParamsTS = t.OutputOf<typeof StarkApproveNFTParamsCodec>;
    const StarkSetupNFTParamsCodec: t.TypeC<{
        tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        contractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        to: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        tokenId: t.StringC;
        tokenUri: t.StringC;
    }>;
    type StarkSetupNFTParams = t.TypeOf<typeof StarkSetupNFTParamsCodec>;
}
export declare namespace RegistrationMethodParams {
    const RegisterAndDepositParamsCodec: t.TypeC<{
        registrationContractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        quantizedAmount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        assetId: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        vaultId: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        etherKey: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        operatorSignature: t.StringC;
    }>;
    type RegisterAndDepositParams = t.TypeOf<typeof RegisterAndDepositParamsCodec>;
    type RegisterAndDepositParamsTS = t.OutputOf<typeof RegisterAndDepositParamsCodec>;
    const RegisterAndWithdrawParamsCodec: t.TypeC<{
        registrationContractAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        starkPublicKey: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
        etherKey: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        operatorSignature: t.StringC;
    }>;
    type RegisterAndWithdrawParams = t.TypeOf<typeof RegisterAndWithdrawParamsCodec>;
    type RegisterAndWithdrawParamsTS = t.OutputOf<typeof RegisterAndWithdrawParamsCodec>;
}
export declare namespace ImmutableMethodResults {
    const ImmutableSignResultCodec: t.TypeC<{
        ethSignature: t.StringC;
    }>;
    type ImmutableSignResult = t.TypeOf<typeof ImmutableSignResultCodec>;
    const ImmutableRegisterResultCodec: t.TypeC<{
        tx_hash: t.StringC;
    }>;
    type ImmutableRegisterResult = t.TypeOf<typeof ImmutableRegisterResultCodec>;
    const ImmutableGetUserResultCodec: t.TypeC<{
        accounts: t.ArrayC<t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>>;
    }>;
    type ImmutableGetUserResult = t.TypeOf<typeof ImmutableGetUserResultCodec>;
    type ImmutableGetUserResultTS = t.OutputOf<typeof ImmutableGetUserResultCodec>;
    const ImmutableGetSignableDepositResultCodec: t.TypeC<{
        stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        vault_id: t.BrandC<t.NumberC, t.IntBrand>;
        amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        nonce: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableGetSignableDepositResult = t.TypeOf<typeof ImmutableGetSignableDepositResultCodec>;
    const ImmutableGetSignableRegistrationResultCodec: t.TypeC<{
        operator_signature: t.StringC;
    }>;
    type ImmutableGetSignableRegistrationResult = t.TypeOf<typeof ImmutableGetSignableRegistrationResultCodec>;
    const ImmutableDepositResultCodec: t.TypeC<{
        deposit_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.StringC;
        time: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableDepositResult = t.TypeOf<typeof ImmutableDepositResultCodec>;
    const ImmutableGetSignableWithdrawalResultCodec: t.TypeC<{
        stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        vault_id: t.BrandC<t.NumberC, t.IntBrand>;
        amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        nonce: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableGetSignableWithdrawalResult = t.TypeOf<typeof ImmutableGetSignableWithdrawalResultCodec>;
    const ImmutableWithdrawalResultCodec: t.TypeC<{
        withdrawal_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.StringC;
        time: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableWithdrawalResult = t.TypeOf<typeof ImmutableWithdrawalResultCodec>;
    const ImmutableGetSignableTransferResultCodec: t.TypeC<{
        sender_stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        sender_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
        receiver_stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        receiver_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
        amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        expiration_timestamp: t.BrandC<t.NumberC, t.IntBrand>;
        nonce: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableGetSignableTransferResult = t.TypeOf<typeof ImmutableGetSignableTransferResultCodec>;
    const ImmutableSignableTransferV2Codec: t.TypeC<{
        nonce: t.BrandC<t.NumberC, t.IntBrand>;
        sender_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
        receiver_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
        receiver_stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        expiration_timestamp: t.BrandC<t.NumberC, t.IntBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                decimals: t.NumberC;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                symbol: t.StringC;
                decimals: t.NumberC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.TypeC<{
                tokenId: t.StringC;
                tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
            data: t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                id: t.StringC;
                blueprint: t.StringC;
                tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            }>, t.PartialC<{
                royalties: t.ArrayC<t.TypeC<{
                    recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    percentage: t.NumberC;
                }>>;
            }>]>;
        }>]>;
    }>;
    type ImmutableSignableTransferV2 = t.TypeOf<typeof ImmutableSignableTransferV2Codec>;
    const ImmutableGetSignableTransferV2ResultCodec: t.TypeC<{
        sender_stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        signable_responses: t.ArrayC<t.TypeC<{
            nonce: t.BrandC<t.NumberC, t.IntBrand>;
            sender_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
            receiver_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
            receiver_stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
            amount: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
            expiration_timestamp: t.BrandC<t.NumberC, t.IntBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    decimals: t.NumberC;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    symbol: t.StringC;
                    decimals: t.NumberC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.TypeC<{
                    tokenId: t.StringC;
                    tokenAddress: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>;
                data: t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    id: t.StringC;
                    blueprint: t.StringC;
                    tokenAddress: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
                }>, t.PartialC<{
                    royalties: t.ArrayC<t.TypeC<{
                        recipient: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                        percentage: t.NumberC;
                    }>>;
                }>]>;
            }>]>;
        }>>;
    }>;
    type ImmutableGetSignableTransferV2Result = t.TypeOf<typeof ImmutableGetSignableTransferV2ResultCodec>;
    type ImmutableGetSignableTransferV2ResultTS = t.OutputOf<typeof ImmutableGetSignableTransferV2ResultCodec>;
    const ImmutableTransferResultCodec: t.TypeC<{
        transfer_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.StringC;
        time: t.BrandC<t.NumberC, t.IntBrand>;
        sent_signature: t.StringC;
    }>;
    type ImmutableTransferResult = t.TypeOf<typeof ImmutableTransferResultCodec>;
    type ImmutableBurnResult = t.TypeOf<typeof ImmutableTransferResultCodec>;
    const ImmutableTransferV2ResultCodec: t.TypeC<{
        transfer_ids: t.ArrayC<t.BrandC<t.NumberC, t.IntBrand>>;
    }>;
    type ImmutableTransferV2Result = t.TypeOf<typeof ImmutableTransferV2ResultCodec>;
    type ImmutableTransferV2ResultTS = t.OutputOf<typeof ImmutableTransferV2ResultCodec>;
    const ImmutableOffchainMintV2ResultCodec: t.TypeC<{
        token_id: t.StringC;
        contract_address: t.StringC;
        tx_id: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableOffchainMintV2Result = t.TypeOf<typeof ImmutableOffchainMintV2ResultCodec>;
    type ImmutableOffchainMintV2ResultTS = t.OutputOf<typeof ImmutableOffchainMintV2ResultCodec>;
    const ImmutableOffchainMintV2ResultsCodec: t.TypeC<{
        results: t.ArrayC<t.TypeC<{
            token_id: t.StringC;
            contract_address: t.StringC;
            tx_id: t.BrandC<t.NumberC, t.IntBrand>;
        }>>;
    }>;
    type ImmutableOffchainMintV2Results = t.TypeOf<typeof ImmutableOffchainMintV2ResultsCodec>;
    type ImmutableOffchainMintV2ResultsTS = t.OutputOf<typeof ImmutableOffchainMintV2ResultsCodec>;
    const ImmutableOffchainMintResultCodec: t.TypeC<{
        token_id: t.StringC;
        client_token_id: t.StringC;
        tx_id: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableOffchainMintResult = t.TypeOf<typeof ImmutableOffchainMintResultCodec>;
    type ImmutableOffchainMintResultTS = t.OutputOf<typeof ImmutableOffchainMintResultCodec>;
    const ImmutableOffchainMintResultsCodec: t.TypeC<{
        results: t.ArrayC<t.TypeC<{
            token_id: t.StringC;
            client_token_id: t.StringC;
            tx_id: t.BrandC<t.NumberC, t.IntBrand>;
        }>>;
    }>;
    type ImmutableOffchainMintResults = t.TypeOf<typeof ImmutableOffchainMintResultsCodec>;
    type ImmutableOffchainMintResultsTS = t.OutputOf<typeof ImmutableOffchainMintResultsCodec>;
    const ImmutableMintFeeResultCodec: t.TypeC<{
        type: t.Type<ImmutableFeeType.royalty, ImmutableFeeType.royalty, unknown>;
        percentage: t.NumberC;
        address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
    }>;
    const ImmutableGetSignableOrderResultCodec: t.IntersectionC<[t.TypeC<{
        stark_key: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        nonce: t.BrandC<t.NumberC, t.IntBrand>;
        expiration_timestamp: t.BrandC<t.NumberC, t.IntBrand>;
        amount_sell: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        asset_id_sell: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        vault_id_sell: t.BrandC<t.NumberC, t.IntBrand>;
        amount_buy: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        asset_id_buy: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        vault_id_buy: t.BrandC<t.NumberC, t.IntBrand>;
    }>, t.PartialC<{
        fee_info: t.TypeC<{
            fee_limit: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            source_vault_id: t.BrandC<t.NumberC, t.IntBrand>;
            asset_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        }>;
    }>]>;
    type ImmutableGetSignableOrderResult = t.TypeOf<typeof ImmutableGetSignableOrderResultCodec>;
    const ImmutableCreateOrderResultCodec: t.TypeC<{
        order_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.StringC;
    }>;
    type ImmutableCreateOrderResult = t.TypeOf<typeof ImmutableCreateOrderResultCodec>;
    const ImmutableCancelOrderResultCodec: t.TypeC<{
        order_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.StringC;
    }>;
    type ImmutableCancelOrderResult = t.TypeOf<typeof ImmutableCancelOrderResultCodec>;
    const ImmutableCollectionDetailsCodec: t.TypeC<{
        name: t.StringC;
        icon_url: t.UnionC<[t.NullC, t.StringC]>;
    }>;
    type ImmutableCollectionDetails = t.TypeOf<typeof ImmutableCollectionDetailsCodec>;
    const ImmutableCollectionCodec: t.TypeC<{
        name: t.StringC;
        icon_url: t.UnionC<[t.NullC, t.StringC]>;
        metadata_api_url: t.UnionC<[t.NullC, t.StringC]>;
    }>;
    type ImmutableCollection = t.TypeOf<typeof ImmutableCollectionCodec>;
    const ImmutablePropertiesCodec: t.TypeC<{
        name: t.UnionC<[t.NullC, t.StringC]>;
        image_url: t.UnionC<[t.NullC, t.StringC]>;
        collection: t.TypeC<{
            name: t.StringC;
            icon_url: t.UnionC<[t.NullC, t.StringC]>;
        }>;
    }>;
    type ImmutableProperties = t.TypeOf<typeof ImmutablePropertiesCodec>;
    const ImmutableETHTokenCodec: t.TypeC<{
        type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
        data: t.TypeC<{
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            decimals: t.BrandC<t.NumberC, t.IntBrand>;
        }>;
    }>;
    type ImmutableETHToken = t.TypeOf<typeof ImmutableETHTokenCodec>;
    type ImmutableETHTokenTS = t.OutputOf<typeof ImmutableETHTokenCodec>;
    const ImmutableERC20TokenCodec: t.TypeC<{
        type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
        data: t.TypeC<{
            token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            decimals: t.BrandC<t.NumberC, t.IntBrand>;
        }>;
    }>;
    type ImmutableERC20Token = t.TypeOf<typeof ImmutableERC20TokenCodec>;
    type ImmutableERC20TokenTS = t.OutputOf<typeof ImmutableERC20TokenCodec>;
    const ImmutableERC721TokenCodec: t.TypeC<{
        type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
        data: t.IntersectionC<[t.TypeC<{
            token_id: t.StringC;
            token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        }>, t.PartialC<{
            properties: t.TypeC<{
                name: t.UnionC<[t.NullC, t.StringC]>;
                image_url: t.UnionC<[t.NullC, t.StringC]>;
                collection: t.TypeC<{
                    name: t.StringC;
                    icon_url: t.UnionC<[t.NullC, t.StringC]>;
                }>;
            }>;
        }>]>;
    }>;
    type ImmutableERC721Token = t.TypeOf<typeof ImmutableERC721TokenCodec>;
    type ImmutableERC721TokenTS = t.OutputOf<typeof ImmutableERC721TokenCodec>;
    const ImmutableTokenCodec: t.UnionC<[t.TypeC<{
        type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
        data: t.TypeC<{
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            decimals: t.BrandC<t.NumberC, t.IntBrand>;
        }>;
    }>, t.TypeC<{
        type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
        data: t.TypeC<{
            token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            decimals: t.BrandC<t.NumberC, t.IntBrand>;
        }>;
    }>, t.TypeC<{
        type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
        data: t.IntersectionC<[t.TypeC<{
            token_id: t.StringC;
            token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
        }>, t.PartialC<{
            properties: t.TypeC<{
                name: t.UnionC<[t.NullC, t.StringC]>;
                image_url: t.UnionC<[t.NullC, t.StringC]>;
                collection: t.TypeC<{
                    name: t.StringC;
                    icon_url: t.UnionC<[t.NullC, t.StringC]>;
                }>;
            }>;
        }>]>;
    }>]>;
    type ImmutableToken = t.TypeOf<typeof ImmutableTokenCodec>;
    type ImmutableTokenTS = t.OutputOf<typeof ImmutableTokenCodec>;
    const ImmutablePaginatedResultCodec: t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>;
    type ImmutablePaginatedResult = t.TypeOf<typeof ImmutablePaginatedResultCodec>;
    type ImmutablePaginatedResultTS = t.OutputOf<typeof ImmutablePaginatedResultCodec>;
    const ImmutableOrderFeeInfo: t.TypeC<{
        type: t.Type<ImmutableFeeType, ImmutableFeeType, unknown>;
        address: t.StringC;
        token: t.TypeC<{
            type: t.StringC;
            data: t.IntersectionC<[t.PartialC<{
                contract_address: t.StringC;
            }>, t.TypeC<{
                decimals: t.NumberC;
            }>]>;
        }>;
        amount: t.StringC;
    }>;
    const ImmutableGetOrderResultCodec: t.IntersectionC<[t.TypeC<{
        order_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        sell: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                token_id: t.StringC;
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            }>, t.PartialC<{
                properties: t.TypeC<{
                    name: t.UnionC<[t.NullC, t.StringC]>;
                    image_url: t.UnionC<[t.NullC, t.StringC]>;
                    collection: t.TypeC<{
                        name: t.StringC;
                        icon_url: t.UnionC<[t.NullC, t.StringC]>;
                    }>;
                }>;
            }>]>;
        }>]>;
        buy: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                token_id: t.StringC;
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            }>, t.PartialC<{
                properties: t.TypeC<{
                    name: t.UnionC<[t.NullC, t.StringC]>;
                    image_url: t.UnionC<[t.NullC, t.StringC]>;
                    collection: t.TypeC<{
                        name: t.StringC;
                        icon_url: t.UnionC<[t.NullC, t.StringC]>;
                    }>;
                }>;
            }>]>;
        }>]>;
        amount_sold: t.UnionC<[t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>, t.NullC]>;
        expiration_timestamp: import("io-ts-types").DateFromISOStringC;
        timestamp: import("io-ts-types").DateFromISOStringC;
    }>, t.PartialC<{
        fees: t.UnionC<[t.ArrayC<t.TypeC<{
            type: t.Type<ImmutableFeeType, ImmutableFeeType, unknown>;
            address: t.StringC;
            token: t.TypeC<{
                type: t.StringC;
                data: t.IntersectionC<[t.PartialC<{
                    contract_address: t.StringC;
                }>, t.TypeC<{
                    decimals: t.NumberC;
                }>]>;
            }>;
            amount: t.StringC;
        }>>, t.NullC]>;
    }>]>;
    type ImmutableGetOrderResult = t.TypeOf<typeof ImmutableGetOrderResultCodec>;
    type ImmutableGetOrderResultTS = t.OutputOf<typeof ImmutableGetOrderResultCodec>;
    const ImmutableGetOrdersResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.IntersectionC<[t.TypeC<{
            order_id: t.BrandC<t.NumberC, t.IntBrand>;
            status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
            user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            sell: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    token_id: t.StringC;
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                }>, t.PartialC<{
                    properties: t.TypeC<{
                        name: t.UnionC<[t.NullC, t.StringC]>;
                        image_url: t.UnionC<[t.NullC, t.StringC]>;
                        collection: t.TypeC<{
                            name: t.StringC;
                            icon_url: t.UnionC<[t.NullC, t.StringC]>;
                        }>;
                    }>;
                }>]>;
            }>]>;
            buy: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    token_id: t.StringC;
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                }>, t.PartialC<{
                    properties: t.TypeC<{
                        name: t.UnionC<[t.NullC, t.StringC]>;
                        image_url: t.UnionC<[t.NullC, t.StringC]>;
                        collection: t.TypeC<{
                            name: t.StringC;
                            icon_url: t.UnionC<[t.NullC, t.StringC]>;
                        }>;
                    }>;
                }>]>;
            }>]>;
            amount_sold: t.UnionC<[t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>, t.NullC]>;
            expiration_timestamp: import("io-ts-types").DateFromISOStringC;
            timestamp: import("io-ts-types").DateFromISOStringC;
        }>, t.PartialC<{
            fees: t.UnionC<[t.ArrayC<t.TypeC<{
                type: t.Type<ImmutableFeeType, ImmutableFeeType, unknown>;
                address: t.StringC;
                token: t.TypeC<{
                    type: t.StringC;
                    data: t.IntersectionC<[t.PartialC<{
                        contract_address: t.StringC;
                    }>, t.TypeC<{
                        decimals: t.NumberC;
                    }>]>;
                }>;
                amount: t.StringC;
            }>>, t.NullC]>;
        }>]>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetOrdersResult = t.TypeOf<typeof ImmutableGetOrdersResultCodec>;
    const ImmutableApplicationCodec: t.TypeC<{
        id: t.StringC;
        name: t.StringC;
        created_at: t.StringC;
    }>;
    type ImmutableApplication = t.TypeOf<typeof ImmutableApplicationCodec>;
    const ImmutableGetApplicationsResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            id: t.StringC;
            name: t.StringC;
            created_at: t.StringC;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetApplicationsResult = t.TypeOf<typeof ImmutableGetApplicationsResultCodec>;
    const ImmutableSellOrderCodec: t.IntersectionC<[t.TypeC<{
        order_id: t.NumberC;
        user: t.StringC;
        buy_quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>, t.PartialC<{
        buy_decimals: t.NumberC;
        status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
        contract_address: t.StringC;
    }>]>;
    type ImmutableSellOrder = t.TypeOf<typeof ImmutableSellOrderCodec>;
    type ImmutableSellOrderTS = t.OutputOf<typeof ImmutableSellOrderCodec>;
    const ImmutableBuyOrderCodec: t.IntersectionC<[t.TypeC<{
        order_id: t.NumberC;
        user: t.StringC;
        sell_quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
    }>, t.PartialC<{
        sell_decimals: t.NumberC;
        status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
        contract_address: t.StringC;
    }>]>;
    type ImmutableBuyOrder = t.TypeOf<typeof ImmutableBuyOrderCodec>;
    type ImmutableBuyOrderTS = t.OutputOf<typeof ImmutableBuyOrderCodec>;
    const ImmutableAssetCodec: t.IntersectionC<[t.TypeC<{
        token_address: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        token_id: t.StringC;
        user: t.UnionC<[t.NullC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
        status: t.Type<ImmutableAssetStatus, ImmutableAssetStatus, unknown>;
        uri: t.UnionC<[t.NullC, t.StringC]>;
        name: t.UnionC<[t.NullC, t.StringC]>;
        description: t.UnionC<[t.NullC, t.StringC]>;
        image_url: t.UnionC<[t.NullC, t.StringC]>;
        metadata: t.UnknownC;
        collection: t.TypeC<{
            name: t.StringC;
            icon_url: t.UnionC<[t.NullC, t.StringC]>;
        }>;
    }>, t.PartialC<{
        orders: t.PartialC<{
            sell_orders: t.UnionC<[t.NullC, t.ArrayC<t.IntersectionC<[t.TypeC<{
                order_id: t.NumberC;
                user: t.StringC;
                buy_quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            }>, t.PartialC<{
                buy_decimals: t.NumberC;
                status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
                contract_address: t.StringC;
            }>]>>]>;
            buy_orders: t.UnionC<[t.NullC, t.ArrayC<t.IntersectionC<[t.TypeC<{
                order_id: t.NumberC;
                user: t.StringC;
                sell_quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            }>, t.PartialC<{
                sell_decimals: t.NumberC;
                status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
                contract_address: t.StringC;
            }>]>>]>;
        }>;
        fees: t.ArrayC<t.TypeC<{
            type: t.Type<ImmutableFeeType.royalty, ImmutableFeeType.royalty, unknown>;
            percentage: t.NumberC;
            address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        }>>;
    }>]>;
    type ImmutableAsset = t.TypeOf<typeof ImmutableAssetCodec>;
    type ImmutableAssetTS = t.OutputOf<typeof ImmutableAssetCodec>;
    const ImmutableGetAssetsResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.IntersectionC<[t.TypeC<{
            token_address: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
            token_id: t.StringC;
            user: t.UnionC<[t.NullC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            status: t.Type<ImmutableAssetStatus, ImmutableAssetStatus, unknown>;
            uri: t.UnionC<[t.NullC, t.StringC]>;
            name: t.UnionC<[t.NullC, t.StringC]>;
            description: t.UnionC<[t.NullC, t.StringC]>;
            image_url: t.UnionC<[t.NullC, t.StringC]>;
            metadata: t.UnknownC;
            collection: t.TypeC<{
                name: t.StringC;
                icon_url: t.UnionC<[t.NullC, t.StringC]>;
            }>;
        }>, t.PartialC<{
            orders: t.PartialC<{
                sell_orders: t.UnionC<[t.NullC, t.ArrayC<t.IntersectionC<[t.TypeC<{
                    order_id: t.NumberC;
                    user: t.StringC;
                    buy_quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                }>, t.PartialC<{
                    buy_decimals: t.NumberC;
                    status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
                    contract_address: t.StringC;
                }>]>>]>;
                buy_orders: t.UnionC<[t.NullC, t.ArrayC<t.IntersectionC<[t.TypeC<{
                    order_id: t.NumberC;
                    user: t.StringC;
                    sell_quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                }>, t.PartialC<{
                    sell_decimals: t.NumberC;
                    status: t.Type<ImmutableOrderStatus, ImmutableOrderStatus, unknown>;
                    contract_address: t.StringC;
                }>]>>]>;
            }>;
            fees: t.ArrayC<t.TypeC<{
                type: t.Type<ImmutableFeeType.royalty, ImmutableFeeType.royalty, unknown>;
                percentage: t.NumberC;
                address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            }>>;
        }>]>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetAssetsResult = t.TypeOf<typeof ImmutableGetAssetsResultCodec>;
    const ImmutableGetCollectionsResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            name: t.StringC;
            icon_url: t.UnionC<[t.NullC, t.StringC]>;
            metadata_api_url: t.UnionC<[t.NullC, t.StringC]>;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetCollectionsResult = t.TypeOf<typeof ImmutableGetCollectionsResultCodec>;
    const ImmutableCreateTradeResultCodec: t.TypeC<{
        trade_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.StringC;
    }>;
    type ImmutableCreateTradeResult = t.TypeOf<typeof ImmutableCreateTradeResultCodec>;
    const ImmutableDepositCodec: t.TypeC<{
        transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                token_id: t.StringC;
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            }>, t.PartialC<{
                properties: t.TypeC<{
                    name: t.UnionC<[t.NullC, t.StringC]>;
                    image_url: t.UnionC<[t.NullC, t.StringC]>;
                    collection: t.TypeC<{
                        name: t.StringC;
                        icon_url: t.UnionC<[t.NullC, t.StringC]>;
                    }>;
                }>;
            }>]>;
        }>]>;
        timestamp: import("io-ts-types").DateFromISOStringC;
    }>;
    type ImmutableDeposit = t.TypeOf<typeof ImmutableDepositCodec>;
    const ImmutableGetDepositsResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
            status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
            user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    token_id: t.StringC;
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                }>, t.PartialC<{
                    properties: t.TypeC<{
                        name: t.UnionC<[t.NullC, t.StringC]>;
                        image_url: t.UnionC<[t.NullC, t.StringC]>;
                        collection: t.TypeC<{
                            name: t.StringC;
                            icon_url: t.UnionC<[t.NullC, t.StringC]>;
                        }>;
                    }>;
                }>]>;
            }>]>;
            timestamp: import("io-ts-types").DateFromISOStringC;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetDepositsResult = t.TypeOf<typeof ImmutableGetDepositsResultCodec>;
    const ImmutableWithdrawalCodec: t.TypeC<{
        transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
        sender: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        timestamp: import("io-ts-types").DateFromISOStringC;
        rollup_status: t.Type<ImmutableRollupStatus, ImmutableRollupStatus, unknown>;
        withdrawn_to_wallet: t.BooleanC;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                token_id: t.StringC;
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            }>, t.PartialC<{
                properties: t.TypeC<{
                    name: t.UnionC<[t.NullC, t.StringC]>;
                    image_url: t.UnionC<[t.NullC, t.StringC]>;
                    collection: t.TypeC<{
                        name: t.StringC;
                        icon_url: t.UnionC<[t.NullC, t.StringC]>;
                    }>;
                }>;
            }>]>;
        }>]>;
    }>;
    type ImmutableWithdrawal = t.TypeOf<typeof ImmutableWithdrawalCodec>;
    type ImmutableWithdrawalTS = t.OutputOf<typeof ImmutableWithdrawalCodec>;
    const ImmutableGetWithdrawalsResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
            sender: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
            timestamp: import("io-ts-types").DateFromISOStringC;
            rollup_status: t.Type<ImmutableRollupStatus, ImmutableRollupStatus, unknown>;
            withdrawn_to_wallet: t.BooleanC;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    token_id: t.StringC;
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                }>, t.PartialC<{
                    properties: t.TypeC<{
                        name: t.UnionC<[t.NullC, t.StringC]>;
                        image_url: t.UnionC<[t.NullC, t.StringC]>;
                        collection: t.TypeC<{
                            name: t.StringC;
                            icon_url: t.UnionC<[t.NullC, t.StringC]>;
                        }>;
                    }>;
                }>]>;
            }>]>;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetWithdrawalsResult = t.TypeOf<typeof ImmutableGetWithdrawalsResultCodec>;
    const ImmutableTransferCodec: t.TypeC<{
        transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
        token: t.UnionC<[t.TypeC<{
            type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
            data: t.TypeC<{
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
            data: t.TypeC<{
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                decimals: t.BrandC<t.NumberC, t.IntBrand>;
            }>;
        }>, t.TypeC<{
            type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
            data: t.IntersectionC<[t.TypeC<{
                token_id: t.StringC;
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
            }>, t.PartialC<{
                properties: t.TypeC<{
                    name: t.UnionC<[t.NullC, t.StringC]>;
                    image_url: t.UnionC<[t.NullC, t.StringC]>;
                    collection: t.TypeC<{
                        name: t.StringC;
                        icon_url: t.UnionC<[t.NullC, t.StringC]>;
                    }>;
                }>;
            }>]>;
        }>]>;
        timestamp: import("io-ts-types").DateFromISOStringC;
    }>;
    type ImmutableTransfer = t.TypeOf<typeof ImmutableTransferCodec>;
    const ImmutableGetTransfersResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
            status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
            user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    token_id: t.StringC;
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                }>, t.PartialC<{
                    properties: t.TypeC<{
                        name: t.UnionC<[t.NullC, t.StringC]>;
                        image_url: t.UnionC<[t.NullC, t.StringC]>;
                        collection: t.TypeC<{
                            name: t.StringC;
                            icon_url: t.UnionC<[t.NullC, t.StringC]>;
                        }>;
                    }>;
                }>]>;
            }>]>;
            timestamp: import("io-ts-types").DateFromISOStringC;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetTransfersResult = t.TypeOf<typeof ImmutableGetTransfersResultCodec>;
    type ImmutableBurn = t.TypeOf<typeof ImmutableTransferCodec>;
    const ImmutableGetBurnsResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
            status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
            user: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            receiver: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            token: t.UnionC<[t.TypeC<{
                type: t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>;
                data: t.TypeC<{
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>;
                data: t.TypeC<{
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                    decimals: t.BrandC<t.NumberC, t.IntBrand>;
                }>;
            }>, t.TypeC<{
                type: t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>;
                data: t.IntersectionC<[t.TypeC<{
                    token_id: t.StringC;
                    token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                    quantity: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").PositiveBigNumberBrand>;
                }>, t.PartialC<{
                    properties: t.TypeC<{
                        name: t.UnionC<[t.NullC, t.StringC]>;
                        image_url: t.UnionC<[t.NullC, t.StringC]>;
                        collection: t.TypeC<{
                            name: t.StringC;
                            icon_url: t.UnionC<[t.NullC, t.StringC]>;
                        }>;
                    }>;
                }>]>;
            }>]>;
            timestamp: import("io-ts-types").DateFromISOStringC;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetBurnsResult = t.TypeOf<typeof ImmutableGetBurnsResultCodec>;
    const ImmutableTradeCodec: t.TypeC<{
        a: t.IntersectionC<[t.TypeC<{
            order_id: t.BrandC<t.NumberC, t.IntBrand>;
            token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
            sold: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        }>, t.PartialC<{
            token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            token_id: t.StringC;
        }>]>;
        b: t.IntersectionC<[t.TypeC<{
            order_id: t.BrandC<t.NumberC, t.IntBrand>;
            token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
            sold: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
        }>, t.PartialC<{
            token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
            token_id: t.StringC;
        }>]>;
        status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
        timestamp: import("io-ts-types").DateFromISOStringC;
        transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
    }>;
    type ImmutableTrade = t.TypeOf<typeof ImmutableTradeCodec>;
    const ImmutableGetTradesResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            a: t.IntersectionC<[t.TypeC<{
                order_id: t.BrandC<t.NumberC, t.IntBrand>;
                token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
                sold: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
            }>, t.PartialC<{
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                token_id: t.StringC;
            }>]>;
            b: t.IntersectionC<[t.TypeC<{
                order_id: t.BrandC<t.NumberC, t.IntBrand>;
                token_type: t.UnionC<[t.Type<import("../runtime").ERC721TokenType, import("../runtime").ERC721TokenType, unknown>, t.Type<import("../runtime").ERC20TokenType, import("../runtime").ERC20TokenType, unknown>, t.Type<import("../runtime").ETHTokenType, import("../runtime").ETHTokenType, unknown>, t.Type<import("../runtime").MintableERC20TokenType, import("../runtime").MintableERC20TokenType, unknown>, t.Type<import("../runtime").MintableERC721TokenType, import("../runtime").MintableERC721TokenType, unknown>]>;
                sold: t.BrandC<t.BrandC<t.StringC, import("../runtime").NumberStringBrand>, import("../runtime").PositiveIntegerStringBrand>;
            }>, t.PartialC<{
                token_address: t.BrandC<t.StringC, import("../runtime").EthAddressBrand>;
                token_id: t.StringC;
            }>]>;
            status: t.Type<ImmutableTransactionStatus, ImmutableTransactionStatus, unknown>;
            timestamp: import("io-ts-types").DateFromISOStringC;
            transaction_id: t.BrandC<t.NumberC, t.IntBrand>;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetTradesResult = t.TypeOf<typeof ImmutableGetTradesResultCodec>;
    const ImmutableGetExchangeResultCodecV1: t.TypeC<{
        id: t.NumberC;
        status: t.StringC;
        exchange: t.StringC;
        wallet_address: t.StringC;
        created_at: import("io-ts-types").DateFromISOStringC;
        transfer_id: t.StringC;
        external_id: t.StringC;
        from_amount: t.NumberC;
        from_currency: t.StringC;
        to_amount: t.NumberC;
        to_currency: t.StringC;
        fees_amount: t.NumberC;
    }>;
    const ImmutableExchangeDataCodec: t.TypeC<{
        transfer_id: t.StringC;
        external_id: t.StringC;
        from_amount: t.NumberC;
        from_currency: t.StringC;
        to_amount: t.NumberC;
        to_currency: t.StringC;
        fees_amount: t.NumberC;
        provider_wallet_address: t.UnionC<[t.NullC, t.StringC]>;
    }>;
    const ImmutableExchangeTypeCodec: t.UnionC<[t.LiteralC<"fiatToCrypto">, t.LiteralC<"cryptoToFiat">]>;
    const ImmutableGetExchangeResultCodec: t.TypeC<{
        id: t.NumberC;
        wallet_address: t.StringC;
        status: t.StringC;
        provider: t.StringC;
        type: t.UnionC<[t.LiteralC<"fiatToCrypto">, t.LiteralC<"cryptoToFiat">]>;
        data: t.UnionC<[t.TypeC<{
            transfer_id: t.StringC;
            external_id: t.StringC;
            from_amount: t.NumberC;
            from_currency: t.StringC;
            to_amount: t.NumberC;
            to_currency: t.StringC;
            fees_amount: t.NumberC;
            provider_wallet_address: t.UnionC<[t.NullC, t.StringC]>;
        }>, t.NullC]>;
        created_at: import("io-ts-types").DateFromISOStringC;
        updated_at: import("io-ts-types").DateFromISOStringC;
    }>;
    const ImmutableExchangeCurrencyCodec: t.TypeC<{
        id: t.NumberC;
        provider: t.StringC;
        symbol: t.StringC;
        currency_code: t.StringC;
        enabled: t.BooleanC;
    }>;
    type ImmutableGetExchangeResult = t.TypeOf<typeof ImmutableGetExchangeResultCodec>;
    type ImmutableGetExchangeResultV1 = t.TypeOf<typeof ImmutableGetExchangeResultCodecV1>;
    const ImmutableCreateExchangeResultCodec: t.TypeC<{
        id: t.NumberC;
        provider: t.StringC;
        wallet_address: t.StringC;
    }>;
    type ImmutableCreateExchangeResult = t.TypeOf<typeof ImmutableCreateExchangeResultCodec>;
    const ImmutableCreateExchangeResultCodecV1: t.TypeC<{
        id: t.NumberC;
        status: t.StringC;
        exchange: t.StringC;
        wallet_address: t.StringC;
    }>;
    type ImmutableCreateExchangeResultV1 = t.TypeOf<typeof ImmutableCreateExchangeResultCodecV1>;
    const ImmutableMoonpaySignatureRequestBaseCodec: t.IntersectionC<[t.TypeC<{
        apiKey: t.StringC;
    }>, t.PartialC<{
        baseCurrencyCode: t.StringC;
        colorCode: t.StringC;
        externalTransactionId: t.StringC;
        showOnlyCurrencies: t.ArrayC<t.StringC>;
        currencyCode: t.StringC;
    }>]>;
    const ImmutableGetMoonpaySignatureRequestCodec: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
        apiKey: t.StringC;
    }>, t.PartialC<{
        baseCurrencyCode: t.StringC;
        colorCode: t.StringC;
        externalTransactionId: t.StringC;
        showOnlyCurrencies: t.ArrayC<t.StringC>;
        currencyCode: t.StringC;
    }>]>, t.UnionC<[t.TypeC<{
        walletAddress: t.StringC;
    }>, t.TypeC<{
        walletAddresses: t.RecordC<t.StringC, t.StringC>;
    }>]>]>;
    const ImmutableGetMoonpaySellSignatureRequestCodec: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
        apiKey: t.StringC;
    }>, t.PartialC<{
        baseCurrencyCode: t.StringC;
        colorCode: t.StringC;
        externalTransactionId: t.StringC;
        showOnlyCurrencies: t.ArrayC<t.StringC>;
        currencyCode: t.StringC;
    }>]>, t.UnionC<[t.TypeC<{
        refundWalletAddress: t.StringC;
    }>, t.TypeC<{
        refundWalletAddresses: t.RecordC<t.StringC, t.StringC>;
    }>]>]>;
    const ImmutableGetMoonpaySignatureResultCodec: t.TypeC<{
        request: t.StringC;
        signature: t.StringC;
    }>;
    type ImmutableGetMoonpaySignatureRequest = t.TypeOf<typeof ImmutableGetMoonpaySignatureRequestCodec>;
    type ImmutableGetMoonpaySignatureRequestTS = t.OutputOf<typeof ImmutableGetMoonpaySignatureRequestCodec>;
    type ImmutableGetMoonpaySellSignatureRequest = t.TypeOf<typeof ImmutableGetMoonpaySellSignatureRequestCodec>;
    type ImmutableGetMoonpaySellSignatureRequestTS = t.OutputOf<typeof ImmutableGetMoonpaySellSignatureRequestCodec>;
    type ImmutableGetMoonpaySignatureResult = t.TypeOf<typeof ImmutableGetMoonpaySignatureResultCodec>;
    const ImmutableGetExchangeHistoryResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            id: t.NumberC;
            wallet_address: t.StringC;
            status: t.StringC;
            provider: t.StringC;
            type: t.UnionC<[t.LiteralC<"fiatToCrypto">, t.LiteralC<"cryptoToFiat">]>;
            data: t.UnionC<[t.TypeC<{
                transfer_id: t.StringC;
                external_id: t.StringC;
                from_amount: t.NumberC;
                from_currency: t.StringC;
                to_amount: t.NumberC;
                to_currency: t.StringC;
                fees_amount: t.NumberC;
                provider_wallet_address: t.UnionC<[t.NullC, t.StringC]>;
            }>, t.NullC]>;
            created_at: import("io-ts-types").DateFromISOStringC;
            updated_at: import("io-ts-types").DateFromISOStringC;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    const ImmutableGetExchangeHistoryResultCodecV1: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            id: t.NumberC;
            status: t.StringC;
            exchange: t.StringC;
            wallet_address: t.StringC;
            created_at: import("io-ts-types").DateFromISOStringC;
            transfer_id: t.StringC;
            external_id: t.StringC;
            from_amount: t.NumberC;
            from_currency: t.StringC;
            to_amount: t.NumberC;
            to_currency: t.StringC;
            fees_amount: t.NumberC;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableGetExchangeHistoryResultV1 = t.TypeOf<typeof ImmutableGetExchangeHistoryResultCodecV1>;
    type ImmutableGetExchangeHistoryResult = t.TypeOf<typeof ImmutableGetExchangeHistoryResultCodec>;
    const ImmutableGetCurrencyLimitsCodec: t.ArrayC<t.TypeC<{
        symbol: t.StringC;
        min_amount: t.UnionC<[t.NullC, t.NumberC]>;
        max_amount: t.UnionC<[t.NullC, t.NumberC]>;
    }>>;
    type ImmutableGetCurrencyLimitsResult = t.TypeOf<typeof ImmutableGetCurrencyLimitsCodec>;
    const ImmutableGetCurrenciesResultCodec: t.ArrayC<t.TypeC<{
        id: t.NumberC;
        provider: t.StringC;
        symbol: t.StringC;
        currency_code: t.StringC;
        enabled: t.BooleanC;
    }>>;
    type ImmutableGetCurrenciesResult = t.TypeOf<typeof ImmutableGetCurrenciesResultCodec>;
    const ImmutableGetTokenResultCodec: t.TypeC<{
        token_address: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
        image_url: t.UnionC<[t.NullC, t.StringC]>;
        name: t.UnionC<[t.NullC, t.StringC]>;
        decimals: t.StringC;
        quantum: t.StringC;
        symbol: t.StringC;
    }>;
    type ImmutableGetTokenResult = t.TypeOf<typeof ImmutableGetTokenResultCodec>;
    type ImmutableGetTokenResultTS = t.OutputOf<typeof ImmutableGetTokenResultCodec>;
    const ImmutableListTokensResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            token_address: t.UnionC<[t.StringC, t.BrandC<t.StringC, import("../runtime").EthAddressBrand>]>;
            image_url: t.UnionC<[t.NullC, t.StringC]>;
            name: t.UnionC<[t.NullC, t.StringC]>;
            decimals: t.StringC;
            quantum: t.StringC;
            symbol: t.StringC;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableListTokensResult = t.TypeOf<typeof ImmutableListTokensResultCodec>;
    type ImmutableListTokensResultTS = t.OutputOf<typeof ImmutableListTokensResultCodec>;
    const ImmutableGetBalancesResultCodec: t.TypeC<{
        imx: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
        preparing_withdrawal: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
        withdrawable: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
    }>;
    type ImmutableGetBalancesResult = t.TypeOf<typeof ImmutableGetBalancesResultCodec>;
    type ImmutableGetBalancesResultTS = t.OutputOf<typeof ImmutableGetBalancesResultCodec>;
    type ImmutableBalance = t.TypeOf<typeof ImmutableBalanceCodec>;
    const ImmutableBalanceCodec: t.TypeC<{
        symbol: t.StringC;
        balance: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
        preparing_withdrawal: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
        withdrawable: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
    }>;
    const ImmutableGetBalanceResultCodec: t.TypeC<{
        symbol: t.StringC;
        balance: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
        preparing_withdrawal: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
        withdrawable: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
    }>;
    type ImmutableGetBalanceResult = t.TypeOf<typeof ImmutableGetBalanceResultCodec>;
    type ImmutableGetBalanceResultTS = t.OutputOf<typeof ImmutableGetBalanceResultCodec>;
    const ImmutableListBalancesResultCodec: t.IntersectionC<[t.TypeC<{
        result: t.ArrayC<t.TypeC<{
            symbol: t.StringC;
            balance: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
            preparing_withdrawal: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
            withdrawable: t.BrandC<t.Type<import("ethers").BigNumber, import("ethers").BigNumber, unknown>, import("../runtime").NonNegativeBigNumberBrand>;
        }>>;
    }>, t.IntersectionC<[t.TypeC<{
        cursor: t.StringC;
    }>, t.PartialC<{
        remaining: t.BrandC<t.NumberC, t.IntBrand>;
    }>]>]>;
    type ImmutableListBalancesResult = t.TypeOf<typeof ImmutableListBalancesResultCodec>;
    type ImmutableListBalancesResultTS = t.OutputOf<typeof ImmutableListBalancesResultCodec>;
    const ImmutableGetMintableTokenResultCodec: t.TypeC<{
        token_id: t.BrandC<t.StringC, import("../runtime").HexadecimalStringBrand>;
        client_token_id: t.StringC;
        blueprint: t.StringC;
    }>;
    type ImmutableGetMintableTokenResult = t.TypeOf<typeof ImmutableGetMintableTokenResultCodec>;
    type ImmutableGetMintableTokenResultTS = t.OutputOf<typeof ImmutableGetMintableTokenResultCodec>;
}
export declare namespace StarkMethodResults {
    type StarkAccountResult = {
        starkPublicKey: string;
    };
    type StarkRegisterResult = {
        txhash: string;
    };
    type StarkDepositResult = {
        txhash: string;
    };
    type StarkDepositCancelResult = {
        txhash: string;
    };
    type StarkDepositReclaimResult = {
        txhash: string;
    };
    type StarkTransferResult = {
        starkSignature: string;
    };
    type StarkCreateOrderResult = {
        starkSignature: string;
    };
    type StarkWithdrawalResult = {
        txhash: string;
    };
    type StarkFullWithdrawalResult = {
        txhash: string;
    };
    type StarkFreezeResult = {
        txhash: string;
    };
    type StarkVerifyEscapeResult = {
        txhash: string;
    };
    type StarkEscapeResult = {
        txhash: string;
    };
    type StarkRegisterTokenResult = {
        txhash: string;
    };
    type StarkGetEthKeyResult = {
        ethKey: string;
    };
    type StarkGetDepositBalanceResult = {
        balance: string;
    };
    type StarkGetWithdrawalBalanceResult = {
        balance: string;
    };
    type StarkMintNFTResult = {
        txhash: string;
    };
    type StarkApproveNFTResult = {
        txhash: string;
    };
    type StarkSetupNFTResult = {
        txhash: string;
    };
}
