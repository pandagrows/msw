import { reactive } from 'vue';

// In most BTC-derived coins, the below parameters can be found in the 'src/chainparams.cpp' Mainnet configuration.
// These below params share the same names as the CPP params, so finding and editing these is easy-peasy!
// <[network_byte] [32_byte_payload] [0x01] [4_byte_checksum]>
export const PRIVKEY_BYTE_LENGTH = 38;

export const COIN_DECIMALS = 8;
export const COIN = 10 ** 8;

/** The maximum gap (absence of transactions within a range of derived addresses) before an account search ends */
export const MAX_ACCOUNT_GAP = 20;

/* Internal tweaking parameters */
// A new encryption password must be 'at least' this long.
export const MIN_PASS_LENGTH = 6;

/** BIP21 coin prefix */
export const BIP21_PREFIX = 'seed2need';

/* chainparams */
export const cChainParams = reactive({
    current: null,
    main: {
        name: 'mainnet',
        collateralInSats: 1000000 * COIN,
        isTestnet: false,
        TICKER: 'SILO',
        PUBKEY_PREFIX: ['F'],
        STAKING_PREFIX: 'G',
        PUBKEY_ADDRESS: 35,
        STAKING_ADDRESS: 38,
        SECRET_KEY: 80,
        BIP44_TYPE: 119,
        BIP44_TYPE_LEDGER: 77,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 4820,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'Seed2Need', url: 'https://explorer.seed2need.me' },
        ],
        Nodes: [{ name: 'Seed2Need RPC', url: 'https://mswrpc.seed2need.me/mainnet' }],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
        coinbaseMaturity: 100,
        budgetCycleBlocks: 43200,
        proposalFee: 50 * COIN,
        proposalFeeConfirmRequirement: 6,
        maxPaymentCycles: 6,
        maxPayment: 10 * 43200 * COIN, // 43200 blocks of 10 PIV
        defaultColdStakingAddress: 'GgcTdtujm9eKFM6dsH35qt5BNTxHKQdfFp', // Labs Cold Pool
    },
    testnet: {
        name: 'testnet',
        collateralInSats: 10000000 * COIN,
        isTestnet: true,
        TICKER: 'SILO',
        PUBKEY_PREFIX: ['Q'],
        STAKING_PREFIX: 'N',
        PUBKEY_ADDRESS: 58,
        STAKING_ADDRESS: 53,
        SECRET_KEY: 61,
        BIP44_TYPE: 1,
        BIP44_TYPE_LEDGER: 1,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 5020,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'Seed2Need', url: 'https://testnetexplorer.seed2need.me' },
        ],
        Nodes: [{ name: 'Seed2Need RPC', url: 'https://mswrpc.seed2need.me/testnet' }],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
        coinbaseMaturity: 15,
        budgetCycleBlocks: 144,
        proposalFee: 50 * COIN,
        proposalFeeConfirmRequirement: 3,
        maxPaymentCycles: 20,
        maxPayment: 10 * 144 * COIN, // 144 blocks of 10 tPIV
        defaultColdStakingAddress: 'GgcTdtujm9eKFM6dsH35qt5BNTxHKQdfFp', // Sparrow's Testnet Cold Pool
    },
});
// Set default chain
cChainParams.current = cChainParams.main;
