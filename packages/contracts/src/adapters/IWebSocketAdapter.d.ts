export interface IWebSocketAdapter {
    joinRoom(roomName: string): void;
    leaveRoom(roomName: string): void;
    emitToRoom(roomName: string, eventName: string, eventData: any): void;
    emit(eventName: string, eventData: any): void;
    disconnect(): void;
    on(eventName: string, callback: (...args: any[]) => void): void;
}
