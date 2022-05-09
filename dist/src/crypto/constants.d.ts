import BN from 'bn.js';
import { ec as Ec } from 'elliptic';
import { Instruction, InstructionWithFee } from './types';
declare const DEFAULT_ACCOUNT_MAPPING_KEY = "STARKWARE_ACCOUNT_MAPPING";
declare const DEFAULT_SIGNATURE_MESSAGE = "Only sign this request if you\u2019ve initiated an action with Immutable X.";
declare const NFT_ASSET_ID_PREFIX = "NFT:";
declare const MINTABLE_ASSET_ID_PREFIX = "MINTABLE:";
declare const prime: BN;
declare const starkEc: Ec;
declare const constantPoints: any[];
declare const shiftPoint: any;
declare const instructionEncodingMap: {
    [instruction in Instruction | InstructionWithFee]: BN;
};
declare const ZERO_BN: BN;
declare const ONE_BN: BN;
declare const TWO_POW_22_BN: BN;
declare const TWO_POW_31_BN: BN;
declare const TWO_POW_63_BN: BN;
declare const PRIME_BN: BN;
declare const MAX_ECDSA_BN: BN;
declare const MISSING_HEX_PREFIX = "Hex strings expected to be prefixed with 0x.";
declare const ORDER: BN;
declare const SECP_ORDER: BN;
export { constantPoints, DEFAULT_ACCOUNT_MAPPING_KEY, DEFAULT_SIGNATURE_MESSAGE, instructionEncodingMap, MAX_ECDSA_BN, MINTABLE_ASSET_ID_PREFIX, MISSING_HEX_PREFIX, NFT_ASSET_ID_PREFIX, ONE_BN, ORDER, prime, PRIME_BN, SECP_ORDER, shiftPoint, starkEc, TWO_POW_22_BN, TWO_POW_31_BN, TWO_POW_63_BN, ZERO_BN, };