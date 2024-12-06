# Signal Module Documentation

This TypeScript module provides a simple signal implementation. It includes two main classes: `Signal` and `SignalConnection`.

---

## Classes

### `SignalConnection`

Represents a single connection between a signal and a callback. This class is internal and should typically be managed through the `Signal` class.

#### Properties

- **`CallFunction`**:  
  The callback function to be executed when the signal fires.  
  **Type**: `(args: any[]) => void`

- **`Connected`**:  
  Indicates whether the connection is active. If `false`, the callback will not be triggered.  
  **Type**: `boolean`

- **`Fire`**:  
  A method to execute the callback with the provided arguments, if the connection is active.  
  **Type**: `(args: any[]) => void`

#### Constructor

`constructor(callFunction: (...args: any[]) => void)`

- **`callFunction`**:  
  A function to be invoked when the signal fires.

---

### `Signal`

A class to manage callbacks and trigger them with specific arguments. This is the main interface for the module.

#### Properties

- **`Callbacks`**:  
  An array of `SignalConnection` instances representing all connected callbacks.  
  **Type**: `SignalConnection[]`

#### Constructor

`constructor()`

Initializes an empty `Signal` object.

#### Methods

- **`connect`**  
  Adds a new callback to the signal.  
  **Signature**: `connect(f: (...args: any[]) => void): SignalConnection`

  - **`f`**:  
    A callback function to be connected to the signal.

  **Returns**:  
  A `SignalConnection` object representing the connection.

- **`fire`**  
  Triggers all connected callbacks with the provided arguments.  
  **Signature**: `fire(...args: any[]): void`

  - **`args`**:  
    The arguments to pass to the connected callbacks.

- **`disconnectall`**  
  Disconnects all callbacks by marking them as inactive.  
  **Signature**: `disconnectall(): void`

---

## Example Usage

