/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IWebSocketAdapter {
    // Join a room within the current namespace
    joinRoom(roomName: string): void;

    // Leave a room within the current namespace
    leaveRoom(roomName: string): void;

    // Emit an event to a specific room within the current namespace
    emitToRoom(roomName: string, eventName: string, eventData: any): void;

    // Trigger an event for the current socket/connection
    emit(eventName: string, eventData: any): void;

    // Disconnect from the current namespace
    disconnect(): void;

    // Listen for an event on the current socket/connection
    on(eventName: string, callback: (...args: any[]) => void): void;
}
