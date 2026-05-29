const boardEl = document.querySelector("#board");
const styleScreenEl = document.querySelector("#styleScreen");
const languageSelectEl = document.querySelector("#languageSelect");
const topKeeperEl = document.querySelector("#topKeeper");
const bottomKeeperEl = document.querySelector("#bottomKeeper");
const selectedPieceEl = document.querySelector("#selectedPiece");
const squadStatusEl = document.querySelector("#squadStatus");
const turnLabelEl = document.querySelector("#turnLabel");
const scoreEl = document.querySelector("#score");
const matchTimerEl = document.querySelector("#matchTimer");
const halfLabelEl = document.querySelector("#halfLabel");
const turnTimerEl = document.querySelector("#turnTimer");
const floatingMatchHudEl = document.querySelector("#floatingMatchHud");
const floatingHalfEl = document.querySelector("#floatingHalf");
const floatingScoreEl = document.querySelector("#floatingScore");
const floatingTimerEl = document.querySelector("#floatingTimer");
const logEl = document.querySelector("#log");
const specialCardsEl = document.querySelector("#specialCards");
const quickControlsEl = document.querySelector("#quickControls");
const quickSpecialCardsEl = document.querySelector("#quickSpecialCards");
const quickDuelMineEl = document.querySelector("#quickDuelMine");
const quickDuelRivalEl = document.querySelector("#quickDuelRival");
const quickDuelRivalLabelEl = document.querySelector("#quickDuelRivalLabel");
const quickDuelStatusEl = document.querySelector("#quickDuelStatus");
const quickShotMineEl = document.querySelector("#quickShotMine");
const quickShotMineLabelEl = document.querySelector("#quickShotMineLabel");
const quickShotRivalEl = document.querySelector("#quickShotRival");
const quickShotRivalLabelEl = document.querySelector("#quickShotRivalLabel");
const quickShotStatusEl = document.querySelector("#quickShotStatus");
const benchListEl = document.querySelector("#benchList");
const abilityGridEl = document.querySelector("#abilityGrid");
const duelMineEl = document.querySelector("#duelMine");
const duelRivalEl = document.querySelector("#duelRival");
const duelRivalLabelEl = document.querySelector("#duelRivalLabel");
const duelStatusEl = document.querySelector("#duelStatus");
const duelPanelEl = document.querySelector("#duelPanel");
const duelRevealOverlayEl = document.querySelector("#duelRevealOverlay");
const duelRevealTitleEl = document.querySelector("#duelRevealTitle");
const duelRevealMineCardEl = document.querySelector("#duelRevealMineCard");
const duelRevealMineLabelEl = document.querySelector("#duelRevealMineLabel");
const duelRevealMineEl = document.querySelector("#duelRevealMine");
const duelRevealRivalCardEl = document.querySelector("#duelRevealRivalCard");
const duelRevealRivalLabelEl = document.querySelector("#duelRevealRivalLabel");
const duelRevealRivalEl = document.querySelector("#duelRevealRival");
const duelRevealTextEl = document.querySelector("#duelRevealText");
const shotMineEl = document.querySelector("#shotMine");
const shotMineLabelEl = document.querySelector("#shotMineLabel");
const shotRivalEl = document.querySelector("#shotRival");
const shotRivalLabelEl = document.querySelector("#shotRivalLabel");
const shotStatusEl = document.querySelector("#shotStatus");
const teamANameEl = document.querySelector("#teamAName");
const teamBNameEl = document.querySelector("#teamBName");
const pauseDialog = document.querySelector("#pauseDialog");
const setupScreenEl = document.querySelector("#setupScreen");
const physicalScreenEl = document.querySelector("#physicalScreen");
const physicalBackBtn = document.querySelector("#physicalBackBtn");
const physicalShowMatchBtn = document.querySelector("#physicalShowMatchBtn");
const physicalSetupPanelEl = document.querySelector("#physicalSetupPanel");
const physicalMatchPanelEl = document.querySelector("#physicalMatchPanel");
const physicalUserNameEl = document.querySelector("#physicalUserName");
const physicalTeamNameEl = document.querySelector("#physicalTeamName");
const physicalTeamCodeEl = document.querySelector("#physicalTeamCode");
const physicalTeamAuthMethodEl = document.querySelector("#physicalTeamAuthMethod");
const physicalTeamAuthBtn = document.querySelector("#physicalTeamAuthBtn");
const physicalTeamAuthStatusEl = document.querySelector("#physicalTeamAuthStatus");
const physicalRegisterTeamBtn = document.querySelector("#physicalRegisterTeamBtn");
const physicalTeamListEl = document.querySelector("#physicalTeamList");
const physicalOfficialNameEl = document.querySelector("#physicalOfficialName");
const physicalOfficialRoleEl = document.querySelector("#physicalOfficialRole");
const physicalOfficialCodeEl = document.querySelector("#physicalOfficialCode");
const physicalOfficialAuthMethodEl = document.querySelector("#physicalOfficialAuthMethod");
const physicalOfficialAuthBtn = document.querySelector("#physicalOfficialAuthBtn");
const physicalOfficialAuthStatusEl = document.querySelector("#physicalOfficialAuthStatus");
const physicalRegisterOfficialBtn = document.querySelector("#physicalRegisterOfficialBtn");
const physicalOfficialListEl = document.querySelector("#physicalOfficialList");
const physicalCompetitionNameEl = document.querySelector("#physicalCompetitionName");
const physicalCompetitionTypeEl = document.querySelector("#physicalCompetitionType");
const physicalCompetitionCodeEl = document.querySelector("#physicalCompetitionCode");
const physicalGenerateCodeBtn = document.querySelector("#physicalGenerateCodeBtn");
const physicalCreateCompetitionBtn = document.querySelector("#physicalCreateCompetitionBtn");
const physicalInviteTeamNameEl = document.querySelector("#physicalInviteTeamName");
const physicalInviteLinkEl = document.querySelector("#physicalInviteLink");
const physicalInviteBtn = document.querySelector("#physicalInviteBtn");
const physicalInviteStatusEl = document.querySelector("#physicalInviteStatus");
const physicalHomeTeamEl = document.querySelector("#physicalHomeTeam");
const physicalAwayTeamEl = document.querySelector("#physicalAwayTeam");
const physicalObserverEl = document.querySelector("#physicalObserver");
const physicalPrepareMatchBtn = document.querySelector("#physicalPrepareMatchBtn");
const physicalStatusEl = document.querySelector("#physicalStatus");
const physicalStandingsEl = document.querySelector("#physicalStandings");
const physicalMatchTitleEl = document.querySelector("#physicalMatchTitle");
const physicalCompetitionBadgeEl = document.querySelector("#physicalCompetitionBadge");
const physicalScoreHomeNameEl = document.querySelector("#physicalScoreHomeName");
const physicalScoreAwayNameEl = document.querySelector("#physicalScoreAwayName");
const physicalScoreHomeEl = document.querySelector("#physicalScoreHome");
const physicalScoreAwayEl = document.querySelector("#physicalScoreAway");
const physicalTimerLabelEl = document.querySelector("#physicalTimerLabel");
const physicalTimerEl = document.querySelector("#physicalTimer");
const physicalGoalHomeBtn = document.querySelector("#physicalGoalHomeBtn");
const physicalGoalAwayBtn = document.querySelector("#physicalGoalAwayBtn");
const physicalStartTimerBtn = document.querySelector("#physicalStartTimerBtn");
const physicalPauseTimerBtn = document.querySelector("#physicalPauseTimerBtn");
const physicalHalfBtn = document.querySelector("#physicalHalfBtn");
const physicalFinishBtn = document.querySelector("#physicalFinishBtn");
const physicalNewMatchBtn = document.querySelector("#physicalNewMatchBtn");
const physicalMatchLogEl = document.querySelector("#physicalMatchLog");
const physicalMatchStatusEl = document.querySelector("#physicalMatchStatus");
const physicalEvidenceFileEl = document.querySelector("#physicalEvidenceFile");
const physicalEvidenceBtn = document.querySelector("#physicalEvidenceBtn");
const physicalEvidenceListEl = document.querySelector("#physicalEvidenceList");
const changeDialog = document.querySelector("#changeDialog");
const secretDialog = document.querySelector("#secretDialog");
const secretTitleEl = document.querySelector("#secretTitle");
const secretTextEl = document.querySelector("#secretText");
const secretContinueBtn = document.querySelector("#secretContinueBtn");
const gameBannerEl = document.querySelector("#gameBanner");
const gameBannerTitleEl = document.querySelector("#gameBannerTitle");
const gameBannerTextEl = document.querySelector("#gameBannerText");
const introAudioBtn = document.querySelector("#introAudioBtn");
const audioBtn = document.querySelector("#audioBtn");
const crowdAudioEl = document.querySelector("#crowdAudio");
const menuAudioEl = document.querySelector("#menuAudio");
const lockerAudioEl = document.querySelector("#lockerAudio");
const goalAudioEl = document.querySelector("#goalAudio");
const oleAudioEl = document.querySelector("#oleAudio");
const whistleAudioEl = document.querySelector("#whistleAudio");
const loginNameEl = document.querySelector("#loginName");
const loginTeamEl = document.querySelector("#loginTeam");
const loginDniEl = document.querySelector("#loginDni");
const loginPhoneEl = document.querySelector("#loginPhone");
const loginEmailEl = document.querySelector("#loginEmail");
const loginAddressEl = document.querySelector("#loginAddress");
const loginCountryEl = document.querySelector("#loginCountry");
const loginCodeEl = document.querySelector("#loginCode");
const loginBtn = document.querySelector("#loginBtn");
const newProfileBtn = document.querySelector("#newProfileBtn");
const loginStatusEl = document.querySelector("#loginStatus");
const registeredProfilesEl = document.querySelector("#registeredProfiles");
const profileNameEl = document.querySelector("#profileName");
const profileRankEl = document.querySelector("#profileRank");
const localPanelEl = document.querySelector("#localPanel");
const onlinePanelEl = document.querySelector("#onlinePanel");
const leaguePanelEl = document.querySelector("#leaguePanel");
const localP2TeamKeyEl = document.querySelector("#localP2TeamKey");
const localP2CodeEl = document.querySelector("#localP2Code");
const localP2AuthBtn = document.querySelector("#localP2AuthBtn");
const localP2StatusEl = document.querySelector("#localP2Status");
const competitionCodeInputEl = document.querySelector("#competitionCodeInput");
const competitionStatusEl = document.querySelector("#competitionStatus");
const resumeCompetitionBtn = document.querySelector("#resumeCompetitionBtn");
const abandonCompetitionBtn = document.querySelector("#abandonCompetitionBtn");
const matchEndDialog = document.querySelector("#matchEndDialog");
const matchEndTitleEl = document.querySelector("#matchEndTitle");
const matchEndTextEl = document.querySelector("#matchEndText");
const competitionSummaryEl = document.querySelector("#competitionSummary");
const restartMatchEndBtn = document.querySelector("#restartMatchEndBtn");
const rematchHarderBtn = document.querySelector("#rematchHarderBtn");
const continueCompetitionBtn = document.querySelector("#continueCompetitionBtn");
const matchEndMenuBtn = document.querySelector("#matchEndMenuBtn");
const createOnlineLinkBtn = document.querySelector("#createOnlineLinkBtn");
const joinOnlineLinkEl = document.querySelector("#joinOnlineLink");
const onlineStatusEl = document.querySelector("#onlineStatus");
const leagueNameEl = document.querySelector("#leagueName");
const leagueFormatEl = document.querySelector("#leagueFormat");
const createLeagueBtn = document.querySelector("#createLeagueBtn");
const leagueStatusEl = document.querySelector("#leagueStatus");
const openLockerSetupBtn = document.querySelector("#openLockerSetupBtn");
const prepareLineupBtn = document.querySelector("#prepareLineupBtn");
const startMatchBtn = document.querySelector("#startMatchBtn");
const styleBackBtn = document.querySelector("#styleBackBtn");
const startPreparedBtn = document.querySelector("#startPreparedBtn");
const lockerBtn = document.querySelector("#lockerBtn");
const lockerChangeBtn = document.querySelector("#lockerChangeBtn");
const lockerDialog = document.querySelector("#lockerDialog");
const closeLockerBtn = document.querySelector("#closeLockerBtn");
const lockerAudioBtn = document.querySelector("#lockerAudioBtn");
const teamTalkInput = document.querySelector("#teamTalkInput");
const saveTeamTalkBtn = document.querySelector("#saveTeamTalkBtn");
const saveLockerBtn = document.querySelector("#saveLockerBtn");
const lockerStatusEl = document.querySelector("#lockerStatus");
const lockerPlayerPreviewEl = document.querySelector("#lockerPlayerPreview");
const tacticBoardEl = document.querySelector("#tacticBoard");
const lockerBenchListEl = document.querySelector("#lockerBenchList");
const lockerOutSelectEl = document.querySelector("#lockerOutSelect");
const lockerInSelectEl = document.querySelector("#lockerInSelect");
let duelRevealClearTimer = null;
let duelRevealOverlayTimer = null;
let shotRevealClearTimer = null;
const lockerApplyChangeBtn = document.querySelector("#lockerApplyChangeBtn");

let board = { width: 5, height: 10 };
const languageStorageKey = "dtDigitalLanguage";
let currentLanguage = localStorage.getItem(languageStorageKey) || "es";
const uiText = {
  es: {
    language: "Idioma",
    audio: "Audio",
    soundOn: "SONIDO ON",
    soundOff: "SONIDO",
    firstHalf: "Primer tiempo",
    secondHalf: "Segundo tiempo",
    preview: "Previa",
    final: "Final",
    time: "Tiempo",
    turn: "Turno",
    piece: "Ficha",
    squad: "Plantel",
    move: "Mover",
    moveBall: "Mover con balon",
    pass: "Pase",
    shot: "Remate",
    endTurn: "Finalizar turno",
    abilities: "Capacidades",
    reference: "Referencia",
    bench: "Banco",
    history: "Historial",
    specialCards: "Cartas especiales",
    duelCards: "Cartas de disputa",
    shotCards: "Cartas de remate / arquero",
    duelZone: "Zona de duelo disputa",
    shotZone: "Zona de duelo remate / arquero",
    selectPiece: "Selecciona una ficha",
    fieldPlayers: "en cancha",
    substitutes: "suplentes",
    roleARQ: "Arquero",
    roleDEF: "Defensor",
    roleVOL: "Volante",
    roleEXT: "Extremo",
    roleMP: "Media punta",
    roleDEL: "Delantero",
    substitute: "suplente",
    skillCard: "Jugada Habilidosa",
    longShotCard: "Remate Larga Distancia",
    secondMoveCard: "Segundo Movimiento",
    ownFront: "Frente propio",
    rivalBack: "Dorso rival",
    rivalFront: "Frente rival",
    duelRevealTitle: "Disputa",
    duelRevealWaiting: "Tu carta queda visible. La rival sigue tapada...",
    duelRevealShown: "Duelo revelado: {mine} vs {rival}.",
    shotRevealTitle: "Remate / arquero",
    shotRevealWaitingShooter: "Tu remate queda visible. La carta del arquero sigue tapada...",
    shotRevealWaitingKeeper: "Tu carta de arquero queda visible. El remate sigue tapado...",
    shotRevealShown: "Remate revelado: {shot} vs arquero {keeper}.",
    shotRevealLongShown: "Remate revelado: {shot} vs arquero {keeper} / rebote {rebound}.",
    shooterBack: "Dorso rematador",
    shooterFront: "Frente rematador",
    keeperBack: "Dorso arquero",
    keeperFront: "Frente arquero",
    shotLabel: "Remate",
    noDuel: "Sin disputa activa.",
    noShot: "Sin remate activo.",
    stylePrompt: "Selecciona el estilo de juego:",
    strategyTitle: "DT: Estratega",
    strategyDesc: "Juego tactico, movimientos estandar",
    intensityTitle: "DT: Intensidad",
    intensityDesc: "Juego dinamico, capacidades ampliadas",
    physicalTitle: "DT: Fisico",
    physicalDesc: "Soporte para tablero real, reloj y competencia"
  },
  en: {
    language: "Language",
    audio: "Audio",
    soundOn: "SOUND ON",
    soundOff: "SOUND",
    firstHalf: "First half",
    secondHalf: "Second half",
    preview: "Preview",
    final: "Final",
    time: "Time",
    turn: "Turn",
    piece: "Piece",
    squad: "Squad",
    move: "Move",
    moveBall: "Move with ball",
    pass: "Pass",
    shot: "Shoot",
    endTurn: "End turn",
    abilities: "Abilities",
    reference: "Reference",
    bench: "Bench",
    history: "History",
    specialCards: "Special cards",
    duelCards: "Duel cards",
    shotCards: "Shot / keeper cards",
    duelZone: "Duel reveal zone",
    shotZone: "Shot / keeper reveal zone",
    selectPiece: "Select a piece",
    fieldPlayers: "on field",
    substitutes: "subs",
    roleARQ: "Keeper",
    roleDEF: "Defender",
    roleVOL: "Midfielder",
    roleEXT: "Winger",
    roleMP: "Attacking mid",
    roleDEL: "Forward",
    substitute: "sub",
    skillCard: "Skill play",
    longShotCard: "Long-range shot",
    secondMoveCard: "Second move",
    ownFront: "Your front",
    rivalBack: "Rival back",
    rivalFront: "Rival front",
    duelRevealTitle: "Duel",
    duelRevealWaiting: "Your card is visible. The rival card stays hidden...",
    duelRevealShown: "Duel revealed: {mine} vs {rival}.",
    shotRevealTitle: "Shot / keeper",
    shotRevealWaitingShooter: "Your shot card is visible. The keeper card stays hidden...",
    shotRevealWaitingKeeper: "Your keeper card is visible. The shot stays hidden...",
    shotRevealShown: "Shot revealed: {shot} vs keeper {keeper}.",
    shotRevealLongShown: "Shot revealed: {shot} vs keeper {keeper} / rebound {rebound}.",
    shooterBack: "Shooter back",
    shooterFront: "Shooter front",
    keeperBack: "Keeper back",
    keeperFront: "Keeper front",
    shotLabel: "Shot",
    noDuel: "No active duel.",
    noShot: "No active shot.",
    stylePrompt: "Select game style:",
    strategyTitle: "DT: Strategy",
    strategyDesc: "Tactical game, standard moves",
    intensityTitle: "DT: Intensity",
    intensityDesc: "Dynamic game, expanded abilities",
    physicalTitle: "DT: Physical",
    physicalDesc: "Real board support, clock and competition"
  },
  pt: {
    language: "Idioma",
    audio: "Audio",
    soundOn: "SOM ON",
    soundOff: "SOM",
    firstHalf: "Primeiro tempo",
    secondHalf: "Segundo tempo",
    preview: "Previa",
    final: "Final",
    time: "Tempo",
    turn: "Turno",
    piece: "Peca",
    squad: "Elenco",
    move: "Mover",
    moveBall: "Mover com bola",
    pass: "Passe",
    shot: "Chute",
    endTurn: "Finalizar turno",
    abilities: "Capacidades",
    reference: "Referencia",
    bench: "Banco",
    history: "Historico",
    specialCards: "Cartas especiais",
    duelCards: "Cartas de disputa",
    shotCards: "Cartas de chute / goleiro",
    duelZone: "Zona de duelo",
    shotZone: "Zona de chute / goleiro",
    selectPiece: "Selecione uma peca",
    fieldPlayers: "em campo",
    substitutes: "reservas",
    roleARQ: "Goleiro",
    roleDEF: "Defensor",
    roleVOL: "Meio-campo",
    roleEXT: "Ponta",
    roleMP: "Meia atacante",
    roleDEL: "Atacante",
    substitute: "reserva",
    skillCard: "Jogada habilidosa",
    longShotCard: "Chute de longa distancia",
    secondMoveCard: "Segundo movimento",
    ownFront: "Frente proprio",
    rivalBack: "Verso rival",
    rivalFront: "Frente rival",
    duelRevealTitle: "Disputa",
    duelRevealWaiting: "Sua carta fica visivel. A carta rival segue tapada...",
    duelRevealShown: "Duelo revelado: {mine} vs {rival}.",
    shotRevealTitle: "Chute / goleiro",
    shotRevealWaitingShooter: "Sua carta de chute fica visivel. A carta do goleiro segue tapada...",
    shotRevealWaitingKeeper: "Sua carta de goleiro fica visivel. O chute segue tapado...",
    shotRevealShown: "Chute revelado: {shot} vs goleiro {keeper}.",
    shotRevealLongShown: "Chute revelado: {shot} vs goleiro {keeper} / rebote {rebound}.",
    shooterBack: "Verso atacante",
    shooterFront: "Frente atacante",
    keeperBack: "Verso goleiro",
    keeperFront: "Frente goleiro",
    shotLabel: "Chute",
    noDuel: "Sem disputa ativa.",
    noShot: "Sem chute ativo.",
    stylePrompt: "Selecione o estilo de jogo:",
    strategyTitle: "DT: Estrategia",
    strategyDesc: "Jogo tatico, movimentos padrao",
    intensityTitle: "DT: Intensidade",
    intensityDesc: "Jogo dinamico, capacidades ampliadas",
    physicalTitle: "DT: Fisico",
    physicalDesc: "Suporte para tabuleiro real, relogio e competicao"
  }
};

Object.assign(uiText.es, {
  setupConfigure: "Configurar partido",
  setupTitle: "DT Digital",
  identificationTitle: "Identificacion",
  identificationNote: "El perfil queda registrado en este dispositivo para validar cuenta, equipo, ranking y futuras competencias.",
  userLabel: "Usuario",
  teamUniqueLabel: "Equipo unico",
  dniLabel: "DNI",
  phoneLabel: "Telefono",
  emailLabel: "Mail",
  addressLabel: "Direccion",
  countryLabel: "Pais",
  mfaCodeLabel: "Codigo MFA",
  registerLogin: "Registrar / ingresar",
  newProfile: "Nuevo perfil",
  setupLoginPrompt: "Primero registra el usuario para habilitar modos de juego. Los registros quedan guardados por navegador/dispositivo.",
  registeredTeams: "Equipos registrados",
  noRegisteredTeams: "Todavia no hay equipos registrados.",
  player1: "Jugador 1",
  player2: "Jugador 2",
  activeProfile: "Perfil activo",
  guest: "Invitado",
  initialRank: "Rango inicial",
  modeTitle: "Modo",
  localMode: "1 vs 1 local",
  aiMode: "1 vs Maquina",
  onlineMode: "Online / enlace",
  leagueMode: "Liga",
  localPlayer2Title: "Jugador 2 local",
  localPlayer2Note: "Para 1 vs 1 local el segundo DT debe estar registrado y autenticado por equipo unico + MFA.",
  player2TeamLabel: "Equipo jugador 2",
  player2MfaLabel: "Codigo MFA jugador 2",
  validatePlayer2: "Validar jugador 2",
  onlineTitle: "Online / enlace",
  onlineNote: "Este modo no inicia partida directa: crea un vinculo para compartir o permite pegar uno recibido.",
  createOnlineLink: "Crear enlace de partida",
  receivedLink: "Enlace recibido",
  leagueSetupTitle: "Liga / torneo",
  leagueSetupNote: "El administrador autenticado crea la competencia, invita equipos y define formato, llaves y fechas.",
  leagueNameLabel: "Nombre liga",
  formatLabel: "Formato",
  formatFixture: "Fixture todos contra todos",
  formatKnockout: "Llaves eliminatorias",
  formatLocal: "Torneo local en un dispositivo",
  createLeague: "Crear liga",
  aiDifficultyTitle: "Dificultad IA",
  easy: "Facil",
  medium: "Medio",
  hard: "Dificil",
  aiCompetitionTitle: "Competencia IA",
  aiCompetitionNote: "Opcional para jugar contra la maquina con continuidad, dificultad progresiva y codigo de competencia.",
  friendlyMatch: "Partido unico",
  cup8: "Copa IA 8",
  league10: "Liga IA 10",
  competitionCodeLabel: "Codigo competencia",
  resume: "Retomar",
  abandonCompetition: "Abandonar competencia",
  formationTitle: "Formacion",
  durationTitle: "Duracion",
  durationNote: "La duracion solo inicia cancha en 1 vs 1 local o 1 vs Maquina.",
  duration5: "5 minutos por tiempo",
  duration10: "10 minutos por tiempo",
  duration15: "15 minutos por tiempo",
  duration30: "30 minutos por tiempo",
  duration45: "45 minutos por tiempo",
  lockerEnter: "Entrar al vestuario",
  lineupPrepare: "Preparar alineacion en cancha",
  backToStyles: "Volver a estilos",
  startMatch: "Iniciar partido",
  physEyebrow: "DT Fisico",
  physTitle: "Soporte para juego fisico",
  physIntro: "Registra equipos, crea desafios o competencias, define tiempos por periodo y carga el resultado del partido jugado en tablero real.",
  showClock: "Ver reloj",
  registerTitle: "Registro",
  physicalNote: "Esta capa simula el registro local. En la version online estos datos pasaran a base de datos, validacion MFA y ranking global.",
  authMethodLabel: "Metodo de identidad",
  authMfa: "Codigo MFA",
  authFingerprint: "Huella digital",
  authFace: "Reconocimiento de rostro",
  validateIdentity: "Validar identidad",
  validateAuthority: "Validar autoridad",
  registerTeam: "Registrar equipo",
  teamAuthPending: "Identidad del DT pendiente de validar.",
  teamsRegistered: "Equipos registrados",
  officialTitle: "Veedor / arbitro",
  officialName: "Nombre",
  officialRole: "Rol",
  officialCode: "Codigo validacion",
  officialPending: "Autoridad pendiente de validar.",
  registerOfficial: "Registrar veedor",
  officials: "Autoridades",
  competitionTitle: "Competencia",
  competitionName: "Nombre competencia",
  competitionType: "Tipo",
  competitionCode: "Codigo competencia",
  challenge1v1: "Desafio 1 vs 1",
  leagueTable: "Liga / tabla",
  cupBracket: "Copa / llave",
  generateCode: "Generar codigo",
  createCompetition: "Crear / actualizar competencia",
  inviteTitle: "Invitacion de registro",
  invitedTeam: "Equipo invitado",
  generatedLink: "Link generado",
  generateLink: "Generar link",
  invitePending: "El organizador puede enviar un link para que el DT complete registro y autenticacion.",
  physicalMatchTitle: "Partido fisico",
  homeTeam: "Equipo local",
  awayTeam: "Equipo visitante",
  observer: "Veedor",
  prepareClock: "Preparar reloj del partido",
  physicalStatusReady: "Registra al menos dos equipos para preparar un partido fisico.",
  matchAct: "Acta del partido",
  noCompetition: "Sin competencia",
  local: "Local",
  visitor: "Visitante",
  homeGoal: "Gol local",
  awayGoal: "Gol visitante",
  startResume: "Iniciar / reanudar",
  pause: "Pausar",
  changeHalf: "Cambiar tiempo",
  finishAndSave: "Finalizar y guardar",
  newMatch: "Nuevo partido",
  matchLogTitle: "Acta / eventos",
  statusTitle: "Estado",
  matchReady: "Reloj preparado.",
  evidenceLabel: "Foto o video corto",
  attachEvidence: "Adjuntar evidencia",
  chooseHome: "Elegir local",
  chooseAway: "Elegir visitante",
  noObserver: "Sin veedor asignado",
  localPlayer2Pending: "Jugador 2 pendiente de autenticar.",
  onlinePending: "Pendiente de sincronizacion online profesional.",
  leaguePending: "Pendiente de backend: usuarios, equipos, fixture, tabla y ranking global.",
  singleMatchSelected: "Partido unico seleccionado.",
  strategyStyleName: "DT Estratega",
  intensityStyleName: "DT Intensidad",
  styleSelected: "{style} seleccionado. Ahora registra o elige tus equipos.",
  durationSelected: "Duracion seleccionada: {minutes} minutos por tiempo. Primer paso recomendado: entrar al vestuario.",
  competitionNeedsProfile: "Primero registra o activa un equipo para crear una competencia IA.",
  competitionCreated: "{type} creada. Codigo {code}.",
  competitionNotFound: "No se encontro una competencia guardada con ese codigo en este dispositivo.",
  competitionResumed: "Competencia retomada: {code}.",
  cupQuarter: "Cuartos de final",
  cupSemi: "Semifinal",
  cupFinal: "Final",
  leagueRound: "Fecha {round}",
  cupEliminated: "Copa IA 8: quedaste eliminado en {stage}. Codigo {code}.",
  cupChampion: "Copa IA 8: campeon {team}. Codigo {code}.",
  cupWonNext: "Copa IA 8: ganaste {stage}. Proxima instancia: {next}.",
  leagueChampionPlayer: "Liga IA 10: campeon {team}.",
  leagueFinishedChampion: "Liga IA 10 finalizada. Campeon: {team}.",
  leagueResultLoaded: "Liga IA 10: resultado cargado. Proxima fecha: {next}.",
  nextRival: "Proximo rival: {rival}. Dificultad {difficulty}.",
  competitionCompleteChampion: "Competencia completada: campeon.",
  competitionCompleteEliminated: "Competencia completada: eliminado.",
  competitionComplete: "Competencia completada.",
  codeLabel: "Codigo",
  rematchAi: "Revancha IA {difficulty}",
  rematchAiLevelUp: "Revancha IA {difficulty} - sube nivel",
  mfaMinCode: "Para MFA ingresa un codigo de al menos 4 digitos.",
  physicalAuthMfaValid: "Codigo MFA validado para este registro.",
  physicalAuthSimValid: "{method} simulado y validado para este prototipo.",
  physicalStandingsEmptyCompetition: "Crea una competencia para ver tabla, actas y codigo.",
  physicalNoTeamsInTable: "Sin equipos cargados en la tabla.",
  physicalTypeLeague: "Liga",
  physicalTypeCup: "Copa",
  physicalTypeChallenge: "Desafio",
  physicalValidated: "validado",
  physicalMatchFinishedSaved: "Partido finalizado y guardado en el acta local.",
  physicalClockRunning: "Reloj corriendo",
  physicalClockPaused: "Reloj pausado",
  observerPrefix: "Veedor",
  completeTeamRegister: "Completa DT y equipo unico para registrar.",
  validateDtIdentityFirst: "Primero valida la identidad del DT con MFA, huella o rostro.",
  completeValidMfa: "Completa un codigo MFA valido para registrar.",
  teamRegisteredPhysical: "{team} queda registrado para desafios fisicos y competencias.",
  completeOfficialName: "Completa nombre para validar al veedor/arbitro.",
  validateAuthorityFirst: "Primero valida la autoridad con MFA, huella o rostro.",
  completeValidOfficialCode: "Completa un codigo de validacion valido.",
  officialRegisteredPhysical: "{name} queda registrado como {role} validado para cargar actas.",
  physicalDefaultCompetition: "Competencia DT Fisico",
  physicalCompetitionCreated: "{name} creada. Codigo para retomar/cargar desde otro dispositivo: {code}.",
  chooseDifferentTeams: "Elegi dos equipos distintos para preparar el partido.",
  teamsAuthRequired: "Los dos equipos deben estar registrados y autenticados para jugar competencia fisica.",
  observerAuthRequired: "El veedor/arbitro seleccionado debe estar autenticado por la organizacion.",
  physicalMatchPrepared: "Reloj de partido preparado. Inicia cuando el arbitro/veedor lo indique.",
  physicalMatchEventCreated: "Acta creada: {home} vs {away}. Duracion {duration} minutos por tiempo.",
  inviteNeedsCompetition: "Primero crea o selecciona una competencia para generar invitacion.",
  physicalInviteDefaultTeam: "equipo-invitado",
  inviteCreated: "Link creado para {team}. El DT completa registro y autenticacion antes de jugar.",
  evidenceNeedsMatch: "Primero prepara un partido para adjuntar evidencia.",
  onlineNeedsProfile: "Primero registra el usuario para crear un enlace.",
  onlineLinkCreated: "Enlace creado para compartir: {link}",
  onlineLinkReceived: "Enlace recibido. En version online se sincronizaria como 1 vs 1 remoto.",
  onlinePasteLink: "Pega un enlace recibido para vincular la partida.",
  leagueNeedsAdmin: "Primero registra el administrador de la liga.",
  leagueCreated: "{name} creada por {admin}. Formato: {format}. Proximo paso: invitar equipos y cerrar inscripcion."
});

