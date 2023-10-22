export default {
    // This document is to be used as a template as all the base code is in English
    // Basic HTML tags are allowed such as <b><i> etc. All data is sanitized https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

    // NOTE: If a section does NOT need translating, leave it empty.
    // NOTE: Variables that MSW insert are denoted by brackets {}, for example, {button}, do NOT translate variables, but place them where it makes the most sense.

    // General words
    amount: 'Halaga', //Amount
    staking: 'Staking', //Staking
    wallet: 'Wallet', //Wallet
    display: 'Display', //Display
    activity: 'Aktibidad', //Activity
    yes: 'Oo', //Yes
    no: 'Hindi', //No

    // Nav Bar
    navDashboard: 'Dashboard', //Dashboard
    navStake: 'Stake', //Stake
    navMasternode: 'Masternode', //Masternode
    navGovernance: 'Pamamahala', //Governance
    navSettings: 'Settings', //Settings

    // Footer
    footerBuiltWithPivxLabs: 'Binuo nang may 💜 ng Seed2Need 🇵🇭', //Built with 💜 by Seed2Need

    // Intro
    loading: 'Loading', //Loading
    loadingTitle: 'My Seed2Need wallet ay', //My Seed2Need Wallet is

    // Onboarding Dashboard
    dashboardTitle: 'Dashboard', //Dashboard
    dCardOneTitle: 'Gumawa ng', //Create a
    dCardOneSubTitle: 'Bagong wallet', //New Wallet
    dCardOneDesc:
        "Gumawa ng bagong Seed2Need wallet, ito'y nag aalok ng pinaka-ligtas na backup at mga paraang pang seguridad", //Create a new Seed2Need wallet, offering the most secure backup & security methods.
    dCardOneButton: 'Gumawa ng Bagong Wallet', //Create A New Wallet

    dCardTwoTitle: 'Gumawa ng bagong', //Create a new
    dCardTwoSubTitle: 'Vanity Wallet', //Vanity Wallet
    dCardTwoDesc:
        'Gumawa ng wallet na may custom prefix, ito ay maaaring tumagal ng mga ilang oras!', //Create a wallet with a custom prefix, this can take a long time!
    dCardTwoButton: 'Gumawa ng Vanity Wallet', //Create A Vanity Wallet

    dCardThreeTitle: 'I-access ang iyong', //Access your
    dCardThreeSubTitle: 'Hardware Wallet', //Hardware Wallet
    dCardThreeDesc:
        'Gamitin ang iyong Ledger Hardware Wallet na pamilyar sa interface ng MSW', //Use your Ledger Hardware wallet with MSW's familiar interface.
    dCardThreeButton: 'I-access ang aking Ledger', //Access my Ledger

    dCardFourTitle: 'Pumunta sa', //Go to
    dCardFourSubTitle: 'Aking Wallet', //My Wallet
    dCardFourDesc:
        'I-import ang iyong Seed2Need wallet gamit ang Private Key, xpriv, o Seed Phrase', //Import a Seed2Need wallet using a Private Key, xpriv, or Seed Phrase.
    dCardFourButtonI: 'I-import ang Wallet', //Import Wallet
    dCardFourButtonA: 'I-access ang aking Wallet', //Access My Wallet

    // Vanity Creation
    vanityPrefixNote: 'Tandaan: Ang mga address ay laging naguumpisa sa:', //Note: addresses will always start with:
    vanityPrefixInput: 'Prefix ng Address', //Address Prefix

    // Seed Phrase Creation
    thisIsYourSeed: 'Ito ang iyong seed phrase:', //This is your seed phrase:
    writeDownSeed:
        'Isulat ito kahit saan. Makikita mo lang ito <b>ng isang beses!</b>', //Write it down somewhere. You'll only see this <b>once!</b>
    doNotShareWarning:
        'Sino man ang may kopya nito ay pwedeng i-access <b>lahat</b> ng iyong mga pondo', //Anyone with a copy of it can access <b>all</b> of your funds.
    doNotShare: 'WAG mo itong ibibigay kahit kanino', //Do NOT share it with anybody.
    digitalStoreNotAdvised:
        'Ito ay <b>HINDI</b> payo upang itago ito digitally', //It is <b>NOT</b> advised to store this digitally.
    optionalPassphrase: 'Optional Passphrase (BIP39)', //Optional Passphrase
    writtenDown: 'Isinulat ko na ang aking seed phrase', //I have written down my seed phrase

    // Seed Phrase Import
    importSeedValid: 'Ang Seed Phrase ay wasto!', //Seed Phrase is valid!
    importSeedError: 'Ang Seed Phrase ay hindi wasto!', //Seed Phrase is invalid!
    importSeedErrorSize:
        'Ang Seed Phrase dapat ay 12 o 24 na mga salita ang haba!', //A Seed Phrase should be 12 or 24 words long!
    importSeedErrorTypo:
        'Ang Seed Phrase ay naglalaman ng mga error sa pag-type! Suriin itong mabuti sa iyong input', //Seed Phrase contains typing errors! Check your input carefully
    importSeedErrorSkip:
        'Ang Seed Phrase ay lumalabas na hindi wasto, ngunit ang babala ay nilaktawan ng user', //Seed Phrase appears invalid, but the warning was skipped by the user

    // Wallet Dashboard
    gettingStarted: 'Magsimula', //Getting Started
    secureYourWallet: 'I-secure ang iyong wallet', //Secure your wallet
    unlockWallet: 'Buksan ang Wallet', //Unlock wallet
    lockWallet: 'Isara ang wallet', //Lock wallet

    // Encrypt wallet
    encryptWallet: 'Encrypt wallet', //Encrypt wallet
    encryptPasswordCurrent: 'Kasalukuyang Password', //Current Password
    encryptPasswordFirst: 'Ilagay ang Password', //Enter Password
    encryptPasswordSecond: 'Ilagay ulit ang Password', //Re-enter Password
    encrypt: 'Encrypt', //Encrypt
    changePassword: 'Mag palit ng Password', //Change Password

    // Wallet Dashboard Sub-menu
    balanceBreakdown: 'Kabuoang Balanse', //Balance Breakdown
    viewOnExplorer: 'Tignan sa Explorer', //View on Explorer
    export: 'Export', //Export
    refreshAddress: 'Refresh address', //Refresh address
    redeemOrCreateCode: 'I-redeem o Gumawa ng Code', //Redeem or Create Code

    // Send
    address: 'Address', //Address
    receivingAddress: 'Address ng tatangap', //Receiving address
    sendAmountCoinsMax: 'MAX', //MAX
    paymentRequestMessage: 'Description (galing sa merchant)', //Description (from the merchant)
    send: 'Ipadala', //Send

    // Contacts System
    receive: 'Tumanggap', //Receive
    contacts: 'Mga Contact', //Contacts
    name: 'Pangalan', //Name
    username: 'Username', //Username
    addressOrXPub: 'Address o XPub', //Address or XPub
    back: 'Bumalik', //Back
    chooseAContact: 'Pumili ng Contact', //Choose a Contact
    createContact: 'Lumikha ng Contact', //Create Contact
    encryptFirstForContacts:
        'Sa sandaling mapindot mo ang "{button}" sa Dashboard, maaari kang lumikha ng Contact upang gawing mas madali ang pagtanggap ng SILO!', //Once you hit "{button}" in the Dashboard, you can create a Contact to make receiving SILO easier!
    shareContactURL: 'Magbahagi ng Contact URL', //Share Contact URL
    setupYourContact: 'I-set up ang iyong Contact', //Setup your Contact
    receiveWithContact:
        'Tumanggap gamit ang simpleng Contact na nakabase sa username', //Receive using a simple username-based Contact
    onlyShareContactPrivately:
        '<b>Pinakamabuting</b> ibahagi ang iyong contact sa mga pinagkakatiwalaang tao (pamilya, kaibigan)', //<b>Only</b> share your Contact with trusted people (family, friends)

    /* Context: The "Change to" is used in-app with one of the Three options below it, i.e: "Change to Contact" */
    changeTo: 'Baguhin sa', //Change to
    contact: 'Contact', //Contact
    xpub: 'XPub', //XPub

    addContactTitle: 'Idagdag si {strName} sa mga Contact', //Add {strName} to Contacts
    addContactSubtext:
        'Kapag naidagdag na, maaari ka ng makapag padala ng transaksyon sa {strName} sa pamamagitan ng kanilang pangalan (kahit alin sa pagta-type o pag-click), wala nang mga address, maganda at madali. ', //Once added you\'ll be able to send transactions to {strName} by their name (either typing, or clicking), no more addresses, nice \'n easy.
    addContactWarning:
        'Siguraduhin na ito ay tunay na "{strName}", Wag tumanggap ng mga Contact request galing sa mga hindi kilalang pinagmulan! ', //Ensure that this is the real "{strName}", do not accept Contact requests from unknown sources!

    editContactTitle: 'Baguhin ang "{strName}" Contact', //Change "{strName}" Contact
    newName: 'Bagong Pangalan', //New Name

    removeContactTitle: 'Tanggalin si {strName}?', //Remove {strName}?
    removeContactSubtext:
        'Sigurado na ba ang hiling mo na tanggalin si {strName} sa iyong mga Contact?', //Are you sure you wish to remove {strName} from your Contacts?
    removeContactNote:
        'Maaari mong maidagdag ang mga ito kahit anong oras sa hinaharap', //You can add them again any time in the future.

    // Export
    privateKey: 'Private Key', //Private Key
    viewPrivateKey: 'Tignan ang Private Key?', //View Private Key?
    privateWarning1: 'Siguraduhing walang nakakakita ng iyong screen', //Make sure no one can see your screen.
    privateWarning2:
        'Sino man ang may hawak ng key na ito ay pwedeng nakawin ang ng iyong pondo', //Anyone with this key can steal your funds.
    viewKey: 'View key', //View key

    // Seed2Need Promos
    // NOTE: for this below line, continue the sentence "Seed2Need Promos [...]", since 'Seed2Need Promos' is a brand, it is not translated.
    pivxPromos:
        'ay isang desentralisadong sistema para sa gift code na nag kakahalaga ng SILO', // [...] is a decentralised system for gift codes worth SILO
    // NOTE: on this line, if possible, leave 'Seed2Need Promos' untranslated
    redeemInput: "Ipasok and iyong 'Seed2Need Promos'code", //Enter your \'Seed2Need Promos\' code
    createName: 'Promo Name', //Promo Name (Optional)
    createAmount: 'Halaga ng Promo', //Promo Amount

    // Stake
    stake: 'Stake', //Stake
    stakeUnstake: 'Unstake', //Unstake
    ownerAddress: '(Optional) May-ari ng Address', //(Optional) Owner Address
    rewardHistory: 'History ng iyong Reward', //Reward History
    loadMore: 'Load more', //Load more

    // Masternode
    mnControlYour: 'Kontrolin ang iyong', //Control your
    mnSubtext:
        'Ikaw ay makakagawa at makaka access ng isa o higit pang masternodes mula sa tab na ito ', //From this tab you can create and access one or more masternodes

    // Governance
    govSubtext:
        'Maaari mong makita ang mga proposals sa tab na ito at kung meron kang masternode,maaari kang maging parte ng <b>DAO</b> at bumoto!', //From this tab you can check the proposals and, if you have a masternode, be a part of the <b>DAO</b> and vote!
    govMonthlyBudget: 'Buwanang Budget', //Monthly Budget
    govAllocBudget: 'Nakalaang Budget', //Allocated Budget
    govNextPayout: 'Susunod na Treasury Payout', //Next Treasury Payout
    govTableStatus: 'Status', //STATUS
    govTableName: 'Pangalan', //NAME
    govTablePayment: 'Kabayaran', //PAYMENT
    govTableVotes: 'Mga Boto', //VOTES
    govTableVote: 'Boto', //VOTE
    contestedProposalsDesc:
        'Ito ang mga proposals na nakatanggap ng pinaka madaming downvote,na nagmumukang spam o isang highly contestable proposal.', //These are proposals that received an overwhelming amount of downvotes, making it likely spam or a highly contestable proposal.

    // Settings
    settingsCurrency: 'Pumili ng display currency:', //Choose a display currency:
    priceProvidedBy: 'Datos ng presyo na ibinigay ng', //Price data provided by
    settingsDecimals: 'Balance Decimals:', //Balance Decimals:
    settingsExplorer: 'Pumili ng explorer:', //Choose an explorer:
    settingsLanguage: 'Pumili ng Wika:', //Choose a Language:
    settingsPivxNode: 'Pumili ng Seed2Need node:', //Choose a Seed2Need node:
    settingsAutoSelectNet: 'Automatikong pagpili ng Explorers at Nodes', //Auto-select Explorers and Nodes
    settingsAnalytics: 'Pumili ng iyong analytics contribution level:', //Choose your analytics contribution level:
    settingsToggleDebug: 'Debug Mode', //Debug Mode
    settingsToggleTestnet: 'Testnet Mode', //Testnet Mode
    settingsToggleAdvancedMode: 'Advance Mode', //Advanced Mode
    settingsToggleAdvancedModeSubtext:
        'Ito ay nagbubukas ng mas malalim na functionality at pagpapasadya ngunit napapalaki at maaaring mapanganib sa mga user na wala pang karanasan!', //This unlocks deeper functionality and customisation, but may be overwhelming and potentially dangerous for unexperienced users!

    // Network switching (mainnet <---> testnet)
    netSwitchUnsavedWarningTitle: 'Ang iyong {network} wallet ay hind na-save!', //Your {network} wallet isn\'t saved!
    netSwitchUnsavedWarningSubtitle:
        'Ang iyong {network} account ay nanganganib!', //Your {network} account is at risk!
    netSwitchUnsavedWarningSubtext:
        'Kung ikaw ay mag papalit ng {network} bago mo ito i-save, mawawalan ka ng account!', //If you switch to {network} before saving it, you\'ll lose the account!
    netSwitchUnsavedWarningConfirmation: 'Sigurado ka na ba talaga dito?', //Are you really sure?

    // Transparency Report
    transparencyReport: 'Transparency Report', //Transparency Report
    hit: 'Ang ping na nagpapahiwatig ng pag load ng app, walang unique na data ang naipadala.', //A ping indicating an app load, no unique data is sent.
    time_to_sync:
        'Ang bawat segundo sa oras na tumatagal upang muling mag synchronize sa MSW.', //The time in seconds it took for MSW to last synchronise.
    transaction:
        'Ang ping na nag papahiwating ng isang TX, walang unique na data ang naipadala, pero maaari itong inferred mula sa oras ng on-chain.', //A ping indicating a Tx, no unique data is sent, but may be inferred from on-chain time.

    // Analytics Levels
    analyticDisabled: 'Disabled', //Disabled
    analyticMinimal: 'Minimal', //Minimal
    analyticBalanced: 'Balanced', //Balanced

    // Migration System
    MIGRATION_ACCOUNT_FAILURE_TITLE: 'Nabigong marecover ang account', //Failed to recover account
    MIGRATION_ACCOUNT_FAILURE_HTML:
        'May mali sa pag recover ng iyong account. Pakiusap i-reimport ang iyong wallet gamit ang mga sumusunod na key:', //There was an error recovering your account. <br> Please reimport your wallet using the following key:

    // Dynamic Elements (Rendered at runtime - TODO in future PR: sort in to above categories for consistency)
    ID: 'ID', //ID
    time: 'Oras', //Time
    description: 'Description', //Description
    activityBlockReward: 'Block Reward', //Block Reward
    activitySentTo: 'Naipadala sa {r}', //Sent to
    activitySelf: 'sarili', //Self
    activityShieldedAddress: 'Shielded address', //Shielded address
    activityReceivedFrom: 'Natanggap mula sa {s}', //Received from
    activityDelegatedTo: 'Delegated to {r}', //Delegated to
    activityUndelegated: 'Undeligated', //Undelegated
    activityUnknown: 'Unknown Tx', //Unknown Tx
    password: 'Password', //Password
    walletUnlock: 'Buksan ang iyong wallet', //Unlock your wallet
    walletPassword: 'Wallet password', //Wallet password
    walletUnlockCreateMN: 'Buksan upang makagawa ng iyong Masternode!', //Unlock to create your Masternode!
    walletUnlockMNStart: 'Buksan para maumpisahan ang iyong Masternode!', //Unlock to start your Masternode!
    walletUnlockProposal: 'Buksan para makagawa ng proposal!', //Unlock to create a proposal!
    walletUnlockPromo: 'Buksan para i-finalize ang iyong promo code!', //Unlock to finalise your Promo Code!
    walletUnlockTx: 'Buksan upang i-send ang iyong transaksyon!', //Unlock to send your transaction!
    walletUnlockStake: 'Buksan upang i-stake ang iyong', //Unlock to stake your
    walletUnlockUnstake: 'Buksan upang i-unstake ang iyong', //Unlock to unstake your
    changelogTitle: 'Anong bago sa', //What's New in
    popupSetColdAddr: 'I-set ang iyong Cold Staking Address', //Set your Cold Staking address
    popupCurrentAddress: 'Kasalukuyang Address:', //Current address:
    popupColdStakeNote:
        "Ang Cold Address stakes coins sa iyong ngalan, ay hindi makakagastos ng coins, kaya mas ligtas itong gumamit ng stranger's cold address!", //A Cold Address stakes coins on your behalf, it cannot spend coins, so it\'s even safe to use a stranger's Cold Address!
    popupExample: 'Halimbawa', //Example:
    popupWalletLock: 'Gusto mo bang i-lock ang iyong wallet?', //Do you want to lock your wallet?
    popupWalletWipe:
        'Gusto mo bang burahin lahat ng pribadong data sa iyong wallet?', //Do you want to wipe your wallet private data?
    popupWalletLockNote:
        'Kailangan mong i-enter ang iyong password upang ma access ang iyong pondo', //You will need to enter your password to access your funds
    popupWalletWipeNote:
        'Maaari mong hindi ma access ang iyong pondo kung hindi mo na back up ang iyong private key or seed phrase', //You will lose access to your funds if you haven't backed up your private key or seed phrase
    popupSeedPhraseBad: 'Unexpected Seed Phrase', //Unexpected Seed Phrase
    popupSeedPhraseBadNote:
        'Ang seed phrase na ito ay pwedeng hindi wasto o hindi ito generated ng MSW.<br>Gusto mo bang tumuloy?', //The seed phrase is either invalid or was not generated by MSW.<br>Do you still want to proceed?
    popupCreateProposal: 'Gumawa ng Proposal', //Create Proposal
    popupCreateProposalCost: 'Gastos', //Cost
    popupProposalTitle: 'Proposal Title', //Proposal Title
    popupProposalAddress: 'Address ng Proposal (Optional)', //Proposal Address (Optional)
    popupProposalDuration: 'Duration in cycles', //Duration in cycles
    popupProposalPerCycle: 'per cycles', //per cycle
    popupProposalEncryptFirst:
        'Kailangan mong pindutin ang "{button}" bago ka gumawa ng proposals!', //You need to hit "{button}" before you can create proposals!
    popupProposalVoteHash: 'Vote Hash:', //Vote Hash:
    popupProposalFinalisedNote:
        '<b>Binabati kita sa paglulunsad ng iyong proposal!</b><br>Ang mga may-ari ng Masternode ay pwedeng gumamit ng Vote Hash upang bumoto mula sa mga wallet maliban sa MSW, kaya siguraduhin idagdag ito sa iyong forum post, kung naaangkop!', //<b>Congratulations on launching your proposal!</b><br>Masternode owners can use your Vote Hash to vote from wallets other than MSW, so make sure to add this to your forum post, if applicable!
    popupProposalFinalisedSignoff:
        "Nawa'y ang mabuting kapalaran ay sumasaiyo sa iyong paglalakbay sa DAO!", //Good luck on your journey through the DAO!
    popupHardwareAddrCheck:
        'Pakiusap kumpirmahin na ito ang address na nakikita mo sa iyong', //Please confirm this is the address you see on your
    proposalFinalisationConfirming: 'Kinukumpirma...', //Confirming...
    proposalFinalisationRemaining: 'natitira', //remaining
    proposalFinalisationExpired: 'Proposal expired', //Proposal Expired
    proposalFinalisationReady: 'Handa ng ipasa', //Ready to submit
    proposalPassing: 'PASSING', //PASSING
    proposalFailing: 'FAILING', //FAILING
    proposalTooYoung: 'TOO YOUNG', //TOO YOUNG
    proposalFunded: 'FUNDED', //FUNDED
    proposalNotFunded: 'NOT FUNDED', //NOT FUNDED
    proposalPaymentsRemaining: 'installment(s) remaining<br>of', //installment(s) remaining<br>of
    proposalPaymentTotal: 'Total', //total
    proposalNetYes: 'Net Yes', //Net Yes
    popupConfirm: 'Kumpirmahin', //Confirm
    popupClose: 'Isara', //Close
    popupCancel: 'Kanselahin', //Cancel
    chartPublicAvailable: 'Public Available', //Public Available
    timeDays: 'Mga araw', //Days
    timeHours: 'Mga oras', //Hours
    timeMinutes: 'Mga minuto', //Minutes
    timeSeconds: 'Mga segundo', //Seconds
    unhandledException: 'Unhandled exception.', //Unhandled exception.

    // Alerts
    ALERTS: '<-- DO NOT EDIT THIS LINE! All below entries are for Alert Popups',

    INTERNAL_ERROR: 'Internal error, Pakiusap uliting muli', //Internal error, please try again later
    FAILED_TO_IMPORT:
        '<b>Nabigong mag import!</b> Ang password na ito ay hindi wasto', //<b>Failed to import!</b> Invalid password
    UNSUPPORTED_CHARACTER:
        'Ang karakter na ito ‘{char}’ay hindi supportado sa mga address! (Not Base58 compatible)', //The character '{char}' is unsupported in addresses! (Not Base58 compatible)
    UNSUPPORTED_WEBWORKERS:
        'Hindi supportado ng browser na ito ang Web Workers (multi-threaded JS)sa kasamaang palad ay hindi ka makakagawa ng Vanity wallets!', //This browser doesn\'t support Web Workers (multi-threaded JS), unfortunately you cannot generate Vanity wallets!
    INVALID_ADDRESS:
        '<b>Ang Seed2Need address na ito ay hindi wasto!</b><br> {address}', //<b>Invalid Seed2Need address!</b><br> {address}
    TESTNET_ENCRYPTION_DISABLED:
        'Ang Testnet Mode ay bukas na!</b><br>Wallet encryption disabled', //<b>Testnet Mode is ON!</b><br>Wallet encryption disabled
    PASSWORD_TOO_SMALL:
        'Ang password ay medyo maiksi!<br>Kahit papaano gumamit ng<b>{MIN_PASS_LENGHT} mga karakter.</b>', //That password is a little short!<br>Use at least <b>{MIN_PASS_LENGTH} characters.</b>
    PASSWORD_DOESNT_MATCH: 'Hindi tumugma ang iyong password!', //Your passwords don\'t match!
    NEW_PASSWORD_SUCCESS:
        '<b>Ikaw ay ligtas! 🔐</b><br>Magandang bagay!', //<b>You\'re Secured! 🔐</b><br>Nice stuff!
    INCORRECT_PASSWORD: 'Mali ang iyong password', //Incorrect password!
    INVALID_AMOUNT: '<b>Ang halaga ay hindi wasto!</b><br>', //<b>Invalid amount!</b><br>
    TX_SENT: 'Ang transaksyon ay naipadala!', //Transaction sent!
    TX_FAILED: 'Nabigo ang Transaksyon', //Transaction Failed!
    QR_SCANNER_BAD_RECEIVER: 'ay hindi wastong tanggapan ng bayad ', //is not a valid payment receiver
    VALIDATE_AMOUNT_LOW:
        '<br>Ang pinakamababang halaga ay {minimumAmount} {coinTicker}!', //<br>Minimum amount is {minimumAmount} {coinTicker}!
    VALIDATE_AMOUNT_DECIMAL:
        '{coinDecimal} Ang limitasyon sa decimal ay lumagpas', //{coinDecimal} decimal limit exceeded
    SUCCESS_STAKING_ADDR:
        'Nakatakda na ang Staking address!</b><br> Pumunta ka na ngayon at mag unstake', //<b>Staking Address set!</b><br>Now go ahead and unstake!
    STAKE_ADDR_SET:
        'Nakatakda na ang Cold Address!</b><br>Gagamitin ang address na to sa mga susunod na stakes', //<b>Cold Address set!</b><br>Future stakes will use this address.
    STAKE_ADDR_BAD: 'Ang Cold Staking address ay hindi wasto!', //Invalid Cold Staking address!
    CONFIRM_UNSTAKE_H_WALLET:
        '<b>Kumpirmahin ang iyong unstake</b><br>Kumpirmahin ang TX sa iyong {strHardwareName}', //<b>Confirm your Unstake</b><br>Confirm the TX on your {strHardwareName}
    CONFIRM_TRANSACTION_H_WALLET:
        'Kumpirmahin ang iyong transaksyon</b><br>Kumpirmahin ang TX sa iyong {strHardwareName}', //<b>Confirm your transaction</b><br>Confirm the TX on your {strHardwareName}
    SUCCESS_STAKING_ADDR_SET:
        '<b>Nakatakda na ang staking address!</b><br>Pumunta ka na ngayon at mag stake', //<b>Staking Address set!</b><br>Now go ahead and stake!
    STAKE_NOT_SEND:
        'Dito, gamitin mo ang<b>Stake</b> screen, hindi ang screen sa pagdala', //Here, use the <b>Stake</b> screen, not the Send screen!
    BAD_ADDR_LENGTH:
        '<b>Hindi wasto ang Seed2Need address!<b><br>Bad lenght({addressLength})', //<b>Invalid Seed2Need address!<b><br>Bad length ({addressLength})
    BAD_ADDR_PREFIX:
        '<b>Hindi wasto ang Seed2Need address!<b><br>Bad prefix{address} (Ito ay dapat nag sisimula sa{addressPrefix})', //<b>Invalid Seed2Need address!<b><br>Bad prefix {address} (Should start with {addressPrefix})
    SENT_NOTHING: "Hindi ka pwedeng magpadala ng 'wala'!", //You can\'t send \'nothing\'!
    MORE_THEN_8_DECIMALS: 'Lumagpas na sa 8 decimal ang limitasyon', //8 decimal limit exceeded
    SAVE_WALLET_PLEASE:
        '<b>I-save ang iyong wallet!</b><br>Dashboard ➜ I-secure ang iyong wallet', //<b>Save your wallet!</b><br>Dashboard ➜ Secure your wallet
    BACKUP_OR_ENCRYPT_WALLET:
        'Pakiusap i-ENCRYPT at/o i-BACKUP ang iyong keys bago umalis, o mawawala mo ang mga ito!', //Please ENCRYPT and/or BACKUP your keys before leaving, or you may lose them!
    NO_CAMERAS: 'Ang device na ito ay walang camera!', //This device has no camera!
    STAKING_LEDGER_NO_SUPPORT:
        'Ang ledger ay hindi suportado para sa Cold Staking', //Ledger is not supported for Cold Staking
    CONNECTION_FAILED:
        '<b>Nabigong i-synchronize! Pakiusap ulitin itong muli.<br> Maaari mo itong i-konektang muli via the Settings. ', //<b>Failed to synchronize!</b> Please try again later.<br>You can attempt re-connect via the Settings.
    MN_NOT_ENABLED: 'Ang iyong masternode ay hindi pa gumagana!', //Your masternode is not enabled yet!
    VOTE_SUBMITTED: 'Naipasa na ang iyong Boto!', //Vote submitted!
    VOTED_ALREADY:
        'Ikaw ay bumoto na sa proposal na ito! Pakiusap maghintay ng 1 oras', //You already voted for this proposal! Please wait 1 hour
    VOTE_SIG_BAD:
        "Ang signature ay nabigong i-verify, Pakiusap suriin mo ang private key ng iyong masternode's", //Failed to verify signature, please check your masternode\'s private key
    MN_CREATED_WAIT_CONFS:
        "<b>Nagawa na ang Masternode!<b><br>'Mag antay ng 15 na kumpirmasyon upang mag patuloy", //<b>Masternode Created!<b><br>Wait 15 confirmations to proceed further
    MN_ACCESS_BEFORE_VOTE: 'I-access ang iyong Masternode bago bumoto!', //Access a masternode before voting!
    MN_OFFLINE_STARTING:
        'Ang iyong Masternode ay offline, Ito ay susubukan naming simulan', //Your masternode is offline, we will try to start it
    MN_STARTED: '<b>Nagsimula na ang Masternode!</b>', //<b>Masternode started!</b>
    MN_RESTARTED: '<b>Na-restart na ang Masternode!</b>', //<b>Masternode restarted!</b>
    MN_STARTED_ONLINE_SOON:
        '<b>Nagsimula na ang Masternode!</b><br>Malapit itong mag online', //<b>Masternode started!</b><br>It\'ll be online soon
    MN_START_FAILED: '<b>Nagsimula na ang Masternode!</b>', //<b>Masternode started!</b>
    MN_RESTART_FAILED: '<b>Na-restart na ang Masternode!</b>', //<b>Masternode restarted!</b>
    MN_DESTROYED:
        '<b>Nasira ang Masternode!</b><br>Ang iyong coins ay pwede nang magastos.', //<b>Masternode destroyed!</b><br>Your coins are now spendable.
    MN_STATUS_IS: 'Ang kalagayan ng iyong Masternode ay', //Your masternode status is
    MN_STATE: 'Ang iyong masternode ay nasa <b>{state}</b> kalagayan', //Your masternode is in <b>{state}</b> state
    MN_BAD_IP: 'Ang IP address ay hindi wasto!', //The IP address is invalid!
    MN_BAD_PRIVKEY: '', //The private key is invalid
    MN_NOT_ENOUGH_COLLAT:
        'Kailangan mo ng <b>{amount} pang {ticker}</b> upang makagawa ng Masternode!', //You need <b>{amount} more {ticker}</b> to create a Masternode!
    MN_ENOUGH_BUT_NO_COLLAT:
        'Ikaw ay may sapat na balanse para sa iyong Masternode, subalit walang wastong collateral UTXO ng {amount} {ticker}', //You have enough balance for a Masternode, but no valid collateral UTXO of {amount} {ticker}
    MN_COLLAT_NOT_SUITABLE:
        'Ang UTXO na ito ay hindi angkop para sa Masternode', //This is not a suitable UTXO for a Masternode
    MN_CANT_CONNECT: 'Hindi maka-konekta sa RPC node!', //Unable to connect to RPC node!

    /* Contacts System Alerts */
    CONTACTS_ENCRYPT_FIRST:
        'Kailangan mong pindutin ang "{button}" bago mo magamit ang mga Contact', //You need to hit "{button}" before you can use Contacts!
    CONTACTS_NAME_REQUIRED: 'Kailangan ng pangalan!', //A name is required!
    CONTACTS_NAME_TOO_LONG: 'Ang pangalan na ito ay masyadong mahaba!', //That name is too long!
    CONTACTS_CANNOT_ADD_YOURSELF:
        'Hindi mo maaaring maidagdag ang iyong sarili bilang Contact!', //You cannot add yourself as a Contact!
    CONTACTS_ALREADY_EXISTS:
        '<b>Mayroon na ang Contact na ito!</b><br>Na i-save mo na ang contact na ito', //<b>Contact already exists!</b><br>You already saved this contact
    CONTACTS_NAME_ALREADY_EXISTS:
        '<b>Mayroon na ang Contact na ito!</b><br>Maaari itong isang phishing attempt, mag ingat!', //<b>Contact name already exists!</b><br>This could potentially be a phishing attempt, beware!
    CONTACTS_EDIT_NAME_ALREADY_EXISTS:
        '<b>Mayroon na ang Contact na ito!</b><br> Natawagan na ang Contact na ito "{strNewName}"!', //<b>Contact already exists!</b><br>A contact is already called "{strNewName}"!
    CONTACTS_KEY_ALREADY_EXISTS:
        '<b>Mayroon na ang Contact na ito, ngunit sa ibang pangalan!</b><br> Mayroon kang {newName} bilang <b>{oldName}</b> sa iyong mga contact', //<b>Contact already exists, but under a different name!</b><br>You have {newName} saved as <b>{oldName}</b> in your contacts
    CONTACTS_NOT_A_CONTACT_QR: 'Ito ay hindi isang Contact QR! ', //This isn\'t a Contact QR!
    CONTACTS_ADDED:
        '<b>Naidagdag na ang bagong Contact!</b><br>{strName} ay naidagdag na, mabuhay!', //<b>New Contact added!</b><br>{strName} has been added, hurray!
    CONTACTS_YOU_HAVE_NONE: 'Ikaw ay walang mga contact', //You have no contacts!

    SWITCHED_EXPLORERS:
        '<b>Nagpalit ng explorer!<b></b>Ang gamit ngayon ay {explorerName}', //<b>Switched explorer!</b><br>Now using {explorerName}
    SWITCHED_NODE: '<b>Nagpalit ng node!<b></b>Ang gamit ngayon ay {node}', //<b>Switched node!</b><br>Now using {node}
    SWITCHED_ANALYTICS: '<b>Nagpalit ng analytics level!</b><br>Ngayon {level}', //<b>Switched analytics level!</b><br>Now {level}
    SWITCHED_SYNC:
        '<b>Nagpalit ng sync mode!</b><br>Ang gamit ngayon ay {sync} sync', //<b>Switched sync mode!</b><br>Now using {sync} sync
    UNABLE_SWITCH_TESTNET:
        'Hindi makapag palit sa Testnet Mode!</b><br> Nakapag load na ang wallet', //<b>Unable to switch Testnet Mode!</b><br>A wallet is already loaded

    WALLET_OFFLINE_AUTOMATIC:
        '<b>Aktibo ang Offline Mode!</b><br>Pakiusap wag paganahin ang Offline Mode para sa automatikong transaksyon', //<b>Offline Mode is active!</b><br>Please disable Offline Mode for automatic transactions
    WALLET_UNLOCK_IMPORT:
        'Pakiusap {unlock} ang iyong wallet bago magpadala ng transaksyon!', //Please {unlock} your wallet before sending transactions!
    WALLET_FIREFOX_UNSUPPORTED:
        '<b> Hindi ito supportado ng Firefox!</b><br>Sa kasamaang palad, hindi supportado ng Firefox ang mga hardware wallet', //<b>Firefox doesn't support this!</b><br>Unfortunately, Firefox does not support hardware wallets
    WALLET_HARDWARE_WALLET:
        '<b>Handa na ang Hardware wallet!</b><br>Pakiusap panatilihin mo na ang {hardwareWallet} ay naka plugged in, naka bukas, at nasa Seed2Need app ', //<b>Hardware wallet ready!</b><br>Please keep your {hardwareWallet} plugged in, unlocked, and in the Seed2Need app
    WALLET_CONFIRM_L: 'Kumpirmahin ang import sa iyong Ledger', //Confirm the import on your Ledger
    WALLET_NO_HARDWARE:
        '<b>Walang pwedeng magamit na device</b><br>Hindi makahanap ng hardware wallet; pakiusap i-plug in ito at buksan!', //<b>No device available</b><br>Couldn't find a hardware wallet; please plug it in and unlock!
    WALLET_HARDWARE_UDEV:
        '<b>Tinanggihan ng OS ang pag-access</b> Dinagdag mo ba ang mga panuntunan sa udev?', // <b>The OS denied access</b> Did you add the udev rules?
    WALLET_HARDWARE_NO_ACCESS:
        '<b>Tinanggihan ng OS ang pag-access</b> Pakiusap tignan ang settings ng iyong Operating System.', // <b>The OS denied access</b> Please check your Operating System settings.
    WALLET_HARDWARE_CONNECTION_LOST:
        '<b>Nawala ang koneksyon sa {hardwareWallet} </b><br>Parang ang {hardwareWalletProductionName} ay na-unplug sa kalagitnaan ng operasyon, oops!', //<b>Lost connection to {hardwareWallet} </b><br>It seems the {hardwareWalletProductionName} was unplugged mid-operation, oops!
    WALLET_HARDWARE_BUSY:
        '<b>{hardwareWallet} ay naghihintay</b><br>Pakiusap buksan ang iyong {hardwareWalletProductionName} o tapusin ang kasalukuyang prompt', //<b>{hardwareWallet} is waiting</b><br>Please unlock your {hardwareWalletProductionName} or finish it's current prompt
    WALLET_HARDWARE_ERROR: '<b>{hardwareWallet} </b><br> {error}', //<b> {hardwareWallet} </b><br> {error}

    CONFIRM_POPUP_VOTE: 'Kumpirmahin ang boto', //Confirm Vote
    CONFIRM_POPUP_VOTE_HTML:
        'Ikaw ba ay sigurado? Ito ay tatagal n 60 minuto upang mapalitan ang iyong boto', //Are you sure? It takes 60 minutes to change vote
    CONFIRM_POPUP_TRANSACTION: 'Kumpirmahin ang iyong transakyon', //Confirm your transaction
    CONFIRM_POPUP_MN_P_KEY: 'Ang iyong Masternode Private Key', //Your Masternode Private Key
    CONFIRM_POPUP_MN_P_KEY_HTML:
        '<br> Itago ang private key at kopyahin at kopyahin ito sa iyong VPS config <br>', // <br> Save this private key and copy it to your VPS config <br>
    CONFIRM_POPUP_VERIFY_ADDR: 'I-verify ang iyong address', //Verify your address

    MIGRATION_MASTERNODE_FAILURE:
        'Nabigong marecover ang iyong masternode. Pakiusap i-reimport ito.', //Failed to recover your masternode. Please reimport it.
    MIGRATION_ACCOUNT_FAILURE:
        'Nabigong marecover ang iyong account. Pakiusap i-reimport ito.', //Failed to recover your account. Please reimport it.
    APP_INSTALLED: 'App Installed!', //App Installed!
};
