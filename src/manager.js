class EventGameMgr extends GameMgr {
  init(...args) {
    EventGameMgr.event.emit('init', ...args)
    super.init(...args)
  }

  trasform_storage(...args) {
    EventGameMgr.event.emit('trasform_storage', ...args)
    super.trasform_storage(...args)
  }

  load0(...args) {
    EventGameMgr.event.emit('load0', ...args)
    super.load0(...args)
  }

  load1(...args) {
    EventGameMgr.event.emit('load1', ...args)
    super.load1(...args)
  }

  loadUStarLogin(...args) {
    EventGameMgr.event.emit('loadUStarLogin', ...args)
    super.loadUStarLogin(...args)
  }

  loadExcel(...args) {
    EventGameMgr.event.emit('loadExcel', ...args)
    super.loadExcel(...args)
  }

  pendinglink(...args) {
    EventGameMgr.event.emit('pendinglink', ...args)
    super.pendinglink(...args)
  }

  addScene(...args) {
    EventGameMgr.event.emit('addScene', ...args)
    super.addScene(...args)
  }

  addUI(...args) {
    EventGameMgr.event.emit('addUI', ...args)
    super.addUI(...args)
  }

  initUIRoot(...args) {
    EventGameMgr.event.emit('initUIRoot', ...args)
    super.initUIRoot(...args)
  }

  showEntrance(...args) {
    EventGameMgr.event.emit('showEntrance', ...args)
    super.showEntrance(...args)
  }

  fetch_login_info(...args) {
    EventGameMgr.event.emit('fetch_login_info', ...args)
    super.fetch_login_info(...args)
  }

  gameInit(...args) {
    EventGameMgr.event.emit('gameInit', ...args)
    super.gameInit(...args)
  }

  afterLogin(...args) {
    EventGameMgr.event.emit('afterLogin', ...args)
    super.afterLogin(...args)
  }

  updateAccountInfo(...args) {
    EventGameMgr.event.emit('updateAccountInfo', ...args)
    super.updateAccountInfo(...args)
  }

  updateRoom(...args) {
    EventGameMgr.event.emit('updateRoom', ...args)
    super.updateRoom(...args)
  }

  EnterMJ(...args) {
    EventGameMgr.event.emit('EnterMJ', ...args)
    super.EnterMJ(...args)
  }

  EnterLobby(...args) {
    EventGameMgr.event.emit('EnterLobby', ...args)
    super.EnterLobby(...args)
  }

  checkPaiPu(...args) {
    EventGameMgr.event.emit('checkPaiPu', ...args)
    super.checkPaiPu(...args)
  }

  BehavioralStatistics(...args) {
    EventGameMgr.event.emit('BehavioralStatistics', ...args)
    super.BehavioralStatistics(...args)
  }

  clientHeatBeat(...args) {
    EventGameMgr.event.emit('clientHeatBeat', ...args)
    super.clientHeatBeat(...args)
  }

  getHangUpTime(...args) {
    EventGameMgr.event.emit('getHangUpTime', ...args)
    super.getHangUpTime(...args)
  }

  onFatalError(...args) {
    EventGameMgr.event.emit('onFatalError', ...args)
    super.onFatalError(...args)
  }

  onXiangGongError(...args) {
    EventGameMgr.event.emit('onXiangGongError', ...args)
    super.onXiangGongError(...args)
  }

  postInfo2Server(...args) {
    EventGameMgr.event.emit('postInfo2Server', ...args)
    super.postInfo2Server(...args)
  }

  handleWindowError(...args) {
    EventGameMgr.event.emit('handleWindowError', ...args)
    super.handleWindowError(...args)
  }

  load_mjp_view(...args) {
    EventGameMgr.event.emit('load_mjp_view', ...args)
    super.load_mjp_view(...args)
  }
}

EventGameMgr.event = new context.EventEmitter()
context.GameMgr = EventGameMgr
Majsoul_Plus.Majsoul_Event_API = context