Object.assign(uiText.en, {
  setupConfigure: "Set up match",
  setupTitle: "DT Digital",
  identificationTitle: "Identification",
  identificationNote: "The profile is saved on this device to validate account, team, ranking and future competitions.",
  userLabel: "User",
  teamUniqueLabel: "Unique team",
  dniLabel: "ID",
  phoneLabel: "Phone",
  emailLabel: "Email",
  addressLabel: "Address",
  countryLabel: "Country",
  mfaCodeLabel: "MFA code",
  registerLogin: "Register / sign in",
  newProfile: "New profile",
  setupLoginPrompt: "First register the user to enable game modes. Records are saved by browser/device.",
  registeredTeams: "Registered teams",
  noRegisteredTeams: "No registered teams yet.",
  player1: "Player 1",
  player2: "Player 2",
  activeProfile: "Active profile",
  guest: "Guest",
  initialRank: "Initial rank",
  modeTitle: "Mode",
  localMode: "Local 1 vs 1",
  aiMode: "1 vs Machine",
  onlineMode: "Online / link",
  leagueMode: "League",
  localPlayer2Title: "Local player 2",
  localPlayer2Note: "For local 1 vs 1, the second DT must be registered and authenticated by unique team + MFA.",
  player2TeamLabel: "Player 2 team",
  player2MfaLabel: "Player 2 MFA code",
  validatePlayer2: "Validate player 2",
  onlineTitle: "Online / link",
  onlineNote: "This mode does not start a direct match: create a link to share or paste one you received.",
  createOnlineLink: "Create match link",
  receivedLink: "Received link",
  leagueSetupTitle: "League / tournament",
  leagueSetupNote: "The authenticated admin creates the competition, invites teams and defines format, bracket and dates.",
  leagueNameLabel: "League name",
  formatLabel: "Format",
  formatFixture: "Round-robin fixture",
  formatKnockout: "Knockout bracket",
  formatLocal: "Local tournament on one device",
  createLeague: "Create league",
  aiDifficultyTitle: "AI difficulty",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  aiCompetitionTitle: "AI competition",
  aiCompetitionNote: "Optional continuity mode against the machine with progressive difficulty and competition code.",
  friendlyMatch: "Single match",
  cup8: "AI Cup 8",
  league10: "AI League 10",
  competitionCodeLabel: "Competition code",
  resume: "Resume",
  abandonCompetition: "Abandon competition",
  formationTitle: "Formation",
  durationTitle: "Duration",
  durationNote: "Duration starts the field only in local 1 vs 1 or 1 vs Machine.",
  duration5: "5 minutes per half",
  duration10: "10 minutes per half",
  duration15: "15 minutes per half",
  duration30: "30 minutes per half",
  duration45: "45 minutes per half",
  lockerEnter: "Enter locker room",
  lineupPrepare: "Prepare lineup on field",
  backToStyles: "Back to styles",
  startMatch: "Start match",
  physEyebrow: "Physical DT",
  physTitle: "Physical game support",
  physIntro: "Register teams, create challenges or competitions, define half lengths and record the score from the real board match.",
  showClock: "Show clock",
  registerTitle: "Registration",
  physicalNote: "This layer simulates local registration. Online, these records will move to database, MFA validation and global ranking.",
  authMethodLabel: "Identity method",
  authMfa: "MFA code",
  authFingerprint: "Fingerprint",
  authFace: "Face recognition",
  validateIdentity: "Validate identity",
  validateAuthority: "Validate authority",
  registerTeam: "Register team",
  teamAuthPending: "DT identity validation pending.",
  teamsRegistered: "Registered teams",
  officialTitle: "Observer / referee",
  officialName: "Name",
  officialRole: "Role",
  officialCode: "Validation code",
  officialPending: "Authority validation pending.",
  registerOfficial: "Register observer",
  officials: "Authorities",
  competitionTitle: "Competition",
  competitionName: "Competition name",
  competitionType: "Type",
  competitionCode: "Competition code",
  challenge1v1: "1 vs 1 challenge",
  leagueTable: "League / table",
  cupBracket: "Cup / bracket",
  generateCode: "Generate code",
  createCompetition: "Create / update competition",
  inviteTitle: "Registration invite",
  invitedTeam: "Invited team",
  generatedLink: "Generated link",
  generateLink: "Generate link",
  invitePending: "The organizer can send a link so the DT completes registration and authentication.",
  physicalMatchTitle: "Physical match",
  homeTeam: "Home team",
  awayTeam: "Away team",
  observer: "Observer",
  prepareClock: "Prepare match clock",
  physicalStatusReady: "Register at least two teams to prepare a physical match.",
  matchAct: "Match report",
  noCompetition: "No competition",
  local: "Home",
  visitor: "Away",
  homeGoal: "Home goal",
  awayGoal: "Away goal",
  startResume: "Start / resume",
  pause: "Pause",
  changeHalf: "Change half",
  finishAndSave: "Finish and save",
  newMatch: "New match",
  matchLogTitle: "Report / events",
  statusTitle: "Status",
  matchReady: "Clock ready.",
  evidenceLabel: "Photo or short video",
  attachEvidence: "Attach evidence",
  chooseHome: "Choose home",
  chooseAway: "Choose away",
  noObserver: "No observer assigned",
  localPlayer2Pending: "Player 2 pending authentication.",
  onlinePending: "Professional online sync pending.",
  leaguePending: "Backend pending: users, teams, fixture, table and global ranking.",
  singleMatchSelected: "Single match selected.",
  strategyStyleName: "DT Strategy",
  intensityStyleName: "DT Intensity",
  styleSelected: "{style} selected. Now register or choose your teams.",
  durationSelected: "Duration selected: {minutes} minutes per half. Recommended first step: enter the locker room.",
  competitionNeedsProfile: "First register or activate a team to create an AI competition.",
  competitionCreated: "{type} created. Code {code}.",
  competitionNotFound: "No saved competition with that code was found on this device.",
  competitionResumed: "Competition resumed: {code}.",
  cupQuarter: "Quarterfinal",
  cupSemi: "Semifinal",
  cupFinal: "Final",
  leagueRound: "Round {round}",
  cupEliminated: "AI Cup 8: you were eliminated in the {stage}. Code {code}.",
  cupChampion: "AI Cup 8: champion {team}. Code {code}.",
  cupWonNext: "AI Cup 8: you won the {stage}. Next stage: {next}.",
  leagueChampionPlayer: "AI League 10: champion {team}.",
  leagueFinishedChampion: "AI League 10 finished. Champion: {team}.",
  leagueResultLoaded: "AI League 10: result loaded. Next round: {next}.",
  nextRival: "Next rival: {rival}. Difficulty {difficulty}.",
  competitionCompleteChampion: "Competition complete: champion.",
  competitionCompleteEliminated: "Competition complete: eliminated.",
  competitionComplete: "Competition complete.",
  codeLabel: "Code",
  rematchAi: "AI rematch {difficulty}",
  rematchAiLevelUp: "AI rematch {difficulty} - level up",
  mfaMinCode: "For MFA enter a code with at least 4 digits.",
  physicalAuthMfaValid: "MFA code validated for this record.",
  physicalAuthSimValid: "{method} simulated and validated for this prototype.",
  physicalStandingsEmptyCompetition: "Create a competition to view table, reports and code.",
  physicalNoTeamsInTable: "No teams loaded in the table.",
  physicalTypeLeague: "League",
  physicalTypeCup: "Cup",
  physicalTypeChallenge: "Challenge",
  physicalValidated: "validated",
  physicalMatchFinishedSaved: "Match finished and saved in the local report.",
  physicalClockRunning: "Clock running",
  physicalClockPaused: "Clock paused",
  observerPrefix: "Observer",
  completeTeamRegister: "Complete DT and unique team to register.",
  validateDtIdentityFirst: "First validate the DT identity with MFA, fingerprint or face.",
  completeValidMfa: "Complete a valid MFA code to register.",
  teamRegisteredPhysical: "{team} is registered for physical challenges and competitions.",
  completeOfficialName: "Complete the name to validate the observer/referee.",
  validateAuthorityFirst: "First validate the authority with MFA, fingerprint or face.",
  completeValidOfficialCode: "Complete a valid validation code.",
  officialRegisteredPhysical: "{name} is registered as validated {role} to load reports.",
  physicalDefaultCompetition: "Physical DT Competition",
  physicalCompetitionCreated: "{name} created. Code to resume/load from another device: {code}.",
  chooseDifferentTeams: "Choose two different teams to prepare the match.",
  teamsAuthRequired: "Both teams must be registered and authenticated to play a physical competition.",
  observerAuthRequired: "The selected observer/referee must be authenticated by the organization.",
  physicalMatchPrepared: "Match clock prepared. Start it when the referee/observer says so.",
  physicalMatchEventCreated: "Report created: {home} vs {away}. Duration {duration} minutes per half.",
  inviteNeedsCompetition: "First create or select a competition to generate an invite.",
  physicalInviteDefaultTeam: "invited-team",
  inviteCreated: "Link created for {team}. The DT completes registration and authentication before playing.",
  evidenceNeedsMatch: "First prepare a match to attach evidence.",
  onlineNeedsProfile: "First register the user to create a link.",
  onlineLinkCreated: "Link created to share: {link}",
  onlineLinkReceived: "Link received. In the online version it would sync as remote 1 vs 1.",
  onlinePasteLink: "Paste a received link to pair the match.",
  leagueNeedsAdmin: "First register the league administrator.",
  leagueCreated: "{name} created by {admin}. Format: {format}. Next step: invite teams and close registration."
});

Object.assign(uiText.pt, {
  setupConfigure: "Configurar partida",
  setupTitle: "DT Digital",
  identificationTitle: "Identificacao",
  identificationNote: "O perfil fica salvo neste dispositivo para validar conta, equipe, ranking e futuras competicoes.",
  userLabel: "Usuario",
  teamUniqueLabel: "Equipe unica",
  dniLabel: "Documento",
  phoneLabel: "Telefone",
  emailLabel: "Email",
  addressLabel: "Endereco",
  countryLabel: "Pais",
  mfaCodeLabel: "Codigo MFA",
  registerLogin: "Registrar / entrar",
  newProfile: "Novo perfil",
  setupLoginPrompt: "Primeiro registre o usuario para habilitar modos de jogo. Os registros ficam salvos por navegador/dispositivo.",
  registeredTeams: "Equipes registradas",
  noRegisteredTeams: "Ainda nao ha equipes registradas.",
  player1: "Jogador 1",
  player2: "Jogador 2",
  activeProfile: "Perfil ativo",
  guest: "Convidado",
  initialRank: "Ranking inicial",
  modeTitle: "Modo",
  localMode: "1 vs 1 local",
  aiMode: "1 vs Maquina",
  onlineMode: "Online / link",
  leagueMode: "Liga",
  localPlayer2Title: "Jogador 2 local",
  localPlayer2Note: "Para 1 vs 1 local, o segundo DT deve estar registrado e autenticado por equipe unica + MFA.",
  player2TeamLabel: "Equipe jogador 2",
  player2MfaLabel: "Codigo MFA jogador 2",
  validatePlayer2: "Validar jogador 2",
  onlineTitle: "Online / link",
  onlineNote: "Este modo nao inicia partida direta: cria um link para compartilhar ou permite colar um recebido.",
  createOnlineLink: "Criar link da partida",
  receivedLink: "Link recebido",
  leagueSetupTitle: "Liga / torneio",
  leagueSetupNote: "O administrador autenticado cria a competicao, convida equipes e define formato, chaves e datas.",
  leagueNameLabel: "Nome da liga",
  formatLabel: "Formato",
  formatFixture: "Todos contra todos",
  formatKnockout: "Chaves eliminatorias",
  formatLocal: "Torneio local em um dispositivo",
  createLeague: "Criar liga",
  aiDifficultyTitle: "Dificuldade IA",
  easy: "Facil",
  medium: "Medio",
  hard: "Dificil",
  aiCompetitionTitle: "Competicao IA",
  aiCompetitionNote: "Opcional para jogar contra a maquina com continuidade, dificuldade progressiva e codigo de competicao.",
  friendlyMatch: "Partida unica",
  cup8: "Copa IA 8",
  league10: "Liga IA 10",
  competitionCodeLabel: "Codigo competicao",
  resume: "Retomar",
  abandonCompetition: "Abandonar competicao",
  formationTitle: "Formacao",
  durationTitle: "Duracao",
  durationNote: "A duracao so inicia campo em 1 vs 1 local ou 1 vs Maquina.",
  duration5: "5 minutos por tempo",
  duration10: "10 minutos por tempo",
  duration15: "15 minutos por tempo",
  duration30: "30 minutos por tempo",
  duration45: "45 minutos por tempo",
  lockerEnter: "Entrar no vestiario",
  lineupPrepare: "Preparar alinhamento em campo",
  backToStyles: "Voltar aos estilos",
  startMatch: "Iniciar partida",
  physEyebrow: "DT Fisico",
  physTitle: "Suporte para jogo fisico",
  physIntro: "Registre equipes, crie desafios ou competicoes, defina tempos por periodo e carregue o resultado da partida no tabuleiro real.",
  showClock: "Ver relogio",
  registerTitle: "Registro",
  physicalNote: "Esta camada simula o registro local. Na versao online estes dados irao para banco de dados, validacao MFA e ranking global.",
  authMethodLabel: "Metodo de identidade",
  authMfa: "Codigo MFA",
  authFingerprint: "Digital",
  authFace: "Reconhecimento facial",
  validateIdentity: "Validar identidade",
  validateAuthority: "Validar autoridade",
  registerTeam: "Registrar equipe",
  teamAuthPending: "Identidade do DT pendente de validar.",
  teamsRegistered: "Equipes registradas",
  officialTitle: "Observador / arbitro",
  officialName: "Nome",
  officialRole: "Funcao",
  officialCode: "Codigo validacao",
  officialPending: "Autoridade pendente de validar.",
  registerOfficial: "Registrar observador",
  officials: "Autoridades",
  competitionTitle: "Competicao",
  competitionName: "Nome competicao",
  competitionType: "Tipo",
  competitionCode: "Codigo competicao",
  challenge1v1: "Desafio 1 vs 1",
  leagueTable: "Liga / tabela",
  cupBracket: "Copa / chave",
  generateCode: "Gerar codigo",
  createCompetition: "Criar / atualizar competicao",
  inviteTitle: "Convite de registro",
  invitedTeam: "Equipe convidada",
  generatedLink: "Link gerado",
  generateLink: "Gerar link",
  invitePending: "O organizador pode enviar um link para o DT completar registro e autenticacao.",
  physicalMatchTitle: "Partida fisica",
  homeTeam: "Equipe local",
  awayTeam: "Equipe visitante",
  observer: "Observador",
  prepareClock: "Preparar relogio da partida",
  physicalStatusReady: "Registre pelo menos duas equipes para preparar uma partida fisica.",
  matchAct: "Sumula da partida",
  noCompetition: "Sem competicao",
  local: "Local",
  visitor: "Visitante",
  homeGoal: "Gol local",
  awayGoal: "Gol visitante",
  startResume: "Iniciar / retomar",
  pause: "Pausar",
  changeHalf: "Trocar tempo",
  finishAndSave: "Finalizar e salvar",
  newMatch: "Nova partida",
  matchLogTitle: "Sumula / eventos",
  statusTitle: "Estado",
  matchReady: "Relogio preparado.",
  evidenceLabel: "Foto ou video curto",
  attachEvidence: "Anexar evidencia",
  chooseHome: "Escolher local",
  chooseAway: "Escolher visitante",
  noObserver: "Sem observador designado",
  localPlayer2Pending: "Jogador 2 pendente de autenticacao.",
  onlinePending: "Sincronizacao online profissional pendente.",
  leaguePending: "Backend pendente: usuarios, equipes, calendario, tabela e ranking global.",
  singleMatchSelected: "Partida unica selecionada.",
  strategyStyleName: "DT Estrategia",
  intensityStyleName: "DT Intensidade",
  styleSelected: "{style} selecionado. Agora registre ou escolha suas equipes.",
  durationSelected: "Duracao selecionada: {minutes} minutos por tempo. Primeiro passo recomendado: entrar no vestiario.",
  competitionNeedsProfile: "Primeiro registre ou ative uma equipe para criar uma competicao IA.",
  competitionCreated: "{type} criada. Codigo {code}.",
  competitionNotFound: "Nao foi encontrada competicao salva com esse codigo neste dispositivo.",
  competitionResumed: "Competicao retomada: {code}.",
  cupQuarter: "Quartas de final",
  cupSemi: "Semifinal",
  cupFinal: "Final",
  leagueRound: "Rodada {round}",
  cupEliminated: "Copa IA 8: voce foi eliminado em {stage}. Codigo {code}.",
  cupChampion: "Copa IA 8: campeao {team}. Codigo {code}.",
  cupWonNext: "Copa IA 8: voce venceu {stage}. Proxima fase: {next}.",
  leagueChampionPlayer: "Liga IA 10: campeao {team}.",
  leagueFinishedChampion: "Liga IA 10 finalizada. Campeao: {team}.",
  leagueResultLoaded: "Liga IA 10: resultado carregado. Proxima rodada: {next}.",
  nextRival: "Proximo rival: {rival}. Dificuldade {difficulty}.",
  competitionCompleteChampion: "Competicao concluida: campeao.",
  competitionCompleteEliminated: "Competicao concluida: eliminado.",
  competitionComplete: "Competicao concluida.",
  codeLabel: "Codigo",
  rematchAi: "Revanche IA {difficulty}",
  rematchAiLevelUp: "Revanche IA {difficulty} - subir nivel",
  mfaMinCode: "Para MFA insira um codigo com pelo menos 4 digitos.",
  physicalAuthMfaValid: "Codigo MFA validado para este registro.",
  physicalAuthSimValid: "{method} simulado e validado para este prototipo.",
  physicalStandingsEmptyCompetition: "Crie uma competicao para ver tabela, sumulas e codigo.",
  physicalNoTeamsInTable: "Sem equipes carregadas na tabela.",
  physicalTypeLeague: "Liga",
  physicalTypeCup: "Copa",
  physicalTypeChallenge: "Desafio",
  physicalValidated: "validado",
  physicalMatchFinishedSaved: "Partida finalizada e salva na sumula local.",
  physicalClockRunning: "Relogio rodando",
  physicalClockPaused: "Relogio pausado",
  observerPrefix: "Observador",
  completeTeamRegister: "Complete DT e equipe unica para registrar.",
  validateDtIdentityFirst: "Primeiro valide a identidade do DT com MFA, digital ou rosto.",
  completeValidMfa: "Complete um codigo MFA valido para registrar.",
  teamRegisteredPhysical: "{team} fica registrada para desafios fisicos e competicoes.",
  completeOfficialName: "Complete o nome para validar o observador/arbitro.",
  validateAuthorityFirst: "Primeiro valide a autoridade com MFA, digital ou rosto.",
  completeValidOfficialCode: "Complete um codigo de validacao valido.",
  officialRegisteredPhysical: "{name} fica registrado como {role} validado para carregar sumulas.",
  physicalDefaultCompetition: "Competicao DT Fisico",
  physicalCompetitionCreated: "{name} criada. Codigo para retomar/carregar de outro dispositivo: {code}.",
  chooseDifferentTeams: "Escolha duas equipes diferentes para preparar a partida.",
  teamsAuthRequired: "As duas equipes devem estar registradas e autenticadas para jogar competicao fisica.",
  observerAuthRequired: "O observador/arbitro selecionado deve estar autenticado pela organizacao.",
  physicalMatchPrepared: "Relogio da partida preparado. Inicie quando o arbitro/observador indicar.",
  physicalMatchEventCreated: "Sumula criada: {home} vs {away}. Duracao {duration} minutos por tempo.",
  inviteNeedsCompetition: "Primeiro crie ou selecione uma competicao para gerar convite.",
  physicalInviteDefaultTeam: "equipe-convidada",
  inviteCreated: "Link criado para {team}. O DT completa registro e autenticacao antes de jogar.",
  evidenceNeedsMatch: "Primeiro prepare uma partida para anexar evidencia.",
  onlineNeedsProfile: "Primeiro registre o usuario para criar um link.",
  onlineLinkCreated: "Link criado para compartilhar: {link}",
  onlineLinkReceived: "Link recebido. Na versao online sincronizaria como 1 vs 1 remoto.",
  onlinePasteLink: "Cole um link recebido para vincular a partida.",
  leagueNeedsAdmin: "Primeiro registre o administrador da liga.",
  leagueCreated: "{name} criada por {admin}. Formato: {format}. Proximo passo: convidar equipes e fechar inscricao."
});

Object.assign(uiText.es, {
  profileMissingFields: "Completa usuario, equipo unico, DNI, telefono, mail, direccion, pais y codigo MFA.",
  profileMfaMismatch: "Ese equipo ya existe. Para ingresar o actualizarlo, el codigo MFA debe coincidir.",
  newProfilePrompt: "Carga los datos del nuevo equipo. Los perfiles anteriores quedan en equipos registrados.",
  player2TeamLoaded: "Equipo cargado para jugador 2: {team}. Ingresa su MFA y valida.",
  registerPlayer1First: "Primero registra el jugador 1.",
  player2TeamAndMfaRequired: "Ingresa el nombre exacto del equipo y su codigo MFA.",
  player2TeamNotFound: "No se encontro un equipo registrado con ese nombre en este dispositivo.",
  player2MustDiffer: "El jugador 2 debe ser un usuario distinto al jugador 1.",
  player2MfaWrong: "Codigo MFA incorrecto para ese equipo.",
  player2Authenticated: "Jugador 2 autenticado: {name} / {team}.",
  registerUserFirstTitle: "Primero registra usuario.",
  localModeNeedsTwoProfilesTitle: "Selecciona para cargar segundo equipo; no inicia hasta registrar dos.",
  onlineNoDirectStartTitle: "Online crea o recibe enlace; no inicia cancha directa.",
  leagueNoDirectStartTitle: "Liga se configura desde administrador y calendario.",
  startGameTitle: "Iniciar partido",
  setupStartNeedsProfile: "Primero registra el usuario antes de iniciar una partida.",
  localNeedsTwoTeams: "Para 1 vs 1 local primero registra al menos dos equipos.",
  localNeedsPlayer2Auth: "Para 1 vs 1 local debe autenticarse el jugador 2 registrado.",
  onlineNoDirectStart: "Online/enlace no inicia cancha directa: crea o pega un enlace para vincular jugadores.",
  leagueNoDirectStart: "Liga requiere administrador, equipos registrados, formato y calendario antes de jugar.",
  setupLineupNeedsProfile: "Primero registra el usuario antes de preparar la alineacion.",
  setupLineupLocalNeedsAuth: "Para preparar 1 vs 1 local autentica tambien el jugador 2.",
  lineupMode: "Modo alineacion: arrastra los jugadores antes de iniciar el partido.",
  physicalDurationSelected: "Duracion fisica seleccionada: {minutes} minutos por tiempo.",
  noPhysicalClockPrepared: "Todavia no hay un reloj preparado. Registra equipos y prepara el partido.",
  standingsStats: "PJ {played} / G {won} / E {drawn} / P {lost} / DG {goalDiff} / Pts {points}",
  fileFallback: "archivo",
  evidenceSelectedMissing: "Selecciona una foto o video corto para adjuntar.",
  evidenceTooLarge: "El archivo supera {maxSizeMb} MB. Usa una foto o video mas corto.",
  evidenceAttached: "Evidencia adjunta al acta local del encuentro.",
  evidenceAttachedEvent: "Evidencia adjunta: {file}.",
  physicalEndFirstHalf: "Fin del primer tiempo.",
  physicalEndMatch: "Fin del partido.",
  physicalSecondHalfPrep: "Comienza preparacion del segundo tiempo. Cambios permitidos con reloj detenido.",
  physicalGoalEvent: "Gol de {team}. Resultado {home}-{away}.",
  physicalClockResume: "Se reanuda el reloj.",
  physicalClockPauseEvent: "Reloj pausado por cambio, consulta o carga de acta.",
  physicalTie: "Empate",
  physicalWinner: "Ganador: {team}",
  physicalFinalEvent: "Final del encuentro. {result}. Resultado {home} {homeScore}-{awayScore} {away}.",
  physicalOfficialFallback: "Sin veedor",
  teamFallback: "equipo",
  defaultTeamName: "Equipo DT",
  defaultLeagueName: "Liga DT",
  unknownChampion: "por definir",
  lockerStatusActive: "Vestuario de {team}.",
  lockerStatusPreview: "Podes previsualizar el vestuario; registra un equipo para guardar charlas.",
  lockerSaved: "Vestuario guardado. La proxima salida a cancha toma esta tactica, visual y ambiente.",
  benchEmpty: "Sin suplentes cargados",
  lockerChangeSelect: "Selecciona quien sale y quien entra para preparar el cambio.",
  lockerChangeMissing: "No se encontro una de las fichas del cambio.",
  lockerChangePrepared: "Cambio preparado: sale {outRole}, entra {inRole}.",
  teamTalkNeedsProfile: "Registra o activa un equipo antes de guardar la charla tecnica.",
  teamTalkNeedsText: "Escribe una charla tecnica antes de guardarla.",
  teamTalkSaved: "Charla guardada para {team}.",
  keeperChooseCard: "Arquero elige carta 1-4",
  shooterChooseCard: "Rematador elige carta 1-4",
  humanKeeperChooseCard: "Elegi carta de arquero 1-4",
  shotCardChooseKeeper: "Elegir carta del arquero",
  shotCardChooseShooter: "Elegir carta del rematador",
  shotKeeperCard: "Carta de remate/arquero",
  observerRole: "Veedor",
  refereeRole: "Arbitro",
  organizerRole: "Organizador",
  shotLongDeclaredLog: "Remate larga distancia declarado a distancia {distance}. Rematador elige 1 carta; arquero elegira atajada y rebote.",
  shotDeclaredLog: "Remate declarado a distancia {distance}. El rematador elige carta 1-4.",
  shotCardSelectedLog: "Carta de remate/arquero seleccionada: {card}.",
  shooterHiddenKeeperDirect: "Rematador eligio carta tapada. Arquero elige carta de atajada directa.",
  shooterHiddenKeeperChoose: "Rematador eligio carta tapada. Ahora el arquero elige 1-4.",
  keeperSecretTitle: "Turno del arquero",
  keeperSecretMessage: "Carta de remate guardada y tapada. Entrega el dispositivo al arquero.",
  keeperReboundChoose: "Arquero eligio carta de atajada tapada. Ahora elige carta de rebote.",
  saveLog: "Atajada: el arquero acerto la carta {card}.",
  saveBannerTitle: "ATAJADA",
  saveBannerText: "El arquero {team} se quedo con el balon.",
  saveResult: "Atajada: arquero {keeper} contra remate {shot}.",
  reboundLog: "Rebote: arquero acerto carta {card}. La pelota queda a dos cuadrantes del arquero.",
  reboundResult: "Rebote: remate {shot}, atajada {keeper}, rebote {rebound}.",
  shotGoalLog: "Gol: remate {shot}, arquero {keeper}.",
  shotGoalResult: "Gol: remate {shot}, arquero {keeper}.",
  competitionFormatUpdated: "Formato actualizado a Liga IA 10 / Copa IA 8. Se conserva el codigo de competencia."
});

Object.assign(uiText.en, {
  profileMissingFields: "Complete user, unique team, ID, phone, email, address, country and MFA code.",
  profileMfaMismatch: "That team already exists. To log in or update it, the MFA code must match.",
  newProfilePrompt: "Enter the new team data. Previous profiles stay in registered teams.",
  player2TeamLoaded: "Team loaded for player 2: {team}. Enter its MFA and validate.",
  registerPlayer1First: "Register player 1 first.",
  player2TeamAndMfaRequired: "Enter the exact team name and its MFA code.",
  player2TeamNotFound: "No registered team with that name was found on this device.",
  player2MustDiffer: "Player 2 must be a different user from player 1.",
  player2MfaWrong: "Wrong MFA code for that team.",
  player2Authenticated: "Player 2 authenticated: {name} / {team}.",
  registerUserFirstTitle: "Register a user first.",
  localModeNeedsTwoProfilesTitle: "Select to load the second team; it cannot start until two teams are registered.",
  onlineNoDirectStartTitle: "Online creates or receives a link; it does not start the field directly.",
  leagueNoDirectStartTitle: "League is configured by admin and calendar.",
  startGameTitle: "Start match",
  setupStartNeedsProfile: "Register the user before starting a match.",
  localNeedsTwoTeams: "For local 1 vs 1, register at least two teams first.",
  localNeedsPlayer2Auth: "For local 1 vs 1, the registered player 2 must be authenticated.",
  onlineNoDirectStart: "Online/link does not start the field directly: create or paste a link to pair players.",
  leagueNoDirectStart: "League requires admin, registered teams, format and calendar before playing.",
  setupLineupNeedsProfile: "Register the user before preparing the lineup.",
  setupLineupLocalNeedsAuth: "To prepare local 1 vs 1, authenticate player 2 too.",
  lineupMode: "Lineup mode: drag players before starting the match.",
  physicalDurationSelected: "Physical duration selected: {minutes} minutes per half.",
  noPhysicalClockPrepared: "There is no prepared clock yet. Register teams and prepare the match.",
  standingsStats: "P {played} / W {won} / D {drawn} / L {lost} / GD {goalDiff} / Pts {points}",
  fileFallback: "file",
  evidenceSelectedMissing: "Select a photo or short video to attach.",
  evidenceTooLarge: "The file is over {maxSizeMb} MB. Use a shorter photo or video.",
  evidenceAttached: "Evidence attached to the local match report.",
  evidenceAttachedEvent: "Evidence attached: {file}.",
  physicalEndFirstHalf: "End of the first half.",
  physicalEndMatch: "End of the match.",
  physicalSecondHalfPrep: "Second half preparation starts. Changes are allowed with the clock stopped.",
  physicalGoalEvent: "Goal by {team}. Score {home}-{away}.",
  physicalClockResume: "The clock resumes.",
  physicalClockPauseEvent: "Clock paused for substitution, review or report entry.",
  physicalTie: "Draw",
  physicalWinner: "Winner: {team}",
  physicalFinalEvent: "Final whistle. {result}. Score {home} {homeScore}-{awayScore} {away}.",
  physicalOfficialFallback: "No observer",
  teamFallback: "team",
  defaultTeamName: "DT Team",
  defaultLeagueName: "DT League",
  unknownChampion: "to be defined",
  lockerStatusActive: "{team} locker room.",
  lockerStatusPreview: "You can preview the locker room; register a team to save team talks.",
  lockerSaved: "Locker room saved. The next field entry uses this tactic, visual style and environment.",
  benchEmpty: "No substitutes loaded",
  lockerChangeSelect: "Select who leaves and who enters to prepare the substitution.",
  lockerChangeMissing: "One of the substitution pieces was not found.",
  lockerChangePrepared: "Substitution prepared: out {outRole}, in {inRole}.",
  teamTalkNeedsProfile: "Register or activate a team before saving the team talk.",
  teamTalkNeedsText: "Write a team talk before saving it.",
  teamTalkSaved: "Team talk saved for {team}.",
  keeperChooseCard: "Keeper chooses card 1-4",
  shooterChooseCard: "Shooter chooses card 1-4",
  humanKeeperChooseCard: "Choose keeper card 1-4",
  shotCardChooseKeeper: "Choose keeper card",
  shotCardChooseShooter: "Choose shooter card",
  shotKeeperCard: "Shot/keeper card",
  observerRole: "Observer",
  refereeRole: "Referee",
  organizerRole: "Organizer",
  shotLongDeclaredLog: "Long-range shot declared at distance {distance}. The shooter chooses 1 card; the keeper chooses save and rebound.",
  shotDeclaredLog: "Shot declared at distance {distance}. The shooter chooses card 1-4.",
  shotCardSelectedLog: "Shot/keeper card selected: {card}.",
  shooterHiddenKeeperDirect: "Shooter chose a hidden card. Keeper chooses the direct save card.",
  shooterHiddenKeeperChoose: "Shooter chose a hidden card. Now the keeper chooses 1-4.",
  keeperSecretTitle: "Keeper turn",
  keeperSecretMessage: "Shot card saved and hidden. Pass the device to the keeper.",
  keeperReboundChoose: "Keeper chose a hidden save card. Now choose the rebound card.",
  saveLog: "Save: the keeper matched card {card}.",
  saveBannerTitle: "SAVE",
  saveBannerText: "The {team} keeper kept the ball.",
  saveResult: "Save: keeper {keeper} against shot {shot}.",
  reboundLog: "Rebound: keeper matched card {card}. The ball lands two quadrants from the keeper.",
  reboundResult: "Rebound: shot {shot}, save {keeper}, rebound {rebound}.",
  shotGoalLog: "Goal: shot {shot}, keeper {keeper}.",
  shotGoalResult: "Goal: shot {shot}, keeper {keeper}.",
  competitionFormatUpdated: "Competition format updated to AI League 10 / AI Cup 8. Competition code kept."
});

Object.assign(uiText.pt, {
  profileMissingFields: "Complete usuario, equipe unica, documento, telefone, email, endereco, pais e codigo MFA.",
  profileMfaMismatch: "Essa equipe ja existe. Para entrar ou atualizar, o codigo MFA deve coincidir.",
  newProfilePrompt: "Carregue os dados da nova equipe. Os perfis anteriores ficam em equipes registradas.",
  player2TeamLoaded: "Equipe carregada para jogador 2: {team}. Insira o MFA e valide.",
  registerPlayer1First: "Primeiro registre o jogador 1.",
  player2TeamAndMfaRequired: "Insira o nome exato da equipe e seu codigo MFA.",
  player2TeamNotFound: "Nao foi encontrada equipe registrada com esse nome neste dispositivo.",
  player2MustDiffer: "O jogador 2 deve ser um usuario diferente do jogador 1.",
  player2MfaWrong: "Codigo MFA incorreto para essa equipe.",
  player2Authenticated: "Jogador 2 autenticado: {name} / {team}.",
  registerUserFirstTitle: "Primeiro registre usuario.",
  localModeNeedsTwoProfilesTitle: "Selecione para carregar a segunda equipe; nao inicia ate registrar duas.",
  onlineNoDirectStartTitle: "Online cria ou recebe link; nao inicia campo direto.",
  leagueNoDirectStartTitle: "Liga se configura por administrador e calendario.",
  startGameTitle: "Iniciar partida",
  setupStartNeedsProfile: "Primeiro registre o usuario antes de iniciar uma partida.",
  localNeedsTwoTeams: "Para 1 vs 1 local, primeiro registre pelo menos duas equipes.",
  localNeedsPlayer2Auth: "Para 1 vs 1 local, o jogador 2 registrado deve ser autenticado.",
  onlineNoDirectStart: "Online/link nao inicia campo direto: crie ou cole um link para vincular jogadores.",
  leagueNoDirectStart: "Liga requer administrador, equipes registradas, formato e calendario antes de jogar.",
  setupLineupNeedsProfile: "Primeiro registre o usuario antes de preparar a formacao.",
  setupLineupLocalNeedsAuth: "Para preparar 1 vs 1 local, autentique tambem o jogador 2.",
  lineupMode: "Modo formacao: arraste os jogadores antes de iniciar a partida.",
  physicalDurationSelected: "Duracao fisica selecionada: {minutes} minutos por tempo.",
  noPhysicalClockPrepared: "Ainda nao ha relogio preparado. Registre equipes e prepare a partida.",
  standingsStats: "PJ {played} / V {won} / E {drawn} / D {lost} / SG {goalDiff} / Pts {points}",
  fileFallback: "arquivo",
  evidenceSelectedMissing: "Selecione uma foto ou video curto para anexar.",
  evidenceTooLarge: "O arquivo supera {maxSizeMb} MB. Use uma foto ou video mais curto.",
  evidenceAttached: "Evidencia anexada a sumula local da partida.",
  evidenceAttachedEvent: "Evidencia anexada: {file}.",
  physicalEndFirstHalf: "Fim do primeiro tempo.",
  physicalEndMatch: "Fim da partida.",
  physicalSecondHalfPrep: "Comeca a preparacao do segundo tempo. Alteracoes permitidas com relogio parado.",
  physicalGoalEvent: "Gol de {team}. Resultado {home}-{away}.",
  physicalClockResume: "O relogio foi retomado.",
  physicalClockPauseEvent: "Relogio pausado por substituicao, consulta ou carga da sumula.",
  physicalTie: "Empate",
  physicalWinner: "Vencedor: {team}",
  physicalFinalEvent: "Final da partida. {result}. Resultado {home} {homeScore}-{awayScore} {away}.",
  physicalOfficialFallback: "Sem observador",
  teamFallback: "equipe",
  defaultTeamName: "Equipe DT",
  defaultLeagueName: "Liga DT",
  unknownChampion: "a definir",
  lockerStatusActive: "Vestiario de {team}.",
  lockerStatusPreview: "Voce pode previsualizar o vestiario; registre uma equipe para salvar palestras.",
  lockerSaved: "Vestiario salvo. A proxima saida ao campo usa esta tatica, visual e ambiente.",
  benchEmpty: "Sem reservas carregados",
  lockerChangeSelect: "Selecione quem sai e quem entra para preparar a substituicao.",
  lockerChangeMissing: "Uma das pecas da substituicao nao foi encontrada.",
  lockerChangePrepared: "Substituicao preparada: sai {outRole}, entra {inRole}.",
  teamTalkNeedsProfile: "Registre ou ative uma equipe antes de salvar a palestra.",
  teamTalkNeedsText: "Escreva uma palestra antes de salvar.",
  teamTalkSaved: "Palestra salva para {team}.",
  keeperChooseCard: "Goleiro escolhe carta 1-4",
  shooterChooseCard: "Finalizador escolhe carta 1-4",
  humanKeeperChooseCard: "Escolha carta do goleiro 1-4",
  shotCardChooseKeeper: "Escolher carta do goleiro",
  shotCardChooseShooter: "Escolher carta do finalizador",
  shotKeeperCard: "Carta de chute/goleiro",
  observerRole: "Observador",
  refereeRole: "Arbitro",
  organizerRole: "Organizador",
  shotLongDeclaredLog: "Chute de longa distancia declarado a distancia {distance}. O finalizador escolhe 1 carta; o goleiro escolhe defesa e rebote.",
  shotDeclaredLog: "Chute declarado a distancia {distance}. O finalizador escolhe carta 1-4.",
  shotCardSelectedLog: "Carta de chute/goleiro selecionada: {card}.",
  shooterHiddenKeeperDirect: "Finalizador escolheu carta tapada. Goleiro escolhe carta de defesa direta.",
  shooterHiddenKeeperChoose: "Finalizador escolheu carta tapada. Agora o goleiro escolhe 1-4.",
  keeperSecretTitle: "Turno do goleiro",
  keeperSecretMessage: "Carta de chute guardada e tapada. Entregue o dispositivo ao goleiro.",
  keeperReboundChoose: "Goleiro escolheu carta de defesa tapada. Agora escolha carta de rebote.",
  saveLog: "Defesa: o goleiro acertou a carta {card}.",
  saveBannerTitle: "DEFESA",
  saveBannerText: "O goleiro {team} ficou com a bola.",
  saveResult: "Defesa: goleiro {keeper} contra chute {shot}.",
  reboundLog: "Rebote: goleiro acertou carta {card}. A bola fica a dois quadrantes do goleiro.",
  reboundResult: "Rebote: chute {shot}, defesa {keeper}, rebote {rebound}.",
  shotGoalLog: "Gol: chute {shot}, goleiro {keeper}.",
  shotGoalResult: "Gol: chute {shot}, goleiro {keeper}.",
  competitionFormatUpdated: "Formato atualizado para Liga IA 10 / Copa IA 8. O codigo da competicao foi preservado."
});

