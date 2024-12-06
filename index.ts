

class SignalConnection {
  // ! INTERNAL !

  CallFunction: (...args: any[]) => (void)
  Connected: boolean
  Fire: (...args: any[]) => (void)
  constructor(callFunction: (...args: any[]) => (void)) {
    this.CallFunction = callFunction
    this.Connected = true
    this.Fire = function(...args: any[]) {
      if (this.Connected) {
        this.CallFunction(...args)
      }
    }
  }
}

class Signal {
  //builds a signal
  Callbacks: SignalConnection[]
  constructor() {
    this.Callbacks = []
  }
  //connects a callback
  connect(f: (...args: any[]) => (void)) {
    let callback = new SignalConnection (f)
    this.Callbacks.push(callback)
    return callback
  }

  fire(...args: any[]) {
    
    this.Callbacks.forEach(function (value: SignalConnection) {
      value.Fire(...args) 
    })
  }

  disconnectall() {
    this.Callbacks.forEach(function (value: SignalConnection) {
      value.Connected = false
    })
  }
}

export default Signal
