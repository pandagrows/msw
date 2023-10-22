export default {
    // This document is to be used as a template as all the base code is in English
    // Basic HTML tags are allowed such as <b><i> etc. All data is sanitized https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

    // General words
    amount: 'Amount', //
    staking: 'Staking', //
    wallet: 'Wallet', //
    display: 'Display', //
    activity: 'Activity', //
    yes: 'Yes', //
    no: 'No', //

    // Nav Bar
    navDashboard: 'Dashboard', //
    navStake: 'Stake', //
    navMasternode: 'Masternode', //
    navGovernance: 'Governance', //
    navSettings: 'Settings', //

    // Footer
    footerBuiltWithPivxLabs: 'Built with 💜 by Seed2need', //

    // Intro
    loading: 'Loading', //
    loadingTitle: 'My Seed2need Wallet is', //

    // Onboarding Dashboard
    dashboardTitle: 'Dashboard', //
    dCardOneTitle: 'Create a', //
    dCardOneSubTitle: 'New Wallet', //
    dCardOneDesc:
        'Create a new Seed2need wallet, offering the most secure backup & security methods.', //
    dCardOneButton: 'Create A New Wallet', //

    dCardTwoTitle: 'Create a new', //
    dCardTwoSubTitle: 'Vanity Wallet', //
    dCardTwoDesc:
        'Create a wallet with a custom prefix, this can take a long time!', //
    dCardTwoButton: 'Create A Vanity Wallet', //

    dCardThreeTitle: 'Access your', //
    dCardThreeSubTitle: 'Ledger Wallet', //
    dCardThreeDesc:
        "Use your Ledger Hardware wallet with MSW's familiar interface.", //
    dCardThreeButton: 'Access my Ledger', //

    dCardFourTitle: 'Go to', //
    dCardFourSubTitle: 'My Wallet', //
    dCardFourDesc:
        'Import a Seed2need wallet using a Private Key, xpriv, or Seed Phrase.', //
    dCardFourButtonI: 'Import Wallet', //
    dCardFourButtonA: 'Access My Wallet', //

    // Vanity Creation
    vanityPrefixNote: 'Note: addresses will always start with:', //
    vanityPrefixInput: 'Address Prefix', //

    // Seed Phrase Creation
    thisIsYourSeed: 'This is your seed phrase:', //
    writeDownSeed: "Write it down somewhere. You'll only see this <b>once!</b>", //
    doNotShareWarning:
        'Anyone with a copy of it can access <b>all</b> of your funds.', //
    doNotShare: 'Do NOT share it with anyone.', //
    digitalStoreNotAdvised: 'It is <b>NOT</b> advised to store this digitally.', //
    optionalPassphrase: 'Optional Passphrase (BIP39)', //
    writtenDown: 'I have written down my seed phrase', //

    // Seed Phrase Import
    importSeedValid: 'Seed Phrase is valid!', //
    importSeedError: 'Seed Phrase is invalid!', //
    importSeedErrorSize: 'A Seed Phrase should be 12 or 24 words long!', //
    importSeedErrorTypo:
        'Seed Phrase contains typing errors! Check your input carefully', //
    importSeedErrorSkip:
        'Seed Phrase appears invalid, but the warning was skipped by the user', //

    // Wallet Dashboard
    gettingStarted: 'Getting Started', //
    secureYourWallet: 'Secure your wallet', //
    unlockWallet: 'Unlock wallet', //
    lockWallet: 'Lock wallet', //

    // Encrypt wallet
    encryptWallet: 'Encrypt wallet', //
    encryptPasswordCurrent: 'Current Password', //
    encryptPasswordFirst: 'Enter Password', //
    encryptPasswordSecond: 'Re-enter Password', //
    encrypt: 'Encrypt', //
    changePassword: 'Change Password', //

    // Wallet Dashboard Sub-menu
    balanceBreakdown: 'Balance Breakdown', //
    viewOnExplorer: 'View on Explorer', //
    export: 'Export', //
    refreshAddress: 'Refresh address', //
    redeemOrCreateCode: 'Redeem or Create Code', //

    // Send
    address: 'Address', //
    receivingAddress: 'Receiving address', //
    sendAmountCoinsMax: 'MAX', //
    paymentRequestMessage: 'Description (from the merchant)', //
    send: 'Send', //

    // Contacts System
    receive: 'Receive', //
    contacts: 'Contacts', //
    name: 'Name', //
    username: 'Username', //
    addressOrXPub: 'Address or XPub', //
    back: 'Back', //
    chooseAContact: 'Choose a Contact', //
    createContact: 'Create Contact', //
    encryptFirstForContacts:
        'Once you hit "{button}" in the Dashboard, you can create a Contact to make receiving SILO easier!', //
    shareContactURL: 'Share Contact URL', //
    setupYourContact: 'Setup your Contact', //
    receiveWithContact: 'Receive using a simple username-based Contact', //
    onlyShareContactPrivately:
        '<b>Only</b> share your Contact with trusted people (family, friends)', //

    /* Context: The "Change to" is used in-app with one of the Three options below it, i.e: "Change to Contact" */
    changeTo: 'Change to', //
    contact: 'Contact', //
    xpub: 'XPub', //

    addContactTitle: 'Add {strName} to Contacts', //
    addContactSubtext:
        "Once added you'll be able to send transactions to {strName} by their name (either typing, or clicking), no more addresses, nice 'n easy.", //
    addContactWarning:
        'Ensure that this is the real "{strName}", do not accept Contact requests from unknown sources!', //

    editContactTitle: 'Change "{strName}" Contact', //
    newName: 'New Name', //

    removeContactTitle: 'Remove {strName}?', //
    removeContactSubtext:
        'Are you sure you wish to remove {strName} from your Contacts?', //
    removeContactNote: 'You can add them again any time in the future.', //

    // Export
    privateKey: 'Private Key', //
    viewPrivateKey: 'View Private Key?', //
    privateWarning1: 'Make sure no one can see your screen.', //
    privateWarning2: 'Anyone with this key can steal your funds.', //
    viewKey: 'View key', //

    // Seed2Need Promos
    // NOTE: for this below line, continue the sentence "Seed2Need Promos [...]", since 'Seed2Need Promos' is a brand, it is not translated.
    Seed2NeedPromos: 'is a decentralised system for gift codes worth PIV', // [...] is a decentralised system for gift codes worth SILO
    // NOTE: on this line, if possible, leave 'Seed2Need Promos' untranslated
    redeemInput: "Enter your 'Seed2Need Promos' code", //Enter your 'Seed2Need Promos' code
    createName: 'Promo Name (Optional)', //Promo Name (Optional)
    createAmount: 'Promo Amount', //Promo Amount

    // Stake
    stake: 'Stake', //
    stakeUnstake: 'Unstake', //
    ownerAddress: '(Optional) Owner Address',
    rewardHistory: 'Reward History', //
    loadMore: 'Load more', //

    // Masternode
    mnControlYour: 'Control your', //
    mnSubtext:
        'From this tab you can create and access one or more masternodes', //

    // Governance
    govSubtext:
        'From this tab you can check the proposals and, if you have a masternode, be a part of the <b>DAO</b> and vote!', //
    govMonthlyBudget: 'Monthly Budget', //
    govAllocBudget: 'Allocated Budget', //
    govNextPayout: 'Next Treasury Payout', //
    govTableStatus: 'STATUS', //
    govTableName: 'NAME', //
    govTablePayment: 'PAYMENT', //
    govTableVotes: 'VOTES', //
    govTableVote: 'VOTE', //
    contestedProposalsTitle: 'Contested Proposals', //
    contestedProposalsDesc:
        'These are proposals that received an overwhelming amount of downvotes, making it likely spam or a highly contestable proposal.', //

    // Settings
    settingsCurrency: 'Choose a display currency:', //
    priceProvidedBy: 'Price data provided by', //
    settingsDecimals: 'Balance Decimals:', //
    settingsExplorer: 'Choose an explorer:', //
    settingsLanguage: 'Choose a Language:', //
    settingsPivxNode: 'Choose a Seed2Need node:', //
    settingsAutoSelectNet: 'Auto-select Explorers and Nodes', //
    settingsAnalytics: 'Choose your analytics contribution level:', //
    settingsToggleDebug: 'Debug Mode', //
    settingsToggleTestnet: 'Testnet Mode', //
    settingsToggleAdvancedMode: 'Advanced Mode', //
    settingsToggleAdvancedModeSubtext:
        'This unlocks deeper functionality and customisation, but may be overwhelming and potentially dangerous for unexperienced users!', //

    // Network switching (mainnet <---> testnet)
    netSwitchUnsavedWarningTitle: "Your {network} wallet isn't saved!", //
    netSwitchUnsavedWarningSubtitle: 'Your {network} account is at risk!', //
    netSwitchUnsavedWarningSubtext:
        "If you switch to {network} before saving it, you'll lose the account!", //
    netSwitchUnsavedWarningConfirmation: 'Are you really sure?', //

    // Transparency Report
    transparencyReport: 'Transparency Report',
    hit: 'A ping indicating an app load, no unique data is sent.',
    time_to_sync: 'The time in seconds it took for MPW to last synchronise.',
    transaction:
        'A ping indicating a Tx, no unique data is sent, but may be inferred from on-chain time.',

    // Analytics Levels
    analyticDisabled: 'Disabled',
    analyticMinimal: 'Minimal',
    analyticBalanced: 'Balanced',

    // Migration System
    MIGRATION_ACCOUNT_FAILURE_TITLE: 'Failed to recover account',
    MIGRATION_ACCOUNT_FAILURE_HTML:
        'There was an error recovering your account. <br> Please reimport your wallet using the following key:',

    // Dynamic Elements (Rendered at runtime - TODO in future PR: sort in to above categories for consistency)
    ID: 'ID',
    time: 'Time',
    description: 'Description',
    activityBlockReward: 'Block Reward',
    activitySentTo: 'Sent to {r}',
    activitySelf: 'self',
    activityShieldedAddress: 'Shielded address',
    activityReceivedFrom: 'Received from {s}',
    activityDelegatedTo: 'Delegated to {r}',
    activityUndelegated: 'Undelegated',
    activityUnknown: 'Unknown Tx',
    password: 'Password',
    walletUnlock: 'Unlock your wallet',
    walletPassword: 'Wallet password',
    walletUnlockCreateMN: 'Unlock to create your Masternode!',
    walletUnlockMNStart: 'Unlock to start your Masternode!',
    walletUnlockProposal: 'Unlock to create a proposal!',
    walletUnlockPromo: 'Unlock to finalise your Promo Code!',
    walletUnlockTx: 'Unlock to send your transaction!',
    walletUnlockStake: 'Unlock to stake your',
    walletUnlockUnstake: 'Unlock to unstake your',
    changelogTitle: "What's New in",
    popupSetColdAddr: 'Set your Cold Staking address',
    popupCurrentAddress: 'Current address:',
    popupColdStakeNote:
        "A Cold Address stakes coins on your behalf, it cannot spend coins, so it's even safe to use a stranger's Cold Address!",
    popupExample: 'Example:',
    popupWalletLock: 'Do you want to lock your wallet?',
    popupWalletWipe: 'Do you want to wipe your wallet private data?',
    popupWalletLockNote:
        'You will need to enter your password to access your funds',
    popupWalletWipeNote:
        "You will lose access to your funds if you haven't backed up your private key or seed phrase",
    popupSeedPhraseBad: 'Unexpected Seed Phrase',
    popupSeedPhraseBadNote:
        'The seed phrase is either invalid or was not generated by MPW.<br>Do you still want to proceed?',
    popupCreateProposal: 'Create Proposal',
    popupCreateProposalCost: 'Cost',
    popupProposalName: 'Proposal Name',
    popupProposalAddress: 'Proposal Address (Optional)',
    popupProposalDuration: 'Duration in cycles',
    popupProposalPerCycle: 'per cycle',
    popupProposalEncryptFirst:
        'You need to hit "{button}" before you can create proposals!',
    popupProposalVoteHash: 'Vote Hash:',
    popupProposalFinalisedNote:
        '<b>Congratulations on launching your proposal!</b><br>Masternode owners can use your Vote Hash to vote from wallets other than MSW, so make sure to add this to your forum post, if applicable!',
    popupProposalFinalisedSignoff:
        'Good luck on your journey through the DAO!',
    popupHardwareAddrCheck:
        'Please confirm this is the address you see on your',
    proposalFinalisationConfirming: 'Confirming...',
    proposalFinalisationRemaining: 'remaining',
    proposalFinalisationExpired: 'Proposal Expired',
    proposalFinalisationReady: 'Ready to submit',
    proposalPassing: 'PASSING',
    proposalFailing: 'FAILING',
    proposalTooYoung: 'TOO YOUNG',
    proposalFunded: 'FUNDED',
    proposalNotFunded: 'NOT FUNDED',
    proposalPaymentsRemaining: 'installment(s) remaining<br>of',
    proposalPaymentTotal: 'total',
    proposalNetYes: 'Net Yes',
    popupConfirm: 'Confirm',
    popupClose: 'Close',
    popupCancel: 'Cancel',
    chartPublicAvailable: 'Public Available',
    timeDays: 'Days',
    timeHours: 'Hours',
    timeMinutes: 'Minutes',
    timeSeconds: 'Seconds',
    unhandledException: 'Unhandled exception.',

    // Alerts
    ALERTS: '<-- DO NOT EDIT THIS LINE! All below entries are for Alert Popups',

    INTERNAL_ERROR: 'Internal error, please try again later',
    FAILED_TO_IMPORT: '<b>Failed to import!</b> Invalid password',
    FAILED_TO_IMPORT_HARDWARE: '<b> Failed to import Hardware Wallet</b>.',
    TESTNET_ENCRYPTION_DISABLED:
        '<b>Testnet Mode is ON!</b><br>Wallet encryption disabled',
    PASSWORD_TOO_SMALL:
        'That password is a little short!<br>Use at least <b>{MIN_PASS_LENGTH} characters.</b>',
    PASSWORD_DOESNT_MATCH: "Your passwords don't match!",
    NEW_PASSWORD_SUCCESS:
        "<b>You're Secured! 🔐</b><br>Nice stuff!",
    INCORRECT_PASSWORD: 'Incorrect password!',
    INVALID_AMOUNT: '<b>Invalid amount!</b><br>',
    TX_SENT: 'Transaction sent!',
    TX_FAILED: 'Transaction Failed!',
    QR_SCANNER_BAD_RECEIVER: 'is not a valid payment receiver',
    UNSUPPORTED_CHARACTER:
        "The character '{char}' is unsupported in addresses! (Not Base58 compatible)",
    UNSUPPORTED_WEBWORKERS:
        "This browser doesn't support Web Workers (multi-threaded JS), unfortunately you cannot generate Vanity wallets!",
    INVALID_ADDRESS: '<b>Invalid Seed2Need address!</b><br> {address}',
    VALIDATE_AMOUNT_LOW: '<br>Minimum amount is {minimumAmount} {coinTicker}!',
    VALIDATE_AMOUNT_DECIMAL: '{coinDecimal} decimal limit exceeded',
    SUCCESS_STAKING_ADDR:
        '<b>Staking Address set!</b><br>Now go ahead and unstake!',
    CONFIRM_UNSTAKE_H_WALLET:
        '<b>Confirm your Unstake</b><br>Confirm the TX on your {strHardwareName}',
    CONFIRM_TRANSACTION_H_WALLET:
        '<b>Confirm your transaction</b><br>Confirm the TX on your {strHardwareName}',
    SUCCESS_STAKING_ADDR_SET:
        '<b>Staking Address set!</b><br>Now go ahead and stake!',
    STAKE_ADDR_SET:
        '<b>Cold Address set!</b><br>Future stakes will use this address.',
    STAKE_ADDR_BAD: 'Invalid Cold Staking address!',
    STAKE_NOT_SEND: 'Here, use the <b>Stake</b> screen, not the Send screen!',
    BAD_ADDR_LENGTH:
        '<b>Invalid Seed2Need address!<b><br>Bad length ({addressLength})',
    BAD_ADDR_PREFIX:
        '<b>Invalid Seed2Need address!<b><br>Bad prefix {address} (Should start with {addressPrefix})',
    SENT_NOTHING: "You can't send 'nothing'!",
    MORE_THEN_8_DECIMALS: '8 decimal limit exceeded',
    SAVE_WALLET_PLEASE:
        '<b>Save your wallet!</b><br>Dashboard ➜ Secure your wallet',
    BACKUP_OR_ENCRYPT_WALLET:
        'Please ENCRYPT and/or BACKUP your keys before leaving, or you may lose them!',
    NO_CAMERAS: 'This device has no camera!',
    STAKING_LEDGER_NO_SUPPORT: 'Ledger is not supported for Cold Staking',
    CONNECTION_FAILED:
        '<b>Failed to synchronize!</b> Please try again later.<br>You can attempt re-connect via the Settings.',
    MN_NOT_ENABLED: 'Your masternode is not enabled yet!',
    VOTE_SUBMITTED: 'Vote submitted!',
    VOTED_ALREADY: 'You already voted for this proposal! Please wait 1 hour',
    VOTE_SIG_BAD:
        "Failed to verify signature, please check your masternode's private key",
    MN_CREATED_WAIT_CONFS:
        '<b>Masternode Created!<b><br>Wait 15 confirmations to proceed further',
    MN_ACCESS_BEFORE_VOTE: 'Access a masternode before voting!',
    MN_OFFLINE_STARTING: 'Your masternode is offline, we will try to start it',
    MN_STARTED: '<b>Masternode started!</b>',
    MN_RESTARTED: '<b>Masternode restarted!</b>',
    MN_STARTED_ONLINE_SOON:
        "<b>Masternode started!</b><br>It'll be online soon",
    MN_START_FAILED: '<b>Masternode started!</b>',
    MN_RESTART_FAILED: '<b>Masternode restarted!</b>',
    MN_DESTROYED:
        '<b>Masternode destroyed!</b><br>Your coins are now spendable.',
    MN_STATUS_IS: 'Your masternode status is',
    MN_STATE: 'Your masternode is in <b>{state}</b> state',
    MN_BAD_IP: 'The IP address is invalid!',
    MN_BAD_PRIVKEY: 'The private key is invalid',
    MN_NOT_ENOUGH_COLLAT:
        'You need <b>{amount} more {ticker}</b> to create a Masternode!',
    MN_ENOUGH_BUT_NO_COLLAT:
        'You have enough balance for a Masternode, but no valid collateral UTXO of {amount} {ticker}',
    MN_COLLAT_NOT_SUITABLE: 'This is not a suitable UTXO for a Masternode',
    MN_CANT_CONNECT: 'Unable to connect to RPC node!',

    /* Contacts System Alerts */
    CONTACTS_ENCRYPT_FIRST:
        'You need to hit "{button}" before you can use Contacts!',
    CONTACTS_NAME_REQUIRED: 'A name is required!',
    CONTACTS_NAME_TOO_LONG: 'That name is too long!',
    CONTACTS_CANNOT_ADD_YOURSELF: 'You cannot add yourself as a Contact!',
    CONTACTS_ALREADY_EXISTS:
        '<b>Contact already exists!</b><br>You already saved this contact',
    CONTACTS_NAME_ALREADY_EXISTS:
        '<b>Contact name already exists!</b><br>This could potentially be a phishing attempt, beware!',
    CONTACTS_EDIT_NAME_ALREADY_EXISTS:
        '<b>Contact already exists!</b><br>A contact is already called "{strNewName}"!',
    CONTACTS_KEY_ALREADY_EXISTS:
        '<b>Contact already exists, but under a different name!</b><br>You have {newName} saved as <b>{oldName}</b> in your contacts',
    CONTACTS_NOT_A_CONTACT_QR: "This isn't a Contact QR!",
    CONTACTS_ADDED:
        '<b>New Contact added!</b><br>{strName} has been added, hurray!',
    CONTACTS_YOU_HAVE_NONE: 'You have no contacts!',

    PROPOSAL_FINALISED: 'Proposal Launched!',
    PROPOSAL_UNCONFIRMED: "The proposal hasn't confirmed yet",
    PROPOSAL_EXPIRED: 'The proposal has expired. Create a new one.',
    PROPOSAL_FINALISE_FAIL: 'Failed to finalize proposal.',
    PROPOSAL_IMPORT_FIRST: 'Create or import your wallet to continue',
    PROPOSAL_NOT_ENOUGH_FUNDS: 'Not enough funds to create a proposal.',
    PROPOSAL_INVALID_ERROR: 'Proposal is invalid. Error:',
    PROPOSAL_CREATED:
        '<b>Proposal Created!</b><br>Wait for confirmations, then finalise your proposal!',

    PROMO_MIN: 'Minimum amount is {min} {ticker}!',
    PROMO_MAX_QUANTITY:
        'Your device can only create {quantity} codes at a time!',
    PROMO_NOT_ENOUGH: "You don't have enough {ticker} to create that code!",
    PROMO_ALREADY_CREATED: "You've already created that code!",

    SWITCHED_EXPLORERS: '<b>Switched explorer!</b><br>Now using {explorerName}',
    SWITCHED_NODE: '<b>Switched node!</b><br>Now using {node}',
    SWITCHED_ANALYTICS: '<b>Switched analytics level!</b><br>Now {level}',
    SWITCHED_SYNC: '<b>Switched sync mode!</b><br>Now using {sync} sync',
    UNABLE_SWITCH_TESTNET:
        '<b>Unable to switch Testnet Mode!</b><br>A wallet is already loaded',

    WALLET_OFFLINE_AUTOMATIC:
        '<b>Offline Mode is active!</b><br>Please disable Offline Mode for automatic transactions',
    WALLET_UNLOCK_IMPORT:
        'Please {unlock} your wallet before sending transactions!',
    WALLET_FIREFOX_UNSUPPORTED:
        "<b>Firefox doesn't support this!</b><br>Unfortunately, Firefox does not support hardware wallets",
    WALLET_HARDWARE_WALLET:
        '<b>Hardware wallet ready!</b><br>Please keep your {hardwareWallet} plugged in, unlocked, and in the Seed2Need app',
    WALLET_CONFIRM_L: 'Confirm the import on your Ledger',
    WALLET_NO_HARDWARE:
        "<b>No device available</b><br>Couldn't find a hardware wallet; please plug it in and unlock!",
    WALLET_HARDWARE_UDEV:
        '<b>The OS denied access</b> Did you add the udev rules?',
    WALLET_HARDWARE_NO_ACCESS:
        '<b>The OS denied access</b> Please check your Operating System settings.',
    WALLET_HARDWARE_CONNECTION_LOST:
        '<b>Lost connection to {hardwareWallet} </b><br>It seems the {hardwareWallet} was unplugged mid-operation, oops!',
    WALLET_HARDWARE_BUSY:
        "<b>{hardwareWallet} is waiting</b><br>Please unlock your {hardwareWallet} or finish it's current prompt",
    WALLET_HARDWARE_ERROR: '<b> {hardwareWallet} </b><br> {error}',

    CONFIRM_POPUP_VOTE: 'Confirm Vote',
    CONFIRM_POPUP_VOTE_HTML: 'Are you sure? It takes 60 minutes to change vote',
    CONFIRM_POPUP_TRANSACTION: 'Confirm your transaction',
    CONFIRM_POPUP_MN_P_KEY: 'Your Masternode Private Key',
    CONFIRM_POPUP_MN_P_KEY_HTML:
        '<br> Save this private key and copy it to your VPS config <br>',
    CONFIRM_POPUP_VERIFY_ADDR: 'Verify your address',

    MIGRATION_MASTERNODE_FAILURE:
        'Failed to recover your masternode. Please reimport it.',
    MIGRATION_ACCOUNT_FAILURE:
        'Failed to recover your account. Please reimport it.',
    APP_INSTALLED: 'App Installed!',
};