const crowdTracks = ["assets/tribuna-estadio.mp3"];
const lockerTracks = ["assets/vestuario-motivacion.mp3", "assets/vestuario-arenga.mp3"];
const goalTracks = ["assets/gol-principal.mp3"];
const oleTrack = "assets/ole.mp3";
const whistleTrack = "assets/silbato.mp3";
const competitionFormatVersion = 4;
const competitionStorageKey = "dtDigitalCompetitionV1";
const physicalSupportStorageKey = "dtPhysicalSupportV1";
const aiDifficultyOrder = ["easy", "medium", "hard"];
const aiLeagueRivals = [
  "IA Norte",
  "IA Sur",
  "IA Barrio",
  "IA Puerto",
  "IA Academia",
  "IA Tricolor",
  "IA Andes",
  "IA Capital",
  "IA Campeona"
];
const aiCupPath = [
  { label: "Cuartos de final", rival: "IA Barrio", difficulty: "easy" },
  { label: "Semifinal", rival: "IA Capital", difficulty: "medium" },
  { label: "Final", rival: "IA Campeona", difficulty: "hard" }
];
let keeperZones = {
  red: { x: 2, y: -1 },
  blue: { x: 2, y: 10 }
};

const blueDirections = {
  up: { x: 0, y: -1, label: "adelante" },
  upRight: { x: 1, y: -1, label: "adelante derecha" },
  right: { x: 1, y: 0, label: "derecha" },
  downRight: { x: 1, y: 1, label: "atras derecha" },
  down: { x: 0, y: 1, label: "atras" },
  downLeft: { x: -1, y: 1, label: "atras izquierda" },
  left: { x: -1, y: 0, label: "izquierda" },
  upLeft: { x: -1, y: -1, label: "adelante izquierda" }
};

const redDirections = {
  up: { x: 0, y: 1, label: "adelante" },
  upRight: { x: -1, y: 1, label: "adelante derecha" },
  right: { x: -1, y: 0, label: "derecha" },
  downRight: { x: -1, y: -1, label: "atras derecha" },
  down: { x: 0, y: -1, label: "atras" },
  downLeft: { x: 1, y: -1, label: "atras izquierda" },
  left: { x: 1, y: 0, label: "izquierda" },
  upLeft: { x: 1, y: 1, label: "adelante izquierda" }
};

const baseStats = {
  ARQ: { name: "Arquero", move: { up: 2, upRight: 2, right: 2, downRight: 2, down: 2, downLeft: 2, left: 2, upLeft: 2 }, pass: 4, shot: 4 },
  DEF: { name: "Defensor", move: { up: 3, upRight: 1, right: 2, downRight: 2, down: 1, downLeft: 2, left: 2, upLeft: 1 }, pass: 3, shot: 3 },
  VOL: { name: "Volante", move: { up: 1, upRight: 1, right: 3, downRight: 2, down: 2, downLeft: 2, left: 3, upLeft: 1 }, pass: 2, shot: 3 },
  EXT: { name: "Extremo", move: { up: 3, upRight: 2, right: 1, downRight: 2, down: 1, downLeft: 2, left: 1, upLeft: 2 }, pass: 2, shot: 3 },
  MP: { name: "Media punta", move: { up: 1, upRight: 2, right: 2, downRight: 1, down: 1, downLeft: 1, left: 2, upLeft: 2 }, pass: 2, shot: 3 },
  DEL: { name: "Delantero", move: { up: 1, upRight: 2, right: 2, downRight: 2, down: 1, downLeft: 2, left: 2, upLeft: 2 }, pass: 3, shot: 2 }
};
let stats = makeStatsForStyle("strategy");

let state;
let selectedPieceId = null;
let selectedAction = "move";
let paused = false;
let setupSelection = {
  gameStyle: "strategy",
  mode: "local",
  aiDifficulty: "easy",
  realMinutes: 5,
  formation: "f433"
};
let referenceRole = null;
let activeProfile = loadStoredProfile();
let localSecondProfile = null;
let lockerSettings = loadLockerSettings();
let competitionState = loadCompetitionState();
let physicalSupportState = loadPhysicalSupportState();
let physicalTimerInterval = null;
let pendingPhysicalTeamAuth = null;
let pendingPhysicalOfficialAuth = null;
let audioState = {
  enabled: true,
  context: null,
  crowdGain: null,
  crowdSource: null,
  chantGain: null,
  chantOscillators: [],
  chantTimer: null,
  chantIndex: 0,
  goalLayers: [],
  usingAudioFile: false,
  scene: "menu",
  lockerTrackIndex: 0,
  goalCrowdMuted: false,
  crowdRestoreTimer: null,
  passTeam: null,
  passCount: 0,
  lastSpeechAt: 0
};
let timerLastTickAt = null;
let draggingTacticToken = null;
let lineupEditing = false;
let draggingLineupPiece = null;
let suppressNextPieceClick = false;

const lockerTactics = {
  f433: [
    ["ARQ", 50, 92], ["DEF", 0, 50], ["DEF", 25, 100], ["DEF", 75, 100], ["DEF", 100, 50],
    ["VOL", 25, 25], ["VOL", 50, 50], ["VOL", 75, 25],
    ["DEL", 0, 2], ["DEL", 50, 2], ["DEL", 100, 2]
  ],
  f4222: [
    ["ARQ", 50, 92], ["DEF", 6, 62], ["DEF", 30, 78], ["DEF", 54, 78], ["DEF", 94, 62],
    ["VOL", 30, 42], ["VOL", 58, 32],
    ["EXT", 18, 8], ["EXT", 88, 8], ["DEL", 44, 2], ["DEL", 66, 2]
  ],
  f442: [
    ["ARQ", 50, 92], ["DEF", 0, 62], ["DEF", 50, 94], ["DEF", 63, 94], ["DEF", 100, 62],
    ["VOL", 25, 28], ["VOL", 50, 28], ["VOL", 75, 28], ["VOL", 50, 52],
    ["DEL", 50, 2], ["DEL", 63, 2]
  ],
  f4411: [
    ["ARQ", 50, 92], ["DEF", 0, 62], ["DEF", 25, 94], ["DEF", 63, 94], ["DEF", 100, 62],
    ["VOL", 25, 28], ["VOL", 50, 28], ["VOL", 75, 28], ["VOL", 50, 52],
    ["MP", 25, 2], ["DEL", 50, 2]
  ],
  f32212: [
    ["ARQ", 50, 92], ["DEF", 0, 72], ["DEF", 50, 88], ["DEF", 100, 72],
    ["VOL", 50, 52], ["VOL", 63, 52],
    ["EXT", 0, 2], ["EXT", 100, 2], ["MP", 50, 28], ["DEL", 50, 2], ["DEL", 63, 2]
  ],
  f3223: [
    ["ARQ", 50, 92], ["DEF", 0, 72], ["DEF", 50, 88], ["DEF", 100, 72],
    ["VOL", 25, 52], ["VOL", 75, 52],
    ["EXT", 0, 2], ["EXT", 100, 2], ["DEL", 25, 2], ["DEL", 50, 2], ["DEL", 75, 2]
  ]
};

const intensityTactics = {
  f433: [
    ["ARQ", 50, 92], ["DEF", 12, 72], ["DEF", 36, 92], ["DEF", 64, 92], ["DEF", 88, 72],
    ["VOL", 34, 36], ["VOL", 50, 52], ["VOL", 66, 36],
    ["DEL", 22, 2], ["DEL", 50, 2], ["DEL", 78, 2]
  ],
  f4222: [
    ["ARQ", 50, 92], ["DEF", 12, 68], ["DEF", 36, 88], ["DEF", 64, 88], ["DEF", 88, 68],
    ["VOL", 36, 42], ["VOL", 64, 42],
    ["EXT", 10, 10], ["EXT", 90, 10], ["DEL", 44, 2], ["DEL", 64, 2]
  ],
  f442: [
    ["ARQ", 50, 92], ["DEF", 10, 70], ["DEF", 36, 90], ["DEF", 64, 90], ["DEF", 90, 70],
    ["VOL", 24, 34], ["VOL", 42, 48], ["VOL", 58, 48], ["VOL", 76, 34],
    ["DEL", 44, 2], ["DEL", 62, 2]
  ],
  f4411: [
    ["ARQ", 50, 92], ["DEF", 10, 70], ["DEF", 36, 90], ["DEF", 64, 90], ["DEF", 90, 70],
    ["VOL", 24, 36], ["VOL", 42, 50], ["VOL", 58, 50], ["VOL", 76, 36],
    ["MP", 34, 14], ["DEL", 52, 2]
  ],
  f32212: [
    ["ARQ", 50, 92], ["DEF", 12, 70], ["DEF", 50, 88], ["DEF", 88, 70],
    ["VOL", 42, 48], ["VOL", 58, 48],
    ["EXT", 8, 2], ["EXT", 92, 2], ["MP", 50, 22], ["DEL", 44, 2], ["DEL", 64, 2]
  ],
  f3223: [
    ["ARQ", 50, 92], ["DEF", 12, 70], ["DEF", 50, 88], ["DEF", 88, 70],
    ["VOL", 38, 42], ["VOL", 62, 42],
    ["EXT", 8, 2], ["EXT", 92, 10], ["DEL", 26, 2], ["DEL", 50, 2], ["DEL", 74, 2]
  ]
};

function getTacticLibrary() {
  return setupSelection.gameStyle === "intensity" ? intensityTactics : lockerTactics;
}

function makeStatsForStyle(style) {
  const boost = style === "intensity" ? 2 : 0;
  return Object.fromEntries(Object.entries(baseStats).map(([key, value]) => [
    key,
    {
      ...value,
      pass: value.pass + boost,
      shot: value.shot + boost,
      move: Object.fromEntries(Object.entries(value.move).map(([direction, amount]) => [direction, amount + boost]))
    }
  ]));
}

function applyGameStyle(style) {
  setupSelection.gameStyle = style;
  board = style === "intensity"
    ? { width: 10, height: 20 }
    : { width: 5, height: 10 };
  keeperZones = {
    red: { x: Math.floor((board.width - 1) / 2), y: -1 },
    blue: { x: Math.floor((board.width - 1) / 2), y: board.height }
  };
  stats = makeStatsForStyle(style);
  document.documentElement.style.setProperty("--board-cols", board.width);
  document.documentElement.style.setProperty("--board-rows", board.height);
  document.documentElement.style.setProperty("--keeper-col", keeperZones.red.x + 1);
  document.documentElement.style.setProperty("--keeper-span", style === "intensity" ? 2 : 1);
  document.documentElement.style.setProperty("--board-width", style === "intensity" ? "1040px" : "720px");
  updateMobileFieldWidth();
}

function defaultPhysicalSupportState() {
  return {
    teams: [],
    officials: [],
    competitions: [],
    invites: [],
    activeCompetitionId: null,
    activeMatch: null,
    selectedDuration: 15
  };
}

function loadPhysicalSupportState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(physicalSupportStorageKey) || "null");
    return parsed && Array.isArray(parsed.teams)
      ? { ...defaultPhysicalSupportState(), ...parsed }
      : defaultPhysicalSupportState();
  } catch {
    return defaultPhysicalSupportState();
  }
}

function savePhysicalSupportState() {
  localStorage.setItem(physicalSupportStorageKey, JSON.stringify(physicalSupportState));
}

