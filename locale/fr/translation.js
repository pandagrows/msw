export default {
    // Les balises HTML de base sont autorisées, comme <b><i>, etc. Toutes les données sont nettoyées https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML

    // NOTA: Si une section n'a PAS besoin d'être traduite, laissez-la vide..
    // NOTE : Les variables que MSW insère sont indiquées par des accolades {}, par exemple, {button}, NE traduisez PAS les variables, mais placez-les là où cela a le plus de sens.

    // General words
    amount: 'Montant', //Amount
    staking: 'Staking', //Staking
    wallet: 'Portefeuille', //Wallet
    display: 'Afficher', //Display
    activity: 'Activité', //Activity
    yes: 'Oui', //Yes
    no: 'Non', //No

    // Nav Bar
    navDashboard: 'Tableau de Bord', //Dashboard
    navStake: 'Stake', //Stake
    navMasternode: 'Masternode', //Masternode
    navGovernance: 'Gouvernance', //Governance
    navSettings: 'Paramètres', //Settings

    // Footer
    footerBuiltWithPivxLabs: 'Construit avec 💜 par Seed2need FR 🇫🇷', //Built with 💜 by Seed2need

    // Intro
    loading: 'Chargement', //Loading
    loadingTitle: 'Mon portefeuille Seed2Need', //My Seed2Need Wallet is

    // Onboarding Dashboard
    dashboardTitle: 'Tableau de bord', //Dashboard
    dCardOneTitle: 'Créer le', //Create a
    dCardOneSubTitle: 'Nouveau portefeuille', //New Wallet
    dCardOneDesc:
        'Créer un nouveau portefeuille Seed2Need, qui offre les méthodes de sauvegarde et de sécurité les plus sûres.', //Create a new Seed2Need wallet, offering the most secure backup & security methods.
    dCardOneButton: 'Créer un nouveau portefeuille', //Create A New Wallet

    dCardTwoTitle: 'Créer un nouveau', //Create a new
    dCardTwoSubTitle: 'Portefeuille Vanité', //Vanity Wallet
    dCardTwoDesc:
        'Créer un portefeuille avec un préfixe personnalisé, cela peut prendre beaucoup de temps !', //Create a wallet with a custom prefix, this can take a long time!
    dCardTwoButton: 'Créer un portefeuille Vanity', //Create A Vanity Wallet

    dCardThreeTitle: 'Accédez à votre', //Access your
    dCardThreeSubTitle: 'Portefeuille de hardware', //Hardware Wallet
    dCardThreeDesc:
        "Utilisez votre portefeuille Ledger Hardware avec l'interface familière de l'application MSW.", //Use your Ledger Hardware wallet with MSW's familiar interface.
    dCardThreeButton: 'Accéder à mon Ledger', //Access my Ledger

    dCardFourTitle: 'Aller à', //Go to
    dCardFourSubTitle: 'Mon portefeuille', //My Wallet
    dCardFourDesc:
        "Importer un portefeuille Seed2Need à l'aide d'une clé privée, d'un xpriv ou d'une phrase de démarrage.", //Import a Seed2Need wallet using a Private Key, xpriv, or Seed Phrase.
    dCardFourButtonI: 'Importer le portefeuille', //Import Wallet
    dCardFourButtonA: 'Accéder à mon portefeuille', //Access My Wallet

    // Vanity Creation
    vanityPrefixNote: 'Remarque : les adresses commencent toujours par :', //Note: addresses will always start with:
    vanityPrefixInput: 'Adresse Préfixe', //Address Prefix

    // Seed Phrase Creation
    thisIsYourSeed: "Voici votre phrase d'introduction:", //This is your seed phrase:
    writeDownSeed:
        'Notez-le à un seul endroit. Vous ne verrez que cela <b>une fois!</b>', //Write it down somewhere. You'll only see this <b>once!</b>
    doNotShareWarning:
        "Toute personne disposant d'une copie peut accéder à <b> à tous</b>votre fonds", //Anyone with a copy of it can access <b>all</b> of your funds.
    doNotShare: 'Ne le partagez avec personne.', //Do NOT share it with anybody.
    digitalStoreNotAdvised:
        '<b>NON</b> il est conseillé de les stocker sous forme numérique.', //It is <b>NOT</b> advised to store this digitally.
    optionalPassphrase: 'Phrase mot de passe Facultatif (BIP39)', //Optional Passphrase
    writtenDown: "J'ai écrit ma phrase d'introduction", //I have written down my seed phrase

    // Seed Phrase Import
    importSeedValid: 'La phrase source est valide !', //Seed Phrase is valid!
    importSeedError: "La phrase source n'est pas valide !", //Seed Phrase is invalid!
    importSeedErrorSize: 'Une phrase clé doit comporter entre 12 et 24 mots !', //A Seed Phrase should be 12 or 24 words long!
    importSeedErrorTypo:
        'Seed Phrase contient des fautes de frappe ! Vérifiez soigneusement votre saisie', //Seed Phrase contains typing errors! Check your input carefully
    importSeedErrorSkip:
        "La phrase de semence semble invalide, mais l'utilisateur n'a pas tenu compte de l'avertissement.", //Seed Phrase appears invalid, but the warning was skipped by the user

    // Wallet Dashboard
    gettingStarted: 'Démarrer', //Getting Started
    secureYourWallet: 'Protégez votre portefeuille', //Secure your wallet
    unlockWallet: 'Déverrouiller le portefeuille', //Unlock wallet
    lockWallet: 'Fermeture du portefeuille', //Lock wallet

    // Encrypt wallet
    encryptWallet: 'Cryptage du portefeuille', //Encrypt wallet
    encryptPasswordCurrent: 'Mot de passe actuel', //Current Password
    encryptPasswordFirst: 'Entrer le mot de passe', //Enter Password
    encryptPasswordSecond: 'Réintroduire le mot de passe', //Re-enter Password
    encrypt: 'Crypter', //Encrypt
    changePassword: 'Changer le mot de passe', //Change Password

    // Wallet Dashboard Sub-menu
    balanceBreakdown: 'Composition de la balance', //Balance Breakdown
    viewOnExplorer: "Voir dans l'explorateur", //View on Explorer
    export: 'Exporter', //Export
    refreshAddress: "Mise à jour de l'Adresse", //Refresh address
    redeemOrCreateCode: 'Ouvrir ou Créer un Code', //Redeem or Create Code

    // Send
    address: 'Adresse', //Address
    receivingAddress: 'Adresse de réception', //Receiving address
    sendAmountCoinsMax: 'Max', //MAX
    paymentRequestMessage: "Description (de l'opérateur)", //Description (from the merchant)
    send: 'Envoyer', //Send

    // Contacts System
    receive: 'Recevoir', //Receive
    contacts: 'Contacts', //Contacts
    name: 'Nom', //Name
    username: "Nom d'utilisateur", //Username
    addressOrXPub: 'Adresse ou XPub', //Address or XPub
    back: 'Retour', //Back
    chooseAContact: 'Sélectionner un contact', //Choose a Contact
    createContact: "Création d'un contact", //Create Contact
    encryptFirstForContacts:
        'Une fois que vous avez touché "{button}" dans le tableau de bord, vous pouvez créer un contact pour faciliter la réception des SILO !', //Once you hit "{button}" in the Dashboard, you can create a Contact to make receiving SILO easier!
    shareContactURL: "Partager l'URL du contact", //Share Contact URL
    setupYourContact: 'Configurez votre contact', //Setup your Contact
    receiveWithContact:
        "Recevoir par un simple contact basé sur le nom d'utilisateur", //Receive using a simple username-based Contact
    onlyShareContactPrivately:
        '<b>Seul</b> partager votre contact avec des personnes de confiance (famille, amis)', //<b>Only</b> share your Contact with trusted people (family, friends)

    /* Context: The "Change to" is used in-app with one of the Three options below it, i.e: "Change to Contact" */
    changeTo: 'Modifier pour', //Change to
    contact: 'Contact', //Contact
    xpub: 'XPub', //XPub

    addContactTitle: 'Ajouter {strName} aux contacts', //Add {strName} to Contacts
    addContactSubtext:
        "Une fois ajouté, vous pourrez envoyer des transactions à {strName} par leur nom (en tapant ou en cliquant), plus d'adresses, c'est facile.", //Once added you\'ll be able to send transactions to {strName} by their name (either typing, or clicking), no more addresses, nice \'n easy.
    addContactWarning:
        "S'assurer qu'il s'agit bien d'un produit authentique \"{strName}\", n'acceptez pas de demandes de contact provenant de sources inconnues ! ", //Ensure that this is the real "{strName}", do not accept Contact requests from unknown sources!

    editContactTitle: 'Changer "{strName}" Contact', //Change "{strName}" Contact
    newName: 'Nouvelle dénomination', //New Name

    removeContactTitle: 'Supprimer {strName}?', //Remove {strName}?
    removeContactSubtext:
        'Êtes-vous sûr de vouloir supprimer {strName}  de vos contacts ?', //Are you sure you wish to remove {strName} from your Contacts?
    removeContactNote: "Vous pouvez les ajouter à tout moment à l'avenir.", //You can add them again any time in the future.

    // Export
    privateKey: 'Clé privée', //Private Key
    viewPrivateKey: 'Montrer la clé privée ?', //View Private Key?
    privateWarning1: 'Assurez-vous que personne ne regarde votre écran.', //Make sure no one can see your screen.
    privateWarning2: 'Toute personne possédant cette clé peut voler vos fonds', //Anyone with this key can steal your funds.
    viewKey: 'Voir la clé', //View key

    // Seed2Need Promos
    // NOTE: for this below line, continue the sentence "Seed2Need Promos [...]", since 'Seed2Need Promos' is a brand, it is not translated.
    pivxPromos:
        "est un système décentralisé de codes cadeaux d'une valeur de SILO", // [...] is a decentralised system for gift codes worth SILO
    // NOTE: on this line, if possible, leave 'Seed2Need Promos' untranslated
    redeemInput: "Introduisez votre code'Seed2Need Promos", //Enter your 'Seed2Need Promos' code
    createName: 'Nom de la promotion (facultatif)', //Promo Name (Optional)
    createAmount: 'Valeur promotionnelle', //Promo Amount

    // Stake
    stake: 'Stake', //Stake
    stakeUnstake: 'Unstake', //Unstake
    ownerAddress: '(Optionnel) Adresse du propriétaire', //(Optional) Owner Address
    rewardHistory: 'Historique des récompenses', //Reward History
    loadMore: 'Chargez plus', //Load more

    // Masternode
    mnControlYour: 'Contrôlez votre', //Control your
    mnSubtext:
        'À partir de ce guide, vous pouvez créer et accéder à un ou plusieurs masternodes.', //From this tab you can create and access one or more masternodes

    // Governance
    govSubtext:
        "Dans cet onglet, vous pouvez consulter les propositions et, si vous disposez d'un masternode, participer au <b>DAO</b> et voter!", //From this tab you can check the proposals and, if you have a masternode, be a part of the <b>DAO</b> and vote!
    govMonthlyBudget: 'Budget Mensuel', //Monthly Budget
    govAllocBudget: 'Budget Attribué', //Allocated Budget
    govNextPayout: 'Prochain paiement du Trésor', //Next Treasury Payout
    govTableStatus: 'ÉTAT', //STATUS
    govTableName: 'NOM', //NAME
    govTablePayment: 'PAIEMENT', //PAYMENT
    govTableVotes: 'VOTES', //VOTES
    govTableVote: 'VOTE', //VOTE
    contestedProposalsDesc:
        " Il s'agit des propositions qui ont reçu un nombre écrasant de votes négatifs, ce qui en fait probablement des spams ou des propositions très contestables.", //These are proposals that received an overwhelming amount of downvotes, making it likely spam or a highly contestable proposal.

    // Settings
    settingsCurrency: "Choisissez une devise d'affichage :", //Choose a display currency:
    priceProvidedBy: 'Les prix sont fournis par', //Price data provided by
    settingsDecimals: 'Solde Décimales :', //Balance Decimals:
    settingsExplorer: 'Choisissez un explorateur :', //Choose an explorer:
    settingsLanguage: 'Choisissez une langue :', //Choose a Language:
    settingsPivxNode: 'Choisir un node Seed2Need :', //Choose a Seed2Need node:
    settingsAutoSelectNet:
        'Sélection Automatique des Explorateurs et des Nodes', //Auto-select Explorers and Nodes
    settingsAnalytics: "Choisissez votre niveau d'analyse :", //Choose your analytics contribution level:
    settingsToggleDebug: 'Mode de débogage', //Debug Mode
    settingsToggleTestnet: 'Mode testnet', //Testnet Mode
    settingsToggleAdvancedMode: 'Mode avancé', //Advanced Mode
    settingsToggleAdvancedModeSubtext:
        "Cela permet d'accéder à des fonctionnalités et à une personnalisation plus poussées, mais peut s'avérer difficile et potentiellement dangereux pour les utilisateurs inexpérimentés !", //This unlocks deeper functionality and customisation, but may be overwhelming and potentially dangerous for unexperienced users!

    // Network switching (mainnet <---> testnet)
    netSwitchUnsavedWarningTitle:
        "Votre {network} portefeuille n'est pas sauvé !", //Your {network} wallet isn\'t saved!
    netSwitchUnsavedWarningSubtitle: 'Votre {network} compte est en danger !', //Your {network} account is at risk!
    netSwitchUnsavedWarningSubtext:
        "Si vous changez de compte {network} avant de l'avoir sauvegardé, vous perdrez le compte! ", //If you switch to {network} before saving it, you\'ll lose the account!
    netSwitchUnsavedWarningConfirmation: 'Êtes-vous vraiment sûr ?', //Are you really sure?

    // Transparency Report
    transparencyReport: 'Rapport de transparence', //Transparency Report
    hit: "Un ping indiquant le chargement d'une application, aucune donnée unique n'est envoyée.", //A ping indicating an app load, no unique data is sent.
    time_to_sync:
        'Le temps en secondes que le MSW a pris pour se synchroniser pour la dernière fois.', //The time in seconds it took for MSW to last synchronise.
    transaction:
        "Un ping indiquant un Tx, aucune donnée unique n'est envoyée mais peut être déduite de l'heure sur le réseau.", //A ping indicating a Tx, no unique data is sent, but may be inferred from on-chain time.

    // Analytics Levels
    analyticDisabled: 'Désactivé', //Disabled
    analyticMinimal: 'Minimum', //Minimal
    analyticBalanced: 'Solde', //Balanced

    // Migration System
    MIGRATION_ACCOUNT_FAILURE_TITLE: 'Échec de la récupération du compte', //Failed to recover account
    MIGRATION_ACCOUNT_FAILURE_HTML:
        "Une erreur s'est produite lors de la récupération de votre compte. <br> Veuillez réimporter votre portefeuille en utilisant la clé suivante :", //There was an error recovering your account. <br> Please reimport your wallet using the following key:

    // Dynamic Elements (Rendered at runtime - TODO in future PR: sort in to above categories for consistency)
    ID: 'ID', //ID
    time: 'Heure', //Time
    description: 'Description', //Description
    activityBlockReward: 'Récompense en bloc', //Block Reward
    activitySentTo: 'Envoyé à {r}', //Sent to
    activitySelf: 'soi-même', //Self
    activityShieldedAddress: 'Adresse protégée', //Shielded address
    activityReceivedFrom: 'Reçu de {s}', //Received from
    activityDelegatedTo: 'Délégué à {r}', //Delegated to
    activityUndelegated: 'Non délégué', //Undelegated
    activityUnknown: 'Transaction inconnu', //Unknown Tx
    password: 'Mot de passe', //Password
    walletUnlock: 'Déverrouillez votre portefeuille', //Unlock your wallet
    walletPassword: 'Mot de passe du portefeuille', //Wallet password
    walletUnlockCreateMN: 'Débloquez pour créer votre Masternode!', //Unlock to create your Masternode!
    walletUnlockMNStart: 'Débloquez pour démarrer votre Masternode!', //Unlock to start your Masternode!
    walletUnlockProposal:
        'Débloquez pour créer une proposition! Débloquez pour démarrer votre Masternode !', //Unlock to create a proposal!
    walletUnlockPromo: 'Déverrouillez pour finaliser votre code promo!', //Unlock to finalise your Promo Code!
    walletUnlockTx: 'Déverrouillez pour envoyer votre transaction!', //Unlock to send your transaction!
    walletUnlockStake: 'Déverrouillez pour Staker votre', //Unlock to stake your
    walletUnlockUnstake: 'Débloquer pour Unstake votre', //Unlock to unstake your
    changelogTitle: 'Quoi de neuf en', //What's New in
    popupSetColdAddr: 'Définissez votre adresse de Cold Staking', //Set your Cold Staking address
    popupCurrentAddress: 'Adresse actuelle :', //Current address:
    popupColdStakeNote:
        "Une Cold Address mise des pièces en votre nom, mais ne peut pas en dépenser. Il est donc possible d'utiliser Cold Address d'un inconnu en toute sécurité !", //A Cold Address stakes coins on your behalf, it cannot spend coins, so it's even safe to use a stranger's Cold Address!
    popupExample: 'Exemple :', //Example:
    popupWalletLock: 'Voulez-vous verrouiller votre portefeuille ?', //Do you want to lock your wallet?
    popupWalletWipe:
        'Voulez-vous effacer les données privées de votre portefeuille ?', //Do you want to wipe your wallet private data?
    popupWalletLockNote:
        'Vous devrez saisir votre mot de passe pour accéder à vos fonds.', //You will need to enter your password to access your funds
    popupWalletWipeNote:
        "Vous perdrez l'accès à vos fonds si vous n'avez pas sauvegardé votre clé privée ou votre phrase de base.", //You will lose access to your funds if you haven't backed up your private key or seed phrase
    popupSeedPhraseBad: 'Phrase semence inattendue', //Unexpected Seed Phrase
    popupSeedPhraseBadNote:
        "La phrase de semence est soit invalide, soit n'a pas été généré par MSW.<br>Voulez-vous toujours continuer ?", //The seed phrase is either invalid or was not generated by MSW.<br>Do you still want to proceed?
    popupCreateProposal: 'Créer une proposition', //Create Proposal
    popupCreateProposalCost: 'Coût', //Cost
    popupProposalName: 'Nom de la proposition', //Proposal Name
    popupProposalAddress: 'Adresse de la proposition (optionnel)', //Proposal Address (Optional)
    popupProposalDuration: 'Durée en cycles', //Duration in cycles
    popupProposalPerCycle: 'par cycle', //per cycle
    popupProposalEncryptFirst:
        'Vous devez appuyer sur "{button}" avant de pouvoir créer des propositions !', //You need to hit "{button}" before you can create proposals!
    popupProposalVoteHash: 'Vote Hash :', //Vote Hash:
    popupProposalFinalisedNote:
        "<b>Félicitations pour le lancement de votre proposition!</b><br>Les propriétaires de Masternodes peuvent utiliser votre Hash de vote pour voter à partir de portefeuilles autres que MSW, alors assurez-vous d'ajouter ceci à votre message sur le forum, le cas échéant!", //<b>Congratulations on launching your proposal!</b><br>Masternode owners can use your Vote Hash to vote from wallets other than MSW, so make sure to add this to your forum post, if applicable!
    popupProposalFinalisedSignoff:
        'Bonne chance dans votre voyage à travers le DAO!', //Good luck on your journey through the DAO!
    popupHardwareAddrCheck:
        "Veuillez confirmer qu'il s'agit bien de l'adresse figurant sur votre", //Please confirm this is the address you see on your
    proposalFinalisationConfirming: 'Confirmant...', //Confirming...
    proposalFinalisationRemaining: 'restants', //remaining
    proposalFinalisationExpired: 'Proposition expirée', //Proposal Expired
    proposalFinalisationReady: 'Prêt à soumettre', //Ready to submit
    proposalPassing: 'PASSANT', //PASSING
    proposalFailing: 'ÉCHOUANT', //FAILING
    proposalTooYoung: 'TROP JEUNE', //TOO YOUNG
    proposalFunded: 'FINANCÉE', //FUNDED
    proposalNotFunded: 'NON FINANCÉE', //NOT FUNDED
    proposalPaymentsRemaining: "l'installation(s) restants<br>de", //installment(s) remaining<br>of
    proposalPaymentTotal: 'totale', //total
    proposalNetYes: 'Net Oui', //Net Yes
    popupConfirm: 'Confirmer', //Confirm
    popupClose: 'Fermer', //Close
    popupCancel: 'Annuler', //Cancel
    chartPublicAvailable: 'Disponible au public', //Public Available
    timeDays: 'Jours', //Days
    timeHours: 'Heures', //Hours
    timeMinutes: 'Minutes', //Minutes
    timeSeconds: 'Secondes', //Seconds
    unhandledException: 'Exception non traitée.', //Unhandled exception.

    // Alerts
    ALERTS: '<-- DO NOT EDIT THIS LINE! All below entries are for Alert Popups',

    INTERNAL_ERROR: 'Erreur interne, veuillez réessayer plus tard', //Internal error, please try again later
    FAILED_TO_IMPORT: "<b>Échec de l'importation !</b> Mot de passe invalide", //<b>Failed to import!</b> Invalid password
    FAILED_TO_IMPORT_HARDWARE:
        "<b>Erreur d'importation du Hardware Wallet</b>.", // <b> Failed to import Hardware Wallet</b>.
    UNSUPPORTED_CHARACTER:
        "Le caractère {char} n'est pas pris en charge dans les adresses ! (Non compatible avec Base58)", //The character '{char}' is unsupported in addresses! (Not Base58 compatible)
    UNSUPPORTED_WEBWORKERS:
        "Ce navigateur ne prend pas en charge Web Workers (JS multi-threaded), Malheureusement, il n'est pas possible de générer des portefeuilles Vanity!", //This browser doesn\'t support Web Workers (multi-threaded JS), unfortunately you cannot generate Vanity wallets!
    INVALID_ADDRESS: '<b>Adresse Seed2Need non valide !</b><br> {address}', //<b>Invalid Seed2Need address!</b><br> {address}
    TESTNET_ENCRYPTION_DISABLED:
        '<b>Modo Testnet activé !</b><br>Cryptage du portefeuille désactivé', //<b>Testnet Mode is ON!</b><br>Wallet encryption disabled
    PASSWORD_TOO_SMALL:
        'Ce mot de passe est un peu court !<br>Utiliser au moins <b>{MIN_PASS_LENGTH} caractères.</b>', //That password is a little short!<br>Use at least <b>{MIN_PASS_LENGTH} characters.</b>
    PASSWORD_DOESNT_MATCH: 'Vos mots de passe ne correspondent pas!', //Your passwords don\'t match!
    NEW_PASSWORD_SUCCESS:
        '<b>Vous êtes protégé ! 🔐</b><br>Bravo!', //<b>You\'re Secured! 🔐</b><br>Nice stuff!
    INCORRECT_PASSWORD: 'Mot de passe incorrect!', //Incorrect password!
    INVALID_AMOUNT: '<b>Valeur non valide!</b><br>', //<b>Invalid amount!</b><br>
    TX_SENT: 'Transaction envoyée!', //Transaction sent!
    TX_FAILED: 'Échec de la Transaction!', //Transaction Failed!
    QR_SCANNER_BAD_RECEIVER: "n'est pas un récepteur de paiement valide", //is not a valid payment receiver
    VALIDATE_AMOUNT_LOW:
        '<br>La valeur minimale est de {minimumAmount} {coinTicker}!', //<br>Minimum amount is {minimumAmount} {coinTicker}!
    VALIDATE_AMOUNT_DECIMAL: '{coinDecimal} limite décimale dépassée', //{coinDecimal} decimal limit exceeded
    SUCCESS_STAKING_ADDR:
        '<b>Adresse de Staking défini!</b><br>Poursuivre avec le unstake!', //<b>Staking Address set!</b><br>Now go ahead and unstake!
    STAKE_ADDR_SET:
        "<b>Adresse du Cold Staking défini!</b><br>Cette adresse sera utilisée à l'avenir pour la réalisation de Stake..", //<b>Cold Address set!</b><br>Future stakes will use this address.
    STAKE_ADDR_BAD: "L'adresse du Cold Staking n'est pas valide !", //Invalid Cold Staking address!
    CONFIRM_UNSTAKE_H_WALLET:
        '<b>Confirmer votre Unstake</b><br>Confirmez le TX dans votre {strHardwareName}', //<b>Confirm your Unstake</b><br>Confirm the TX on your {strHardwareName}
    CONFIRM_TRANSACTION_H_WALLET:
        '<b>Confirmez votre transaction</b><br>Confirmez le TX dans votre {strHardwareName}', //<b>Confirm your transaction</b><br>Confirm the TX on your {strHardwareName}
    SUCCESS_STAKING_ADDR_SET:
        '<b>Adresse de Staking définie!</b><br>>Poursuivre avec la stake', //<b>Staking Address set!</b><br>Now go ahead and stake!
    STAKE_NOT_SEND:
        "Dans ce cas, utilisez l'écran <b>Stake</b>, et non l'écran d'envoi!", //Here, use the <b>Stake</b> screen, not the Send screen!
    BAD_ADDR_LENGTH:
        '<b>Adresse Seed2Need non valide!<b><br>Préfixe non valide {address} (Vous devez commencer par{addressPrefix})', //<b>Invalid Seed2Need address!<b><br>Bad length ({addressLength})
    BAD_ADDR_PREFIX:
        '<b>Adresse Seed2Need non valide!<b><br>Préfixe non valide {address} (Vous devez commencer par{addressPrefix})', //<b>Invalid Seed2Need address!<b><br>Bad prefix {address} (Should start with {addressPrefix})
    SENT_NOTHING: "Vous ne pouvez pas envoyer 'rien", //You can\'t send \'nothing\'!
    MORE_THEN_8_DECIMALS: 'limite de 8 décimales dépassée', //8 decimal limit exceeded
    SAVE_WALLET_PLEASE:
        '<b>Gardez votre portefeuille!</b><br>Tableau de bord ➜ Définir le mot de passe', //<b>Save your wallet!</b><br>Dashboard ➜ Secure your wallet
    BACKUP_OR_ENCRYPT_WALLET:
        'Cryptez et/ou sauvegardez vos clés avant de partir, car vous risquez de les perdre!', //Please ENCRYPT and/or BACKUP your keys before leaving, or you may lose them!
    NO_CAMERAS: "Cet appareil n'est pas équipé d'une caméra!", //This device has no camera!
    STAKING_LEDGER_NO_SUPPORT: "Ledger n'est pas compatible avec Cold Staking", //Ledger is not supported for Cold Staking
    CONNECTION_FAILED:
        '<b>Échec de la synchronisation!</b> Réessayer plus tard.<br>Vous pouvez essayer de vous reconnecter via Paramètres.', //<b>Failed to synchronize!</b> Please try again later.<br>You can attempt re-connect via the Settings.
    MN_NOT_ENABLED: "Votre masternode n'est pas encore activé!", //Your masternode is not enabled yet!
    VOTE_SUBMITTED: 'Vote envoyé!', //Vote submitted!
    VOTED_ALREADY:
        'Vous avez déjà voté sur cette proposition ! Attendre 1 heure', //You already voted for this proposal! Please wait 1 hour
    VOTE_SIG_BAD:
        'Échec de la vérification de la signature, vérifiez la clé privée de votre masternode maître.', //Failed to verify signature, please check your masternode\'s private key
    MN_CREATED_WAIT_CONFS:
        '<b>Masternode créé!<b><br>Attendre 15 confirmations pour continuer', //<b>Masternode Created!<b><br>Wait 15 confirmations to proceed further
    MN_ACCESS_BEFORE_VOTE: 'Accéder à un masternode avant de voter!', //Access a masternode before voting!
    MN_OFFLINE_STARTING:
        'Votre masternode est hors ligne, essayons de le démarrer', //Your masternode is offline, we will try to start it
    MN_STARTED: '<b>Masternode a débuté!</b>', //<b>Masternode started!</b>
    MN_RESTARTED: '<b>Masternode redémarré!</b>', //<b>Masternode restarted!</b>
    MN_STARTED_ONLINE_SOON:
        '<b>Masternode initié!</b><br>Il sera bientôt en ligne', //<b>Masternode started!</b><br>It\'ll be online soon
    MN_START_FAILED: '<b>Masternode initié !</b>', //<b>Masternode started!</b>
    MN_RESTART_FAILED: '<b>Masternode redémarré!', //<b>Masternode restarted!</b>
    MN_DESTROYED:
        '<b>Masternode détruit!</b><br>Vous pouvez maintenant dépenser vos pièces.', //<b>Masternode destroyed!</b><br>Your coins are now spendable.
    MN_STATUS_IS: "L'état de votre masternode est", //Your masternode status is
    MN_STATE: "L'état de votre masternode est  <b>{state}</b>", //Your masternode is in <b>{state}</b> state
    MN_BAD_IP: "L'adresse IP n'est pas valide!", //The IP address is invalid!
    MN_BAD_PRIVKEY: '', //The private key is invalid
    MN_NOT_ENOUGH_COLLAT:
        'Vous avez besoin <b>{amount} plus {ticker}</b> pour créer un Masternode!', //You need <b>{amount} more {ticker}</b> to create a Masternode!
    MN_ENOUGH_BUT_NO_COLLAT:
        "Vous disposez d'un solde suffisant pour un Masternode, mais pas d'UTXO comme garantie valide de {amount} {ticker}", //You have enough balance for a Masternode, but no valid collateral UTXO of {amount} {ticker}
    MN_COLLAT_NOT_SUITABLE:
        "Il ne s'agit pas d'une UTXO appropriée pour un Masternode", //This is not a suitable UTXO for a Masternode
    MN_CANT_CONNECT: 'Impossible de se connecter au nœud RPC!', //Unable to connect to RPC node!

    /* Contacts System Alerts */
    CONTACTS_ENCRYPT_FIRST:
        'Vous devez appuyer sur "{button}" avant de pouvoir utiliser les contacts !', //You need to hit "{button}" before you can use Contacts!
    CONTACTS_NAME_REQUIRED: 'Un nom est nécessaire !', //A name is required!
    CONTACTS_NAME_TOO_LONG: 'Le nom est trop long !', //That name is too long!
    CONTACTS_CANNOT_ADD_YOURSELF:
        'Vous ne pouvez pas vous ajouter comme contact !', //You cannot add yourself as a Contact!
    CONTACTS_ALREADY_EXISTS:
        '<b>Le contact existe déjà!</b><br>Vous avez déjà enregistré ce contact', //<b>Contact already exists!</b><br>You already saved this contact
    CONTACTS_NAME_ALREADY_EXISTS:
        "<b>Le nom du contact existe déjà!</b><br>Il pourrait s'agir d'une tentative d'hameçonnage, attention!", //<b>Contact name already exists!</b><br>This could potentially be a phishing attempt, beware!
    CONTACTS_EDIT_NAME_ALREADY_EXISTS:
        '<b>Le contact existe déjà!</b><br>Un contact est déjà appelé "{strNewName}"!', //<b>Contact already exists!</b><br>A contact is already called "{strNewName}"!
    CONTACTS_KEY_ALREADY_EXISTS:
        '<b>Le contact existe déjà, mais sous un nom différent!</b><br>Vous avez {newName} sauvegardé comme <b>{oldName}</b> dans vos contacts', //<b>Contact already exists, but under a different name!</b><br>You have {newName} saved as <b>{oldName}</b> in your contacts
    CONTACTS_NOT_A_CONTACT_QR: "Ce n'est pas un QR de contact!", //This isn\'t a Contact QR!
    CONTACTS_ADDED:
        '<b>Nouveau contact ajouté!</b><br>{strName}  a été ajouté, bravo!', //<b>New Contact added!</b><br>{strName} has been added, hurray!
    CONTACTS_YOU_HAVE_NONE: "Vous n'avez pas de contacts!", //You have no contacts!

    SWITCHED_EXPLORERS:
        '<b>Explorateur échangé!</b><br>En utilisant maintenant le {explorerName}', //<b>Switched explorer!</b><br>Now using {explorerName}
    SWITCHED_NODE: "<b>Nœud commuté!</b><br>L'utilisation de la {node}", //<b>Switched node!</b><br>Now using {node}
    SWITCHED_ANALYTICS:
        "<b>Niveau d'analyse modifié!</b><br>Il est maintenant {level}", //<b>Switched analytics level!</b><br>Now {level}
    SWITCHED_SYNC:
        '<b>Changement de mode de synchronisation !</b><br>Utiliser la synchronisation maintenant {sync}', //<b>Switched sync mode!</b><br>Now using {sync} sync
    UNABLE_SWITCH_TESTNET:
        "<b>Il n'est pas possible de passer en mode Testnet !</b><br>Un portefeuille est déjà chargé.", //<b>Unable to switch Testnet Mode!</b><br>A wallet is already loaded

    WALLET_OFFLINE_AUTOMATIC:
        '<b>Le mode hors-ligne est actif !</b><br>Veuillez désactiver le mode hors connexion pour les transactions automatiques', //<b>Offline Mode is active!</b><br>Please disable Offline Mode for automatic transactions
    WALLET_UNLOCK_IMPORT:
        "S'il vous plaît, {unlock} votre portefeuille avant d'envoyer des transactions !", //Please {unlock} your wallet before sending transactions!
    WALLET_FIREFOX_UNSUPPORTED:
        '<b>O Firefox ne supporte pas cela !</b><br>Malheureusement, Firefox ne prend pas en charge les portefeuilles hardware', //<b>Firefox doesn't support this!</b><br>Unfortunately, Firefox does not support hardware wallets
    WALLET_HARDWARE_WALLET:
        "<b>Portefeuille de Hardware prêt!</b><br>Gardez votre {hardwareWallet} connecté, déverrouillé et dans l'application Seed2Need", //<b>Hardware wallet ready!</b><br>Please keep your {hardwareWallet} plugged in, unlocked, and in the Seed2Need app
    WALLET_CONFIRM_L: "Confirmez l'importation dans votre Ledger", //Confirm the import on your Ledger
    WALLET_NO_HARDWARE:
        "<b>Aucun dispositif disponible</b><br>Il n'a pas été possible de trouver un portefeuille de hardware; brancher et déverrouiller!", //<b>No device available</b><br>Couldn't find a hardware wallet; please plug it in and unlock!
    WALLET_HARDWARE_UDEV: '', // <b>The OS denied access</b> Did you add the udev rules?
    WALLET_HARDWARE_NO_ACCESS:
        "<b>Le système d'exploitation refuse l'accès</b> Veuillez vérifier les paramètres de votre système d'exploitation.", // <b>The OS denied access</b> Please check your Operating System settings.
    WALLET_HARDWARE_CONNECTION_LOST:
        "<b>Perte de connexion avec le {hardwareWallet} </b><br>Oops! Il semble que {hardwareWalletProductionName} a été déconnecté au milieu de l'opération.", //<b>Lost connection to {hardwareWallet} </b><br>It seems the {hardwareWalletProductionName} was unplugged mid-operation, oops!
    WALLET_HARDWARE_BUSY:
        "<b>{hardwareWallet} est en mode veille</b><br>Veuillez débloquer le vôtre {hardwareWalletProductionName} ou compléter l'introduction actuelle", //<b>{hardwareWallet} is waiting</b><br>Please unlock your {hardwareWalletProductionName} or finish it's current prompt
    WALLET_HARDWARE_ERROR: 'b> {hardwareWallet} </b><br> {error}', //<b> {hardwareWallet} </b><br> {error}

    CONFIRM_POPUP_VOTE: 'Confirmer le vote', //Confirm Vote
    CONFIRM_POPUP_VOTE_HTML:
        'Êtes-vous sûr ? Il faut 60 minutes pour changer de vote', //Are you sure? It takes 60 minutes to change vote
    CONFIRM_POPUP_TRANSACTION: 'Confirmez votre transaction', //Confirm your transaction
    CONFIRM_POPUP_MN_P_KEY: 'Clé privée de votre Masternode', //Your Masternode Private Key
    CONFIRM_POPUP_MN_P_KEY_HTML:
        '<br> Enregistrez cette clé privée et copiez-la dans votre configuration VPS. <br>', // <br> Save this private key and copy it to your VPS config <br>
    CONFIRM_POPUP_VERIFY_ADDR: 'Vérifiez votre adresse', //Verify your address

    MIGRATION_MASTERNODE_FAILURE:
        "Échec de la récupération de votre masternode. S'il vous plaît, le réimporter.", //Failed to recover your masternode. Please reimport it.
    MIGRATION_ACCOUNT_FAILURE:
        "Échec de la récupération de votre compte.  S'il vous plaît, le réimporter.", //Failed to recover your account. Please reimport it.
    APP_INSTALLED: 'Application installée!', //App Installed!
};
