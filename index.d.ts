declare class SignalConnection {
    CallFunction: (...args: any[]) => (void);
    Connected: boolean;
    Fire: (...args: any[]) => (void);
    constructor(callFunction: (...args: any[]) => (void));
}
declare class Signal {
    Callbacks: SignalConnection[];
    constructor();
    connect(f: (...args: any[]) => (void)): SignalConnection;
    fire(...args: any[]): void;
    disconnectall(): void;
}
export default Signal;