function makePhysicalCode(prefix = "DTF") {
  return `${prefix}-${Date.now().toString(36).slice(-4).toUpperCase()}${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
}

function physicalAuthLabel(method) {
  if (method === "fingerprint") return textFor("authFingerprint");
  if (method === "face") return textFor("authFace");
  return textFor("authMfa");
}

function physicalRoleLabel(role) {
  if (role === "arbitro") return textFor("refereeRole");
  if (role === "organizador") return textFor("organizerRole");
  return textFor("observerRole");
}

function validatePhysicalIdentity(kind) {
  const isOfficial = kind === "official";
  const methodEl = isOfficial ? physicalOfficialAuthMethodEl : physicalTeamAuthMethodEl;
  const codeEl = isOfficial ? physicalOfficialCodeEl : physicalTeamCodeEl;
  const statusEl = isOfficial ? physicalOfficialAuthStatusEl : physicalTeamAuthStatusEl;
  const method = methodEl?.value || "mfa";
  const code = codeEl?.value.trim() || "";
  if (method === "mfa" && code.length < 4) {
    if (statusEl) statusEl.textContent = textFor("mfaMinCode");
    if (isOfficial) pendingPhysicalOfficialAuth = null;
    else pendingPhysicalTeamAuth = null;
    return false;
  }
  const auth = {
    method,
    code,
    validatedAt: new Date().toISOString()
  };
  if (isOfficial) pendingPhysicalOfficialAuth = auth;
  else pendingPhysicalTeamAuth = auth;
  if (statusEl) {
    statusEl.textContent = method === "mfa"
      ? textFor("physicalAuthMfaValid")
      : textTemplate("physicalAuthSimValid", { method: physicalAuthLabel(method) });
  }
  return true;
}

function physicalRecordIsAuthenticated(record) {
  return Boolean(record && (record.authValidated || record.validated || record.code));
}

function physicalTeamById(id) {
  return physicalSupportState.teams.find(team => team.id === id);
}

function physicalOfficialById(id) {
  return physicalSupportState.officials.find(official => official.id === id);
}

function activePhysicalCompetition() {
  return physicalSupportState.competitions.find(competition => competition.id === physicalSupportState.activeCompetitionId) || null;
}

function formatPhysicalClock(seconds) {
  const total = Math.max(0, Math.ceil(seconds || 0));
  const minutes = Math.floor(total / 60).toString().padStart(2, "0");
  const rest = (total % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function physicalHalfLabel(match = physicalSupportState.activeMatch) {
  if (!match) return textFor("firstHalf");
  return match.half === 1 ? textFor("firstHalf") : textFor("secondHalf");
}

function updatePhysicalDurationButtons() {
  document.querySelectorAll("[data-physical-duration]").forEach(button => {
    button.classList.toggle("selected", Number(button.dataset.physicalDuration) === physicalSupportState.selectedDuration);
  });
}

function fillPhysicalSelect(selectEl, items, placeholder) {
  if (!selectEl) return;
  const selected = selectEl.value;
  selectEl.innerHTML = "";
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = placeholder;
  selectEl.append(empty);
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.team || `${item.name} (${item.role})`;
    selectEl.append(option);
  });
  if ([...selectEl.options].some(option => option.value === selected)) {
    selectEl.value = selected;
  }
}

function renderPhysicalTeamList() {
  if (!physicalTeamListEl) return;
  physicalTeamListEl.innerHTML = "";
  physicalSupportState.teams.forEach(team => {
    const item = document.createElement("div");
    item.className = "physical-list-item";
    const label = document.createElement("strong");
    label.textContent = team.team;
    const detail = document.createElement("span");
    detail.textContent = `${team.user} / ID ${team.id} / ${physicalAuthLabel(team.authMethod || "mfa")}`;
    item.append(label, detail);
    physicalTeamListEl.append(item);
  });
}

function renderPhysicalOfficialList() {
  if (!physicalOfficialListEl) return;
  physicalOfficialListEl.innerHTML = "";
  physicalSupportState.officials.forEach(official => {
    const item = document.createElement("div");
    item.className = "physical-list-item";
    const label = document.createElement("strong");
    label.textContent = official.name;
    const detail = document.createElement("span");
    detail.textContent = `${physicalRoleLabel(official.role)} / ${physicalAuthLabel(official.authMethod || "mfa")} / ${textFor("physicalValidated")}`;
    item.append(label, detail);
    physicalOfficialListEl.append(item);
  });
}

function renderPhysicalStandings() {
  if (!physicalStandingsEl) return;
  physicalStandingsEl.innerHTML = "";
  const competition = activePhysicalCompetition();
  if (!competition) {
    physicalStandingsEl.textContent = textFor("physicalStandingsEmptyCompetition");
    return;
  }
  const header = document.createElement("div");
  header.className = "physical-standing-row";
  const title = document.createElement("strong");
  title.textContent = `${competition.name} / ${competition.code}`;
  const mode = document.createElement("span");
  mode.textContent = competition.type === "league"
    ? textFor("physicalTypeLeague")
    : competition.type === "cup"
      ? textFor("physicalTypeCup")
      : textFor("physicalTypeChallenge");
  header.append(title, mode);
  physicalStandingsEl.append(header);
  const rows = Object.values(competition.standings || {}).sort((a, b) => (b.points - a.points) || (b.goalDiff - a.goalDiff));
  if (!rows.length) {
    const empty = document.createElement("div");
    empty.className = "physical-standing-row";
    empty.textContent = textFor("physicalNoTeamsInTable");
    physicalStandingsEl.append(empty);
    return;
  }
  rows.forEach(row => {
    const item = document.createElement("div");
    item.className = "physical-standing-row";
    const label = document.createElement("strong");
    label.textContent = row.team;
    const detail = document.createElement("span");
    detail.textContent = textTemplate("standingsStats", row);
    item.append(label, detail);
    physicalStandingsEl.append(item);
  });
}

function renderPhysicalOptions() {
  fillPhysicalSelect(physicalHomeTeamEl, physicalSupportState.teams, textFor("chooseHome"));
  fillPhysicalSelect(physicalAwayTeamEl, physicalSupportState.teams, textFor("chooseAway"));
  fillPhysicalSelect(physicalObserverEl, physicalSupportState.officials, textFor("noObserver"));
  updatePhysicalDurationButtons();
}

function renderPhysicalMatch() {
  const match = physicalSupportState.activeMatch;
  if (!match) {
    physicalMatchPanelEl?.classList.add("hidden");
    return;
  }
  const home = physicalTeamById(match.homeTeamId);
  const away = physicalTeamById(match.awayTeamId);
  const competition = activePhysicalCompetition();
  physicalMatchPanelEl?.classList.remove("hidden");
  if (physicalMatchTitleEl) physicalMatchTitleEl.textContent = `${home?.team || textFor("local")} vs ${away?.team || textFor("visitor")}`;
  if (physicalCompetitionBadgeEl) physicalCompetitionBadgeEl.textContent = competition ? `${competition.name} / ${competition.code}` : textFor("physicalTypeChallenge");
  if (physicalScoreHomeNameEl) physicalScoreHomeNameEl.textContent = home?.team || textFor("local");
  if (physicalScoreAwayNameEl) physicalScoreAwayNameEl.textContent = away?.team || textFor("visitor");
  if (physicalScoreHomeEl) physicalScoreHomeEl.textContent = match.score.home;
  if (physicalScoreAwayEl) physicalScoreAwayEl.textContent = match.score.away;
  if (physicalTimerLabelEl) physicalTimerLabelEl.textContent = physicalHalfLabel(match);
  if (physicalTimerEl) physicalTimerEl.textContent = formatPhysicalClock(match.remainingSeconds);
  if (physicalMatchStatusEl) {
    const official = physicalOfficialById(match.observerId);
    physicalMatchStatusEl.textContent = match.finished
      ? textFor("physicalMatchFinishedSaved")
      : `${match.running ? textFor("physicalClockRunning") : textFor("physicalClockPaused")}${official ? `. ${textFor("observerPrefix")}: ${official.name}` : `. ${textFor("noObserver")}.`}`;
  }
  if (physicalMatchLogEl) {
    physicalMatchLogEl.innerHTML = "";
    match.events.forEach(event => {
      const li = document.createElement("li");
      li.textContent = event;
      physicalMatchLogEl.append(li);
    });
  }
  if (physicalEvidenceListEl) {
    physicalEvidenceListEl.innerHTML = "";
    (match.evidence || []).forEach(file => {
      const item = document.createElement("div");
      item.className = "physical-list-item";
      const label = document.createElement("strong");
      label.textContent = file.name;
      const detail = document.createElement("span");
      detail.textContent = `${file.type || textFor("fileFallback")} / ${file.sizeKb} KB`;
      item.append(label, detail);
      physicalEvidenceListEl.append(item);
    });
  }
}

function renderPhysicalSupport() {
  renderPhysicalTeamList();
  renderPhysicalOfficialList();
  renderPhysicalOptions();
  renderPhysicalStandings();
  renderPhysicalMatch();
}

function registerPhysicalTeam() {
  const team = physicalTeamNameEl?.value.trim();
  const user = physicalUserNameEl?.value.trim();
  const code = physicalTeamCodeEl?.value.trim();
  const method = physicalTeamAuthMethodEl?.value || "mfa";
  if (!team || !user) {
    if (physicalStatusEl) physicalStatusEl.textContent = textFor("completeTeamRegister");
    return;
  }
  if (!pendingPhysicalTeamAuth || pendingPhysicalTeamAuth.method !== method || (method === "mfa" && pendingPhysicalTeamAuth.code !== code)) {
    if (!validatePhysicalIdentity("team")) {
      if (physicalStatusEl) physicalStatusEl.textContent = textFor("validateDtIdentityFirst");
      return;
    }
  }
  if (method === "mfa" && code.length < 4) {
    if (physicalStatusEl) physicalStatusEl.textContent = textFor("completeValidMfa");
    return;
  }
  const existing = physicalSupportState.teams.find(item => item.team.toLowerCase() === team.toLowerCase());
  const record = {
    id: existing?.id || makePhysicalCode("EQ"),
    team,
    user,
    code,
    authMethod: method,
    authValidated: true,
    authValidatedAt: pendingPhysicalTeamAuth?.validatedAt || new Date().toISOString(),
    createdAt: existing?.createdAt || new Date().toISOString()
  };
  if (existing) {
    Object.assign(existing, record);
  } else {
    physicalSupportState.teams.push(record);
  }
  savePhysicalSupportState();
  if (physicalStatusEl) physicalStatusEl.textContent = textTemplate("teamRegisteredPhysical", { team });
  if (physicalTeamAuthStatusEl) physicalTeamAuthStatusEl.textContent = textFor("teamAuthPending");
  pendingPhysicalTeamAuth = null;
  physicalTeamNameEl.value = "";
  physicalUserNameEl.value = "";
  physicalTeamCodeEl.value = "";
  renderPhysicalSupport();
}

function registerPhysicalOfficial() {
  const name = physicalOfficialNameEl?.value.trim();
  const role = physicalOfficialRoleEl?.value || "veedor";
  const code = physicalOfficialCodeEl?.value.trim();
  const method = physicalOfficialAuthMethodEl?.value || "mfa";
  if (!name) {
    if (physicalStatusEl) physicalStatusEl.textContent = textFor("completeOfficialName");
    return;
  }
  if (!pendingPhysicalOfficialAuth || pendingPhysicalOfficialAuth.method !== method || (method === "mfa" && pendingPhysicalOfficialAuth.code !== code)) {
    if (!validatePhysicalIdentity("official")) {
      if (physicalStatusEl) physicalStatusEl.textContent = textFor("validateAuthorityFirst");
      return;
    }
  }
  if (method === "mfa" && code.length < 4) {
    if (physicalStatusEl) physicalStatusEl.textContent = textFor("completeValidOfficialCode");
    return;
  }
  const record = {
    id: makePhysicalCode("VE"),
    name,
    role,
    code,
    validated: true,
    authMethod: method,
    authValidated: true,
    authValidatedAt: pendingPhysicalOfficialAuth?.validatedAt || new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  physicalSupportState.officials.push(record);
  savePhysicalSupportState();
  if (physicalStatusEl) {
    physicalStatusEl.textContent = textTemplate("officialRegisteredPhysical", {
      name,
      role: physicalRoleLabel(role)
    });
  }
  if (physicalOfficialAuthStatusEl) physicalOfficialAuthStatusEl.textContent = textFor("officialPending");
  pendingPhysicalOfficialAuth = null;
  physicalOfficialNameEl.value = "";
  physicalOfficialCodeEl.value = "";
  renderPhysicalSupport();
}

function createPhysicalCompetition() {
  const name = physicalCompetitionNameEl?.value.trim() || textFor("physicalDefaultCompetition");
  const type = physicalCompetitionTypeEl?.value || "challenge";
  const code = physicalCompetitionCodeEl?.value.trim() || makePhysicalCode("COMP");
  const existing = physicalSupportState.competitions.find(item => item.code.toLowerCase() === code.toLowerCase());
  const standings = {};
  physicalSupportState.teams.forEach(team => {
    standings[team.id] = existing?.standings?.[team.id] || {
      team: team.team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDiff: 0,
      points: 0
    };
  });
  const record = {
    id: existing?.id || makePhysicalCode("CP"),
    name,
    type,
    code,
    standings,
    matches: existing?.matches || [],
    createdAt: existing?.createdAt || new Date().toISOString()
  };
  if (existing) Object.assign(existing, record);
  else physicalSupportState.competitions.push(record);
  physicalSupportState.activeCompetitionId = record.id;
  if (physicalCompetitionCodeEl) physicalCompetitionCodeEl.value = record.code;
  savePhysicalSupportState();
  if (physicalStatusEl) {
    physicalStatusEl.textContent = textTemplate("physicalCompetitionCreated", { name, code: record.code });
  }
  renderPhysicalSupport();
}

function preparePhysicalMatch() {
  const homeTeamId = physicalHomeTeamEl?.value;
  const awayTeamId = physicalAwayTeamEl?.value;
  const observerId = physicalObserverEl?.value || "";
  if (!homeTeamId || !awayTeamId || homeTeamId === awayTeamId) {
    if (physicalStatusEl) physicalStatusEl.textContent = textFor("chooseDifferentTeams");
    return;
  }
  if (!activePhysicalCompetition()) createPhysicalCompetition();
  const home = physicalTeamById(homeTeamId);
  const away = physicalTeamById(awayTeamId);
  const observer = physicalOfficialById(observerId);
  if (!physicalRecordIsAuthenticated(home) || !physicalRecordIsAuthenticated(away)) {
    if (physicalStatusEl) physicalStatusEl.textContent = textFor("teamsAuthRequired");
    return;
  }
  if (observerId && !physicalRecordIsAuthenticated(observer)) {
    if (physicalStatusEl) physicalStatusEl.textContent = textFor("observerAuthRequired");
    return;
  }
  const duration = physicalSupportState.selectedDuration || 15;
  physicalSupportState.activeMatch = {
    id: makePhysicalCode("PAR"),
    competitionId: physicalSupportState.activeCompetitionId,
    homeTeamId,
    awayTeamId,
    observerId,
    durationMinutes: duration,
    half: 1,
    remainingSeconds: duration * 60,
    running: false,
    finished: false,
    score: { home: 0, away: 0 },
    evidence: [],
    events: [
      textTemplate("physicalMatchEventCreated", {
        home: home?.team || textFor("local"),
        away: away?.team || textFor("visitor"),
        duration
      })
    ],
    savedResult: false
  };
  savePhysicalSupportState();
  if (physicalStatusEl) physicalStatusEl.textContent = textFor("physicalMatchPrepared");
  renderPhysicalSupport();
  physicalMatchPanelEl?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function generatePhysicalInvite() {
  const competition = activePhysicalCompetition();
  if (!competition) {
    if (physicalInviteStatusEl) physicalInviteStatusEl.textContent = textFor("inviteNeedsCompetition");
    return;
  }
  const teamName = physicalInviteTeamNameEl?.value.trim() || textFor("physicalInviteDefaultTeam");
  const inviteCode = makePhysicalCode("INV");
  const link = `${window.location.origin}${window.location.pathname}?dtfisico=${encodeURIComponent(competition.code)}&invite=${inviteCode}&team=${encodeURIComponent(teamName)}`;
  const invite = {
    code: inviteCode,
    competitionId: competition.id,
    competitionCode: competition.code,
    teamName,
    link,
    createdAt: new Date().toISOString(),
    completed: false
  };
  physicalSupportState.invites.unshift(invite);
  savePhysicalSupportState();
  if (physicalInviteLinkEl) physicalInviteLinkEl.value = link;
  if (physicalInviteStatusEl) {
    physicalInviteStatusEl.textContent = textTemplate("inviteCreated", { team: teamName });
  }
}

function addPhysicalEvidence() {
  const match = physicalSupportState.activeMatch;
  const file = physicalEvidenceFileEl?.files?.[0];
  if (!match) {
    if (physicalMatchStatusEl) physicalMatchStatusEl.textContent = textFor("evidenceNeedsMatch");
    return;
  }
  if (!file) {
    if (physicalMatchStatusEl) physicalMatchStatusEl.textContent = textFor("evidenceSelectedMissing");
    return;
  }
  const maxSizeMb = 30;
  if (file.size > maxSizeMb * 1024 * 1024) {
    if (physicalMatchStatusEl) {
      physicalMatchStatusEl.textContent = textTemplate("evidenceTooLarge", { maxSizeMb });
    }
    return;
  }
  match.evidence ||= [];
  match.evidence.unshift({
    name: file.name,
    type: file.type || textFor("fileFallback"),
    sizeKb: Math.max(1, Math.round(file.size / 1024)),
    addedAt: new Date().toISOString()
  });
  match.events.unshift(textTemplate("evidenceAttachedEvent", { file: file.name }));
  savePhysicalSupportState();
  if (physicalEvidenceFileEl) physicalEvidenceFileEl.value = "";
  if (physicalMatchStatusEl) physicalMatchStatusEl.textContent = textFor("evidenceAttached");
  renderPhysicalMatch();
}

function addPhysicalEvent(text) {
  const match = physicalSupportState.activeMatch;
  if (!match) return;
  match.events.unshift(`${physicalHalfLabel(match)} ${formatPhysicalClock(match.remainingSeconds)} - ${text}`);
  savePhysicalSupportState();
  renderPhysicalMatch();
}

function addPhysicalGoal(side) {
  const match = physicalSupportState.activeMatch;
  if (!match || match.finished) return;
  const home = physicalTeamById(match.homeTeamId);
  const away = physicalTeamById(match.awayTeamId);
  match.score[side] += 1;
  const teamName = side === "home" ? home?.team : away?.team;
  addPhysicalEvent(textTemplate("physicalGoalEvent", {
    team: teamName || textFor("teamFallback"),
    home: match.score.home,
    away: match.score.away
  }));
}

function startPhysicalTimer() {
  const match = physicalSupportState.activeMatch;
  if (!match || match.finished) return;
  match.running = true;
  addPhysicalEvent(textFor("physicalClockResume"));
  runPhysicalTimerLoop();
}

function pausePhysicalTimer() {
  const match = physicalSupportState.activeMatch;
  if (!match || match.finished) return;
  match.running = false;
  addPhysicalEvent(textFor("physicalClockPauseEvent"));
  stopPhysicalTimerLoop();
}

function runPhysicalTimerLoop() {
  stopPhysicalTimerLoop();
  physicalTimerInterval = window.setInterval(() => {
    const match = physicalSupportState.activeMatch;
    if (!match || !match.running || match.finished) {
      stopPhysicalTimerLoop();
      return;
    }
    match.remainingSeconds = Math.max(0, match.remainingSeconds - 1);
    if (match.remainingSeconds <= 0) {
      match.running = false;
      match.events.unshift(match.half === 1 ? textFor("physicalEndFirstHalf") : textFor("physicalEndMatch"));
      if (match.half === 2) finishPhysicalMatch();
      else savePhysicalSupportState();
      stopPhysicalTimerLoop();
    } else {
      savePhysicalSupportState();
    }
    renderPhysicalMatch();
  }, 1000);
}

function stopPhysicalTimerLoop() {
  if (physicalTimerInterval) {
    clearInterval(physicalTimerInterval);
    physicalTimerInterval = null;
  }
}

function changePhysicalHalf() {
  const match = physicalSupportState.activeMatch;
  if (!match || match.finished) return;
  if (match.half === 1) {
    match.half = 2;
    match.remainingSeconds = match.durationMinutes * 60;
    match.running = false;
    match.events.unshift(textFor("physicalSecondHalfPrep"));
    savePhysicalSupportState();
    stopPhysicalTimerLoop();
    renderPhysicalMatch();
    return;
  }
  finishPhysicalMatch();
}

function updatePhysicalStandingRow(row, goalsFor, goalsAgainst) {
  row.played += 1;
  row.goalsFor += goalsFor;
  row.goalsAgainst += goalsAgainst;
  row.goalDiff = row.goalsFor - row.goalsAgainst;
  if (goalsFor > goalsAgainst) {
    row.won += 1;
    row.points += 3;
  } else if (goalsFor === goalsAgainst) {
    row.drawn += 1;
    row.points += 1;
  } else {
    row.lost += 1;
  }
}

function finishPhysicalMatch() {
  const match = physicalSupportState.activeMatch;
  if (!match || match.finished && match.savedResult) return;
  match.running = false;
  match.finished = true;
  const competition = activePhysicalCompetition();
  const home = physicalTeamById(match.homeTeamId);
  const away = physicalTeamById(match.awayTeamId);
  if (competition && !match.savedResult) {
    competition.standings[match.homeTeamId] ||= { team: home?.team || textFor("local"), played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 };
    competition.standings[match.awayTeamId] ||= { team: away?.team || textFor("visitor"), played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDiff: 0, points: 0 };
    updatePhysicalStandingRow(competition.standings[match.homeTeamId], match.score.home, match.score.away);
    updatePhysicalStandingRow(competition.standings[match.awayTeamId], match.score.away, match.score.home);
    competition.matches.unshift({
      id: match.id,
      home: home?.team || textFor("local"),
      away: away?.team || textFor("visitor"),
      score: `${match.score.home}-${match.score.away}`,
      observer: physicalOfficialById(match.observerId)?.name || textFor("physicalOfficialFallback"),
      date: new Date().toISOString()
    });
    match.savedResult = true;
  }
  const result = match.score.home === match.score.away
    ? textFor("physicalTie")
    : textTemplate("physicalWinner", { team: match.score.home > match.score.away ? home?.team : away?.team });
  match.events.unshift(textTemplate("physicalFinalEvent", {
    result,
    home: home?.team || textFor("local"),
    homeScore: match.score.home,
    awayScore: match.score.away,
    away: away?.team || textFor("visitor")
  }));
  savePhysicalSupportState();
  stopPhysicalTimerLoop();
  renderPhysicalSupport();
}

function resetPhysicalMatch() {
  stopPhysicalTimerLoop();
  physicalSupportState.activeMatch = null;
  savePhysicalSupportState();
  renderPhysicalSupport();
  physicalSetupPanelEl?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openPhysicalSupport() {
  paused = true;
  stopPhysicalTimerLoop();
  if (physicalSupportState.activeMatch) {
    physicalSupportState.activeMatch.running = false;
    savePhysicalSupportState();
  }
  styleScreenEl.classList.add("hidden");
  setupScreenEl.classList.add("hidden");
  physicalScreenEl?.classList.remove("hidden");
  syncScreenChrome();
  switchAudioScene("menu");
  renderPhysicalSupport();
  applySetupLanguage();
}

function closePhysicalSupport() {
  stopPhysicalTimerLoop();
  if (physicalSupportState.activeMatch) {
    physicalSupportState.activeMatch.running = false;
    savePhysicalSupportState();
  }
  physicalScreenEl?.classList.add("hidden");
  styleScreenEl.classList.remove("hidden");
  setupScreenEl.classList.remove("hidden");
  syncScreenChrome();
  switchAudioScene("menu");
}

function isMobileFieldLayout() {
  return window.matchMedia("(max-width: 900px), (hover: none) and (pointer: coarse), (max-height: 620px) and (orientation: landscape)").matches;
}

function centerFieldScroll() {
  const center = () => {
    const isMobile = isMobileFieldLayout();
    const wrap = document.querySelector(".table-wrap");
    const field = document.querySelector(".board") || document.querySelector(".pitch");
    if (wrap && field && wrap.scrollWidth > wrap.clientWidth) {
      const wrapRect = wrap.getBoundingClientRect();
      const fieldRect = field.getBoundingClientRect();
      const fieldCenter = wrap.scrollLeft + fieldRect.left - wrapRect.left + fieldRect.width / 2;
      wrap.scrollLeft = Math.max(0, fieldCenter - wrap.clientWidth / 2);
    }
    if (isMobile) {
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    }
  };
  window.requestAnimationFrame(center);
  window.setTimeout(center, 80);
  window.setTimeout(center, 260);
  window.setTimeout(center, 700);
}

function updateMobileFieldWidth() {
  const isMobile = isMobileFieldLayout();
  if (!isMobile) {
    document.documentElement.style.removeProperty("--mobile-board-width");
    return;
  }
  const viewportWidth = Math.floor(Math.min(
    window.visualViewport?.width || window.innerWidth,
    document.documentElement.clientWidth || window.innerWidth
  ));
  const sideRoom = window.matchMedia("(orientation: landscape)").matches ? 210 : 28;
  const width = Math.max(300, Math.min(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--board-width")) || 720, viewportWidth - sideRoom));
  document.documentElement.style.setProperty("--mobile-board-width", `${width}px`);
}

function scaleInitialPosition(x, y) {
  return {
    x: Math.round((x / 4) * (board.width - 1)),
    y: Math.round((y / 9) * (board.height - 1))
  };
}

function getFormationPositions(team) {
  const tacticName = getLockerTacticForTeam(team);
  const customTactic = getLockerCustomTacticForTeam(team);
  const tacticLibrary = getTacticLibrary();
  const tactic = tacticName === "personalizada" && Array.isArray(customTactic)
    ? customTactic
    : tacticLibrary[tacticName] || tacticLibrary[setupSelection.formation] || tacticLibrary.f433;
  const midTop = Math.floor(board.height / 2) - 1;
  const midBottom = Math.floor(board.height / 2);
  const blueRows = board.height - midBottom;
  return tactic
    .filter(([type]) => type !== "ARQ")
    .map(([type, xPercent, yPercent], index) => {
      const x = Math.max(0, Math.min(board.width - 1, Math.round((xPercent / 100) * (board.width - 1))));
      const y = team === "blue"
        ? Math.max(midBottom, Math.min(board.height - 1, Math.round(midBottom + (yPercent / 100) * (blueRows - 1))))
        : Math.max(0, Math.min(midTop, Math.round(((100 - yPercent) / 100) * midTop)));
      return [type, x, y, index];
    });
}

function getGoalZoneForHalf(team, half = state?.half || 1) {
  if (half === 2) {
    return team === "red"
      ? { x: keeperZones.red.x, y: board.height }
      : { x: keeperZones.blue.x, y: -1 };
  }
  return keeperZones[team];
}

function getKickoffSpot(team, half = state?.half || 1) {
  const centerX = Math.floor((board.width - 1) / 2);
  const midTop = Math.floor(board.height / 2) - 1;
  const midBottom = Math.floor(board.height / 2);
  const ownGoal = getGoalZoneForHalf(team, half);
  return {
    x: centerX,
    y: ownGoal.y < 0 ? midTop : midBottom
  };
}

function getNeutralForwardSpot(team, half = state?.half || 1) {
  const centerX = Math.floor((board.width - 1) / 2);
  const midTop = Math.floor(board.height / 2) - 1;
  const midBottom = Math.floor(board.height / 2);
  const ownGoal = getGoalZoneForHalf(team, half);
  const offset = setupSelection.gameStyle === "intensity" ? 3 : 2;
  return {
    x: centerX,
    y: ownGoal.y < 0
      ? Math.max(1, midTop - offset)
      : Math.min(board.height - 2, midBottom + offset)
  };
}

function pushOpponentOutsideKickoffCircle(kickingTeam) {
  const opponent = getOpponentTeam(kickingTeam);
  const centerX = (board.width - 1) / 2;
  const centerY = (board.height - 1) / 2;
  const horizontalRadius = setupSelection.gameStyle === "intensity" ? 2.2 : 1.25;
  const verticalRadius = setupSelection.gameStyle === "intensity" ? 3.2 : 1.75;
  const ownGoal = getGoalZoneForHalf(opponent);
  const limitY = ownGoal.y < 0
    ? Math.max(0, Math.floor(board.height / 2) - 2)
    : Math.min(board.height - 1, Math.ceil(board.height / 2) + 1);

  state.pieces
    .filter(piece => piece.team === opponent && piece.status === "field" && piece.type !== "ARQ")
    .forEach(piece => {
      const insideCircle = Math.abs(piece.x - centerX) <= horizontalRadius
        && Math.abs(piece.y - centerY) <= verticalRadius;
      if (!insideCircle) return;
      piece.y = ownGoal.y < 0 ? Math.min(piece.y, limitY) : Math.max(piece.y, limitY);
    });
}

function makeSquad(team, prefix) {
  const keeperY = team === "blue" ? board.height : -1;
  const fieldRows = getFormationPositions(team);

  const starters = [
    { id: `${prefix}-arq`, team, type: "ARQ", x: keeperZones[team].x, y: keeperY, status: "field", blockedTurns: 0 },
    ...fieldRows.map(([type, x, y], index) => {
      return {
      id: `${prefix}-${type.toLowerCase()}-${index + 1}`,
      team,
      type,
      x,
      y,
      status: "field",
      blockedTurns: 0
      };
    })
  ];

  const bench = ["DEF", "VOL", "MP", "DEL"].map((type, index) => ({
    id: `${prefix}-sup-${index + 1}`,
    team,
    type,
    x: null,
    y: null,
    status: "bench",
    blockedTurns: 0
  }));

  return [...starters, ...bench];
}

function placeKickoffPlayer(team) {
  const spot = getKickoffSpot(team);
  const kickoff = state.pieces
    .filter(piece => piece.team === team && piece.type === "DEL" && piece.status === "field")
    .sort((a, b) => {
      const aDistance = Math.abs(a.x - spot.x) + Math.abs(a.y - spot.y);
      const bDistance = Math.abs(b.x - spot.x) + Math.abs(b.y - spot.y);
      return aDistance - bDistance;
    })[0];
  if (!kickoff) return null;
  kickoff.x = spot.x;
  kickoff.y = spot.y;
  state.ball.ownerId = kickoff.id;
  state.ball.x = kickoff.x;
  state.ball.y = kickoff.y;
  selectedPieceId = kickoff.id;
  selectedAction = "pass";
  pushOpponentOutsideKickoffCircle(team);
  return kickoff;
}

function newGame() {
  applyGameStyle(setupSelection.gameStyle);
  const selectedConfig = state?.config || { realHalfSeconds: 5 * 60, visibleHalfMinutes: 5 };
  const pieces = [...makeSquad("blue", "b"), ...makeSquad("red", "r")];
  const userProfile = activeProfile || {
    id: "guest",
    name: "Invitado",
    team: "Azul",
    rank: "Rango inicial"
  };
  const redProfile = setupSelection.mode === "local" && localSecondProfile
    ? localSecondProfile
    : { id: "ai-red", name: "Maquina", team: setupSelection.mode === "ai" ? (currentCompetitionFixture()?.rival || "IA Roja") : "Rojo", rank: "Rival" };
  state = {
    config: selectedConfig,
    mode: setupSelection.mode,
    aiDifficulty: setupSelection.aiDifficulty,
    started: false,
    finished: false,
    half: 1,
    currentTeam: "blue",
    score: { blue: 0, red: 0 },
    teamProfiles: {
      blue: userProfile,
      red: redProfile
    },
    realHalfSecondsRemaining: selectedConfig.realHalfSeconds,
    clockRunning: false,
    turnSeconds: 15,
    ball: { x: null, y: null, ownerId: null },
    pendingShot: null,
    pendingDispute: null,
    disputeToken: 0,
    activeLongShot: false,
    extraActionAvailable: false,
    actionSpent: false,
    secretStep: null,
    kickoffPassRequired: true,
    firstKickoffDone: false,
    secondHalfKickoffDone: false,
    animationHide: null,
    lastDuel: null,
    lastShot: null,
    user: {
      id: userProfile.id,
      name: userProfile.name,
      team: userProfile.team,
      mode: activeProfile ? "registered" : "guest",
      rank: userProfile.rank,
      formation: setupSelection.formation,
      unlocks: ["Cancha base", "Indumentaria base"]
    },
    cards: {
      blue: [
        { id: "b-skill", label: "Jugada Habilidosa", used: false },
        { id: "b-long", label: "Remate Larga Distancia", used: false },
        { id: "b-second-1", label: "Segundo Movimiento", used: false },
        { id: "b-second-2", label: "Segundo Movimiento", used: false }
      ],
      red: [
        { id: "r-skill", label: "Jugada Habilidosa", used: false },
        { id: "r-long", label: "Remate Larga Distancia", used: false },
        { id: "r-second-1", label: "Segundo Movimiento", used: false },
        { id: "r-second-2", label: "Segundo Movimiento", used: false }
      ]
    },
    pieces,
    log: [`Partido preparado. ${userProfile.team} tiene la pelota en el medio.`]
  };
  placeKickoffPlayer("blue");
  render();
}

function render() {
  introAudioBtn?.classList.toggle("hidden", setupScreenEl.classList.contains("hidden") && !lockerDialog?.open);
  document.documentElement.classList.toggle("lineup-editing", lineupEditing);
  if (!lineupEditing) document.documentElement.classList.remove("lineup-dragging");
  renderBoard();
  renderHud();
  renderCards();
  renderBench();
  renderAbilities();
  renderDuelCards();
  renderShotCards();
  renderShotPanel();
  renderDuelPanel();
  renderQuickRevealPanels();
  renderLog();
}

function renderBoard() {
  boardEl.innerHTML = "";
  topKeeperEl.innerHTML = "ARQ";
  bottomKeeperEl.innerHTML = "ARQ";
  topKeeperEl.classList.remove("valid");
  bottomKeeperEl.classList.remove("valid");

  for (let y = 0; y < board.height; y++) {
    for (let x = 0; x < board.width; x++) {
      const cell = document.createElement("button");
      cell.className = "cell";
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.addEventListener("click", () => onCellClick(x, y));
      boardEl.append(cell);
    }
  }
  renderFieldLines();

  getValidTargets().forEach(target => {
    const cell = getCell(target.x, target.y);
    if (cell) {
      cell.classList.add("valid", `${target.kind}-target`);
      if (willCreateDispute(target.x, target.y)) cell.classList.add("dispute-target");
    }
  });

  if (selectedAction === "shot") {
    getShotLane().forEach(target => {
      const cell = getCell(target.x, target.y);
      if (cell) cell.classList.add("shot-lane");
    });
  }

  const shotTarget = getShotTarget();
  if (shotTarget) getKeeperElement(shotTarget.team).classList.add("valid");

  state.pieces.filter(piece => piece.status === "field").forEach(piece => {
    const container = getPieceContainer(piece);
    if (!container) return;

    const pieceEl = document.createElement("button");
    pieceEl.className = `piece ${piece.team}${piece.id === selectedPieceId ? " selected" : ""}${piece.blockedTurns > 0 ? " blocked" : ""}`;
    if (state.animationHide?.pieceId === piece.id) pieceEl.classList.add("animating-source");
    pieceEl.textContent = piece.type;
    pieceEl.title = `${roleName(piece.type)} ${teamLabel(piece.team)} (${colorLabel(piece.team)})`;
    positionPieceInStack(pieceEl, piece);
    pieceEl.addEventListener("pointerdown", event => startLineupPieceDrag(event, piece));
    pieceEl.addEventListener("click", event => {
      event.stopPropagation();
      if (suppressNextPieceClick) {
        suppressNextPieceClick = false;
        return;
      }
      if (selectedAction === "shot" && (piece.y === -1 || piece.y === board.height)) {
        onKeeperClick(piece.team);
        return;
      }
      onPieceClick(piece);
    });
    container.append(pieceEl);
  });

  renderBall();
}

function renderFieldLines() {
  const lines = document.createElement("div");
  lines.className = "field-lines";
  lines.innerHTML = `
    <span class="half-line"></span>
    <span class="center-circle"></span>
    <span class="center-spot"></span>
    <span class="penalty-box top-box"></span>
    <span class="penalty-box bottom-box"></span>
    <span class="goal-box top-small-box"></span>
    <span class="goal-box bottom-small-box"></span>
    <span class="penalty-spot top-penalty"></span>
    <span class="penalty-spot bottom-penalty"></span>
    <span class="penalty-arc top-arc"></span>
    <span class="penalty-arc bottom-arc"></span>
    <span class="corner corner-tl"></span>
    <span class="corner corner-tr"></span>
    <span class="corner corner-bl"></span>
    <span class="corner corner-br"></span>
    <span class="corner-flag flag-tl"></span>
    <span class="corner-flag flag-tr"></span>
    <span class="corner-flag flag-bl"></span>
    <span class="corner-flag flag-br"></span>
  `;
  boardEl.append(lines);
}

function startLineupPieceDrag(event, piece) {
  if (!lineupEditing || state.started || piece.type === "ARQ") return;
  event.preventDefault();
  event.stopPropagation();
  draggingLineupPiece = {
    id: piece.id,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    moved: false
  };
  document.documentElement.classList.add("lineup-dragging");
  event.currentTarget.setPointerCapture(event.pointerId);
  event.currentTarget.addEventListener("pointermove", moveLineupPieceDrag);
  event.currentTarget.addEventListener("pointerup", stopLineupPieceDrag, { once: true });
  event.currentTarget.addEventListener("pointercancel", stopLineupPieceDrag, { once: true });
}

function moveLineupPieceDrag(event) {
  if (!draggingLineupPiece) return;
  event.preventDefault();
  if (Math.abs(event.clientX - draggingLineupPiece.startX) + Math.abs(event.clientY - draggingLineupPiece.startY) > 6) {
    draggingLineupPiece.moved = true;
  }
}

function stopLineupPieceDrag(event) {
  event.currentTarget.removeEventListener("pointermove", moveLineupPieceDrag);
  document.documentElement.classList.remove("lineup-dragging");
  if (!draggingLineupPiece) return;
  const dragged = draggingLineupPiece;
  draggingLineupPiece = null;
  if (!dragged.moved) return;

  suppressNextPieceClick = true;
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".cell");
  const piece = getPieceById(dragged.id);
  if (!target || !piece) return;
  const x = Number(target.dataset.x);
  const y = Number(target.dataset.y);
  if (!isInsideField(x, y)) return;
  piece.x = x;
  piece.y = y;
  if (state.ball.ownerId === piece.id) {
    state.ball.x = x;
    state.ball.y = y;
  }
  selectedPieceId = piece.id;
  addLog(`Alineacion: ${pieceLabel(piece)} ubicado en cuadrante ${x + 1}-${y + 1}.`);
  render();
}

function renderBall() {
  const ball = document.createElement("span");
  if (state.animationHide?.ball) ball.classList.add("animating-source");

  if (state.ball.ownerId) {
    const owner = getPieceById(state.ball.ownerId);
    ball.className = `ball ${owner?.team || ""}`;
    const ownerContainer = owner ? getPieceContainer(owner) : null;
    if (ownerContainer) {
      positionBallNearOwner(ball, owner);
      ownerContainer.append(ball);
    }
    return;
  }

  ball.className = "ball free";
  const cell = getCell(state.ball.x, state.ball.y);
  if (cell) cell.append(ball);
}

function getVisualPoint(x, y) {
  const boardRect = boardEl.getBoundingClientRect();
  const target = y === -1
    ? topKeeperEl
    : y === board.height
      ? bottomKeeperEl
      : getCell(x, y);
  if (!target) return null;
  const rect = target.getBoundingClientRect();
  return {
    x: rect.left - boardRect.left + rect.width / 2,
    y: rect.top - boardRect.top + rect.height / 2
  };
}

function animateVisualMove({ kind, from, to, team, label, withBall = false, pieceId = null }) {
  state.animationHide = {
    pieceId: kind === "piece" ? pieceId : null,
    ball: kind === "ball" || withBall
  };
  renderBoard();
  renderHud();
  window.setTimeout(() => {
    const fromPoint = getVisualPoint(from.x, from.y);
    const toPoint = getVisualPoint(to.x, to.y);
    if (!fromPoint || !toPoint) return;

    const token = document.createElement("span");
    if (kind === "ball") {
      token.className = "motion-token ball";
    } else {
      token.className = `motion-token piece ${team || ""}${withBall ? " with-ball" : ""}`;
      token.textContent = label || "";
      if (withBall) {
        const ball = document.createElement("span");
        ball.className = "ball";
        token.append(ball);
      }
    }

    token.style.left = "0";
    token.style.top = "0";
    token.style.transform = `translate(${fromPoint.x - 16}px, ${fromPoint.y - 16}px)`;
    boardEl.append(token);
    token.getBoundingClientRect();
    token.style.transform = `translate(${toPoint.x - 16}px, ${toPoint.y - 16}px)`;
    window.setTimeout(() => {
      token.style.opacity = "0";
      window.setTimeout(() => {
        token.remove();
        state.animationHide = null;
        renderBoard();
        renderHud();
      }, 240);
    }, 540);
  }, 20);
}

function closeQuickMenus() {
  if (!quickControlsEl) return;
  quickControlsEl.querySelectorAll(".quick-cluster.open").forEach(cluster => {
    cluster.classList.remove("open");
    cluster.querySelector(".quick-toggle")?.setAttribute("aria-expanded", "false");
  });
}

function toggleQuickMenu(menuName) {
  if (!quickControlsEl) return;
  if (menuName === "shot") {
    prepareQuickShotFlow();
  }
  quickControlsEl.querySelectorAll(".quick-cluster").forEach(cluster => {
    const toggle = cluster.querySelector(".quick-toggle");
    const isTarget = toggle?.dataset.quickMenu === menuName;
    const shouldOpen = isTarget && !cluster.classList.contains("open");
    cluster.classList.toggle("open", shouldOpen);
    toggle?.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  });
}

function getQuickShotTarget() {
  const selected = getSelectedPiece();
  if (!selected || !hasBall(selected) || state.pendingShot || state.pendingDispute) return null;
  const previousAction = selectedAction;
  selectedAction = "shot";
  const target = getShotTarget();
  selectedAction = previousAction;
  return target;
}

function prepareQuickShotFlow() {
  if (state.pendingShot || state.pendingDispute) return;
  const selected = getSelectedPiece();
  const target = getQuickShotTarget();
  if (!selected || !target) return;
  selectedAction = "shot";
  render();
  onKeeperClick(target.team);
}

function renderQuickActionState() {
  if (!quickControlsEl) return;
  const selected = getSelectedPiece();
  const fieldVisible = styleScreenEl.classList.contains("hidden") && setupScreenEl.classList.contains("hidden");
  quickControlsEl.classList.toggle("visible", fieldVisible);
  const shotReady = Boolean(state.pendingShot || getQuickShotTarget());
  const duelReady = Boolean(state.pendingDispute);
  quickControlsEl.querySelector('[data-quick-menu="duel"]')?.classList.toggle("attention", duelReady);
  quickControlsEl.querySelector('[data-quick-menu="shot"]')?.classList.toggle("attention", shotReady);

  quickControlsEl.querySelectorAll("[data-quick-action]").forEach(button => {
    const action = button.dataset.quickAction;
    const needsBall = action === "moveBall" || action === "pass" || action === "shot";
    const blockedByKickoff = state.kickoffPassRequired && action !== "pass";
    button.disabled = Boolean(blockedByKickoff || (selected && needsBall && !hasBall(selected)));
    button.classList.toggle("active", action === selectedAction);
    button.classList.toggle("kickoff-only", state.kickoffPassRequired && action === "pass");
    button.classList.toggle("priority", Boolean(selected && hasBall(selected) && action === "shot" && getPreferredAction(selected) === "shot"));
  });
}

function syncQuickPreview(sourceElement, targetElement) {
  if (!sourceElement || !targetElement) return;
  targetElement.className = sourceElement.className;
}

function renderQuickRevealPanels() {
  if (!quickControlsEl) return;

  if (quickDuelMineEl) {
    quickDuelMineEl.textContent = duelMineEl.textContent;
    quickDuelRivalEl.textContent = duelRivalEl.textContent;
    quickDuelRivalLabelEl.textContent = duelRivalLabelEl.textContent;
    quickDuelStatusEl.textContent = duelStatusEl.textContent;
    syncQuickPreview(duelMineEl.closest(".duel-card-preview"), document.querySelector("#quickDuelMineCard"));
    syncQuickPreview(duelRivalEl.closest(".duel-card-preview"), document.querySelector("#quickDuelRivalCard"));
  }

  if (quickShotMineEl) {
    quickShotMineEl.textContent = shotMineEl.textContent;
    quickShotMineLabelEl.textContent = shotMineLabelEl.textContent;
    quickShotRivalEl.textContent = shotRivalEl.textContent;
    quickShotRivalLabelEl.textContent = shotRivalLabelEl.textContent;
    quickShotStatusEl.textContent = shotStatusEl.textContent;
    syncQuickPreview(shotMineEl.closest(".duel-card-preview"), document.querySelector("#quickShotMineCard"));
    syncQuickPreview(shotRivalEl.closest(".duel-card-preview"), document.querySelector("#quickShotRivalCard"));
  }
}

function getDisputeCardsForRole(dispute, role = null) {
  const activeRole = role || dispute.choiceRole || dispute.humanChoiceRole;
  const activeIsHolder = activeRole === "holder";
  return {
    mine: activeIsHolder ? dispute.holderCard : dispute.challengerCard,
    rival: activeIsHolder ? dispute.challengerCard : dispute.holderCard
  };
}

function pulseRevealCard(cardEl, revealed) {
  if (!cardEl) return;
  cardEl.classList.remove("revealed");
  if (!revealed) return;
  void cardEl.offsetWidth;
  cardEl.classList.add("revealed");
}

function showDuelRevealOverlay(dispute, revealed = false, options = {}) {
  if (!duelRevealOverlayEl || !dispute) return;
  window.clearTimeout(duelRevealOverlayTimer);
  const { mine, rival } = getDisputeCardsForRole(dispute, options.role);
  const hideMine = Boolean(options.hideMine);
  const mineValue = hideMine ? "?" : (mine || "-");
  const rivalValue = revealed ? (rival || "?") : "?";

  if (duelRevealTitleEl) duelRevealTitleEl.textContent = textFor("duelRevealTitle").toUpperCase();
  if (duelRevealMineLabelEl) duelRevealMineLabelEl.textContent = hideMine ? textFor("rivalBack") : textFor("ownFront");
  if (duelRevealRivalLabelEl) duelRevealRivalLabelEl.textContent = revealed ? textFor("rivalFront") : textFor("rivalBack");
  if (duelRevealMineEl) duelRevealMineEl.textContent = mineValue;
  if (duelRevealRivalEl) duelRevealRivalEl.textContent = rivalValue;
  duelRevealMineCardEl?.classList.toggle("hidden-card", hideMine);
  duelRevealRivalCardEl?.classList.toggle("hidden-card", !revealed);
  pulseRevealCard(duelRevealMineCardEl, !hideMine && Boolean(mine));
  pulseRevealCard(duelRevealRivalCardEl, revealed && Boolean(rival));
  if (duelRevealTextEl) {
    duelRevealTextEl.textContent = revealed
      ? textTemplate("duelRevealShown", { mine: mine || "-", rival: rival || "?" })
      : textFor("duelRevealWaiting");
  }
  duelRevealOverlayEl.classList.remove("hidden");
  duelRevealOverlayEl.setAttribute("aria-hidden", "false");
}

function getShotRevealRole(shot) {
  const aiShooterVsHuman = state.mode === "ai" && shot.attackingTeam === "red" && shot.keeperTeam === "blue";
  return aiShooterVsHuman ? "keeper" : "shooter";
}

function getKeeperRevealValue(shot) {
  if (!shot.longDistance) return shot.keeperCard || "?";
  if (!shot.reboundCard) return shot.keeperCard ? `${shot.keeperCard} / ?` : "? / ?";
  return `${shot.keeperCard || "?"} / ${shot.reboundCard}`;
}

function getShotRevealText(shot) {
  if (shot.longDistance) {
    return textTemplate("shotRevealLongShown", {
      shot: shot.shotCard || "-",
      keeper: shot.keeperCard || "?",
      rebound: shot.reboundCard || "?"
    });
  }
  return textTemplate("shotRevealShown", {
    shot: shot.shotCard || "-",
    keeper: shot.keeperCard || "?"
  });
}

function showShotRevealOverlay(shot, revealed = false, options = {}) {
  if (!duelRevealOverlayEl || !shot) return;
  window.clearTimeout(duelRevealOverlayTimer);
  const role = options.role || getShotRevealRole(shot);
  const keeperValue = getKeeperRevealValue(shot);
  const mineValue = role === "keeper" ? keeperValue : (shot.shotCard || "-");
  const rivalValue = role === "keeper" ? (shot.shotCard || "?") : keeperValue;
  const mineLabel = role === "keeper" ? textFor("keeperFront") : textFor("shooterFront");
  const rivalFront = role === "keeper" ? textFor("shooterFront") : textFor("keeperFront");
  const rivalBack = role === "keeper" ? textFor("shooterBack") : textFor("keeperBack");

  if (duelRevealTitleEl) duelRevealTitleEl.textContent = textFor("shotRevealTitle").toUpperCase();
  if (duelRevealMineLabelEl) duelRevealMineLabelEl.textContent = mineLabel;
  if (duelRevealRivalLabelEl) duelRevealRivalLabelEl.textContent = revealed ? rivalFront : rivalBack;
  if (duelRevealMineEl) duelRevealMineEl.textContent = mineValue || "-";
  if (duelRevealRivalEl) duelRevealRivalEl.textContent = revealed ? (rivalValue || "?") : "?";
  duelRevealMineCardEl?.classList.remove("hidden-card");
  duelRevealRivalCardEl?.classList.toggle("hidden-card", !revealed);
  pulseRevealCard(duelRevealMineCardEl, Boolean(mineValue));
  pulseRevealCard(duelRevealRivalCardEl, revealed && Boolean(rivalValue));
  if (duelRevealTextEl) {
    duelRevealTextEl.textContent = revealed
      ? getShotRevealText(shot)
      : textFor(role === "keeper" ? "shotRevealWaitingKeeper" : "shotRevealWaitingShooter");
  }
  duelRevealOverlayEl.classList.remove("hidden");
  duelRevealOverlayEl.setAttribute("aria-hidden", "false");
}

function hideDuelRevealOverlay(delay = 0) {
  if (!duelRevealOverlayEl) return;
  window.clearTimeout(duelRevealOverlayTimer);
  duelRevealOverlayTimer = window.setTimeout(() => {
    duelRevealOverlayEl.classList.add("hidden");
    duelRevealOverlayEl.setAttribute("aria-hidden", "true");
    duelRevealMineCardEl?.classList.remove("revealed");
    duelRevealRivalCardEl?.classList.remove("revealed");
  }, delay);
}

function scheduleRevealClear(type) {
  if (type === "duel") {
    window.clearTimeout(duelRevealClearTimer);
    duelRevealClearTimer = window.setTimeout(() => {
      if (state.pendingDispute) return;
      state.lastDuel = null;
      renderDuelPanel();
      renderQuickRevealPanels();
    }, 2600);
    return;
  }

  window.clearTimeout(shotRevealClearTimer);
  shotRevealClearTimer = window.setTimeout(() => {
    if (state.pendingShot) return;
    state.lastShot = null;
    renderShotPanel();
    renderQuickRevealPanels();
  }, 2600);
}

function revealDisputeThenResolve(disputeId, revealRole = null) {
  window.setTimeout(() => {
    const dispute = state.pendingDispute;
    if (!dispute || dispute.id !== disputeId) return;
    dispute.revealed = true;
    renderDuelCards();
    renderDuelPanel();
    renderQuickRevealPanels();
    showDuelRevealOverlay(dispute, true, { role: revealRole || dispute.humanChoiceRole });

    window.setTimeout(() => {
      if (!state.pendingDispute || state.pendingDispute.id !== disputeId) return;
      hideDuelRevealOverlay(250);
      resolvePendingDispute();
    }, 1900);
  }, 800);
}

function revealShotThenResolve(shotRef, revealRole = null) {
  if (!shotRef) return;
  shotRef.revealing = true;
  const role = revealRole || getShotRevealRole(shotRef);
  showShotRevealOverlay(shotRef, false, { role });
  window.setTimeout(() => {
    if (!state.pendingShot || state.pendingShot !== shotRef) return;
    renderShotCards();
    renderShotPanel();
    renderQuickRevealPanels();
    showShotRevealOverlay(shotRef, true, { role });

    window.setTimeout(() => {
      if (!state.pendingShot || state.pendingShot !== shotRef) return;
      hideDuelRevealOverlay(250);
      resolvePendingShot();
    }, 1900);
  }, 850);
}

function textFor(key) {
  return uiText[currentLanguage]?.[key] || uiText.es[key] || key;
}

function textTemplate(key, values = {}) {
  let text = textFor(key);
  Object.entries(values).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, value);
  });
  return text;
}

function difficultyText(level) {
  return textFor(level) || level;
}

function styleDisplayName(style = setupSelection.gameStyle) {
  return style === "intensity" ? textFor("intensityStyleName") : textFor("strategyStyleName");
}

function competitionTypeName(type) {
  if (type === "cup") return textFor("cup8");
  if (type === "league") return textFor("league10");
  return textFor("friendlyMatch");
}

function competitionFixtureLabel(fixture) {
  if (!fixture) return "";
  if (fixture.label === "Cuartos de final") return textFor("cupQuarter");
  if (fixture.label === "Semifinal") return textFor("cupSemi");
  if (fixture.label === "Final") return textFor("cupFinal");
  const round = /^Fecha\s+(\d+)/.exec(fixture.label);
  if (round) return textTemplate("leagueRound", { round: round[1] });
  return fixture.label;
}

function roleName(type) {
  return textFor(`role${type}`) || stats[type]?.name || type;
}

function cardDisplayLabel(card) {
  if (!card) return "";
  if (card.label === "Jugada Habilidosa") return textFor("skillCard");
  if (card.label === "Remate Larga Distancia") return textFor("longShotCard");
  if (card.label === "Segundo Movimiento") return textFor("secondMoveCard");
  return card.label;
}

function halfAbbrev() {
  if (lineupEditing) return "PRE";
  if (state.finished) return "FIN";
  return state.half === 1 ? "PT" : "ST";
}

function syncScreenChrome() {
  const showingStyleScreen = !styleScreenEl.classList.contains("hidden");
  document.body.classList.toggle("show-language-switch", showingStyleScreen);
}

function setElementText(selector, key) {
  const element = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (element) element.textContent = textFor(key);
}

function setLabelText(inputEl, key) {
  const label = inputEl?.closest("label");
  if (!label) return;
  const textNode = [...label.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = `\n                ${textFor(key)}\n                `;
}

function setOptionText(selectEl, value, key) {
  const option = selectEl ? [...selectEl.options].find(item => item.value === value) : null;
  if (option) option.textContent = textFor(key);
}

function setPlaceholder(inputEl, key) {
  if (inputEl) inputEl.placeholder = textFor(key);
}

function setSetupOptionText(selector, key) {
  const button = document.querySelector(selector);
  if (button) button.textContent = textFor(key);
}

function applySetupLanguage() {
  setElementText("#setupScreen .setup-card > .eyebrow", "setupConfigure");
  setElementText("#setupScreen .setup-card > h1", "setupTitle");
  setElementText("#setupScreen .setup-module:nth-of-type(1) h2", "identificationTitle");
  setElementText("#setupScreen .setup-module:nth-of-type(1) .setup-note", "identificationNote");
  setLabelText(loginNameEl, "userLabel");
  setLabelText(loginTeamEl, "teamUniqueLabel");
  setLabelText(loginDniEl, "dniLabel");
  setLabelText(loginPhoneEl, "phoneLabel");
  setLabelText(loginEmailEl, "emailLabel");
  setLabelText(loginAddressEl, "addressLabel");
  setLabelText(loginCountryEl, "countryLabel");
  setLabelText(loginCodeEl, "mfaCodeLabel");
  setElementText(loginBtn, "registerLogin");
  setElementText(newProfileBtn, "newProfile");
  setElementText(".registered-list > span", "registeredTeams");

  const setupHeadings = [...document.querySelectorAll("#setupScreen .setup-card > h2")];
  if (setupHeadings[0]) setupHeadings[0].textContent = textFor("modeTitle");
  if (setupHeadings[1]) setupHeadings[1].textContent = textFor("aiDifficultyTitle");
  if (setupHeadings[2]) setupHeadings[2].textContent = textFor("formationTitle");
  if (setupHeadings[3]) setupHeadings[3].textContent = textFor("durationTitle");
  setSetupOptionText("[data-mode='local']", "localMode");
  setSetupOptionText("[data-mode='ai']", "aiMode");
  setSetupOptionText("[data-mode='online']", "onlineMode");
  setSetupOptionText("[data-mode='league']", "leagueMode");
  setSetupOptionText("[data-ai='easy']", "easy");
  setSetupOptionText("[data-ai='medium']", "medium");
  setSetupOptionText("[data-ai='hard']", "hard");
  setSetupOptionText("[data-duration='5']", "duration5");
  setSetupOptionText("[data-duration='10']", "duration10");
  setSetupOptionText("[data-duration='15']", "duration15");
  setElementText("#setupScreen .setup-card > .setup-note", "durationNote");
  setElementText(openLockerSetupBtn, "lockerEnter");
  setElementText(prepareLineupBtn, "lineupPrepare");
  setElementText(styleBackBtn, "backToStyles");
  setElementText(startMatchBtn, "startMatch");

  setElementText("#localPanel h2", "localPlayer2Title");
  setElementText("#localPanel .setup-note", "localPlayer2Note");
  setLabelText(localP2TeamKeyEl, "player2TeamLabel");
  setLabelText(localP2CodeEl, "player2MfaLabel");
  setElementText(localP2AuthBtn, "validatePlayer2");
  setElementText("#onlinePanel h2", "onlineTitle");
  setElementText("#onlinePanel .setup-note", "onlineNote");
  setElementText(createOnlineLinkBtn, "createOnlineLink");
  setLabelText(joinOnlineLinkEl, "receivedLink");
  setElementText("#leaguePanel h2", "leagueSetupTitle");
  setElementText("#leaguePanel .setup-note", "leagueSetupNote");
  setLabelText(leagueNameEl, "leagueNameLabel");
  setLabelText(leagueFormatEl, "formatLabel");
  setOptionText(leagueFormatEl, "fixture", "formatFixture");
  setOptionText(leagueFormatEl, "knockout", "formatKnockout");
  setOptionText(leagueFormatEl, "local", "formatLocal");
  setElementText(createLeagueBtn, "createLeague");
  setElementText("#competitionPanel h2", "aiCompetitionTitle");
  setElementText("#competitionPanel .setup-note", "aiCompetitionNote");
  setSetupOptionText("[data-competition='friendly']", "friendlyMatch");
  setSetupOptionText("[data-competition='cup']", "cup8");
  setSetupOptionText("[data-competition='league']", "league10");
  setLabelText(competitionCodeInputEl, "competitionCodeLabel");
  setElementText(resumeCompetitionBtn, "resume");
  setElementText(abandonCompetitionBtn, "abandonCompetition");

  setElementText("#physicalScreen .physical-top .eyebrow", "physEyebrow");
  setElementText("#physicalScreen .physical-top h1", "physTitle");
  setElementText("#physicalScreen .physical-top p:not(.eyebrow)", "physIntro");
  setElementText(physicalBackBtn, "backToStyles");
  setElementText(physicalShowMatchBtn, "showClock");
  const physicalHeadings = [...document.querySelectorAll("#physicalScreen h2")];
  if (physicalHeadings[0]) physicalHeadings[0].textContent = textFor("registerTitle");
  if (physicalHeadings[1]) physicalHeadings[1].textContent = textFor("officialTitle");
  if (physicalHeadings[2]) physicalHeadings[2].textContent = textFor("competitionTitle");
  setElementText("#physicalSetupPanel .setup-note", "physicalNote");
  setLabelText(physicalUserNameEl, "userLabel");
  setLabelText(physicalTeamNameEl, "teamUniqueLabel");
  setLabelText(physicalTeamCodeEl, "mfaCodeLabel");
  setLabelText(physicalTeamAuthMethodEl, "authMethodLabel");
  setOptionText(physicalTeamAuthMethodEl, "mfa", "authMfa");
  setOptionText(physicalTeamAuthMethodEl, "fingerprint", "authFingerprint");
  setOptionText(physicalTeamAuthMethodEl, "face", "authFace");
  setElementText(physicalTeamAuthBtn, "validateIdentity");
  setElementText(physicalRegisterTeamBtn, "registerTeam");
  setElementText("#physicalSetupPanel .physical-list-wrap h3", "teamsRegistered");
  setLabelText(physicalOfficialNameEl, "officialName");
  setLabelText(physicalOfficialRoleEl, "officialRole");
  setOptionText(physicalOfficialRoleEl, "veedor", "observerRole");
  setOptionText(physicalOfficialRoleEl, "arbitro", "refereeRole");
  setOptionText(physicalOfficialRoleEl, "organizador", "organizerRole");
  setLabelText(physicalOfficialCodeEl, "officialCode");
  setLabelText(physicalOfficialAuthMethodEl, "authMethodLabel");
  setOptionText(physicalOfficialAuthMethodEl, "mfa", "authMfa");
  setOptionText(physicalOfficialAuthMethodEl, "fingerprint", "authFingerprint");
  setOptionText(physicalOfficialAuthMethodEl, "face", "authFace");
  setElementText(physicalOfficialAuthBtn, "validateAuthority");
  setElementText(physicalRegisterOfficialBtn, "registerOfficial");
  const physicalSubtitles = [...document.querySelectorAll("#physicalScreen h3")];
  if (physicalSubtitles[1]) physicalSubtitles[1].textContent = textFor("officials");
  if (physicalSubtitles[2]) physicalSubtitles[2].textContent = textFor("inviteTitle");
  if (physicalSubtitles[3]) physicalSubtitles[3].textContent = textFor("physicalMatchTitle");
  if (physicalSubtitles[4]) physicalSubtitles[4].textContent = textFor("matchLogTitle");
  if (physicalSubtitles[5]) physicalSubtitles[5].textContent = textFor("statusTitle");
  setLabelText(physicalCompetitionNameEl, "competitionName");
  setLabelText(physicalCompetitionTypeEl, "competitionType");
  setOptionText(physicalCompetitionTypeEl, "challenge", "challenge1v1");
  setOptionText(physicalCompetitionTypeEl, "league", "leagueTable");
  setOptionText(physicalCompetitionTypeEl, "cup", "cupBracket");
  setLabelText(physicalCompetitionCodeEl, "competitionCode");
  setElementText(physicalGenerateCodeBtn, "generateCode");
  setElementText(physicalCreateCompetitionBtn, "createCompetition");
  setLabelText(physicalInviteTeamNameEl, "invitedTeam");
  setLabelText(physicalInviteLinkEl, "generatedLink");
  setElementText(physicalInviteBtn, "generateLink");
  setLabelText(physicalHomeTeamEl, "homeTeam");
  setLabelText(physicalAwayTeamEl, "awayTeam");
  setLabelText(physicalObserverEl, "observer");
  setElementText(physicalPrepareMatchBtn, "prepareClock");
  document.querySelectorAll("[data-physical-duration]").forEach(button => {
    const key = `duration${button.dataset.physicalDuration}`;
    button.textContent = textFor(key);
  });
  setElementText("#physicalMatchPanel .eyebrow", "matchAct");
  setElementText(physicalStartTimerBtn, "startResume");
  setElementText(physicalPauseTimerBtn, "pause");
  setElementText(physicalHalfBtn, "changeHalf");
  setElementText(physicalFinishBtn, "finishAndSave");
  setElementText(physicalNewMatchBtn, "newMatch");
  setLabelText(physicalEvidenceFileEl, "evidenceLabel");
  setElementText(physicalEvidenceBtn, "attachEvidence");

  if (!activeProfile && loginStatusEl) loginStatusEl.textContent = textFor("setupLoginPrompt");
  if (localP2StatusEl) {
    localP2StatusEl.textContent = localSecondProfile
      ? `${textFor("player2")}: ${localSecondProfile.name} / ${localSecondProfile.team}`
      : textFor("localPlayer2Pending");
  }
  if (onlineStatusEl && !onlineStatusEl.textContent.includes("http")) onlineStatusEl.textContent = textFor("onlinePending");
  if (leagueStatusEl) leagueStatusEl.textContent = textFor("leaguePending");
  if (!pendingPhysicalTeamAuth && physicalTeamAuthStatusEl) physicalTeamAuthStatusEl.textContent = textFor("teamAuthPending");
  if (!pendingPhysicalOfficialAuth && physicalOfficialAuthStatusEl) physicalOfficialAuthStatusEl.textContent = textFor("officialPending");
  if (physicalInviteStatusEl && !physicalInviteLinkEl?.value) physicalInviteStatusEl.textContent = textFor("invitePending");
  if (physicalStatusEl && !physicalSupportState.teams.length) physicalStatusEl.textContent = textFor("physicalStatusReady");
  if (physicalMatchStatusEl && !physicalSupportState.activeMatch) physicalMatchStatusEl.textContent = textFor("matchReady");
}

function applyLanguage() {
  if (languageSelectEl) languageSelectEl.value = currentLanguage;
  const languageLabel = document.querySelector(".language-switch span");
  if (languageLabel) languageLabel.textContent = textFor("language");
  document.documentElement.lang = currentLanguage;
  document.querySelector("#stylePrompt").textContent = textFor("stylePrompt");
  document.querySelector("#strategyTitle").textContent = textFor("strategyTitle");
  document.querySelector("#strategyDesc").textContent = textFor("strategyDesc");
  document.querySelector("#intensityTitle").textContent = textFor("intensityTitle");
  document.querySelector("#intensityDesc").textContent = textFor("intensityDesc");
  document.querySelector("#physicalTitle").textContent = textFor("physicalTitle");
  document.querySelector("#physicalDesc").textContent = textFor("physicalDesc");
  introAudioBtn?.querySelector("strong") && (introAudioBtn.querySelector("strong").textContent = textFor("audio"));
  document.querySelector("[data-action='move']").textContent = textFor("move");
  document.querySelector("[data-action='moveBall']").textContent = textFor("moveBall");
  document.querySelector("[data-action='pass']").textContent = textFor("pass");
  document.querySelector("[data-action='shot']").textContent = textFor("shot");
  document.querySelector("#endTurnBtn").textContent = textFor("endTurn");
  document.querySelector("[data-quick-action='move']").textContent = textFor("move");
  document.querySelector("[data-quick-action='moveBall']").textContent = textFor("moveBall");
  document.querySelector("[data-quick-action='pass']").textContent = textFor("pass");
  document.querySelector("[data-quick-action='shot']").textContent = textFor("shot");
  document.querySelector("[data-quick-end-turn]").textContent = textFor("endTurn");
  document.querySelectorAll("[data-role]").forEach(button => {
    button.textContent = roleName(button.dataset.role);
  });
  const leftHeaders = document.querySelectorAll(".left-panel h2");
  if (leftHeaders[0]) leftHeaders[0].textContent = textFor("turn");
  if (leftHeaders[1]) leftHeaders[1].textContent = textFor("history");
  const selectedLabels = document.querySelectorAll(".left-panel .selected-box span");
  if (selectedLabels[0]) selectedLabels[0].textContent = textFor("piece");
  if (selectedLabels[1]) selectedLabels[1].textContent = textFor("squad");
  const abilityLabels = document.querySelectorAll(".left-panel .ability-box > span");
  if (abilityLabels[0]) abilityLabels[0].textContent = textFor("abilities");
  if (abilityLabels[1]) abilityLabels[1].textContent = textFor("reference");
  if (abilityLabels[2]) abilityLabels[2].textContent = textFor("bench");
  const rightHeaders = document.querySelectorAll(".right-panel .play-card-stack > h2");
  if (rightHeaders[0]) rightHeaders[0].textContent = textFor("specialCards");
  if (rightHeaders[1]) rightHeaders[1].textContent = textFor("duelCards");
  if (rightHeaders[2]) rightHeaders[2].textContent = textFor("duelZone");
  if (rightHeaders[3]) rightHeaders[3].textContent = textFor("shotCards");
  if (rightHeaders[4]) rightHeaders[4].textContent = textFor("shotZone");
  const quickHeaders = document.querySelectorAll(".quick-reveal-panel h3");
  if (quickHeaders[0]) quickHeaders[0].textContent = textFor("duelZone");
  if (quickHeaders[1]) quickHeaders[1].textContent = textFor("shotZone");
  syncProfileUi();
  renderPhysicalSupport();
  applySetupLanguage();
  renderCompetitionPanel();
  syncAudioButtons();
  renderHud();
  if (state) {
    renderCards();
    renderDuelPanel();
    renderShotPanel();
    renderBench();
    renderAbilities();
    renderQuickRevealPanels();
  }
}

function renderHud() {
  const selected = getSelectedPiece();
  if (state.kickoffPassRequired) {
    selectedAction = "pass";
  }
  if (selected && state.ball.ownerId && state.ball.ownerId !== selected.id && selectedAction === "moveBall") {
    selectedAction = "move";
  }
  selectedPieceEl.textContent = state.pendingShot
    ? state.pendingShot.shotCard
      ? state.mode === "ai" && state.pendingShot.attackingTeam === "red"
        ? textFor("humanKeeperChooseCard")
        : textFor("keeperChooseCard")
      : textFor("shooterChooseCard")
    : selected
    ? `${roleName(selected.type)} ${teamLabel(selected.team)}`
    : textFor("selectPiece");

  const active = state.pieces.filter(piece => piece.team === state.currentTeam && piece.status === "field").length;
  const bench = state.pieces.filter(piece => piece.team === state.currentTeam && piece.status === "bench").length;
  const styleName = styleDisplayName();
  squadStatusEl.textContent = `${active} ${textFor("fieldPlayers")} / ${bench} ${textFor("substitutes")} / ${styleName}`;

  teamANameEl.textContent = teamLabel("blue");
  teamBNameEl.textContent = teamLabel("red");
  turnLabelEl.textContent = `${textFor("turn")}: ${teamLabel(state.currentTeam)}`;
  scoreEl.textContent = `${state.score.blue} - ${state.score.red}`;
  const halfText = state.half === 1 ? textFor("firstHalf") : textFor("secondHalf");
  const timerText = formatVisibleMatchTime();
  const scoreText = `${state.score.blue} - ${state.score.red}`;
  halfLabelEl.textContent = halfText;
  matchTimerEl.textContent = timerText;
  turnTimerEl.textContent = state.turnSeconds;
  if (floatingMatchHudEl) {
    const showFloatingHud = Boolean(state && setupScreenEl.classList.contains("hidden") && styleScreenEl.classList.contains("hidden"));
    floatingMatchHudEl.classList.toggle("hidden", !showFloatingHud);
    document.documentElement.classList.toggle("field-active", showFloatingHud);
    floatingHalfEl.textContent = textFor("time");
    floatingScoreEl.textContent = `${halfAbbrev()} ${scoreText}`;
    floatingTimerEl.textContent = timerText;
  }
  if (startPreparedBtn) {
    startPreparedBtn.classList.toggle("hidden", !lineupEditing);
  }

  document.querySelectorAll("[data-action]").forEach(button => {
  const needsBall = button.dataset.action === "moveBall" || button.dataset.action === "pass" || button.dataset.action === "shot";
  const blockedByKickoff = state.kickoffPassRequired && button.dataset.action !== "pass";
  button.disabled = Boolean(blockedByKickoff || (selected && needsBall && !hasBall(selected)));
  button.classList.toggle("active", button.dataset.action === selectedAction);
  button.classList.toggle("kickoff-only", state.kickoffPassRequired && button.dataset.action === "pass");
  button.classList.toggle("priority", Boolean(selected && hasBall(selected) && button.dataset.action === "shot" && getPreferredAction(selected) === "shot"));
  });
  renderQuickActionState();
}

function renderCards() {
  specialCardsEl.innerHTML = "";
  if (quickSpecialCardsEl) {
    quickSpecialCardsEl.innerHTML = "";
  }
  state.cards[state.currentTeam].forEach(card => {
    const button = document.createElement("button");
    button.textContent = cardDisplayLabel(card);
    button.classList.toggle("used", card.used);
    button.disabled = card.used;
    button.addEventListener("click", () => useSpecialCard(card.id));
    specialCardsEl.append(button);
    if (quickSpecialCardsEl) {
      const quickButton = document.createElement("button");
      quickButton.type = "button";
      quickButton.textContent = cardDisplayLabel(card);
      quickButton.classList.toggle("used", card.used);
      quickButton.disabled = card.used;
      quickButton.addEventListener("click", () => {
        closeQuickMenus();
        useSpecialCard(card.id);
      });
      quickSpecialCardsEl.append(quickButton);
    }
  });
}

function renderDuelCards() {
  document.querySelectorAll(".duel-card, [data-quick-duel]").forEach(button => {
    if (state.pendingDispute?.localWaitingSecond) {
      button.classList.remove("active-card");
      return;
    }
    const value = button.dataset.duel || button.dataset.quickDuel;
    const selectedCard = state.pendingDispute?.choiceRole === "holder" || state.pendingDispute?.humanChoiceRole === "holder"
      ? state.pendingDispute.holderCard
      : state.pendingDispute?.challengerCard;
    button.classList.toggle("active-card", Boolean(
      state.pendingDispute && selectedCard === value
    ));
  });
}

function renderShotCards() {
  const hidePendingShotChoice = Boolean(
    state.pendingShot
    && state.pendingShot.shotCard
    && !state.pendingShot.keeperCard
    && (state.mode === "local" || (state.mode === "ai" && state.pendingShot.attackingTeam === "red" && state.pendingShot.keeperTeam === "blue"))
  );

  document.querySelectorAll("[data-shot], [data-quick-shot]").forEach(button => {
    const value = button.dataset.shot || button.dataset.quickShot;
    button.classList.toggle("active-card", Boolean(
      state.pendingShot && !hidePendingShotChoice && state.pendingShot.shotCard === value
    ));
    button.title = state.pendingShot
      ? state.pendingShot.shotCard
        ? textFor("shotCardChooseKeeper")
        : textFor("shotCardChooseShooter")
      : textFor("shotKeeperCard");
  });
}

function renderShotPanel() {
  const mineCard = shotMineEl.closest(".duel-card-preview");
  const rivalCard = shotRivalEl.closest(".duel-card-preview");
  mineCard.querySelector("span").textContent = textFor("shotLabel");
  mineCard.classList.remove("hidden-card", "revealed");
  rivalCard.classList.toggle("hidden-card", Boolean(state.pendingShot && !state.pendingShot.keeperCard));
  rivalCard.classList.toggle("revealed", Boolean(state.pendingShot && state.pendingShot.keeperCard));

  if (state.pendingShot) {
    const aiShooterVsHuman = state.mode === "ai" && state.pendingShot.attackingTeam === "red" && state.pendingShot.keeperTeam === "blue";
    const hideFirstCard = (state.mode === "local" || aiShooterVsHuman) && state.pendingShot.shotCard && !state.pendingShot.keeperCard;
    shotMineLabelEl.textContent = hideFirstCard ? textFor("shooterBack") : textFor("shooterFront");
    shotMineEl.textContent = hideFirstCard ? "?" : state.pendingShot.shotCard || "-";
    const keeperText = state.pendingShot.longDistance
      ? [state.pendingShot.keeperCard || "?", state.pendingShot.reboundCard || "?"].join(" / ")
      : state.pendingShot.keeperCard || "?";
    shotRivalEl.textContent = keeperText;
    shotRivalLabelEl.textContent = state.pendingShot.keeperCard ? textFor("keeperFront") : textFor("keeperBack");
    shotStatusEl.textContent = getShotPrompt();
    return;
  }

  if (state.lastShot) {
    rivalCard.classList.remove("hidden-card");
    shotMineEl.textContent = state.lastShot.shotCard;
    shotRivalEl.textContent = state.lastShot.keeperCard;
    shotRivalLabelEl.textContent = textFor("keeperFront");
    shotStatusEl.textContent = state.lastShot.result;
    return;
  }

  shotMineEl.textContent = "-";
  shotMineLabelEl.textContent = textFor("shotLabel");
  shotRivalEl.textContent = "?";
  shotRivalLabelEl.textContent = textFor("keeperBack");
  shotStatusEl.textContent = textFor("noShot");
}

function getShotPrompt() {
  const shot = state.pendingShot;
  if (!shot) return textFor("noShot");
  const aiShooterVsHuman = state.mode === "ai" && shot.attackingTeam === "red" && shot.keeperTeam === "blue";
  if (!shot.shotCard) return "Remate activo. Elegi carta 1-4.";
  if (aiShooterVsHuman && !shot.keeperCard) return "La IA ya pateo. Elegi tu carta de arquero 1-4.";
  if (!shot.keeperCard) return shot.longDistance
    ? "Arquero: elegi carta de atajada directa."
    : "Arquero: elegi carta 1-4.";
  if (shot.longDistance && !shot.reboundCard) return "Arquero: elegi carta de rebote.";
  return "Resolviendo remate.";
}

function renderDuelPanel() {
  duelPanelEl.classList.toggle("collapsed", !state.pendingDispute && !state.lastDuel);
  const mineCard = duelMineEl.closest(".duel-card-preview");
  const rivalCard = duelRivalEl.closest(".duel-card-preview");
  mineCard.querySelector("span").textContent = textFor("ownFront");
  mineCard.classList.remove("hidden-card", "revealed");
  rivalCard.classList.toggle("hidden-card", Boolean(state.pendingDispute && !state.pendingDispute.revealed));
  rivalCard.classList.toggle("revealed", Boolean(state.pendingDispute && state.pendingDispute.revealed));

  if (!state.pendingDispute) {
    if (state.lastDuel) {
      mineCard.classList.remove("hidden-card");
      rivalCard.classList.remove("hidden-card");
      rivalCard.classList.add("revealed");
      duelMineEl.textContent = state.lastDuel.mineCard || state.lastDuel.challengerCard || "-";
      duelRivalLabelEl.textContent = textFor("rivalFront");
      duelRivalEl.textContent = state.lastDuel.rivalCard || state.lastDuel.holderCard || "?";
      duelStatusEl.textContent = state.lastDuel.result || `Duelo: ${teamLabel(state.lastDuel.winnerTeam)} gana.`;
      return;
    }
    duelRivalLabelEl.textContent = textFor("rivalBack");
    duelMineEl.textContent = "-";
    duelRivalEl.textContent = "?";
    duelStatusEl.textContent = textFor("noDuel");
    return;
  }

  const humanIsHolder = state.pendingDispute.humanChoiceRole === "holder";
  const activeRole = state.pendingDispute.choiceRole || state.pendingDispute.humanChoiceRole;
  const activeIsHolder = activeRole === "holder";
  const humanCard = activeIsHolder ? state.pendingDispute.holderCard : state.pendingDispute.challengerCard;
  const rivalCardValue = activeIsHolder ? state.pendingDispute.challengerCard : state.pendingDispute.holderCard;
  duelMineEl.textContent = humanCard || "-";
  duelRivalLabelEl.textContent = state.pendingDispute.revealed ? textFor("rivalFront") : textFor("rivalBack");
  duelRivalEl.textContent = state.pendingDispute.revealed ? rivalCardValue : "?";
  if (state.mode === "local" && state.pendingDispute.localWaitingSecond) {
    duelMineEl.textContent = humanCard || "-";
    duelStatusEl.textContent = humanCard
      ? "Segunda carta elegida. Revelando duelo..."
      : "Segundo jugador: elegi A, B, C o D. La primera carta esta tapada.";
    return;
  }
  if (state.pendingDispute.revealed) {
    duelStatusEl.textContent = `Duelo revelado: ${humanCard || "-"} vs ${rivalCardValue || "?"}.`;
    return;
  }
  duelStatusEl.textContent = humanCard
    ? "Carta elegida. Revelando rival..."
    : "Elegi A, B, C o D. La carta rival esta tapada.";
}

function renderBench() {
  benchListEl.innerHTML = "";
  state.pieces
    .filter(piece => piece.team === state.currentTeam && piece.status === "bench")
    .forEach(piece => {
      const item = document.createElement("div");
      item.className = "bench-chip";
      item.textContent = `${roleName(piece.type)} ${textFor("substitute")}`;
      benchListEl.append(item);
    });
}

function renderAbilities() {
  const selected = getSelectedPiece();
  abilityGridEl.innerHTML = "";
  const type = referenceRole || selected?.type;
  const team = selected?.team || state.currentTeam || "blue";
  if (!type) return;

  const selectedStats = stats[type];
  const items = [
    [team === "blue" ? "A ↑" : "A ↓", selectedStats.move.up],
    [team === "blue" ? "AD ↗" : "AD ↙", selectedStats.move.upRight],
    [team === "blue" ? "D →" : "D ←", selectedStats.move.right],
    [team === "blue" ? "ATD ↘" : "ATD ↖", selectedStats.move.downRight],
    [team === "blue" ? "AT ↓" : "AT ↑", selectedStats.move.down],
    [team === "blue" ? "ATI ↙" : "ATI ↗", selectedStats.move.downLeft],
    [team === "blue" ? "I ←" : "I →", selectedStats.move.left],
    [team === "blue" ? "AI ↖" : "AI ↘", selectedStats.move.upLeft],
    ["P/R", `${selectedStats.pass}/${selectedStats.shot}`]
  ];

  items.forEach(([label, value]) => {
    const chip = document.createElement("div");
    chip.className = "ability-chip";
    chip.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    abilityGridEl.append(chip);
  });

  document.querySelectorAll("[data-role]").forEach(button => {
    button.classList.toggle("active", button.dataset.role === referenceRole);
  });
}

function renderLog() {
  logEl.innerHTML = "";
  state.log.slice(-10).forEach(entry => {
    const li = document.createElement("li");
    li.textContent = entry;
    logEl.prepend(li);
  });
}

function selectPiece(id) {
  const piece = getPieceById(id);
  if (!piece || piece.team !== state.currentTeam) {
    addLog("Solo podes seleccionar fichas del equipo en turno.");
    return;
  }
  if (piece.blockedTurns > 0) {
    addLog(`${pieceLabel(piece)} perdio un duelo y no puede jugar este turno.`);
    return;
  }
  referenceRole = null;
  selectedPieceId = id;
  selectedAction = getPreferredAction(piece);
  render();
}

function onPieceClick(piece) {
  if (piece.team === state.currentTeam) {
    selectPiece(piece.id);
    return;
  }

  const selected = getSelectedPiece();
  const canUseAsTarget = selected
    && piece.id !== selected.id
    && selected.team === state.currentTeam
    && piece.status === "field"
    && selected.type !== "ARQ"
    && selectedAction !== "shot";

  if (canUseAsTarget) {
    const valid = getValidTargets().some(target => target.x === piece.x && target.y === piece.y);
    if (valid) {
      onCellClick(piece.x, piece.y);
      return;
    }
  }

  selectPiece(piece.id);
}

function onCellClick(x, y) {
  if (lineupEditing && !state.started) {
    addLog("Modo alineacion: arrastra una ficha al cuadrante elegido.");
    return;
  }

  if (state.pendingShot || state.pendingDispute) {
    addLog("Primero hay que resolver la situacion activa.");
    return;
  }

  const selected = getSelectedPiece();
  if (!selected) return;

  if (state.kickoffPassRequired && selectedAction !== "pass") {
    addLog("Saque del medio: la primera accion debe ser pase.");
    selectedAction = "pass";
    render();
    return;
  }

  if (selectedAction === "shot") {
    addLog(getShotTarget()
      ? "Remate en alcance: toca la zona de arquero rival para ejecutar y jugar cartas 1-4."
      : "Remate fuera de alcance: hay que acercarse mas al arco.");
    if (getShotTarget()) speakPlayByPlay("Estamos ante una gran oportunidad de gol.");
    return;
  }

  const valid = getValidTargets().some(target => target.x === x && target.y === y);
  if (!valid) {
    addLog("Destino no valido para esa direccion/capacidad.");
    return;
  }

  const piecesAtTarget = getPiecesAt(x, y);
  const teammate = piecesAtTarget.find(piece => piece.team === selected.team && piece.id !== selected.id);
  const animationFrom = { x: selected.x, y: selected.y };
  const ballAnimationFrom = state.ball.ownerId
    ? { x: selected.x, y: selected.y }
    : { x: state.ball.x, y: state.ball.y };
  let pendingAnimation = null;

  if (selectedAction === "moveBall" && !hasBall(selected)) {
    addLog("Esa ficha no tiene la pelota.");
    return;
  }

  if (selectedAction === "pass" && !hasBall(selected)) {
    addLog("Para pasar, la ficha seleccionada tiene que tener la pelota.");
    return;
  }

  const wasKickoffPass = state.kickoffPassRequired && selectedAction === "pass";

  if (selectedAction === "moveBall") {
    enterFieldIfKeeper(selected, { x, y });
    selected.x = x;
    selected.y = y;
    state.ball.ownerId = selected.id;
    state.ball.x = x;
    state.ball.y = y;
    addLog(`${pieceLabel(selected)} traslada la pelota.`);
    pendingAnimation = { kind: "piece", from: animationFrom, to: { x, y }, team: selected.team, label: selected.type, withBall: true, pieceId: selected.id };
    resetPassAudioStreak();
    speakPlayByPlay(`${teamLabel(selected.team)} sigue avanzando.`);
  } else if (selectedAction === "pass") {
    if (teammate) {
      state.ball.ownerId = teammate.id;
      state.ball.x = teammate.x;
      state.ball.y = teammate.y;
      addLog(`${pieceLabel(selected)} conecta un pase con ${pieceLabel(teammate)}.`);
      pendingAnimation = { kind: "ball", from: ballAnimationFrom, to: { x: teammate.x, y: teammate.y } };
      noteTeamPass(selected.team, describePassAudio(selected, teammate));
    } else {
      if (state.kickoffPassRequired) {
        addLog("Saque del medio: el pase debe ir a un companero.");
        return;
      }
      state.ball.ownerId = null;
      state.ball.x = x;
      state.ball.y = y;
      addLog(`${pieceLabel(selected)} juega un pase hacia un cuadrante libre.`);
      pendingAnimation = { kind: "ball", from: ballAnimationFrom, to: { x, y } };
      resetPassAudioStreak();
    }
    state.kickoffPassRequired = false;
    startClockAfterKickoffPass(wasKickoffPass);
  } else {
    enterFieldIfKeeper(selected, { x, y });
    selected.x = x;
    selected.y = y;
    addLog(`${pieceLabel(selected)} mueve sin pelota.`);
    pendingAnimation = { kind: "piece", from: animationFrom, to: { x, y }, team: selected.team, label: selected.type, pieceId: selected.id };
    if (selectedAction === "move") resetPassAudioStreak();
  }

  const movedIntoLooseBall = selectedAction !== "pass"
    && selected.x === x
    && selected.y === y
    && !state.ball.ownerId
    && state.ball.x === x
    && state.ball.y === y;

  if (movedIntoLooseBall && !hasDisputeAt(x, y)) {
    state.ball.ownerId = selected.id;
    state.ball.x = selected.x;
    state.ball.y = selected.y;
    addLog(`${pieceLabel(selected)} toma posesion del balon suelto.`);
    selectedAction = getPreferredAction(selected);
  }

  if (hasDisputeAt(x, y)) {
    startDisputeAt(x, y, selected.id);
    render();
    if (pendingAnimation) animateVisualMove(pendingAnimation);
    return;
  }

  completeAction();
  if (pendingAnimation) animateVisualMove(pendingAnimation);
}

function onKeeperClick(team) {
  if (state.pendingShot || state.pendingDispute) {
    addLog("Primero hay que resolver la situacion activa.");
    return;
  }

  const selected = getSelectedPiece();
  const target = getShotTarget();
  if (!selected || selectedAction !== "shot" || !target || target.team !== team) {
    addLog("Todavia no estas en condicion de rematar al arco.");
    return;
  }
  const shotAnimation = {
    kind: "ball",
    from: { x: selected.x, y: selected.y },
    to: { x: target.x, y: target.y }
  };

  if (!isKeeperInGoal(team)) {
    state.score[selected.team] += 1;
    addLog(`Gol al arco vacio: ${pieceLabel(selected)} remato y el arquero no estaba en su lugar.`);
    state.lastShot = {
      shotCard: "-",
      keeperCard: "arco vacio",
      result: `Gol al arco vacio de ${teamLabel(selected.team)}.`
    };
    state.activeLongShot = false;
    showGameBanner("GOOOLLLL!!!", `Arco vacio. ${getGoalAudioText(selected.team)}`, "goal", 2200);
    scheduleRevealClear("shot");
    resetAfterGoal(getOpponentTeam(selected.team));
    animateVisualMove(shotAnimation);
    return;
  }

  state.pendingShot = {
    shooterId: selected.id,
    attackingTeam: selected.team,
    keeperTeam: team,
    distance: target.distance,
    longDistance: state.activeLongShot,
    shotCard: null,
    keeperCard: null,
    reboundCard: null
  };
  addLog(state.activeLongShot
    ? `Remate larga distancia declarado a distancia ${target.distance}. Rematador elige 1 carta; arquero elegira atajada y rebote.`
    : `Remate declarado a distancia ${target.distance}. El rematador elige carta 1-4.`);
  render();
  animateVisualMove(shotAnimation);
}

function chooseShotCard(card) {
  if (!state.pendingShot) {
    addLog(`Carta de remate/arquero seleccionada: ${card}.`);
    return;
  }
  if (state.pendingShot.revealing) return;

  if (!state.pendingShot.shotCard) {
    state.pendingShot.shotCard = card;
    state.lastShot = null;
    addLog(state.pendingShot.longDistance
      ? "Rematador eligio carta tapada. Arquero elige carta de atajada directa."
      : "Rematador eligio carta tapada. Ahora el arquero elige 1-4.");
    if (state.mode === "ai" && state.pendingShot.keeperTeam === "red") {
      showShotRevealOverlay(state.pendingShot, false, { role: "shooter" });
    }
    if (state.mode === "ai" && state.pendingShot.keeperTeam === "red") {
      setTimeout(() => {
        chooseShotCard(randomShotCard());
        if (state.pendingShot?.longDistance) chooseShotCard(randomShotCard());
      }, 500);
    }
    if (state.mode === "local") {
      showSecretStep("Turno del arquero", "Carta de remate guardada y tapada. Entrega el dispositivo al arquero.");
    }
    renderShotCards();
    renderShotPanel();
    renderQuickRevealPanels();
    renderHud();
    return;
  }

  if (!state.pendingShot.keeperCard) {
    state.pendingShot.keeperCard = card;
    if (state.pendingShot.longDistance) {
      addLog("Arquero eligio carta de atajada tapada. Ahora elige carta de rebote.");
      renderShotCards();
      renderShotPanel();
      renderQuickRevealPanels();
      renderHud();
      return;
    }
  } else if (state.pendingShot.longDistance && !state.pendingShot.reboundCard) {
    state.pendingShot.reboundCard = card;
  }

  renderShotCards();
  renderHud();
  revealShotThenResolve(state.pendingShot, getShotRevealRole(state.pendingShot));
}

function chooseDuelCard(card, disputeId = null) {
  if (!state.pendingDispute) {
    addLog(`Carta de disputa seleccionada: ${card}.`);
    return;
  }

  if (disputeId !== null && state.pendingDispute.id !== disputeId) return;
  const choiceRole = state.pendingDispute.choiceRole || state.pendingDispute.humanChoiceRole;
  const revealRole = choiceRole;
  const humanIsHolder = choiceRole === "holder";
  if (humanIsHolder ? state.pendingDispute.holderCard : state.pendingDispute.challengerCard) return;

  if (humanIsHolder) {
    state.pendingDispute.holderCard = card;
  } else {
    state.pendingDispute.challengerCard = card;
  }
  const activeDisputeId = state.pendingDispute.id;
  addLog("Carta de disputa elegida.");
  renderDuelCards();
  renderDuelPanel();
  renderQuickRevealPanels();
  if (state.mode !== "local") {
    showDuelRevealOverlay(state.pendingDispute, false, { role: revealRole });
  }

  if (state.mode === "local") {
    const missingRole = state.pendingDispute.holderCard ? "challenger" : "holder";
    if (!state.pendingDispute.holderCard || !state.pendingDispute.challengerCard) {
      state.pendingDispute.choiceRole = missingRole;
      state.pendingDispute.localWaitingSecond = true;
      renderDuelCards();
      renderDuelPanel();
      renderQuickRevealPanels();
      hideDuelRevealOverlay();
      showSecretStep("Pasar dispositivo", "Carta elegida y tapada. Entrega el dispositivo al rival para que elija sin ver la carta anterior.");
      return;
    }
    state.pendingDispute.localWaitingSecond = false;
    addLog("Ambas cartas de disputa fueron elegidas. Se revelan juntas.");
    showDuelRevealOverlay(state.pendingDispute, false, { role: state.pendingDispute.humanChoiceRole });
    revealDisputeThenResolve(activeDisputeId, state.pendingDispute.humanChoiceRole);
    return;
  }

  revealDisputeThenResolve(activeDisputeId, revealRole);
}

function startDisputeAt(x, y, movedPieceId) {
  const pieces = getPiecesAt(x, y);
  const currentTeamPiece = pieces.find(piece => piece.team === state.currentTeam);
  const holder = state.ball.ownerId ? getPieceById(state.ball.ownerId) : currentTeamPiece || getPieceById(movedPieceId);
  const challenger = pieces.find(piece => piece.team !== holder.team) || getPieceById(movedPieceId);
  const firstLocalRole = state.currentTeam === holder.team ? "holder" : "challenger";
  const humanChoiceRole = state.mode === "ai" && holder.team === "blue"
    ? "holder"
    : state.mode === "local"
      ? firstLocalRole
      : "challenger";
  const holderCard = state.mode === "local"
    ? null
    : humanChoiceRole === "holder" ? null : randomDuelCard();
  const challengerCard = state.mode === "local"
    ? null
    : humanChoiceRole === "challenger" ? null : randomDuelCard();
  state.lastDuel = null;
  const disputeId = state.disputeToken + 1;
  state.disputeToken = disputeId;

  state.pendingDispute = {
    id: disputeId,
    x,
    y,
    holderId: holder.id,
    challengerId: challenger.id,
    holderCard,
    challengerCard,
    humanChoiceRole,
    choiceRole: humanChoiceRole,
    localWaitingSecond: false,
    revealed: false
  };

  addLog(state.mode === "ai"
    ? "Disputa activa: la IA eligio carta tapada. Elegi tu carta."
    : `Disputa activa: elige primero equipo ${teamLabel(state.currentTeam)}. Luego se pasa el dispositivo.`);
}

function resolvePendingDispute() {
  const dispute = state.pendingDispute;
  if (!dispute) return;

  const holder = getPieceById(dispute.holderId);
  const challenger = getPieceById(dispute.challengerId);
  const challengerWins = dispute.challengerCard === dispute.holderCard;
  const winner = challengerWins ? challenger : holder;
  const loser = challengerWins ? holder : challenger;
  const previousOwner = getPieceById(state.ball.ownerId);
  const previousOwnerTeam = previousOwner?.team;

  state.ball.ownerId = winner.id;
  state.ball.x = winner.x;
  state.ball.y = winner.y;
  blockLoser(loser);
  state.lastDuel = {
    challengerCard: dispute.challengerCard,
    holderCard: dispute.holderCard,
    mineCard: dispute.humanChoiceRole === "holder" ? dispute.holderCard : dispute.challengerCard,
    rivalCard: dispute.humanChoiceRole === "holder" ? dispute.challengerCard : dispute.holderCard,
    winnerTeam: winner.team,
    loserLabel: pieceLabel(loser),
    result: `Duelo: ${teamLabel(winner.team)} gana (${dispute.challengerCard} vs ${dispute.holderCard}). ${pieceLabel(loser)} queda bloqueado un turno.`
  };

  const possessionChangedTeam = previousOwnerTeam && previousOwnerTeam !== winner.team;
  const duelTitle = possessionChangedTeam ? "RECUPERACION" : "GAMBETA";
  const duelMessage = possessionChangedTeam
    ? `Recupero el balon equipo ${teamLabel(winner.team)}.`
    : `Paso gambeteando. Avanza equipo ${teamLabel(winner.team)}.`;
  addLog(`Duelo: ${teamLabel(winner.team)} gana (${dispute.challengerCard} vs ${dispute.holderCard}). ${pieceLabel(loser)} queda bloqueado un turno.`);
  showGameBanner(duelTitle, duelMessage, "duel");
  state.currentTeam = winner.team;
  selectedPieceId = winner.id;
    selectedAction = getPreferredAction(winner);
    state.pendingDispute = null;
    state.turnSeconds = 15;
    state.kickoffPassRequired = false;
  state.extraActionAvailable = false;
  state.actionSpent = false;
  scheduleRevealClear("duel");
  render();
  maybeRunAiTurn();
}

function resolveSkillfulDispute() {
  const dispute = state.pendingDispute;
  if (!dispute) return;

  const userPiece = getPieceById(dispute.challengerId);
  const rivalPiece = getPieceById(dispute.holderId);
  const winner = userPiece.team === state.currentTeam ? userPiece : rivalPiece;
  const loser = winner.id === userPiece.id ? rivalPiece : userPiece;
  const previousOwner = getPieceById(state.ball.ownerId);
  const previousOwnerTeam = previousOwner?.team;

  state.ball.ownerId = winner.id;
  state.ball.x = winner.x;
  state.ball.y = winner.y;
  blockLoser(loser);
  state.lastDuel = {
    challengerCard: "JH",
    holderCard: "AUTO",
    mineCard: "JH",
    rivalCard: "AUTO",
    winnerTeam: winner.team,
    loserLabel: pieceLabel(loser),
    result: `Jugada Habilidosa: ${teamLabel(winner.team)} gana automaticamente. ${pieceLabel(loser)} queda bloqueado un turno.`
  };
  const possessionChangedTeam = previousOwnerTeam && previousOwnerTeam !== winner.team;
  showGameBanner(
    possessionChangedTeam ? "RECUPERACION" : "GAMBETA",
    possessionChangedTeam
      ? `Jugada habilidosa. Recupero el balon equipo ${teamLabel(winner.team)}.`
      : `Jugada habilidosa. Avanza equipo ${teamLabel(winner.team)}.`,
    "duel"
  );
  addLog(`Jugada Habilidosa: ${teamLabel(winner.team)} gana automaticamente la disputa. ${pieceLabel(loser)} queda bloqueado un turno.`);
  state.currentTeam = winner.team;
  selectedPieceId = winner.id;
  selectedAction = getPreferredAction(winner);
  state.pendingDispute = null;
  state.kickoffPassRequired = false;
  state.extraActionAvailable = false;
  state.actionSpent = false;
  scheduleRevealClear("duel");
  render();
  maybeRunAiTurn();
}

function randomDuelCard() {
  const cards = ["A", "B", "C", "D"];
  return cards[Math.floor(Math.random() * cards.length)];
}

function blockLoser(piece) {
  state.pieces.forEach(item => {
    item.blockedTurns = 0;
  });
  piece.blockedTurns = 1;
}

function resolvePendingShot() {
  const shot = state.pendingShot;
  if (!shot) return;

  if (shot.shotCard === shot.keeperCard) {
    addLog(`Atajada: el arquero acerto la carta ${shot.keeperCard}.`);
    showGameBanner("ATAJADA", `El arquero ${teamLabel(shot.keeperTeam)} se quedo con el balon.`, "duel", 1600);
    state.lastShot = {
      shotCard: shot.shotCard,
      keeperCard: shot.keeperCard,
      result: `Atajada: arquero ${shot.keeperCard} contra remate ${shot.shotCard}.`
    };
    state.ball.ownerId = `${shot.keeperTeam === "blue" ? "b" : "r"}-arq`;
    const keeper = getPieceById(state.ball.ownerId);
    state.ball.x = keeper.x;
    state.ball.y = keeper.y;
    state.pendingShot = null;
    state.activeLongShot = false;
    state.currentTeam = shot.keeperTeam;
    selectedPieceId = keeper.id;
    selectedAction = "pass";
    state.turnSeconds = 15;
    scheduleRevealClear("shot");
    render();
    maybeRunAiTurn();
    return;
  }

  if (shot.longDistance && shot.shotCard === shot.reboundCard) {
    const rebound = getReboundSpot(shot.keeperTeam);
    addLog(`Rebote: arquero acerto carta ${shot.reboundCard}. La pelota queda a dos cuadrantes del arquero.`);
    state.lastShot = {
      shotCard: shot.shotCard,
      keeperCard: `${shot.keeperCard}/${shot.reboundCard}`,
      result: `Rebote: remate ${shot.shotCard}, atajada ${shot.keeperCard}, rebote ${shot.reboundCard}.`
    };
    state.ball.ownerId = null;
    state.ball.x = rebound.x;
    state.ball.y = rebound.y;
    state.pendingShot = null;
    state.activeLongShot = false;
    scheduleRevealClear("shot");
    endTurn();
    return;
  }

  state.score[shot.attackingTeam] += 1;
  addLog(`Gol: remate ${shot.shotCard}, arquero ${shot.keeperCard}.`);
  const goalText = getGoalAudioText(shot.attackingTeam);
  state.lastShot = {
    shotCard: shot.shotCard,
    keeperCard: shot.keeperCard,
    result: `Gol: remate ${shot.shotCard}, arquero ${shot.keeperCard}.`
  };
  showGameBanner("GOOOLLLL!!!", goalText, "goal", 2200);
  state.pendingShot = null;
  state.activeLongShot = false;
  scheduleRevealClear("shot");
  resetAfterGoal(shot.attackingTeam === "blue" ? "red" : "blue");
}

function showGameBanner(title, text, type = "duel", duration = 1500) {
  gameBannerTitleEl.textContent = title;
  gameBannerTextEl.textContent = text;
  gameBannerEl.className = `game-banner ${type}`;
  playEventAudio(title, text, type);
  window.clearTimeout(showGameBanner.timeoutId);
  showGameBanner.timeoutId = window.setTimeout(() => {
    gameBannerEl.classList.add("hidden");
  }, duration);
}

function getGoalAudioText(team) {
  const scoreText = `Marcador: ${teamLabel("blue")} ${state.score.blue}, ${teamLabel("red")} ${state.score.red}.`;
  const lead = Math.abs(state.score.blue - state.score.red);
  const teamScore = state.score[team];
  const rout = lead >= 3 || teamScore >= 3 ? " Esto es una goleada." : "";
  return `Gol del equipo ${teamLabel(team)}. ${scoreText}${rout}`;
}

function enableAudio() {
  audioState.enabled = !audioState.enabled;
  syncAudioButtons();

  if (!audioState.enabled) {
    stopAmbientLoops();
    stopCrowdLoop();
    window.speechSynthesis?.cancel();
    syncAudioButtons();
    return;
  }

  switchAudioScene(detectAudioScene());
  unlockGoalAudio();
  speakPlayByPlay(audioState.scene === "match" ? "Tribuna activada. Comienza el ambiente de partido." : "Sonido activado.", true);
}

function syncAudioButtons() {
  audioBtn.classList.toggle("active", audioState.enabled);
  audioBtn.textContent = audioState.enabled ? textFor("soundOn") : textFor("soundOff");
  [introAudioBtn, lockerAudioBtn].filter(Boolean).forEach(button => {
    button.classList.toggle("active", audioState.enabled);
    button.querySelector("strong").textContent = audioState.enabled ? "Silencio" : textFor("audio");
    button.setAttribute("aria-label", audioState.enabled ? "Silenciar audio" : "Activar audio");
  });
}

function activateAudioFromGesture(scene = detectAudioScene()) {
  if (!audioState.enabled) {
    audioState.enabled = true;
    syncAudioButtons();
    unlockGoalAudio();
  }
  switchAudioScene(scene);
}

function toggleIntroAudio() {
  audioState.enabled = !audioState.enabled;
  syncAudioButtons();
  if (!audioState.enabled) {
    stopAmbientLoops();
    window.speechSynthesis?.cancel();
    return;
  }
  unlockGoalAudio();
  switchAudioScene(detectAudioScene());
}

function detectAudioScene() {
  if (lockerDialog?.open) return "locker";
  if (!styleScreenEl.classList.contains("hidden") || !setupScreenEl.classList.contains("hidden")) return "menu";
  return "match";
}

function switchAudioScene(scene = detectAudioScene()) {
  const previousScene = audioState.scene;
  audioState.scene = scene;
  if (!audioState.enabled) return;
  stopAmbientLoops(scene);
  if (scene === "match") {
    stopMenuAudio();
    stopLockerAudio();
    startCrowdLoop();
    return;
  }
  stopCrowdLoop();
  if (scene === "locker") {
    stopMenuAudio();
    startLockerAudio(previousScene !== "locker");
  } else {
    stopLockerAudio();
    startMenuAudio();
  }
}

function playAmbientAudio(audioEl, volume) {
  if (!audioState.enabled || !audioEl) return;
  audioEl.volume = volume;
  const playPromise = audioEl.play();
  if (playPromise) playPromise.catch(() => armAudioOnFirstGesture());
}

function armAudioOnFirstGesture() {
  if (!audioState.enabled || armAudioOnFirstGesture.ready) return;
  armAudioOnFirstGesture.ready = true;
  const unlock = () => {
    armAudioOnFirstGesture.ready = false;
    switchAudioScene(detectAudioScene());
    document.removeEventListener("pointerdown", unlock);
    document.removeEventListener("keydown", unlock);
  };
  document.addEventListener("pointerdown", unlock, { once: true });
  document.addEventListener("keydown", unlock, { once: true });
}

function startMenuAudio() {
  playAmbientAudio(menuAudioEl, 0.36);
}

function startLockerAudio(advanceTrack = false) {
  if (lockerAudioEl && (advanceTrack || !lockerAudioEl.getAttribute("src"))) {
    const src = lockerTracks[audioState.lockerTrackIndex % lockerTracks.length];
    audioState.lockerTrackIndex += 1;
    lockerAudioEl.src = src;
    lockerAudioEl.currentTime = 0;
  }
  playAmbientAudio(lockerAudioEl, 0.42);
}

function stopMenuAudio() {
  if (!menuAudioEl) return;
  menuAudioEl.pause();
}

function stopLockerAudio() {
  if (!lockerAudioEl) return;
  lockerAudioEl.pause();
}

function stopAmbientLoops(except = null) {
  if (except !== "menu") stopMenuAudio();
  if (except !== "locker") stopLockerAudio();
  if (except !== "match") stopCrowdLoop();
}

function getAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!audioState.context) audioState.context = new AudioCtor();
  if (audioState.context.state === "suspended") audioState.context.resume();
  return audioState.context;
}

function startCrowdLoop() {
  if (crowdAudioEl && !audioState.usingAudioFile) {
    crowdAudioEl.src = crowdTracks[Math.floor(Math.random() * crowdTracks.length)];
    crowdAudioEl.volume = 0.34;
    const playPromise = crowdAudioEl.play();
    if (playPromise) {
      playPromise
        .then(() => {
          audioState.usingAudioFile = true;
        })
        .catch(() => {
          audioState.usingAudioFile = false;
          startGeneratedCrowdLoop();
        });
      return;
    }
  }

  startGeneratedCrowdLoop();
}

function unlockGoalAudio() {
  if (!goalAudioEl) return;
  goalAudioEl.src = goalTracks[0];
  goalAudioEl.volume = 1;
  goalAudioEl.muted = true;
  const playPromise = goalAudioEl.play();
  if (!playPromise) {
    goalAudioEl.pause();
    goalAudioEl.currentTime = 0;
    goalAudioEl.muted = false;
    return;
  }
  playPromise
    .then(() => {
      goalAudioEl.pause();
      goalAudioEl.currentTime = 0;
      goalAudioEl.muted = false;
    })
    .catch(() => {
      goalAudioEl.muted = false;
    });
}

function startGeneratedCrowdLoop() {
  const context = getAudioContext();
  if (!context || audioState.crowdSource) return;

  const seconds = 2;
  const buffer = context.createBuffer(1, context.sampleRate * seconds, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.45;
  }

  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  source.buffer = buffer;
  source.loop = true;
  filter.type = "bandpass";
  filter.frequency.value = 980;
  filter.Q.value = 0.8;
  gain.gain.value = 0.012;
  source.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  startCrowdChants();

  source.start();
  audioState.crowdSource = source;
  audioState.crowdGain = gain;
  audioState.usingAudioFile = false;
}

function startCrowdChants() {
  if (audioState.chantTimer) return;
  audioState.chantTimer = window.setInterval(() => {
    speakCrowdChant();
  }, 9000);
  window.setTimeout(speakCrowdChant, 900);
}

function stopCrowdLoop() {
  if (crowdAudioEl) {
    crowdAudioEl.pause();
    crowdAudioEl.currentTime = 0;
  }
  if (audioState.crowdRestoreTimer) window.clearTimeout(audioState.crowdRestoreTimer);
  audioState.usingAudioFile = false;
  audioState.goalCrowdMuted = false;
  audioState.crowdRestoreTimer = null;
  if (audioState.crowdSource) {
    audioState.crowdSource.stop();
    audioState.crowdSource.disconnect();
  }
  audioState.chantOscillators.forEach(oscillator => {
    oscillator.stop();
    oscillator.disconnect();
  });
  if (audioState.chantTimer) window.clearInterval(audioState.chantTimer);
  audioState.chantOscillators = [];
  audioState.chantTimer = null;
  audioState.crowdSource = null;
  audioState.crowdGain = null;
  audioState.chantGain = null;
}

function crowdSwell(amount = 0.12, duration = 0.9) {
  if (audioState.goalCrowdMuted) return;
  if (audioState.enabled && audioState.usingAudioFile && crowdAudioEl) {
    const originalVolume = crowdAudioEl.volume;
    crowdAudioEl.volume = Math.min(0.72, originalVolume + amount);
    window.setTimeout(() => {
      if (crowdAudioEl && audioState.usingAudioFile && !audioState.goalCrowdMuted) crowdAudioEl.volume = 0.34;
    }, duration * 1000);
    return;
  }
  if (!audioState.enabled || !audioState.crowdGain || !audioState.context) return;
  const now = audioState.context.currentTime;
  audioState.crowdGain.gain.cancelScheduledValues(now);
  audioState.crowdGain.gain.setValueAtTime(audioState.crowdGain.gain.value, now);
  audioState.crowdGain.gain.linearRampToValueAtTime(amount, now + 0.08);
  audioState.crowdGain.gain.linearRampToValueAtTime(0.012, now + duration);
}

function speakPlayByPlay(text, force = false) {
  if (!audioState.enabled || !("speechSynthesis" in window)) return;
  const now = Date.now();
  if (!force && now - audioState.lastSpeechAt < 1400) return;
  audioState.lastSpeechAt = now;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-AR";
  utterance.rate = 1.05;
  utterance.pitch = 1.05;
  utterance.volume = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function playEventAudio(title, text, type = "duel") {
  if (!audioState.enabled) return;
  const normalized = title.toLowerCase();
  if (type === "goal" || normalized.includes("gol") || normalized.includes("goo")) {
    playGoalMoment(text);
    return;
  }
  if (normalized.includes("atajada")) {
    crowdSwell(0.13, 1.1);
    speakPlayByPlay(text || "El arquero se quedo con el balon.", true);
    return;
  }
  if (normalized.includes("gambeta")) {
    crowdSwell(0.11, 0.9);
    playOleAudio();
    speakPlayByPlay(text.toLowerCase().includes("jugada habilidosa") ? "Que gran jugador. Ole." : "Ole. Que buena jugada.", true);
    return;
  }
  if (normalized.includes("recuperacion")) {
    crowdSwell(0.1, 0.8);
    speakPlayByPlay(text, true);
  }
}

function playWhistle(kind = "start") {
  if (!audioState.enabled) return;
  if (whistleAudioEl) {
    whistleAudioEl.src = whistleTrack;
    whistleAudioEl.volume = kind === "end" ? 0.95 : 0.82;
    whistleAudioEl.currentTime = 0;
    const playPromise = whistleAudioEl.play();
    if (playPromise) playPromise.catch(() => playSyntheticWhistle(kind));
    return;
  }
  playSyntheticWhistle(kind);
}

function playSyntheticWhistle(kind = "start") {
  if (!audioState.enabled) return;
  const context = getAudioContext();
  if (!context) return;
  const bursts = kind === "end"
    ? [{ at: 0, duration: 0.22 }, { at: 0.32, duration: 0.46 }]
    : [{ at: 0, duration: 0.34 }];

  bursts.forEach(({ at, duration }) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(1860, context.currentTime + at);
    oscillator.frequency.linearRampToValueAtTime(2220, context.currentTime + at + duration * 0.45);
    oscillator.frequency.linearRampToValueAtTime(1780, context.currentTime + at + duration);
    gain.gain.setValueAtTime(0, context.currentTime + at);
    gain.gain.linearRampToValueAtTime(0.36, context.currentTime + at + 0.025);
    gain.gain.linearRampToValueAtTime(0, context.currentTime + at + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(context.currentTime + at);
    oscillator.stop(context.currentTime + at + duration + 0.03);
  });
}

function playOleAudio() {
  if (!audioState.enabled || !oleAudioEl) return;
  window.clearTimeout(playOleAudio.timeoutId);
  oleAudioEl.pause();
  oleAudioEl.src = oleTrack;
  oleAudioEl.volume = 1;
  oleAudioEl.currentTime = 2.4;
  const playPromise = oleAudioEl.play();
  if (playPromise) playPromise.catch(() => {});
  playOleAudio.timeoutId = window.setTimeout(() => {
    oleAudioEl.pause();
    oleAudioEl.currentTime = 0;
  }, 1900);
}

function playGoalMoment(text) {
  if (!audioState.enabled) return;
  window.speechSynthesis?.cancel();
  muteCrowdForGoal(4500);
  if (!playGoalAudioFile(text)) {
    speakGoal(text);
    scheduleCrowdRestore(3200);
  }
}

function playGoalAudioFile(fallbackText) {
  if (!audioState.enabled || !goalAudioEl) return false;
  const src = goalTracks[Math.floor(Math.random() * goalTracks.length)];
  audioState.goalLayers.forEach(layer => {
    layer.pause();
    layer.src = "";
  });
  audioState.goalLayers = [];

  goalAudioEl.src = src;
  goalAudioEl.volume = 1;
  goalAudioEl.muted = false;
  goalAudioEl.currentTime = 0;
  goalAudioEl.load();
  goalAudioEl.onended = restoreCrowdAfterGoal;
  const playPromise = goalAudioEl.play();
  if (playPromise) {
    playPromise.catch(() => {
      speakGoal(fallbackText);
      scheduleCrowdRestore(3200);
    });
  }

  window.setTimeout(() => playGoalLayer(src, 0.9), 80);
  window.setTimeout(() => playGoalLayer(src, 0.8), 150);
  return true;
}

function playGoalLayer(src, volume = 1) {
  if (!audioState.enabled) return;
  const layer = new Audio(src);
  layer.volume = volume;
  layer.preload = "auto";
  audioState.goalLayers.push(layer);
  const playPromise = layer.play();
  if (playPromise) playPromise.catch(() => {});
  layer.addEventListener("ended", () => {
    audioState.goalLayers = audioState.goalLayers.filter(item => item !== layer);
  }, { once: true });
}

function muteCrowdForGoal(duration = 2200) {
  if (!audioState.enabled) return;
  audioState.goalCrowdMuted = true;
  if (audioState.usingAudioFile && crowdAudioEl) {
    crowdAudioEl.volume = 0;
    scheduleCrowdRestore(duration);
    return;
  }

  if (audioState.crowdGain && audioState.context) {
    const now = audioState.context.currentTime;
    audioState.crowdGain.gain.cancelScheduledValues(now);
    audioState.crowdGain.gain.setValueAtTime(audioState.crowdGain.gain.value, now);
    audioState.crowdGain.gain.linearRampToValueAtTime(0, now + 0.08);
  }
  scheduleCrowdRestore(duration);
}

function scheduleCrowdRestore(duration) {
  if (audioState.crowdRestoreTimer) window.clearTimeout(audioState.crowdRestoreTimer);
  audioState.crowdRestoreTimer = window.setTimeout(restoreCrowdAfterGoal, duration);
}

function restoreCrowdAfterGoal() {
  if (audioState.crowdRestoreTimer) window.clearTimeout(audioState.crowdRestoreTimer);
  audioState.crowdRestoreTimer = null;
  audioState.goalCrowdMuted = false;
  if (!audioState.enabled) return;
  if (audioState.usingAudioFile && crowdAudioEl) {
    crowdAudioEl.volume = 0.34;
    if (crowdAudioEl.paused) {
      const playPromise = crowdAudioEl.play();
      if (playPromise) playPromise.catch(() => {});
    }
  }
  if (audioState.crowdGain && audioState.context) {
    const now = audioState.context.currentTime;
    audioState.crowdGain.gain.cancelScheduledValues(now);
    audioState.crowdGain.gain.setValueAtTime(audioState.crowdGain.gain.value, now);
    audioState.crowdGain.gain.linearRampToValueAtTime(0.012, now + 0.18);
  }
}

function speakGoal(text) {
  if (!audioState.enabled || !("speechSynthesis" in window)) return;
  audioState.lastSpeechAt = Date.now();
  const teamMatch = text.match(/equipo\s+([^\.]+)/i);
  const team = teamMatch ? teamMatch[1] : "";
  const utterance = new SpeechSynthesisUtterance(`Gooooooooooooool del equipo ${team}. ${text}`);
  utterance.lang = "es-AR";
  utterance.rate = 0.86;
  utterance.pitch = 1.28;
  utterance.volume = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function speakCrowdChant() {
  if (!audioState.enabled || audioState.usingAudioFile || !("speechSynthesis" in window)) return;
  const chants = [
    "Oooo, vamos rojo, vamos.",
    "Oooo, vamos rojo, vamos que ganamos.",
    "Oooo, vamos celeste, vamos.",
    "Oooo, vamos cele, ponga huevo que ganamos."
  ];
  const chant = chants[audioState.chantIndex % chants.length];
  audioState.chantIndex += 1;
  const utterance = new SpeechSynthesisUtterance(chant);
  utterance.lang = "es-AR";
  utterance.rate = 0.92;
  utterance.pitch = 0.86;
  utterance.volume = 0.38;
  window.speechSynthesis.speak(utterance);
}

function noteTeamPass(team, phrase = null) {
  if (audioState.passTeam === team) {
    audioState.passCount += 1;
  } else {
    audioState.passTeam = team;
    audioState.passCount = 1;
  }

  if (audioState.passCount >= 3) {
    crowdSwell(0.09, 0.75);
    speakPlayByPlay(`Toque y toque y toque ${teamLabel(team)}.`, true);
    return;
  }

  speakPlayByPlay(phrase || "Buena jugada.");
}

function resetPassAudioStreak() {
  audioState.passTeam = null;
  audioState.passCount = 0;
}

function describePassAudio(fromPiece, toPiece) {
  const targetGoal = getGoalZone(getOpponentTeam(fromPiece.team));
  const fromDistance = Math.abs(fromPiece.y - targetGoal.y);
  const toDistance = Math.abs(toPiece.y - targetGoal.y);
  const receiverName = roleName(toPiece.type).toLowerCase();

  if (toDistance > fromDistance) {
    return `Juega para atras, mantiene el balon ${teamLabel(fromPiece.team)}.`;
  }

  if (toPiece.type === "EXT") {
    return `Asegura la pelota con el extremo ${teamLabel(fromPiece.team)}.`;
  }

  if (toPiece.type === "DEL" || toPiece.type === "MP") {
    return `Buena pelota para el ${receiverName}. Se viene una buena oportunidad.`;
  }

  return `Buena jugada. ${teamLabel(fromPiece.team)} sigue moviendo la pelota.`;
}

function getValidTargets() {
  const selected = getSelectedPiece();
  if (!selected) return [];
  if (selectedAction === "shot" && !hasBall(selected)) return [];
  if (selectedAction === "shot") return [];

  const byKey = new Map();
  Object.entries(getTeamDirections(selected.team)).forEach(([key, dir]) => {
    const max = selectedAction === "pass"
      ? stats[selected.type].pass
      : selectedAction === "shot"
        ? stats[selected.type].shot
        : stats[selected.type].move[key];
    for (let step = 1; step <= max; step++) {
      const origin = getActionOrigin(selected);
      const target = { x: origin.x + dir.x * step, y: origin.y + dir.y * step };
      if (!isInsideField(target.x, target.y)) break;
      byKey.set(`${target.x},${target.y}`, {
        ...target,
        kind: selectedAction === "pass" ? "pass" : selectedAction === "shot" ? "shot" : "move",
        direction: key,
        distance: step
      });
    }
  });

  return [...byKey.values()];
}

function getTeamDirections(team) {
  const targetZone = getGoalZone(getOpponentTeam(team));
  return targetZone.y === -1 ? blueDirections : redDirections;
}

function getOpponentTeam(team) {
  return team === "blue" ? "red" : "blue";
}

function getKeeperZone(team) {
  const keeper = state.pieces.find(piece => piece.team === team && piece.type === "ARQ" && piece.status === "field");
  if (keeper) return { x: keeper.x, y: keeper.y };
  return getGoalZone(team);
}

function getGoalZone(team) {
  return getGoalZoneForHalf(team);
}

function isKeeperInGoal(team) {
  const keeper = state.pieces.find(piece => piece.team === team && piece.type === "ARQ" && piece.status === "field");
  const goal = getGoalZone(team);
  return Boolean(keeper && keeper.x === goal.x && keeper.y === goal.y);
}

function getKeeperTeamAtRow(y) {
  const team = ["blue", "red"].find(item => getGoalZone(item).y === y);
  return team || (y === -1 ? "red" : "blue");
}

function getActionOrigin(piece) {
  if (piece.y === -1) return { x: piece.x, y: 0 };
  if (piece.y === board.height) return { x: piece.x, y: board.height - 1 };
  return { x: piece.x, y: piece.y };
}

function getPreferredAction(piece) {
  if (!hasBall(piece)) return "move";
  const previousSelected = selectedPieceId;
  const previousAction = selectedAction;
  selectedPieceId = piece.id;
  selectedAction = "shot";
  const canShoot = Boolean(getShotTarget());
  selectedPieceId = previousSelected;
  selectedAction = previousAction;
  return canShoot ? "shot" : "moveBall";
}

function enterFieldIfKeeper(piece, target) {
  if (piece.type !== "ARQ") return;
  if (piece.y === -1 || piece.y === board.height) {
    piece.x = target.x;
    piece.y = target.y;
  }
}

function getShotTarget() {
  const selected = getSelectedPiece();
  if (!selected || selectedAction !== "shot" || !hasBall(selected)) return null;

  const targetTeam = getOpponentTeam(selected.team);
  const zone = getGoalZone(targetTeam);
  const forwardDistance = Math.abs(selected.y - zone.y);
  const lateralDistance = Math.abs(selected.x - zone.x);
  const distance = Math.max(forwardDistance, lateralDistance);
  const shotPower = stats[selected.type].shot + (state.activeLongShot ? 2 : 0);

  if (distance <= shotPower) {
    return { team: targetTeam, distance, ...zone };
  }

  return null;
}

function getShotLane() {
  const selected = getSelectedPiece();
  if (!selected || selectedAction !== "shot" || !hasBall(selected)) return [];

  const targetTeam = getOpponentTeam(selected.team);
  const zone = getGoalZone(targetTeam);
  const stepY = zone.y < selected.y ? -1 : 1;
  const shotPower = stats[selected.type].shot + (state.activeLongShot ? 2 : 0);
  const lane = [];
  let x = selected.x;
  let y = selected.y;

  for (let distance = 1; distance <= shotPower; distance++) {
    if (x !== zone.x) x += x < zone.x ? 1 : -1;
    y += stepY;
    if (!isInsideField(x, y)) break;
    lane.push({ x, y });
  }

  return lane;
}

function getReboundSpot(keeperTeam) {
  const keeper = getPieceById(`${keeperTeam === "blue" ? "b" : "r"}-arq`);
  const keeperZone = getGoalZone(keeperTeam);
  const sourceX = Number.isFinite(keeper?.x) ? keeper.x : keeperZone.x;
  const sourceY = Number.isFinite(keeper?.y) ? keeper.y : keeperZone.y;
  const stepY = keeperTeam === "red" ? 1 : -1;
  return {
    x: Math.max(0, Math.min(board.width - 1, sourceX)),
    y: Math.max(0, Math.min(board.height - 1, sourceY + stepY * 2))
  };
}

function useSpecialCard(cardId) {
  const card = state.cards[state.currentTeam].find(item => item.id === cardId);
  if (!card || card.used) return;

  if (card.label === "Jugada Habilidosa") {
    if (!state.pendingDispute) {
      addLog("Jugada Habilidosa solo se puede usar durante una disputa.");
      return;
    }
    card.used = true;
    resolveSkillfulDispute();
    render();
    return;
  }

  if (card.label === "Remate Larga Distancia") {
    const selected = getSelectedPiece();
    if (!selected || !hasBall(selected)) {
      addLog("Remate Larga Distancia solo puede activarse con una ficha que tenga la pelota.");
      return;
    }
    state.activeLongShot = true;
  }

  if (card.label === "Segundo Movimiento") {
    state.extraActionAvailable = true;
  }

  card.used = true;
  addLog(`${teamLabel(state.currentTeam)} usa ${card.label}.`);
  render();
}

function startClockAfterKickoffPass(wasKickoffPass) {
  if (!wasKickoffPass) return;
  state.clockRunning = true;
  timerLastTickAt = Date.now();
  playWhistle("start");

  if (state.half === 1 && !state.firstKickoffDone) {
    state.firstKickoffDone = true;
    addLog("Comenzo el juego: la pelota se puso en movimiento.");
    speakPlayByPlay("Comenzo el juego.", true);
    return;
  }

  if (state.half === 2 && !state.secondHalfKickoffDone) {
    state.secondHalfKickoffDone = true;
    addLog("Reinicio el juego en el segundo tiempo.");
    speakPlayByPlay("Reinicio el juego en el segundo tiempo.", true);
    return;
  }

  addLog("Se reanuda el juego desde el medio.");
}

function resetAfterGoal(nextTeam) {
  resetFormationForCurrentHalf();
  state.pendingShot = null;
  state.pendingDispute = null;
  state.activeLongShot = false;
  state.currentTeam = nextTeam;
  state.turnSeconds = 15;
  placeKickoffPlayer(nextTeam);
  state.kickoffPassRequired = true;
  state.clockRunning = false;
  state.extraActionAvailable = false;
  state.actionSpent = false;
  addLog(`Saca ${teamLabel(nextTeam)}. Equipos vuelven a posicion inicial.`);
  render();
  paused = true;
  timerLastTickAt = null;
  setTimeout(() => {
    if (!changeDialog.open) changeDialog.showModal();
  }, 1900);
}

function resetFormation() {
  const freshPieces = [...makeSquad("blue", "b"), ...makeSquad("red", "r")];
  state.pieces.forEach(piece => {
    const fresh = freshPieces.find(item => item.id === piece.id);
    if (!fresh) return;
    piece.x = fresh.x;
    piece.y = fresh.y;
    piece.status = fresh.status;
    piece.blockedTurns = 0;
  });
  state.pendingDispute = null;
}

function resetFormationForCurrentHalf() {
  resetFormation();
  if (state.half === 2) invertFieldSides();
}

function switchHalf() {
  if (state.half === 1) {
    playWhistle("end");
    state.clockRunning = false;
    state.half = 2;
    state.realHalfSecondsRemaining = state.config.realHalfSeconds;
    timerLastTickAt = null;
    resetFormationForCurrentHalf();
    state.currentTeam = "red";
    placeKickoffPlayer("red");
    state.kickoffPassRequired = true;
    addLog(`Entretiempo: equipos cambian de campo. Segundo tiempo preparado, saca ${teamLabel("red")}.`);
    render();
    maybeRunAiTurn();
    return;
  }

  finishMatch();
}

function getMatchOutcome() {
  const blue = state.score.blue;
  const red = state.score.red;
  const winner = blue === red ? null : blue > red ? "blue" : "red";
  return {
    blue,
    red,
    winner,
    winnerName: winner ? teamLabel(winner) : "Empate"
  };
}

function finishMatch() {
  paused = true;
  state.clockRunning = false;
  state.finished = true;
  playWhistle("end");
  const outcome = getMatchOutcome();
  const resultText = outcome.winner
    ? `Ganador: ${outcome.winnerName}.`
    : "Resultado final: empate.";
  const competitionMessage = recordCompetitionResult(outcome);
  addLog(`Fin del encuentro. ${resultText}`);
  render();
  openMatchEndDialog(outcome, competitionMessage);
}

function nextAiDifficulty(current = setupSelection.aiDifficulty) {
  const index = aiDifficultyOrder.indexOf(current);
  return aiDifficultyOrder[Math.min(aiDifficultyOrder.length - 1, Math.max(0, index) + 1)];
}

function openMatchEndDialog(outcome, competitionMessage = "") {
  if (!matchEndDialog) return;
  matchEndTitleEl.textContent = outcome.winner ? `Gano ${outcome.winnerName}` : "Fin del encuentro: empate";
  matchEndTextEl.textContent = `${teamLabel("blue")} ${outcome.blue} - ${outcome.red} ${teamLabel("red")}`;
  const fixture = currentCompetitionFixture();
  const canContinueCompetition = Boolean(competitionState?.active && !competitionState.completed && fixture);
  competitionSummaryEl.classList.toggle("hidden", !competitionMessage);
  competitionSummaryEl.innerHTML = competitionMessage ? buildCompetitionSummary(competitionMessage) : "";
  rematchHarderBtn.classList.toggle("hidden", state.mode !== "ai");
  continueCompetitionBtn.classList.toggle("hidden", !canContinueCompetition);
  if (state.mode === "ai") {
    const next = nextAiDifficulty(state.aiDifficulty);
    const isUpgrade = next !== state.aiDifficulty;
    rematchHarderBtn.textContent = isUpgrade
      ? textTemplate("rematchAiLevelUp", { difficulty: difficultyText(next) })
      : textTemplate("rematchAi", { difficulty: difficultyText(next) });
  }
  matchEndDialog.showModal();
}

function buildCompetitionSummary(message) {
  if (!competitionState?.active) return `<p>${message}</p>`;
  const fixtures = competitionState.fixtures
    .map(item => `<li>${competitionFixtureLabel(item)}: ${item.played ? `${competitionState.playerTeam} ${item.score} ${item.rival}` : `${competitionState.playerTeam} vs ${item.rival} (${difficultyText(item.difficulty)})`}</li>`)
    .join("");
  const table = competitionState.type === "league"
    ? `<div class="mini-table">${[...competitionState.table]
        .sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc))
        .map(item => `<span>${item.team}</span><strong>${item.pts}</strong>`)
        .join("")}</div>`
    : "";
  return `<p>${message}</p><p>${textFor("codeLabel")}: <strong>${competitionState.code}</strong></p><ol>${fixtures}</ol>${table}`;
}

function continueCompetitionMatch() {
  const fixture = currentCompetitionFixture();
  if (!fixture) return;
  setupSelection.mode = "ai";
  setupSelection.aiDifficulty = fixture.difficulty;
  markSetupSelections();
  if (matchEndDialog.open) matchEndDialog.close();
  restartCurrentGame();
}

function rematchWithHarderAi() {
  setupSelection.mode = "ai";
  setupSelection.aiDifficulty = nextAiDifficulty(state.aiDifficulty);
  markSetupSelections();
  if (matchEndDialog.open) matchEndDialog.close();
  restartCurrentGame();
}

function invertFieldSides() {
  state.pieces.forEach(piece => {
    if (piece.status !== "field") return;
    if (piece.y === -1) {
      piece.y = board.height;
    } else if (piece.y === board.height) {
      piece.y = -1;
    } else {
      piece.y = board.height - 1 - piece.y;
    }
  });
}

function endTurn() {
  if (state.finished) return;
  expireBlocksForTeam(state.currentTeam);
  state.extraActionAvailable = false;
  state.actionSpent = false;
  state.currentTeam = state.currentTeam === "blue" ? "red" : "blue";
  state.turnSeconds = 15;
  const next = state.pieces.find(piece => piece.team === state.currentTeam && piece.status === "field" && piece.type !== "ARQ" && piece.blockedTurns === 0)
    || state.pieces.find(piece => piece.team === state.currentTeam && piece.status === "field" && piece.type !== "ARQ");
  selectedPieceId = next ? next.id : null;
  addLog(`Turno de ${teamLabel(state.currentTeam)}.`);
  render();
  maybeRunAiTurn();
}

function completeAction() {
  if (state.extraActionAvailable && !state.actionSpent) {
    state.actionSpent = true;
    addLog("Segundo Movimiento activo: podes realizar una accion mas con cualquier ficha habilitada.");
    render();
    return;
  }

  state.extraActionAvailable = false;
  state.actionSpent = false;
  endTurn();
}

function maybeRunAiTurn() {
  if (state.finished || state.mode !== "ai" || state.currentTeam !== "red" || state.pendingShot || state.pendingDispute || paused) return;
  setTimeout(runAiTurn, 600);
}

function runAiTurn() {
  if (state.finished || state.mode !== "ai" || state.currentTeam !== "red") return;
  const previousPiece = selectedPieceId;
  const previousAction = selectedAction;
  const ballOwner = state.ball.ownerId ? getPieceById(state.ball.ownerId) : null;
  const actor = ballOwner && ballOwner.team === "red"
    ? ballOwner
    : state.pieces.find(piece => piece.team === "red" && piece.status === "field" && piece.type !== "ARQ" && piece.blockedTurns === 0);

  if (!actor) {
    endTurn();
    return;
  }

  selectedPieceId = actor.id;

  if (actor.type === "ARQ" && hasBall(actor)) {
    selectedAction = "pass";
    const passTarget = chooseAiTarget(actor) || findNearestTeammateForAiPass(actor);
    if (passTarget) {
      executeAiCellAction(passTarget.x, passTarget.y);
      return;
    }
    selectedAction = "moveBall";
  }

  if (hasBall(actor) && canAiShoot(actor)) {
    selectedAction = "shot";
    onKeeperClick("blue");
    chooseShotCard(randomShotCard());
    return;
  }

  if (state.kickoffPassRequired) {
    selectedAction = "pass";
  } else if (hasBall(actor) && Math.random() > aiRiskThreshold()) {
    selectedAction = "pass";
  } else {
    selectedAction = hasBall(actor) ? "moveBall" : "move";
  }

  const target = chooseAiTarget(actor);
  if (target) {
    executeAiCellAction(target.x, target.y);
  } else {
    if (state.kickoffPassRequired && selectedAction === "pass") {
      const fallback = findNearestTeammateForAiPass(actor);
      if (fallback) {
        executeAiCellAction(fallback.x, fallback.y);
        return;
      }
    }
    selectedPieceId = previousPiece;
    selectedAction = previousAction;
    endTurn();
  }
}

function findNearestTeammateForAiPass(piece) {
  const origin = getActionOrigin(piece);
  const teammates = state.pieces
    .filter(item => item.team === piece.team && item.id !== piece.id && item.status === "field")
    .map(item => ({
      x: item.x,
      y: item.y,
      distance: Math.max(Math.abs(item.x - origin.x), Math.abs(item.y - origin.y))
    }))
    .filter(item => item.distance <= stats[piece.type].pass && isInsideField(item.x, item.y))
    .sort((a, b) => a.distance - b.distance);

  return teammates[0] || null;
}

function executeAiCellAction(x, y) {
  onCellClick(x, y);
}

function canAiShoot(piece) {
  selectedPieceId = piece.id;
  selectedAction = "shot";
  return Boolean(getShotTarget());
}

function chooseAiTarget(piece) {
  const targets = getValidTargets();
  if (!targets.length) return null;

  if (selectedAction === "pass") {
    const teammateTarget = targets.find(target => {
      const pieces = getPiecesAt(target.x, target.y);
      return pieces.some(item => item.team === piece.team && item.id !== piece.id);
    });
    if (teammateTarget) return teammateTarget;
    if (state.kickoffPassRequired) return null;
  }

  const targetZone = getGoalZone(getOpponentTeam(piece.team));
  return targets.sort((a, b) => {
    const aScore = -Math.abs(a.y - targetZone.y);
    const bScore = -Math.abs(b.y - targetZone.y);
    return bScore - aScore;
  })[0];
}

function aiRiskThreshold() {
  if (state.aiDifficulty === "hard") return 0.25;
  if (state.aiDifficulty === "medium") return 0.45;
  return 0.65;
}

function randomShotCard() {
  return String(1 + Math.floor(Math.random() * 4));
}

function expireBlocksForTeam(team) {
  state.pieces
    .filter(piece => piece.team === team && piece.blockedTurns > 0)
    .forEach(piece => {
      piece.blockedTurns -= 1;
      if (piece.blockedTurns === 0) addLog(`${pieceLabel(piece)} vuelve a estar habilitado.`);
    });
}

function addLog(message) {
  state.log.push(message);
  renderLog();
}

function getSelectedPiece() {
  return getPieceById(selectedPieceId);
}

function getPieceById(id) {
  return state.pieces.find(piece => piece.id === id);
}

function getPieceAt(x, y) {
  return state.pieces.find(piece => piece.status === "field" && piece.x === x && piece.y === y);
}

function getPiecesAt(x, y) {
  return state.pieces.filter(piece => piece.status === "field" && piece.x === x && piece.y === y);
}

function positionPieceInStack(pieceEl, piece) {
  if (piece.type === "ARQ" && (piece.y === -1 || piece.y === board.height)) {
    pieceEl.style.left = "10%";
    pieceEl.style.top = "24%";
    return;
  }

  const index = getTeamStackIndex(piece);
  const [left, top] = getTeamStackPosition(piece.team, index);
  pieceEl.style.left = `${left}%`;
  pieceEl.style.top = `${top}%`;
}

function getTeamStackIndex(piece) {
  const pieces = state.pieces.filter(item =>
    item.status === "field"
    && item.team === piece.team
    && item.x === piece.x
    && item.y === piece.y
  );
  return Math.max(0, pieces.findIndex(item => item.id === piece.id));
}

function getTeamStackPosition(team, index) {
  const positions = team === "blue"
    ? [
        [8, 26],
        [8, 12],
        [30, 26],
        [30, 12]
      ]
    : [
        [56, 22],
        [56, 34],
        [38, 22],
        [38, 34]
      ];
  return positions[index % positions.length];
}

function positionBallNearOwner(ball, owner) {
  if (owner.type === "ARQ" && (owner.y === -1 || owner.y === board.height)) {
    ball.style.left = "58%";
    ball.style.top = "38%";
    return;
  }

  const ownerIndex = getTeamStackIndex(owner);
  const [left, top] = getTeamStackPosition(owner.team, ownerIndex);
  const leftOffset = owner.team === "blue" ? 26 : -15;
  const topOffset = owner.team === "blue" ? 14 : 16;
  ball.style.left = `${Math.max(0, Math.min(82, left + leftOffset))}%`;
  ball.style.top = `${Math.max(0, Math.min(82, top + topOffset))}%`;
}

function getCell(x, y) {
  return boardEl.querySelector(`[data-x="${x}"][data-y="${y}"]`);
}

function getPieceContainer(piece) {
  if (piece.y === -1) return topKeeperEl;
  if (piece.y === board.height) return bottomKeeperEl;
  return getCell(piece.x, piece.y);
}

function getKeeperElement(team) {
  const zone = getGoalZone(team);
  return zone.y === -1 ? topKeeperEl : bottomKeeperEl;
}

function hasBall(piece) {
  return state.ball.ownerId === piece.id;
}

function isBallAt(x, y) {
  if (state.ball.ownerId) {
    const owner = getPieceById(state.ball.ownerId);
    return owner && owner.x === x && owner.y === y;
  }
  return state.ball.x === x && state.ball.y === y;
}

function hasDisputeAt(x, y) {
  if (!isBallAt(x, y)) return false;
  const pieces = getPiecesAt(x, y);
  return pieces.some(piece => piece.team === "blue") && pieces.some(piece => piece.team === "red");
}

function willCreateDispute(x, y) {
  const selected = getSelectedPiece();
  if (!selected) return false;
  const pieces = getPiecesAt(x, y);
  const hasRival = pieces.some(piece => piece.team !== selected.team);
  const ballWillBeThere = selectedAction === "moveBall" || selectedAction === "pass" || isBallAt(x, y);
  return hasRival && ballWillBeThere;
}

function isInsideField(x, y) {
  return x >= 0 && x < board.width && y >= 0 && y < board.height;
}

function pieceLabel(piece) {
  return `${roleName(piece.type)} ${teamLabel(piece.team)}`;
}

function teamLabel(team) {
  return state?.teamProfiles?.[team]?.team || (team === "blue" ? "Azul" : "Rojo");
}

function colorLabel(team) {
  return team === "blue" ? "Azul" : "Rojo";
}

function profileRankLabel(profile) {
  const storedRank = profile?.rank || "";
  if (!storedRank || storedRank === "Rango inicial" || storedRank === "Initial rank" || storedRank === "Ranking inicial") {
    return textFor("initialRank");
  }
  return storedRank;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const rest = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function formatVisibleMatchTime() {
  const visibleSeconds = Math.max(0, Math.ceil(state.realHalfSecondsRemaining));
  return formatTime(visibleSeconds);
}

function loadCompetitionState() {
  try {
    const data = JSON.parse(localStorage.getItem(competitionStorageKey) || "null");
    if (!data || !data.code) return null;
    const migrated = migrateCompetitionState(data);
    if (migrated !== data) {
      localStorage.setItem(competitionStorageKey, JSON.stringify(migrated));
    }
    return migrated;
  } catch {
    return null;
  }
}

function saveCompetitionState() {
  if (!competitionState) {
    localStorage.removeItem(competitionStorageKey);
    return;
  }
  competitionState.formatVersion = competitionFormatVersion;
  localStorage.setItem(competitionStorageKey, JSON.stringify(competitionState));
}

function normalizeCompetitionType(data) {
  if (data?.type === "cup" || String(data?.code || "").includes("COPA")) return "cup";
  if (data?.type === "league" || String(data?.code || "").includes("LIGA")) return "league";
  return data?.type || "friendly";
}

function competitionNeedsMigration(data, type) {
  if (type !== "cup" && type !== "league") return false;
  const expectedFixtureCount = type === "cup" ? aiCupPath.length : aiLeagueRivals.length * 2;
  const expectedTableCount = type === "cup" ? 8 : aiLeagueRivals.length + 1;
  return data.formatVersion !== competitionFormatVersion
    || !Array.isArray(data.fixtures)
    || data.fixtures.length !== expectedFixtureCount
    || !Array.isArray(data.table)
    || data.table.length !== expectedTableCount;
}

function migrateCompetitionState(data) {
  const type = normalizeCompetitionType(data);
  if (type !== "cup" && type !== "league") return data;
  if (!competitionNeedsMigration(data, type)) return data;
  const migrated = makeCompetition(type, {
    code: data.code,
    playerTeam: data.playerTeam || activeProfile?.team || textFor("defaultTeamName")
  });
  migrated.history = [textFor("competitionFormatUpdated")];
  migrated.migratedFrom = data.formatVersion || "legacy";
  return migrated;
}

function generateCompetitionCode(type) {
  const prefix = type === "cup" ? "COPA" : "LIGA";
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const seed = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `DT-${prefix}-${stamp}${seed}`;
}

function makeCompetition(type, options = {}) {
  const playerTeam = options.playerTeam || activeProfile?.team || textFor("defaultTeamName");
  const rivals = type === "cup"
    ? aiCupPath
    : [
        ...aiLeagueRivals.map((rival, index) => ({
          label: `Fecha ${index + 1}`,
          rival,
          difficulty: aiDifficultyOrder[index % aiDifficultyOrder.length],
          homeAway: "ida"
        })),
        ...aiLeagueRivals.map((rival, index) => ({
          label: `Fecha ${index + 1 + aiLeagueRivals.length}`,
          rival,
          difficulty: aiDifficultyOrder[(index + 1) % aiDifficultyOrder.length],
          homeAway: "revancha"
        }))
      ];
  const tableTeams = type === "cup"
    ? [playerTeam, ...aiCupPath.map(item => item.rival), "IA Norte", "IA Sur", "IA Puerto", "IA Academia"]
    : [playerTeam, ...aiLeagueRivals];
  return {
    formatVersion: competitionFormatVersion,
    active: type !== "friendly",
    type,
    code: options.code || generateCompetitionCode(type),
    playerTeam,
    matchIndex: 0,
    eliminated: false,
    champion: false,
    completed: false,
    fixtures: rivals.map(item => ({ ...item, played: false, score: null, result: null })),
    table: tableTeams.map(team => ({ team, pts: 0, pj: 0, gf: 0, gc: 0 })),
    history: []
  };
}

function currentCompetitionFixture() {
  if (!competitionState?.active) return null;
  return competitionState.fixtures[competitionState.matchIndex] || null;
}

function setCompetitionMode(type) {
  if (type === "friendly") {
    competitionState = null;
    saveCompetitionState();
    renderCompetitionPanel(textFor("singleMatchSelected"));
    return;
  }
  if (!activeProfile) {
    renderCompetitionPanel(textFor("competitionNeedsProfile"));
    return;
  }
  competitionState = makeCompetition(type);
  setupSelection.mode = "ai";
  setupSelection.aiDifficulty = currentCompetitionFixture()?.difficulty || "easy";
  saveCompetitionState();
  markSetupSelections();
  renderCompetitionPanel(textTemplate("competitionCreated", {
    type: competitionTypeName(type),
    code: competitionState.code
  }));
}

function resumeCompetitionByCode() {
  const code = competitionCodeInputEl.value.trim().toUpperCase();
  const saved = loadCompetitionState();
  if (!saved || saved.code.toUpperCase() !== code) {
    renderCompetitionPanel(textFor("competitionNotFound"));
    return;
  }
  competitionState = saved;
  setupSelection.mode = "ai";
  setupSelection.aiDifficulty = currentCompetitionFixture()?.difficulty || setupSelection.aiDifficulty;
  saveCompetitionState();
  markSetupSelections();
  renderCompetitionPanel(textTemplate("competitionResumed", { code: competitionState.code }));
}

function abandonCompetition() {
  competitionState = null;
  saveCompetitionState();
  if (competitionCodeInputEl) competitionCodeInputEl.value = "";
  renderCompetitionPanel(textFor("singleMatchSelected"));
}

function updateTableLine(team, gf, gc) {
  if (!competitionState?.table) return;
  const line = competitionState.table.find(item => item.team === team);
  if (!line) return;
  line.pj += 1;
  line.gf += gf;
  line.gc += gc;
  if (gf > gc) line.pts += 3;
  else if (gf === gc) line.pts += 1;
}

function simulateLeagueRound() {
  if (!competitionState || competitionState.type !== "league") return;
  const rivals = competitionState.table.filter(item => item.team !== competitionState.playerTeam);
  if (rivals.length < 2) return;
  const offset = competitionState.matchIndex % rivals.length;
  const rotated = rivals.map((_, index) => rivals[(index + offset) % rivals.length]);
  for (let index = 0; index < rotated.length - 1; index += 2) {
    const a = rotated[index];
    const b = rotated[index + 1];
    const ga = Math.floor(Math.random() * 4);
    const gb = Math.floor(Math.random() * 4);
    updateTableLine(a.team, ga, gb);
    updateTableLine(b.team, gb, ga);
    competitionState.history.push(`${a.team} ${ga} - ${gb} ${b.team}`);
  }
}

function recordCompetitionResult(outcome) {
  const fixture = currentCompetitionFixture();
  if (!competitionState?.active || !fixture || state.mode !== "ai") return "";
  const playerWon = outcome.winner === "blue";
  const playerLost = outcome.winner === "red";
  const result = playerWon ? "win" : playerLost ? "loss" : "draw";
  fixture.played = true;
  fixture.score = `${outcome.blue} - ${outcome.red}`;
  fixture.result = result;
  competitionState.history.push(`${competitionFixtureLabel(fixture)}: ${competitionState.playerTeam} ${fixture.score} ${fixture.rival}`);

  if (competitionState.type === "cup") {
    if (!playerWon) {
      competitionState.eliminated = true;
      competitionState.completed = true;
      saveCompetitionState();
      return textTemplate("cupEliminated", {
        stage: competitionFixtureLabel(fixture),
        code: competitionState.code
      });
    }
    if (competitionState.matchIndex >= competitionState.fixtures.length - 1) {
      competitionState.champion = true;
      competitionState.completed = true;
      saveCompetitionState();
      return textTemplate("cupChampion", {
        team: competitionState.playerTeam,
        code: competitionState.code
      });
    }
    competitionState.matchIndex += 1;
    saveCompetitionState();
    return textTemplate("cupWonNext", {
      stage: competitionFixtureLabel(fixture),
      next: competitionFixtureLabel(currentCompetitionFixture())
    });
  }

  updateTableLine(competitionState.playerTeam, outcome.blue, outcome.red);
  updateTableLine(fixture.rival, outcome.red, outcome.blue);
  simulateLeagueRound();
  competitionState.matchIndex += 1;
  if (competitionState.matchIndex >= competitionState.fixtures.length) {
    competitionState.completed = true;
    const sorted = [...competitionState.table].sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc));
    competitionState.champion = sorted[0]?.team === competitionState.playerTeam;
    saveCompetitionState();
    return competitionState.champion
      ? textTemplate("leagueChampionPlayer", { team: competitionState.playerTeam })
      : textTemplate("leagueFinishedChampion", { team: sorted[0]?.team || textFor("unknownChampion") });
  }
  saveCompetitionState();
  return textTemplate("leagueResultLoaded", { next: competitionFixtureLabel(currentCompetitionFixture()) });
}

function renderCompetitionPanel(message = "") {
  if (!competitionStatusEl) return;
  if (competitionState?.active) {
    const migrated = migrateCompetitionState(competitionState);
    if (migrated !== competitionState) {
      competitionState = migrated;
      saveCompetitionState();
      message = message || textFor("competitionFormatUpdated");
    }
  }
  document.querySelectorAll("[data-competition]").forEach(button => {
    const selected = competitionState?.active ? competitionState.type : "friendly";
    button.classList.toggle("selected", button.dataset.competition === selected);
  });
  if (!competitionState?.active) {
    competitionStatusEl.textContent = message || textFor("singleMatchSelected");
    return;
  }
  if (competitionCodeInputEl) competitionCodeInputEl.value = competitionState.code;
  const fixture = currentCompetitionFixture();
  const fixtureLines = competitionState.fixtures.map((item, index) => {
    const mark = index === competitionState.matchIndex && !competitionState.completed ? ">" : "-";
    const result = item.played ? ` ${item.score}` : ` vs ${item.rival} (${difficultyText(item.difficulty)})`;
    return `${mark} ${competitionFixtureLabel(item)}:${result}`;
  });
  const tableLines = competitionState.type === "league"
    ? [...competitionState.table]
        .sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc))
        .map(item => `${item.team}: ${item.pts} pts (${item.gf}-${item.gc})`)
    : [];
  const current = fixture && !competitionState.completed
    ? textTemplate("nextRival", {
        rival: fixture.rival,
        difficulty: difficultyText(fixture.difficulty)
      })
    : competitionState.champion
    ? textFor("competitionCompleteChampion")
    : competitionState.eliminated
    ? textFor("competitionCompleteEliminated")
    : textFor("competitionComplete");
  competitionStatusEl.innerHTML = `
    <strong>${competitionState.type === "cup" ? textFor("cup8") : textFor("league10")} ${competitionState.code}</strong><br>
    ${message || current}<br>
    ${fixtureLines.join("<br>")}
    ${tableLines.length ? `<br><br>${tableLines.join("<br>")}` : ""}
  `;
}

function loadStoredProfile() {
  try {
    return JSON.parse(localStorage.getItem("dtDigitalProfile") || "null");
  } catch {
    return null;
  }
}

function loadLockerSettings() {
  const defaults = {
    playerVisual: "figure",
    blueKit: "#2177c7",
    blueShorts: "#14528f",
    blueSocks: "#ffffff",
    redKit: "#d84343",
    redShorts: "#9d252b",
    redSocks: "#ffffff",
    previewTeam: "blue",
    fieldEffect: "sunny",
    tactic: "f433",
    tacticTeam: "blue",
    blueTactic: "f433",
    redTactic: "f433",
    customTactic: null,
    blueCustomTactic: null,
    redCustomTactic: null,
    talks: []
  };
  try {
    const loaded = { ...defaults, ...(JSON.parse(localStorage.getItem("dtDigitalLocker") || "null") || {}) };
    loaded.blueTactic = loaded.blueTactic || loaded.tactic || "f433";
    loaded.redTactic = loaded.redTactic || loaded.tactic || "f433";
    if (loaded.tactic !== "personalizada" && !lockerTactics[loaded.tactic]) loaded.tactic = "f433";
    if (loaded.blueTactic !== "personalizada" && !lockerTactics[loaded.blueTactic]) loaded.blueTactic = "f433";
    if (loaded.redTactic !== "personalizada" && !lockerTactics[loaded.redTactic]) loaded.redTactic = "f433";
    if (!["blue", "red"].includes(loaded.tacticTeam)) loaded.tacticTeam = "blue";
    if (!["sunny", "rain", "night"].includes(loaded.fieldEffect)) loaded.fieldEffect = "sunny";
    if (loaded.playerVisual === "realistic") loaded.playerVisual = "figure";
    if (!["round", "figure"].includes(loaded.playerVisual)) loaded.playerVisual = "figure";
    return loaded;
  } catch {
    return defaults;
  }
}

function saveLockerSettings() {
  localStorage.setItem("dtDigitalLocker", JSON.stringify(lockerSettings));
}

function applyLockerSettings() {
  document.documentElement.dataset.playerVisual = lockerSettings.playerVisual;
  document.documentElement.dataset.fieldEffect = lockerSettings.fieldEffect;
  document.documentElement.style.setProperty("--blue-kit", lockerSettings.blueKit);
  document.documentElement.style.setProperty("--blue-shorts", lockerSettings.blueShorts);
  document.documentElement.style.setProperty("--blue-socks", lockerSettings.blueSocks);
  document.documentElement.style.setProperty("--red-kit", lockerSettings.redKit);
  document.documentElement.style.setProperty("--red-shorts", lockerSettings.redShorts);
  document.documentElement.style.setProperty("--red-socks", lockerSettings.redSocks);
  const previewTeam = lockerSettings.previewTeam === "red" ? "red" : "blue";
  document.documentElement.style.setProperty("--locker-shirt", lockerSettings[`${previewTeam}Kit`]);
  document.documentElement.style.setProperty("--locker-shorts", lockerSettings[`${previewTeam}Shorts`]);
  document.documentElement.style.setProperty("--locker-socks", lockerSettings[`${previewTeam}Socks`]);
  document.querySelectorAll("[data-player-visual]").forEach(button => {
    button.classList.toggle("active", button.dataset.playerVisual === lockerSettings.playerVisual);
  });
  document.querySelectorAll("[data-kit-preview]").forEach(preview => {
    preview.classList.toggle("active", preview.dataset.kitPreview === previewTeam);
  });
  if (lockerPlayerPreviewEl) {
    lockerPlayerPreviewEl.className = `locker-player ${lockerSettings.playerVisual}`;
  }
  document.querySelectorAll("[data-locker-tactic]").forEach(button => {
    button.classList.toggle("active", button.dataset.lockerTactic === getLockerTacticForTeam(lockerSettings.tacticTeam));
  });
  document.querySelectorAll("[data-tactic-team]").forEach(button => {
    button.classList.toggle("active", button.dataset.tacticTeam === lockerSettings.tacticTeam);
  });
  document.querySelectorAll("[data-field-effect]").forEach(button => {
    button.classList.toggle("active", button.dataset.fieldEffect === lockerSettings.fieldEffect);
  });
  if (tacticBoardEl) {
    tacticBoardEl.style.setProperty("--tactic-cols", board.width);
    tacticBoardEl.style.setProperty("--tactic-rows", Math.ceil(board.height / 2));
  }
  renderTacticBoard();
  renderLockerBench();
}

function openLockerRoom() {
  applyLockerSettings();
  lockerStatusEl.textContent = activeProfile
    ? textTemplate("lockerStatusActive", { team: activeProfile.team })
    : textFor("lockerStatusPreview");
  lockerDialog.showModal();
  introAudioBtn?.classList.remove("hidden");
  switchAudioScene("locker");
}

function setKitColor(team, part, color) {
  const suffix = part === "shorts" ? "Shorts" : part === "socks" ? "Socks" : "Kit";
  const key = `${team}${suffix}`;
  if (Object.prototype.hasOwnProperty.call(lockerSettings, key)) {
    lockerSettings[key] = color;
    lockerSettings.previewTeam = team;
  }
  saveLockerSettings();
  applyLockerSettings();
  render();
}

function getLockerTacticForTeam(team) {
  return team === "red"
    ? lockerSettings.redTactic || lockerSettings.tactic || "f433"
    : lockerSettings.blueTactic || lockerSettings.tactic || "f433";
}

function setLockerTacticForTeam(team, tactic) {
  if (team === "red") lockerSettings.redTactic = tactic;
  else lockerSettings.blueTactic = tactic;
  lockerSettings.tactic = tactic;
}

function getLockerCustomTacticForTeam(team) {
  return team === "red" ? lockerSettings.redCustomTactic : lockerSettings.blueCustomTactic;
}

function setLockerCustomTacticForTeam(team, tactic) {
  if (team === "red") lockerSettings.redCustomTactic = tactic;
  else lockerSettings.blueCustomTactic = tactic;
  lockerSettings.customTactic = tactic;
}

function getActiveTacticPositions() {
  const team = lockerSettings.tacticTeam || "blue";
  const tacticName = getLockerTacticForTeam(team);
  const customTactic = getLockerCustomTacticForTeam(team);
  const tacticLibrary = getTacticLibrary();
  if (tacticName === "personalizada" && Array.isArray(customTactic)) {
    return customTactic;
  }
  return tacticLibrary[tacticName] || tacticLibrary.f433;
}

function renderTacticBoard() {
  if (!tacticBoardEl) return;
  tacticBoardEl.innerHTML = "";
  getActiveTacticPositions().forEach((position, index) => {
    const [role, x, y] = position;
    const token = document.createElement("button");
    token.type = "button";
    token.className = `tactic-token ${role.toLowerCase()}`;
    token.textContent = role;
    token.dataset.index = index;
    token.style.left = `${x}%`;
    token.style.top = `${y}%`;
    token.addEventListener("pointerdown", event => startTacticDrag(event, index));
    tacticBoardEl.append(token);
  });
}

function setLockerTactic(tactic) {
  const team = lockerSettings.tacticTeam || "blue";
  const previousTactic = getLockerTacticForTeam(team);
  const tacticLibrary = getTacticLibrary();
  setLockerTacticForTeam(team, tactic);
  if (tactic === "personalizada" && !Array.isArray(getLockerCustomTacticForTeam(team))) {
    setLockerCustomTacticForTeam(team, (tacticLibrary[previousTactic] || tacticLibrary.f433).map(item => [...item]));
  }
  if (tactic !== "personalizada") {
    setupSelection.formation = tactic;
    markSetupSelections();
  }
  saveLockerSettings();
  applyLockerSettings();
}

function startTacticDrag(event, index) {
  const team = lockerSettings.tacticTeam || "blue";
  if (getLockerTacticForTeam(team) !== "personalizada") {
    setLockerCustomTacticForTeam(team, getActiveTacticPositions().map(item => [...item]));
    setLockerTacticForTeam(team, "personalizada");
    saveLockerSettings();
    applyLockerSettings();
  }
  const token = event.currentTarget;
  draggingTacticToken = { index, pointerId: event.pointerId };
  token.setPointerCapture(event.pointerId);
  token.addEventListener("pointermove", moveTacticToken);
  token.addEventListener("pointerup", stopTacticDrag, { once: true });
  token.addEventListener("pointercancel", stopTacticDrag, { once: true });
  moveTacticToken(event);
}

function moveTacticToken(event) {
  const team = lockerSettings.tacticTeam || "blue";
  const customTactic = getLockerCustomTacticForTeam(team);
  if (!draggingTacticToken || !Array.isArray(customTactic)) return;
  const rect = tacticBoardEl.getBoundingClientRect();
  const x = Math.max(5, Math.min(95, ((event.clientX - rect.left) / rect.width) * 100));
  const y = Math.max(8, Math.min(92, ((event.clientY - rect.top) / rect.height) * 100));
  const item = customTactic[draggingTacticToken.index];
  if (!item) return;
  item[1] = Math.round(x);
  item[2] = Math.round(y);
  const token = tacticBoardEl.querySelector(`[data-index="${draggingTacticToken.index}"]`);
  if (token) {
    token.style.left = `${item[1]}%`;
    token.style.top = `${item[2]}%`;
  }
}

function stopTacticDrag(event) {
  event.currentTarget.removeEventListener("pointermove", moveTacticToken);
  draggingTacticToken = null;
  saveLockerSettings();
  applyLockerSettings();
}

function saveLockerConfiguration() {
  saveLockerSettings();
  const activeTactic = getLockerTacticForTeam("blue");
  setupSelection.formation = activeTactic === "personalizada" ? setupSelection.formation : activeTactic;
  if (state && !state.started) {
    newGame();
  }
  if (state?.started && state.kickoffPassRequired && !state.clockRunning) {
    const wasStarted = state.started;
    newGame();
    state.started = wasStarted;
  }
  lockerStatusEl.textContent = textFor("lockerSaved");
  markSetupSelections();
  render();
}

function renderLockerBench() {
  if (!lockerBenchListEl || !lockerOutSelectEl || !lockerInSelectEl) return;
  const activeTeam = state?.currentTeam || "blue";
  const fieldPieces = state?.pieces?.filter(piece => piece.team === activeTeam && piece.status === "field") || [];
  const benchPieces = state?.pieces?.filter(piece => piece.team === activeTeam && piece.status === "bench") || [];

  lockerBenchListEl.innerHTML = "";
  if (!benchPieces.length) {
    const empty = document.createElement("div");
    empty.className = "locker-bench-chip";
    empty.textContent = textFor("benchEmpty");
    lockerBenchListEl.append(empty);
  } else {
    benchPieces.forEach(piece => {
      const chip = document.createElement("div");
      chip.className = "locker-bench-chip";
      chip.textContent = `${roleName(piece.type)} ${textFor("substitute")}`;
      lockerBenchListEl.append(chip);
    });
  }

  lockerOutSelectEl.innerHTML = "";
  fieldPieces.filter(piece => piece.type !== "ARQ").forEach(piece => {
    const option = document.createElement("option");
    option.value = piece.id;
    option.textContent = `${roleName(piece.type)} ${textFor("fieldPlayers")}`;
    lockerOutSelectEl.append(option);
  });

  lockerInSelectEl.innerHTML = "";
  benchPieces.forEach(piece => {
    const option = document.createElement("option");
    option.value = piece.id;
    option.textContent = `${roleName(piece.type)} ${textFor("substitute")}`;
    lockerInSelectEl.append(option);
  });
}

function prepareLockerChange() {
  if (!lockerOutSelectEl?.value || !lockerInSelectEl?.value) {
    lockerStatusEl.textContent = textFor("lockerChangeSelect");
    return;
  }
  const outPiece = getPieceById(lockerOutSelectEl.value);
  const inPiece = getPieceById(lockerInSelectEl.value);
  if (!outPiece || !inPiece) {
    lockerStatusEl.textContent = textFor("lockerChangeMissing");
    return;
  }
  lockerStatusEl.textContent = textTemplate("lockerChangePrepared", {
    outRole: roleName(outPiece.type),
    inRole: roleName(inPiece.type)
  });
}

function saveTeamTalk() {
  const text = teamTalkInput.value.trim();
  if (!activeProfile) {
    lockerStatusEl.textContent = textFor("teamTalkNeedsProfile");
    return;
  }
  if (!text) {
    lockerStatusEl.textContent = textFor("teamTalkNeedsText");
    return;
  }
  lockerSettings.talks = lockerSettings.talks || [];
  lockerSettings.talks.push({
    team: activeProfile.team,
    date: new Date().toISOString(),
    half: state?.half || null,
    text
  });
  saveLockerSettings();
  teamTalkInput.value = "";
  lockerStatusEl.textContent = textTemplate("teamTalkSaved", { team: activeProfile.team });
}

function loadProfileRegistry() {
  try {
    const rawRegistry = JSON.parse(localStorage.getItem("dtDigitalProfileRegistry") || "{}");
    const registry = {};
    Object.values(rawRegistry).forEach(profile => {
      if (profile?.team) registry[normalizeTeamKey(profile.team)] = profile;
    });
    const storedProfile = JSON.parse(localStorage.getItem("dtDigitalProfile") || "null");
    if (storedProfile?.team) {
      const key = normalizeTeamKey(storedProfile.team);
      if (!registry[key]) {
        registry[key] = storedProfile;
      }
    }
    localStorage.setItem("dtDigitalProfileRegistry", JSON.stringify(registry));
    return registry;
  } catch {
    return {};
  }
}

function normalizeTeamKey(team) {
  return team.trim().toLowerCase();
}

function saveProfileToRegistry(profile) {
  const registry = loadProfileRegistry();
  registry[normalizeTeamKey(profile.team)] = profile;
  localStorage.setItem("dtDigitalProfileRegistry", JSON.stringify(registry));
}

function saveProfile() {
  const name = loginNameEl.value.trim();
  const team = loginTeamEl.value.trim();
  const dni = loginDniEl.value.trim();
  const phone = loginPhoneEl.value.trim();
  const email = loginEmailEl.value.trim();
  const address = loginAddressEl.value.trim();
  const country = loginCountryEl.value.trim();
  const code = loginCodeEl.value.trim();
  if (!name || !team || !dni || !phone || !email || !address || !country || code.length < 4) {
    loginStatusEl.textContent = textFor("profileMissingFields");
    return;
  }
  const registry = loadProfileRegistry();
  const existing = registry[normalizeTeamKey(team)];
  if (existing?.mfaCode && existing.mfaCode !== code) {
    loginStatusEl.textContent = textFor("profileMfaMismatch");
    activeProfile = null;
    syncSetupUi();
    return;
  }
  activeProfile = {
    id: existing?.id || `DT-${Date.now().toString(36).toUpperCase()}`,
    name,
    team,
    dni,
    phone,
    email,
    address,
    country,
    mfaCode: code,
    rank: "Rango inicial",
    mfa: true,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    stats: existing?.stats || { played: 0, wins: 0, draws: 0, losses: 0 }
  };
  localStorage.setItem("dtDigitalProfile", JSON.stringify(activeProfile));
  saveProfileToRegistry(activeProfile);
  loginStatusEl.textContent = `${textFor("activeProfile")}: ${activeProfile.name} / ${activeProfile.team}. ID ${activeProfile.id}`;
  syncSetupUi();
}

function clearProfileForm() {
  [loginNameEl, loginTeamEl, loginDniEl, loginPhoneEl, loginEmailEl, loginAddressEl, loginCountryEl, loginCodeEl].forEach(input => {
    input.value = "";
  });
  loginStatusEl.textContent = textFor("newProfilePrompt");
}

function setActiveProfileByTeam(team) {
  const registry = loadProfileRegistry();
  const profile = registry[normalizeTeamKey(team)];
  if (!profile) return;
  activeProfile = profile;
  localStorage.setItem("dtDigitalProfile", JSON.stringify(activeProfile));
  if (localSecondProfile?.id === activeProfile.id) localSecondProfile = null;
  loginStatusEl.textContent = `${textFor("activeProfile")}: ${profile.name} / ${profile.team}. ID ${profile.id}`;
  syncSetupUi();
}

function fillSecondPlayerTeam(team) {
  localP2TeamKeyEl.value = team;
  localP2StatusEl.textContent = textTemplate("player2TeamLoaded", { team });
}

function authenticateSecondLocalPlayer() {
  localSecondProfile = null;
  if (!activeProfile) {
    localP2StatusEl.textContent = textFor("registerPlayer1First");
    syncSetupUi();
    return;
  }
  const teamKey = normalizeTeamKey(localP2TeamKeyEl.value);
  const code = localP2CodeEl.value.trim();
  if (!teamKey || code.length < 4) {
    localP2StatusEl.textContent = textFor("player2TeamAndMfaRequired");
    syncSetupUi();
    return;
  }
  const registry = loadProfileRegistry();
  const profile = registry[teamKey];
  if (!profile) {
    localP2StatusEl.textContent = textFor("player2TeamNotFound");
    localSecondProfile = null;
    syncSetupUi();
    return;
  }
  if (profile.id === activeProfile?.id) {
    localP2StatusEl.textContent = textFor("player2MustDiffer");
    localSecondProfile = null;
    syncSetupUi();
    return;
  }
  if (code.length < 4 || code !== profile.mfaCode) {
    localP2StatusEl.textContent = textFor("player2MfaWrong");
    localSecondProfile = null;
    syncSetupUi();
    return;
  }
  localSecondProfile = profile;
  localP2StatusEl.textContent = textTemplate("player2Authenticated", { name: profile.name, team: profile.team });
  syncSetupUi();
}

function syncProfileUi() {
  renderRegisteredProfiles();
  if (activeProfile) {
    loginNameEl.value = activeProfile.name;
    loginTeamEl.value = activeProfile.team;
    loginDniEl.value = activeProfile.dni || "";
    loginPhoneEl.value = activeProfile.phone || "";
    loginEmailEl.value = activeProfile.email || "";
    loginAddressEl.value = activeProfile.address || "";
    loginCountryEl.value = activeProfile.country || "";
    loginStatusEl.textContent = `${textFor("activeProfile")}: ${activeProfile.name} / ${activeProfile.team}. ID ${activeProfile.id}`;
    profileNameEl.textContent = activeProfile.name;
    profileRankEl.textContent = `${activeProfile.team} / ${profileRankLabel(activeProfile)}`;
    return;
  }
  profileNameEl.textContent = textFor("guest");
  profileRankEl.textContent = textFor("initialRank");
}

function renderRegisteredProfiles() {
  const registry = loadProfileRegistry();
  const profiles = Object.values(registry);
  registeredProfilesEl.innerHTML = "";
  if (!profiles.length) {
    const empty = document.createElement("div");
    empty.className = "registered-profile";
    empty.textContent = textFor("noRegisteredTeams");
    registeredProfilesEl.append(empty);
    return;
  }
  profiles.forEach(profile => {
    const item = document.createElement("div");
    item.className = "registered-profile";
    item.innerHTML = `
      <div><strong>${profile.team}</strong><span> ${profile.name} / ${profile.id}</span></div>
      <button type="button" data-active-team="${profile.team}">${textFor("player1")}</button>
      <button type="button" data-second-team="${profile.team}">${textFor("player2")}</button>
    `;
    registeredProfilesEl.append(item);
  });
}

function syncSetupUi() {
  syncProfileUi();
  renderCompetitionPanel();
  const isOnline = setupSelection.mode === "online";
  const isLeague = setupSelection.mode === "league";
  const registeredCount = Object.keys(loadProfileRegistry()).length;
  localPanelEl.classList.toggle("hidden", setupSelection.mode !== "local");
  onlinePanelEl.classList.toggle("hidden", !isOnline);
  leaguePanelEl.classList.toggle("hidden", !isLeague);
  document.querySelectorAll("[data-mode], [data-ai], [data-formation]").forEach(button => {
    button.disabled = !activeProfile;
    if (!activeProfile) button.title = textFor("registerUserFirstTitle");
    else if (button.dataset.mode === "local" && registeredCount < 2) button.title = textFor("localModeNeedsTwoProfilesTitle");
    else button.title = "";
  });
  localP2AuthBtn.disabled = !activeProfile;
  localP2AuthBtn.title = activeProfile ? "" : textFor("registerPlayer1First");
  document.querySelectorAll("[data-duration]").forEach(button => {
    const missingSecondLocal = setupSelection.mode === "local" && !localSecondProfile;
    button.disabled = !activeProfile || missingSecondLocal || isOnline || isLeague;
    if (isOnline) button.title = textFor("onlineNoDirectStartTitle");
    else if (isLeague) button.title = textFor("leagueNoDirectStartTitle");
    else if (!activeProfile) button.title = textFor("registerUserFirstTitle");
    else if (missingSecondLocal) button.title = registeredCount < 2
      ? textFor("localNeedsTwoTeams")
      : textFor("localNeedsPlayer2Auth");
    else button.title = textFor("startGameTitle");
  });
  if (startMatchBtn) {
    const missingSecondLocal = setupSelection.mode === "local" && !localSecondProfile;
    startMatchBtn.disabled = !activeProfile || missingSecondLocal || isOnline || isLeague;
  }
}

function startConfiguredGame(realMinutes) {
  if (!activeProfile) {
    loginStatusEl.textContent = textFor("setupStartNeedsProfile");
    return;
  }
  if (setupSelection.mode === "local" && Object.keys(loadProfileRegistry()).length < 2) {
    localP2StatusEl.textContent = textFor("localNeedsTwoTeams");
    return;
  }
  if (setupSelection.mode === "local" && !localSecondProfile) {
    localP2StatusEl.textContent = textFor("localNeedsPlayer2Auth");
    return;
  }
  if (setupSelection.mode === "online") {
    onlineStatusEl.textContent = textFor("onlineNoDirectStart");
    return;
  }
  if (setupSelection.mode === "league") {
    leagueStatusEl.textContent = textFor("leagueNoDirectStart");
    return;
  }
  const fixture = currentCompetitionFixture();
  if (setupSelection.mode === "ai" && fixture && !competitionState.completed) {
    setupSelection.aiDifficulty = fixture.difficulty;
  }
  setupSelection.realMinutes = realMinutes;
  lineupEditing = false;
  state = {
    config: {
      realHalfSeconds: realMinutes * 60,
      visibleHalfMinutes: realMinutes
    }
  };
  newGame();
  state.started = true;
  paused = false;
  timerLastTickAt = null;
  setupScreenEl.classList.add("hidden");
  switchAudioScene("match");
  markSetupSelections();
  render();
  centerFieldScroll();
  maybeRunAiTurn();
}

function prepareLineupOnField() {
  if (!activeProfile) {
    loginStatusEl.textContent = textFor("setupLineupNeedsProfile");
    return;
  }
  if (setupSelection.mode === "local" && !localSecondProfile) {
    localP2StatusEl.textContent = textFor("setupLineupLocalNeedsAuth");
    return;
  }
  saveLockerConfiguration();
  state = {
    config: {
      realHalfSeconds: setupSelection.realMinutes * 60,
      visibleHalfMinutes: setupSelection.realMinutes
    }
  };
  newGame();
  state.started = false;
  state.clockRunning = false;
  paused = true;
  lineupEditing = true;
  setupScreenEl.classList.add("hidden");
  switchAudioScene("match");
  addLog(textFor("lineupMode"));
  render();
  centerFieldScroll();
  window.setTimeout(() => {
    document.querySelector(".stadium")?.scrollIntoView({ block: "start", inline: "center" });
    centerFieldScroll();
  }, 80);
}

function startPreparedLineupGame() {
  if (!state || !lineupEditing) {
    startConfiguredGame(setupSelection.realMinutes);
    return;
  }
  lineupEditing = false;
  state.started = true;
  paused = false;
  timerLastTickAt = null;
  selectedAction = "pass";
  render();
  maybeRunAiTurn();
}

function restartCurrentGame() {
  lineupEditing = false;
  if (matchEndDialog?.open) matchEndDialog.close();
  newGame();
  state.started = true;
  paused = false;
  timerLastTickAt = null;
  switchAudioScene("match");
  render();
  maybeRunAiTurn();
}

function returnToSetupMenu() {
  paused = true;
  lineupEditing = false;
  timerLastTickAt = null;
  if (pauseDialog.open) pauseDialog.close();
  if (changeDialog.open) changeDialog.close();
  if (matchEndDialog?.open) matchEndDialog.close();
  state.started = false;
  physicalScreenEl?.classList.add("hidden");
  setupScreenEl.classList.remove("hidden");
  styleScreenEl.classList.add("hidden");
  syncScreenChrome();
  switchAudioScene("menu");
  markSetupSelections();
  render();
}

function returnToStyleSelection() {
  paused = true;
  lineupEditing = false;
  timerLastTickAt = null;
  if (pauseDialog.open) pauseDialog.close();
  if (changeDialog.open) changeDialog.close();
  if (lockerDialog.open) lockerDialog.close();
  if (matchEndDialog?.open) matchEndDialog.close();
  if (state) state.started = false;
  physicalScreenEl?.classList.add("hidden");
  setupScreenEl.classList.remove("hidden");
  styleScreenEl.classList.remove("hidden");
  syncScreenChrome();
  switchAudioScene("menu");
  markSetupSelections();
  render();
}

function markSetupSelections() {
  document.querySelectorAll("[data-duration]").forEach(button => {
    button.classList.toggle("selected", Number(button.dataset.duration) === setupSelection.realMinutes);
  });
  document.querySelectorAll("[data-mode]").forEach(button => {
    button.classList.toggle("selected", button.dataset.mode === setupSelection.mode);
  });
  document.querySelectorAll("[data-ai]").forEach(button => {
    button.classList.toggle("selected", button.dataset.ai === setupSelection.aiDifficulty);
  });
  document.querySelectorAll("[data-formation]").forEach(button => {
    button.classList.toggle("selected", button.dataset.formation === setupSelection.formation);
  });
  syncSetupUi();
}

function showSecretStep(title, text) {
  state.secretStep = title;
  secretTitleEl.textContent = title;
  secretTextEl.textContent = text;
  secretDialog.showModal();
}

secretContinueBtn.addEventListener("click", () => {
  state.secretStep = null;
  secretDialog.close();
});

document.querySelectorAll("[data-action]").forEach(button => {
  button.addEventListener("click", () => {
    const selected = getSelectedPiece();
    const needsBall = button.dataset.action === "moveBall" || button.dataset.action === "pass" || button.dataset.action === "shot";
    if (selected && needsBall && !hasBall(selected)) {
      selectedAction = "move";
      addLog("Esa ficha no tiene la pelota: se activa mover sin balon.");
      render();
      return;
    }
    if (state.kickoffPassRequired && button.dataset.action !== "pass") {
      selectedAction = "pass";
      addLog("Saque del medio: solo esta habilitado el pase.");
      render();
      return;
    }
    selectedAction = button.dataset.action;
    render();
  });
});

document.querySelectorAll("[data-duration]").forEach(button => {
  button.addEventListener("click", () => {
    setupSelection.realMinutes = Number(button.dataset.duration);
    markSetupSelections();
    loginStatusEl.textContent = textTemplate("durationSelected", { minutes: setupSelection.realMinutes });
  });
});

startMatchBtn.addEventListener("click", () => {
  saveLockerConfiguration();
  startConfiguredGame(setupSelection.realMinutes);
});

prepareLineupBtn.addEventListener("click", prepareLineupOnField);

window.addEventListener("orientationchange", () => {
  updateMobileFieldWidth();
  window.setTimeout(centerFieldScroll, 280);
});

window.addEventListener("resize", () => {
  updateMobileFieldWidth();
  if (setupScreen && setupScreen.hidden) {
    window.setTimeout(centerFieldScroll, 120);
  }
});
startPreparedBtn.addEventListener("click", startPreparedLineupGame);

document.querySelectorAll("[data-game-style]").forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.gameStyle === "physical") {
      document.querySelectorAll("[data-game-style]").forEach(item => item.classList.toggle("selected", item === button));
      openPhysicalSupport();
      return;
    }
    applyGameStyle(button.dataset.gameStyle);
    newGame();
    markSetupSelections();
    styleScreenEl.classList.add("hidden");
    physicalScreenEl?.classList.add("hidden");
    syncScreenChrome();
    switchAudioScene("menu");
    applyLanguage();
    loginStatusEl.textContent = textTemplate("styleSelected", { style: styleDisplayName() });
  });
});

document.querySelectorAll("[data-mode]").forEach(button => {
  button.addEventListener("click", () => {
    setupSelection.mode = button.dataset.mode;
    document.querySelectorAll("[data-mode]").forEach(item => item.classList.toggle("selected", item === button));
    syncSetupUi();
  });
});

document.querySelectorAll("[data-ai]").forEach(button => {
  button.addEventListener("click", () => {
    setupSelection.aiDifficulty = button.dataset.ai;
    document.querySelectorAll("[data-ai]").forEach(item => item.classList.toggle("selected", item === button));
  });
});

document.querySelectorAll("[data-competition]").forEach(button => {
  button.addEventListener("click", () => {
    setCompetitionMode(button.dataset.competition);
  });
});

resumeCompetitionBtn?.addEventListener("click", resumeCompetitionByCode);
abandonCompetitionBtn?.addEventListener("click", abandonCompetition);
restartMatchEndBtn?.addEventListener("click", () => {
  if (matchEndDialog.open) matchEndDialog.close();
  restartCurrentGame();
});
rematchHarderBtn?.addEventListener("click", rematchWithHarderAi);
continueCompetitionBtn?.addEventListener("click", continueCompetitionMatch);
matchEndMenuBtn?.addEventListener("click", returnToSetupMenu);

document.querySelectorAll("[data-formation]").forEach(button => {
  button.addEventListener("click", () => {
    setupSelection.formation = button.dataset.formation;
    if (lockerTactics[setupSelection.formation]) {
      setLockerTacticForTeam("blue", setupSelection.formation);
      setLockerTacticForTeam("red", setupSelection.formation);
      saveLockerSettings();
      applyLockerSettings();
    }
    document.querySelectorAll("[data-formation]").forEach(item => item.classList.toggle("selected", item === button));
  });
});

loginBtn.addEventListener("click", saveProfile);
newProfileBtn.addEventListener("click", clearProfileForm);
localP2AuthBtn.addEventListener("click", authenticateSecondLocalPlayer);

registeredProfilesEl.addEventListener("click", event => {
  const activeButton = event.target.closest("[data-active-team]");
  const secondButton = event.target.closest("[data-second-team]");
  if (activeButton) {
    setActiveProfileByTeam(activeButton.dataset.activeTeam);
    return;
  }
  if (secondButton) {
    fillSecondPlayerTeam(secondButton.dataset.secondTeam);
  }
});

createOnlineLinkBtn.addEventListener("click", () => {
  if (!activeProfile) {
    onlineStatusEl.textContent = textFor("onlineNeedsProfile");
    return;
  }
  const link = `dt-digital://partida/${activeProfile.id}-${Date.now().toString(36)}`;
  onlineStatusEl.textContent = textTemplate("onlineLinkCreated", { link });
});

