export default {
    // As tags básicas HTML são permitidas como <b><i> etc. Todos os dados são higienizados https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML

    // NOTA: Se uma seção NÃO precisar ser traduzida, deixe-a vazia.
    // NOTE: Variables that MPW insert are denoted by brackets {}, for example, {button}, do NOT translate variables, but place them where it makes the most sense.

    // General words
    amount: 'Quantidade', //Amount
    staking: 'Staking', //Staking
    wallet: 'Carteira', //Wallet
    display: 'Mostrar', //Display
    activity: 'Atividade', //Activity
    yes: 'Sim', //Yes
    no: 'Não', //No

    // Nav Bar
    navDashboard: 'Painel', //Dashboard
    navStake: 'Stake', //Stake
    navMasternode: 'Masternode', //Masternode
    navGovernance: 'Governança', //Governance
    navSettings: 'Configurações', //Settings

    // Footer
    footerBuiltWithPivxLabs: 'Construido com 💜 por Seed2Need 🇧🇷', //Built with 💜 by Seed2Need

    // Intro
    loading: 'Carregando', //Loading
    loadingTitle: 'A Minha Carteira Seed2Need', //My Seed2Need Wallet is

    // Onboarding Dashboard
    dashboardTitle: 'Painel', //Dashboard
    dCardOneTitle: 'Criar', //Create a
    dCardOneSubTitle: 'Nova Carteira', //New Wallet
    dCardOneDesc:
        'Crie uma carteira nova Seed2Need, oferecendo os métodos de backup e segurança mais seguros.', //Create a new Seed2Need wallet, offering the most secure backup & security methods.
    dCardOneButton: 'Crie uma Carteira Nova', //Create A New Wallet

    dCardTwoTitle: 'Criar Nova', //Create a new
    dCardTwoSubTitle: 'Carteira Vanity', //Vanity Wallet
    dCardTwoDesc:
        'Criar uma carteira com um prefixo personalizado, isso pode levar bastante tempo!', //Create a wallet with a custom prefix, this can take a long time!
    dCardTwoButton: 'Criar uma Carteira Vanity', //Create A Vanity Wallet

    dCardThreeTitle: 'Acesse a sua', //Access your
    dCardThreeSubTitle: 'Carteira de hardware', //Hardware Wallet
    dCardThreeDesc:
        'Use a sua carteira de Hardware Ledger com a interface familiar do MSW.', //Use your Ledger Hardware wallet with MSW's familiar interface.
    dCardThreeButton: 'Acessar a minha Ledger', //Access my Ledger

    dCardFourTitle: 'Vá para', //Go to
    dCardFourSubTitle: 'A minha Carteira', //My Wallet
    dCardFourDesc:
        'Importar uma carteira Seed2Need usando uma chave privada, xpriv ou Seed Phrase.', //Import a Seed2Need wallet using a Private Key, xpriv, or Seed Phrase.
    dCardFourButtonI: 'Importar Carteira', //Import Wallet
    dCardFourButtonA: 'Acessar a Minha Carteira', //Access My Wallet

    // Vanity Creation
    vanityPrefixNote: 'Anotação: Endereços sempre começaram com:', //Note: addresses will always start with:
    vanityPrefixInput: 'Prefixo de endereço', //Address Prefix

    // Seed Phrase Creation
    thisIsYourSeed: 'Esta é a sua Seed Phrase:', //This is your seed phrase:
    writeDownSeed:
        'Escreva em algum lugar. Você só ira ver isso <b>uma vez!</b>', //Write it down somewhere. You'll only see this <b>once!</b>
    doNotShareWarning:
        'Qualquer pessoa com uma cópia pode acessar <b>todos</b> os seus fundos', //Anyone with a copy of it can access <b>all</b> of your funds.
    doNotShare: 'NÃO a compartilhe com ninguém.', //Do NOT share it with anybody.
    digitalStoreNotAdvised:
        '<b>NÃO</b> é aconselhável armazená-la digitalmente.', //It is <b>NOT</b> advised to store this digitally.
    optionalPassphrase: 'Frasse-Passe Opcional (BIP39)', //Optional Passphrase
    writtenDown: 'Eu escrevi a minha Seed Phrase', //I have written down my seed phrase

    // Seed Phrase Import
    importSeedValid: 'Seed Phrase é válida!', //Seed Phrase is valid!
    importSeedError: 'Seed Phrase é inválida!', //Seed Phrase is invalid!
    importSeedErrorSize: 'A Seed Phrase deve ter 12 ou 24 palavras!', //A Seed Phrase should be 12 or 24 words long!
    importSeedErrorTypo:
        'Seed Phrase contem erros de digitação! Verifique a cuidadosamente', //Seed Phrase contains typing errors! Check your input carefully
    importSeedErrorSkip:
        'Seed Phrase registra como inválida, mas o aviso foi pulado pelo usuário', //Seed Phrase appears invalid, but the warning was skipped by the user

    // Wallet Dashboard
    gettingStarted: 'Começar', //Getting Started
    secureYourWallet: 'Proteja a sua carteira', //Secure your wallet
    unlockWallet: 'Desbloquear a carteira', //Unlock wallet
    lockWallet: 'Bloquear a carteira', //Lock wallet

    // Encrypt wallet
    encryptWallet: 'Criptografar carteira', //Encrypt wallet
    encryptPasswordCurrent: 'Senha Atual', //Current Password
    encryptPasswordFirst: 'Digite a senha', //Enter Password
    encryptPasswordSecond: 'Digite a senha novamente', //Re-enter Password
    encrypt: 'Criptografar', //Encrypt
    changePassword: 'Mudar Senha', //Change Password

    // Wallet Dashboard Sub-menu
    balanceBreakdown: 'Composição do Saldo', //Balance Breakdown
    viewOnExplorer: 'Ver no Explorador ', //View on Explorer
    export: 'Exportar', //Export
    refreshAddress: 'Atualizar endereço', //Refresh address
    redeemOrCreateCode: 'Resgatar ou Criar Código', //Redeem or Create Code

    // Send
    address: 'Endereço', //Address
    receivingAddress: 'Endereço de recepção', //Receiving address
    sendAmountCoinsMax: 'Máximo', //MAX
    paymentRequestMessage: 'Descrição (do comerciante)', //Description (from the merchant)
    send: 'Enviar', //Send

    // Contacts System
    receive: 'Receber', //Receive
    contacts: 'Contatos', //Contacts
    name: 'Nome', //Name
    username: 'Nome de usuário', //Username
    addressOrXPub: 'Endereço ou XPub', //Address or XPub
    back: 'Voltar', //Back
    chooseAContact: 'Escolher um contato', //Choose a Contact
    createContact: 'Criar Contato', //Create Contact
    encryptFirstForContacts:
        'Quando você pressionar "{button}" no dashboard você poderá criar um contato para receber SILO mais facilmente! ', //Once you hit "{button}" in the Dashboard, you can create a Contact to make receiving SILO easier!
    shareContactURL: 'Compartilhar URL do contato', //Share Contact URL
    setupYourContact: 'Configurar o seu contato', //Setup your Contact
    receiveWithContact:
        'Receber utilizando um contato baseado em nome de usuário simples', //Receive using a simple username-based Contact
    onlyShareContactPrivately:
        '<b>Somente</b> compartilhe o seu contato com pessoas confiáveis (família e amigos)', //<b>Only</b> share your Contact with trusted people (family, friends)

    /* Context: The "Change to" is used in-app with one of the Three options below it, i.e: "Change to Contact" */
    changeTo: 'Mudar para', //Change to
    contact: 'Contato', //Contact
    xpub: 'XPub', //XPub

    addContactTitle: 'Adicionar {strName} aos contatos ', //Add {strName} to Contacts
    addContactSubtext:
        'Quando adicionado você será capaz de efetuar transações com {strName} pelo nome deles (digitando ou clicando), sem necessidade de endereços, simples e fácil', //Once added you\'ll be able to send transactions to {strName} by their name (either typing, or clicking), no more addresses, nice \'n easy.
    addContactWarning:
        'Garanta que este seja o verdadeiro "{strName}", não aceite pedidos de contatos de fontes desconhecidas!', //Ensure that this is the real "{strName}", do not accept Contact requests from unknown sources!

    editContactTitle: 'Mudar o contato de "{strName}"', //Change "{strName}" Contact
    newName: 'Novo nome', //New Name

    removeContactTitle: 'Remover {strName}?', //Remove {strName}?
    removeContactSubtext:
        'Você tem certeza que deseja remover {strName} dos seus contatos?', //Are you sure you wish to remove {strName} from your Contacts?
    removeContactNote: 'Você pode adiciona-los de volta a qualquer momento', //You can add them again any time in the future.

    // Export
    privateKey: 'Chave privada', //Private Key
    viewPrivateKey: 'Mostrar a chave privada?', //View Private Key?
    privateWarning1: 'Certifique-se de que ninguém veja a sua tela.', //Make sure no one can see your screen.
    privateWarning2:
        'Qualquer pessoa com esta chave pode roubar os seus fundos', //Anyone with this key can steal your funds.
    viewKey: 'Ver a chave', //View key

    // Seed2Need Promos
    // NOTE: for this below line, continue the sentence "Seed2Need Promos [...]", since 'Seed2Need Promos' is a brand, it is not translated.
    pivxPromos:
        'é um sistema descentralizado de códigos de presente com valor em SILO', // [...] is a decentralised system for gift codes worth SILO
    // NOTE: on this line, if possible, leave 'Seed2Need Promos' untranslated
    redeemInput: "Digite o seu código 'Seed2Need Promos'", //Enter your 'Seed2Need Promos' code
    createName: 'Nome da promoção (opcional)', //Promo Name (Optional)
    createAmount: 'Valor promocional', //Promo Amount

    // Stake
    stake: 'Stake', //Stake
    stakeUnstake: 'Unstake', //Unstake
    ownerAddress: '(Opcional) Endereço do dono', //(Optional) Owner Address
    rewardHistory: 'Histórico de recompensas', //Reward History
    loadMore: 'Carregar mais', //Load more

    // Masternode
    mnControlYour: 'Controle o seu', //Control your
    mnSubtext:
        'A partir deste guia, você pode criar e acessar um ou mais masternodes', //From this tab you can create and access one or more masternodes

    // Governance
    govSubtext:
        'Nesta aba você pode conferir as propostas e, se tiver um masternode, fazer parte do <b>DAO</b> e votar!', //From this tab you can check the proposals and, if you have a masternode, be a part of the <b>DAO</b> and vote!
    govMonthlyBudget: 'Orçamento mensal', //Monthly Budget
    govAllocBudget: 'Orçamento Alocado', //Allocated Budget
    govNextPayout: 'Próximo Pagamento da  Tesouraria', //Next Treasury Payout
    govTableStatus: 'ESTADO', //STATUS
    govTableName: 'NOME', //NAME
    govTablePayment: 'PAGAMENTO', //PAYMENT
    govTableVotes: 'VOTOS', //VOTES
    govTableVote: 'VOTO', //VOTE
    contestedProposalsTitle: 'Propostas Contestadas', //Contested Proposals
    contestedProposalsDesc:
        'Estas são as propostas que receberam uma quantidade massiva de votos negativos, sendo provavelmente spam ou uma proposta altamente contestável.', //These are proposals that received an overwhelming amount of downvotes, making it likely spam or a highly contestable proposal.

    // Settings
    settingsCurrency: 'Escolha uma moeda de exibição:', //Choose a display currency:
    priceProvidedBy: 'Dados de preço fornecidos por', //Price data provided by
    settingsDecimals: 'Decimais do saldo:', //Balance Decimals:
    settingsExplorer: 'Escolha um explorador:', //Choose an explorer:
    settingsLanguage: 'Escolha um Idioma:', //Choose a Language:
    settingsPivxNode: 'Escolha um node Seed2Need:', //Choose a Seed2Need node:
    settingsAutoSelectNet: 'Seleção automática de Exploradores e Nodes', //Auto-select Explorers and Nodes
    settingsAnalytics: 'Escolha o seu nível de contribuição analítica:', //Choose your analytics contribution level:
    settingsToggleDebug: 'Modo de depuração', //Debug Mode
    settingsToggleTestnet: 'Modo Testnet', //Testnet Mode
    settingsToggleAdvancedMode: 'Modo avançado', //Advanced Mode
    settingsToggleAdvancedModeSubtext:
        'Isto desbloqueia mais funcionalidades e customização, mas pode ser complicado e possivelmente perigoso para novos usuários!', //This unlocks deeper functionality and customisation, but may be overwhelming and potentially dangerous for unexperienced users!

    // Network switching (mainnet <---> testnet)
    netSwitchUnsavedWarningTitle: 'Sua carteira de {network} não foi salva!', //Your {network} wallet isn\'t saved!
    netSwitchUnsavedWarningSubtitle: 'Sua conta de {network} está em risco!', //Your {network} account is at risk!
    netSwitchUnsavedWarningSubtext:
        'Se você mudar para {network} antes de salvar você perderá a a conta!', //If you switch to {network} before saving it, you\'ll lose the account!
    netSwitchUnsavedWarningConfirmation: 'Você tem certeza?', //Are you really sure?

    // Transparency Report
    transparencyReport: '"Relatório de Transparência"', //Transparency Report
    hit: '"Um ping para indicar o carregamento de uma aplicação, nenhum dado exclusivo é enviado."', //A ping indicating an app load, no unique data is sent.
    time_to_sync:
        '"O tempo em segundos que o MSW levou para sincronizar pela última vez."', //The time in seconds it took for MSW to last synchronise.
    transaction:
        '"Um ping indicando uma Tx, nenhum dado exclusivo é enviado, mas pode ser inferido a partir do tempo na rede."', //A ping indicating a Tx, no unique data is sent, but may be inferred from on-chain time.

    // Analytics Levels
    analyticDisabled: 'Desativado', //Disabled
    analyticMinimal: 'Mínimo', //Minimal
    analyticBalanced: 'Saldo', //Balanced

    // Migration System
    MIGRATION_ACCOUNT_FAILURE_TITLE: 'Falha ao recuperar conta', //Failed to recover account
    MIGRATION_ACCOUNT_FAILURE_HTML:
        'Ocorreu um erro ao recuperar a sua conta. <br> Por favor reimporte sua carteira usando a seguinte chave:', //There was an error recovering your account. <br> Please reimport your wallet using the following key:

    // Dynamic Elements (Rendered at runtime - TODO in future PR: sort in to above categories for consistency)
    ID: 'ID', //ID
    time: 'Tempo', //Time
    description: 'Descrição', //Description
    activityBlockReward: 'Bloco Recompensa', //Block Reward
    activitySentTo: 'Enviado para {r}', //Sent to
    activitySelf: 'si mesmo', //Self
    activityShieldedAddress: 'Endereço Protegido', //Shielded address
    activityReceivedFrom: 'Recebido de {s}', //Received from
    activityDelegatedTo: 'Delegado a {r}', //Delegated to
    activityUndelegated: 'Não é Delegado', //Undelegated
    activityUnknown: 'Tx desconhecido', //Unknown Tx
    password: 'Senha', //Password
    walletUnlock: 'Desbloquear a sua carteira', //Unlock your wallet
    walletPassword: 'Senha da Carteira', //Wallet password
    walletUnlockCreateMN: 'Desbloquear para criar o seu Masternode!', //Unlock to create your Masternode!
    walletUnlockMNStart: 'Desbloquear  para iniciar o seu Masternode', //Unlock to start your Masternode!
    walletUnlockProposal: 'Desbloquear para criar uma proposta', //Unlock to create a proposal!
    walletUnlockPromo: 'Desbloquear para finalizar o seu código promocional', //Unlock to finalise your Promo Code!
    walletUnlockTx: 'Desbloquear para enviar a sua transação', //Unlock to send your transaction!
    walletUnlockStake: 'Desbloquear para realizar Stake', //Unlock to stake your
    walletUnlockUnstake: 'Desbloquear para realizar Unstake', //Unlock to unstake your
    changelogTitle: 'O que há de Novo em', //What's New in
    popupSetColdAddr: 'Defina o seu endereço de Cold Staking', //Set your Cold Staking address
    popupCurrentAddress: 'Endereço atual', //Current address:
    popupColdStakeNote:
        'Um Endereço de Cold Staking faz staking de moedas em seu nome, não pode gastar moedas, então é seguro até usar o Cold Address de um estranho!', //A Cold Address stakes coins on your behalf, it cannot spend coins, so it's even safe to use a stranger's Cold Address!
    popupExample: 'Exemplo:', //Example:
    popupWalletLock: 'Você quer bloquear a sua carteira', //Do you want to lock your wallet?
    popupWalletWipe: 'Deseja limpar os dados privados da sua carteira', //Do you want to wipe your wallet private data?
    popupWalletLockNote:
        'Você precisará digitar sua senha para acessar seus fundos', //You will need to enter your password to access your funds
    popupWalletWipeNote:
        'Você perderá o acesso aos seus fundos se não tiver feito o backup de sua chave privada ou Seed Phrase', //You will lose access to your funds if you haven't backed up your private key or seed phrase
    popupSeedPhraseBad: 'Seed Phrase Inesperada', //Unexpected Seed Phrase
    popupSeedPhraseBadNote:
        'A Seed Phrase é inválida ou não foi gerada pelo MSW.<br>Você ainda quer continuar', //The seed phrase is either invalid or was not generated by MSW.<br>Do you still want to proceed?
    popupCreateProposal: 'Criar Proposta', //Create Proposal
    popupCreateProposalCost: 'Custo', //Cost
    popupProposalName: 'Título da Proposta', //Proposal Title
    popupProposalAddress: 'Endereço da proposta (Opcional)', //Proposal Address (Optional)
    popupProposalDuration: 'Duração em ciclos', //Duration in cycles
    popupProposalPerCycle: 'por ciclo', //per cycle
    popupProposalEncryptFirst:
        'Você precisa pressionar "{button}" antes que possa criar propostas! ', //You need to hit "{button}" before you can create proposals!
    popupProposalVoteHash: 'Votação de Hash:', //Vote Hash:
    popupProposalFinalisedNote:
        '<b>Parabéns pelo lançamento da sua proposta!</b><br>Os proprietários do Masternode podem usar a sua votação de hash em outras carteiras que não sejam MSW, então certifique-se de adicionar isso à sua publicação no fórum, se aplicável!', //<b>Congratulations on launching your proposal!</b><br>Masternode owners can use your Vote Hash to vote from wallets other than MSW, so make sure to add this to your forum post, if applicable!
    popupProposalFinalisedSignoff: 'Boa sorte na sua jornada pelo DAO!', //Good luck on your journey through the DAO!
    popupHardwareAddrCheck: 'Confirme se este é o seu endereço que você vê', //Please confirm this is the address you see on your
    proposalFinalisationConfirming: 'A Confirmar', //Confirming...
    proposalFinalisationRemaining: 'restante', //remaining
    proposalFinalisationExpired: 'Proposta Expirada', //Proposal Expired
    proposalFinalisationReady: 'Pronto para enviar', //Ready to submit
    proposalPassing: 'PASSAGEM', //PASSING
    proposalFailing: 'FALHA', //FAILING
    proposalTooYoung: 'MUITO NOVA', //TOO YOUNG
    proposalFunded: 'FINANCIADO/A', //FUNDED
    proposalNotFunded: 'NÃO FINANCIADO/A', //NOT FUNDED
    proposalPaymentsRemaining: 'parcela(s) restante(s)<br>de', //installment(s) remaining<br>of
    proposalPaymentTotal: 'Total', //total
    proposalNetYes: 'Votos Sim', //Net Yes
    popupConfirm: 'Confirme', //Confirm
    popupClose: 'Fechar', //Close
    popupCancel: 'Cancelar', //Cancel
    chartPublicAvailable: 'Público disponível', //Public Available
    timeDays: 'Dias', //Days
    timeHours: 'Horas', //Hours
    timeMinutes: 'Minutos', //Minutes
    timeSeconds: 'Segundos', //Seconds
    unhandledException: 'Exceção não tratada', //Unhandled exception.

    // Alerts
    ALERTS: '<-- DO NOT EDIT THIS LINE! All below entries are for Alert Popups',

    INTERNAL_ERROR: 'Erro interno, por favor tente novamente mais tarde', //Internal error, please try again later
    FAILED_TO_IMPORT: '<b>Falha ao importar!</b> Senha inválida', //<b>Failed to import!</b> Invalid password
    UNSUPPORTED_CHARACTER:
        'O caracter {char} não é suportado em endereços! (Não é compatível com Base58)', //The character '{char}' is unsupported in addresses! (Not Base58 compatible)
    UNSUPPORTED_WEBWORKERS:
        'Este navegador não suporta Web Workers (JS multi-threaded), infelizmente você não pode gerar carteiras Vanity!', //This browser doesn\'t support Web Workers (multi-threaded JS), unfortunately you cannot generate Vanity wallets!
    INVALID_ADDRESS: '<b>Endereço Seed2Need inválido!</b><br> {address}', //<b>Invalid Seed2Need address!</b><br> {address}
    TESTNET_ENCRYPTION_DISABLED:
        '<b>Modo Testnet ativado!</b><br>Encriptação da carteira desativada', //<b>Testnet Mode is ON!</b><br>Wallet encryption disabled
    PASSWORD_TOO_SMALL:
        'Esta senha é um pouco curta!<br>Use pelo menos <b>{MIN_PASS_LENGTH} caracteres.</b>',
    PASSWORD_DOESNT_MATCH: 'As suas senhas não correspondem!', //Your passwords don\'t match!
    NEW_PASSWORD_SUCCESS:
        '<b>Você está protegido! 🔐</b><br>Muito bem!', //<b>You\'re Secured! 🔐</b><br>Nice stuff!
    INCORRECT_PASSWORD: 'Senha incorreta!', //Incorrect password!
    INVALID_AMOUNT: '<b>Valor inválido!</b><br>', //<b>Invalid amount!</b><br>
    TX_SENT: 'Transação enviada!', //Transaction sent!
    TX_FAILED: 'Falha na transação!', //Transaction Failed!
    QR_SCANNER_BAD_RECEIVER: 'não é um receptor de pagamento válido', //is not a valid payment receiver
    VALIDATE_AMOUNT_LOW: '<br>O valor mínimo é {minimumAmount} {coinTicker}!', //<br>Minimum amount is {minimumAmount} {coinTicker}!
    VALIDATE_AMOUNT_DECIMAL: '{coinDecimal} limite decimal excedido', //{coinDecimal} decimal limit exceeded
    SUCCESS_STAKING_ADDR:
        '<b>Endereço de Staking definido!</b><br>Prossiga com o unstake!', //<b>Staking Address set!</b><br>Now go ahead and unstake!
    CONFIRM_UNSTAKE_H_WALLET:
        '<b>Confirme o seu Unstake</b><br>Confirme a TX no seu {strHardwareName}', //<b>Confirm your Unstake</b><br>Confirm the TX on your {strHardwareName}
    CONFIRM_TRANSACTION_H_WALLET:
        '<b>Confirme a sua transação</b><br>Confirme a TX no seu {strHardwareName}', //<b>Confirm your transaction</b><br>Confirm the TX on your {strHardwareName}
    SUCCESS_STAKING_ADDR_SET:
        '<b>Endereço de Staking definido!</b><br>>Prossiga com o stake', //'<b>Staking Address set!</b><br>Now go ahead and stake!
    STAKE_ADDR_SET:
        '<b>Endereço de Cold Staking definido!</b><br>Ao fazer Stake no futuro este endereço irá ser usado.', //<b>Cold Address set!</b><br>Future stakes will use this address.
    STAKE_ADDR_BAD: 'Endereço de Cold Staking inválido!', //Invalid Cold Staking address!
    STAKE_NOT_SEND: 'Aqui, use a tela de <b>Stake</b>, não a tela de Envio!', //Here, use the <b>Stake</b> screen, not the Send screen!
    BAD_ADDR_LENGTH:
        '<b>Endereço Seed2Need inválido!<b><br>Comprimento incorreto ({addressLength})', //<b>Invalid Seed2Need address!<b><br>Bad length ({addressLength})
    BAD_ADDR_PREFIX:
        '<b>Endereço Seed2Need inválido!<b><br>Prefixo inválido {address} (Deve começar com {addressPrefix})', //<b>Invalid Seed2Need address!<b><br>Bad prefix {address} (Should start with {addressPrefix})
    SENT_NOTHING: "Você não pode enviar 'nada'!", //You can\'t send \'nothing\'!
    MORE_THEN_8_DECIMALS: 'limite de 8 decimais excedido', //8 decimal limit exceeded
    SAVE_WALLET_PLEASE:
        '<b>Salve a sua carteira!</b><br>Painel ➜ Proteja a sua carteira', //<b>Save your wallet!</b><br>Dashboard ➜ Secure your wallet
    BACKUP_OR_ENCRYPT_WALLET:
        'Criptografe e/ou faça backup das suas chaves antes de sair, ou você pode perdê-las!', //Please ENCRYPT and/or BACKUP your keys before leaving, or you may lose them!
    NO_CAMERAS: 'Este dispositivo não tem câmera!', //This device has no camera!
    STAKING_LEDGER_NO_SUPPORT: 'A Ledger não é compatível com Cold Staking', //Ledger is not supported for Cold Staking
    CONNECTION_FAILED:
        '<b>Falha ao sincronizar!</b> Tente novamente mais tarde.<br>Pode tentar reconectar através das Configurações.', //<b>Failed to synchronize!</b> Please try again later.<br>You can attempt re-connect via the Settings.
    MN_NOT_ENABLED: 'O seu masternode ainda não está ativado!', //Your masternode is not enabled yet!
    VOTE_SUBMITTED: 'Voto enviado!', //Vote submitted!
    VOTED_ALREADY: 'Você já votou nesta proposta! Aguarde 1 hora', //You already voted for this proposal! Please wait 1 hour
    VOTE_SIG_BAD:
        'Falha ao verificar a assinatura, verifique a chave privada do seu masternode', //Failed to verify signature, please check your masternode\'s private key
    MN_CREATED_WAIT_CONFS:
        '<b>Masternode criado!<b><br>Aguarde 15 confirmações para prosseguir', //<b>Masternode Created!<b><br>Wait 15 confirmations to proceed further
    MN_ACCESS_BEFORE_VOTE: 'Acesse um masternode antes de votar!', //Access a masternode before voting!
    MN_OFFLINE_STARTING:
        'O seu masternode está offline, vamos tentar iniciá-lo', //Your masternode is offline, we will try to start it
    MN_STARTED: '<b>Masternode iniciado!</b>', //<b>Masternode started!</b>
    MN_RESTARTED: '<b>Masternode reiniciado!</b>', //<b>Masternode restarted!</b>
    MN_STARTED_ONLINE_SOON:
        '<b>Masternode iniciado!</b><br>Em breve estará online', //<b>Masternode started!</b><br>It\'ll be online soon
    MN_START_FAILED: '<b>Masternode iniciado!</b>', //<b>Masternode started!</b>
    MN_RESTART_FAILED: '<b>Masternode reiniciado!</b>', //<b>Masternode restarted!</b>
    MN_DESTROYED: '<b>Masternode destruído!</b><br>Já pode gastar suas moedas.', //<b>Masternode destroyed!</b><br>Your coins are now spendable.
    MN_STATUS_IS: 'O status do seu masternode é', //Your masternode status is
    MN_STATE: 'O status do seu masternode é <b>{state}</b>', //Your masternode is in <b>{state}</b> state
    MN_BAD_IP: 'O endereço IP é inválido!', //The IP address is invalid!
    MN_BAD_PRIVKEY: '', //The private key is invalid
    MN_NOT_ENOUGH_COLLAT:
        'Você precisa de <b>{amount} mais {ticker}</b> para criar um Masternode!', //You need <b>{amount} more {ticker}</b> to create a Masternode!
    MN_ENOUGH_BUT_NO_COLLAT:
        'Você tem saldo suficiente para um Masternode, mas nenhum UTXO válido como garantia de {amount} {ticker}', //You have enough balance for a Masternode, but no valid collateral UTXO of {amount} {ticker}
    MN_COLLAT_NOT_SUITABLE: 'Este não é um UTXO adequado para um Masternode', //This is not a suitable UTXO for a Masternode
    MN_CANT_CONNECT: 'Não é possível conectar ao nó RPC!', //Unable to connect to RPC node!

    /* Contacts System Alerts */
    CONTACTS_ENCRYPT_FIRST:
        'Você precisa pressionar "{button}" antes que possa utilizar os contatos!', //You need to hit "{button}" before you can use Contacts!
    CONTACTS_NAME_REQUIRED: 'Um nome é necessário!', //A name is required!
    CONTACTS_NAME_TOO_LONG: 'Esse nome é muito comprido!', //That name is too long!
    CONTACTS_CANNOT_ADD_YOURSELF:
        'Você não pode adicionar a si mesmo como contato', //You cannot add yourself as a Contact!
    CONTACTS_ALREADY_EXISTS:
        '<b>O contato já existe!</b><br> você já salvou este contato', //<b>Contact already exists!</b><br>You already saved this contact
    CONTACTS_NAME_ALREADY_EXISTS:
        '<b>O nome do contato já existe!</b><br> Isso pode ser uma tentativa de phising, tome cuidado!', //<b>Contact name already exists!</b><br>This could potentially be a phishing attempt, beware!
    CONTACTS_EDIT_NAME_ALREADY_EXISTS:
        '<b>O contato já existe!</b><br> Um contato já é chamado "{strNewName}"!', //<b>Contact already exists!</b><br>A contact is already called "{strNewName}"!
    CONTACTS_KEY_ALREADY_EXISTS:
        '<b>O contato já exite porém com um nome differente!</b><br> Você tem {newName} salvo como <b>{oldName}</b> nos seus contatos', //<b>Contact already exists, but under a different name!</b><br>You have {newName} saved as <b>{oldName}</b> in your contacts
    CONTACTS_NOT_A_CONTACT_QR: 'Isto não é um código QR de contato!', //This isn\'t a Contact QR!
    CONTACTS_ADDED:
        '<b>Novo contato adicionado!</b><br>{strName} foi adicionado, Viva!', //<b>New Contact added!</b><br>{strName} has been added, hurray!
    CONTACTS_YOU_HAVE_NONE: 'Você não tem contatos!', //You have no contacts!

    PROPOSAL_FINALISED: 'Proposta finalizada!', //Proposal finalized!
    PROPOSAL_UNCONFIRMED: 'A proposta ainda não foi confirmada.', //The proposal hasn\'t been confirmed yet.
    PROPOSAL_EXPIRED: 'A proposta expirou. Crie uma nova.', //The proposal has expired. Create a new one.
    PROPOSAL_FINALISE_FAIL: 'Falha ao finalizar a proposta.', //Failed to finalize proposal.
    PROPOSAL_IMPORT_FIRST: 'Crie ou importe a sua carteira para continuar', //Create or import your wallet to continue
    PROPOSAL_NOT_ENOUGH_FUNDS:
        'Não há fundos suficientes para criar uma proposta.', //Not enough funds to create a proposal.
    PROPOSAL_INVALID_ERROR: 'A proposta é inválida. Erro:', //Proposal is invalid. Error:
    PROPOSAL_CREATED:
        '<b>Proposta criada!</b><br>Aguarde 6 confirmações para finalizar.', //<b>Proposal created!</b><br>Wait 6 confirmations to finalise.

    PROMO_MIN: 'O valor mínimo é {min} {ticker}!', //Minimum amount is {min} {ticker}!
    PROMO_MAX_QUANTITY:
        'O seu dispositivo só pode criar {quantity} códigos de cada vez!', //Your device can only create {quantity} codes at a time!
    PROMO_NOT_ENOUGH:
        'Você não tem {ticker} suficiente para criar esse código!', //You don\'t have enough {ticker} to create that code!
    PROMO_ALREADY_CREATED: 'Você já criou esse código!', //You\'ve already created that code!

    SWITCHED_EXPLORERS:
        '<b>Explorador trocado!</b><br>Agora será utilizado o {explorerName}', //<b>Switched explorer!</b><br>Now using {explorerName}
    SWITCHED_NODE: '<b>Nó trocado!</b><br>Agora será utilizado o {node}', //<b>Switched node!</b><br>Now using {node}
    SWITCHED_ANALYTICS: '<b>Nível de análise alterado!</b><br>Agora é {level}', //<b>Switched analytics level!</b><br>Now {level}
    SWITCHED_SYNC:
        '<b>Modo de sincronização alternado!</b><br>Agora sera utilizada a sincronização {sync}', //<b>Switched sync mode!</b><br>Now using {sync} sync
    UNABLE_SWITCH_TESTNET:
        '<b>Não é possível alternar o modo Testnet!</b><br>Uma carteira está aberta.', //<b>Unable to switch Testnet Mode!</b><br>A wallet is already loaded

    WALLET_OFFLINE_AUTOMATIC:
        '<b>O modo offline está ativo!</b><br>Por favor desabilite o Modo Offline para transações automáticas', //<b>Offline Mode is active!</b><br>Please disable Offline Mode for automatic transactions
    WALLET_UNLOCK_IMPORT:
        'Por favor, {unlock} a sua carteira antes de enviar transações!', //Please {unlock} your wallet before sending transactions!
    WALLET_FIREFOX_UNSUPPORTED:
        '<b>O Firefox não tem suporte para isto!</b><br>Infelizmente, o Firefox não suporta carteiras de hardware', //<b>Firefox doesn't support this!</b><br>Unfortunately, Firefox does not support hardware wallets
    WALLET_HARDWARE_WALLET:
        '<b>Carteira de hardware pronta!</b><br>Mantenha a sua {hardwareWallet} conectada, desbloqueada e na aplicação Seed2Need', //<b>Hardware wallet ready!</b><br>Please keep your {hardwareWallet} plugged in, unlocked, and in the Seed2Need app
    WALLET_CONFIRM_L: 'Confirme a importação na sua Ledger', //Confirm the import on your Ledger",
    WALLET_NO_HARDWARE:
        '<b>Nenhum dispositivo disponível</b><br>Não foi possível encontrar uma carteira de hardware; conecte-a e desbloqueie-a!', //<b>No device available</b><br>Couldn't find a hardware wallet; please plug it in and unlock!
    WALLET_HARDWARE_UDEV:
        '<b> O Sistema operacional recusou o acesso </b> Você adicionou as regras de udev?', // <b>The OS denied access</b> Did you add the udev rules?
    WALLET_HARDWARE_NO_ACCESS:
        '<b> O Sistema operacional recusou o acesso </b> Por favor cheque as configurações do seu sistema operacional', // <b>The OS denied access</b> Please check your Operating System settings.
    WALLET_HARDWARE_CONNECTION_LOST:
        '<b>Conexão perdida com a {hardwareWallet} </b><br>Oops! Parece que a {hardwareWalletProductionName} foi desconectada no meio da operação.', //<b>Lost connection to {hardwareWallet} </b><br>It seems the {hardwareWalletProductionName} was unplugged mid-operation, oops!
    WALLET_HARDWARE_BUSY:
        '<b>{hardwareWallet} está em modo de espera</b><br>Por favor desbloqueie a sua {hardwareWalletProductionName} ou conclua o prompt atual', //<b>{hardwareWallet} is waiting</b><br>Please unlock your {hardwareWalletProductionName} or finish it's current prompt
    WALLET_HARDWARE_ERROR: '<b> {hardwareWallet} </b><br> {error}', //<b> {hardwareWallet} </b><br> {error}

    CONFIRM_POPUP_VOTE: 'Confirmar Voto', //Confirm Vote
    CONFIRM_POPUP_VOTE_HTML: 'Tem certeza? Demora 60 minutos para mudar o voto', //Are you sure? It takes 60 minutes to change vote
    CONFIRM_POPUP_TRANSACTION: 'Confirme a sua transação', //Confirm your transaction
    CONFIRM_POPUP_MN_P_KEY: 'A chave privada do seu Masternode', //Your Masternode Private Key
    CONFIRM_POPUP_MN_P_KEY_HTML:
        '<br> Guarde esta chave privada e copie-a para a sua configuração no VPS <br>', // <br> Save this private key and copy it to your VPS config <br>
    CONFIRM_POPUP_VERIFY_ADDR: 'Verifique o seu endereço', //Verify your address

    MIGRATION_MASTERNODE_FAILURE:
        'Falha ao recuperar o seu masternode. Por favor, reimporte-o.', //Failed to recover your masternode. Please reimport it.
    MIGRATION_ACCOUNT_FAILURE:
        'Falha ao recuperar a sua conta. Por favor, reimporte-a.', //Failed to recover your account. Please reimport it.
    APP_INSTALLED: 'Aplicação instalada!', //App Installed!
};
