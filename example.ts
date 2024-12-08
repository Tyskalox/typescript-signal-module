import signalmodule from "./index.ts"

let TestSignal = new signalmodule ()

TestSignal.connect(function (targettext: string) {
  console.log(targettext + ', World!')
})

TestSignal.fire('Hello')