joinOnlineLinkEl.addEventListener("change", () => {
  onlineStatusEl.textContent = joinOnlineLinkEl.value.trim()
    ? textFor("onlineLinkReceived")
    : textFor("onlinePasteLink");
});

createLeagueBtn.addEventListener("click", () => {
  if (!activeProfile) {
    leagueStatusEl.textContent = textFor("leagueNeedsAdmin");
    return;
  }
  const name = leagueNameEl.value.trim() || textFor("defaultLeagueName");
  const formatLabel = leagueFormatEl.options[leagueFormatEl.selectedIndex].textContent;
  leagueStatusEl.textContent = textTemplate("leagueCreated", {
    name,
    admin: activeProfile.name,
    format: formatLabel
  });
});

document.querySelectorAll("[data-role]").forEach(button => {
  button.addEventListener("click", () => {
    referenceRole = button.dataset.role;
    renderAbilities();
  });
});

document.querySelector("#endTurnBtn").addEventListener("click", endTurn);
topKeeperEl.addEventListener("click", () => onKeeperClick(getKeeperTeamAtRow(-1)));
bottomKeeperEl.addEventListener("click", () => onKeeperClick(getKeeperTeamAtRow(board.height)));

document.querySelector("#pauseBtn").addEventListener("click", () => {
  paused = true;
  pauseDialog.showModal();
});

audioBtn.addEventListener("click", enableAudio);
introAudioBtn?.addEventListener("click", toggleIntroAudio);
lockerAudioBtn?.addEventListener("click", toggleIntroAudio);
lockerBtn.addEventListener("click", openLockerRoom);
openLockerSetupBtn.addEventListener("click", openLockerRoom);
lockerChangeBtn.addEventListener("click", openLockerRoom);
closeLockerBtn.addEventListener("click", () => lockerDialog.close());
lockerDialog.addEventListener("close", () => {
  switchAudioScene(detectAudioScene());
  render();
});
saveTeamTalkBtn.addEventListener("click", saveTeamTalk);
lockerApplyChangeBtn.addEventListener("click", prepareLockerChange);
saveLockerBtn.addEventListener("click", saveLockerConfiguration);

document.querySelectorAll("[data-player-visual]").forEach(button => {
  button.addEventListener("click", () => {
    if (button.disabled || button.dataset.playerVisual === "realistic") return;
    lockerSettings.playerVisual = button.dataset.playerVisual;
    saveLockerSettings();
    applyLockerSettings();
    render();
  });
});

document.querySelectorAll("[data-kit-preview]").forEach(preview => {
  preview.addEventListener("click", () => {
    lockerSettings.previewTeam = preview.dataset.kitPreview === "red" ? "red" : "blue";
    saveLockerSettings();
    applyLockerSettings();
  });
});

document.querySelectorAll("[data-kit-team]").forEach(button => {
  button.addEventListener("click", () => {
    const activeKitTeam = lockerSettings.previewTeam === "red" ? "red" : "blue";
    setKitColor(activeKitTeam, button.dataset.kitPart, button.dataset.kitColor);
  });
});

document.querySelectorAll("[data-locker-tactic]").forEach(button => {
  button.addEventListener("click", () => {
    setLockerTactic(button.dataset.lockerTactic);
  });
});

document.querySelectorAll("[data-tactic-team]").forEach(button => {
  button.addEventListener("click", () => {
    lockerSettings.tacticTeam = button.dataset.tacticTeam;
    saveLockerSettings();
    applyLockerSettings();
  });
});

document.querySelectorAll("[data-field-effect]").forEach(button => {
  button.addEventListener("click", () => {
    lockerSettings.fieldEffect = button.dataset.fieldEffect;
    saveLockerSettings();
    applyLockerSettings();
  });
});

document.querySelector("#resumeBtn").addEventListener("click", () => {
  paused = false;
  timerLastTickAt = null;
  pauseDialog.close();
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  pauseDialog.close();
  restartCurrentGame();
});

document.querySelector("#menuBtn").addEventListener("click", () => {
  returnToSetupMenu();
});

document.querySelector("#changeStyleBtn").addEventListener("click", () => {
  returnToStyleSelection();
});

styleBackBtn.addEventListener("click", returnToStyleSelection);
physicalBackBtn?.addEventListener("click", closePhysicalSupport);
physicalShowMatchBtn?.addEventListener("click", () => {
  if (physicalSupportState.activeMatch) {
    physicalMatchPanelEl?.classList.remove("hidden");
    physicalMatchPanelEl?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (physicalStatusEl) {
    physicalStatusEl.textContent = textFor("noPhysicalClockPrepared");
  }
});
physicalRegisterTeamBtn?.addEventListener("click", registerPhysicalTeam);
physicalRegisterOfficialBtn?.addEventListener("click", registerPhysicalOfficial);
physicalTeamAuthBtn?.addEventListener("click", () => validatePhysicalIdentity("team"));
physicalOfficialAuthBtn?.addEventListener("click", () => validatePhysicalIdentity("official"));
physicalGenerateCodeBtn?.addEventListener("click", () => {
  if (physicalCompetitionCodeEl) physicalCompetitionCodeEl.value = makePhysicalCode("COMP");
});
physicalCreateCompetitionBtn?.addEventListener("click", createPhysicalCompetition);
physicalInviteBtn?.addEventListener("click", generatePhysicalInvite);
physicalPrepareMatchBtn?.addEventListener("click", preparePhysicalMatch);
document.querySelectorAll("[data-physical-duration]").forEach(button => {
  button.addEventListener("click", () => {
    physicalSupportState.selectedDuration = Number(button.dataset.physicalDuration);
    savePhysicalSupportState();
    updatePhysicalDurationButtons();
    if (physicalStatusEl) {
      physicalStatusEl.textContent = textTemplate("physicalDurationSelected", { minutes: physicalSupportState.selectedDuration });
    }
  });
});
physicalGoalHomeBtn?.addEventListener("click", () => addPhysicalGoal("home"));
physicalGoalAwayBtn?.addEventListener("click", () => addPhysicalGoal("away"));
physicalStartTimerBtn?.addEventListener("click", startPhysicalTimer);
physicalPauseTimerBtn?.addEventListener("click", pausePhysicalTimer);
physicalHalfBtn?.addEventListener("click", changePhysicalHalf);
physicalFinishBtn?.addEventListener("click", finishPhysicalMatch);
physicalNewMatchBtn?.addEventListener("click", resetPhysicalMatch);
physicalEvidenceBtn?.addEventListener("click", addPhysicalEvidence);

document.querySelector("#makeChangeBtn").addEventListener("click", () => {
  addLog("Cambio registrado como pendiente para implementar interfaz de sustituciones.");
});

document.querySelector("#resumeAfterGoalBtn").addEventListener("click", () => {
  paused = false;
  timerLastTickAt = null;
  changeDialog.close();
  maybeRunAiTurn();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (pauseDialog.open) {
      paused = false;
      pauseDialog.close();
    } else {
      paused = true;
      pauseDialog.showModal();
    }
  }
});

document.querySelectorAll(".duel-card").forEach(button => {
  button.addEventListener("click", () => {
    chooseDuelCard(button.dataset.duel);
  });
});

document.querySelectorAll("[data-shot]").forEach(button => {
  button.addEventListener("click", () => {
    chooseShotCard(button.dataset.shot);
  });
});

quickControlsEl?.addEventListener("click", event => {
  const toggle = event.target.closest("[data-quick-menu]");
  const action = event.target.closest("[data-quick-action]");
  const duel = event.target.closest("[data-quick-duel]");
  const shot = event.target.closest("[data-quick-shot]");
  const endTurnButton = event.target.closest("[data-quick-end-turn]");

  if (toggle) {
    toggleQuickMenu(toggle.dataset.quickMenu);
    return;
  }

  if (action) {
    const sourceButton = document.querySelector(`[data-action="${action.dataset.quickAction}"]`);
    sourceButton?.click();
    closeQuickMenus();
    return;
  }

  if (duel) {
    chooseDuelCard(duel.dataset.quickDuel);
    closeQuickMenus();
    return;
  }

  if (shot) {
    chooseShotCard(shot.dataset.quickShot);
    closeQuickMenus();
    return;
  }

  if (endTurnButton) {
    endTurn();
    closeQuickMenus();
  }
});

languageSelectEl?.addEventListener("change", () => {
  currentLanguage = languageSelectEl.value;
  localStorage.setItem(languageStorageKey, currentLanguage);
  applyLanguage();
});

document.addEventListener("click", event => {
  if (!quickControlsEl || !quickControlsEl.classList.contains("visible")) return;
  if (event.target.closest("#quickControls")) return;
  closeQuickMenus();
});

setInterval(() => {
  if (paused || !state || !state.started || !state.clockRunning) {
    timerLastTickAt = null;
    return;
  }

  const now = Date.now();
  if (!timerLastTickAt) {
    timerLastTickAt = now;
    return;
  }

  const elapsedSeconds = (now - timerLastTickAt) / 1000;
  if (elapsedSeconds < 0.25) return;
  timerLastTickAt = now;
  state.realHalfSecondsRemaining = Math.max(0, state.realHalfSecondsRemaining - elapsedSeconds);

  if (state.realHalfSecondsRemaining <= 0) {
    timerLastTickAt = null;
    switchHalf();
  }

  renderHud();
}, 1000);

newGame();
markSetupSelections();
syncSetupUi();
applyLockerSettings();
syncScreenChrome();
applyLanguage();
renderPhysicalSupport();
syncAudioButtons();
switchAudioScene("menu");
paused = true;
