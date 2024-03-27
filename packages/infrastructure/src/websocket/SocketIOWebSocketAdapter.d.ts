import { Socket, Namespace } from 'socket.io';
import { IWebSocketAdapter } from '../../../contracts';
export declare class SocketIOWebSocketAdapter implements IWebSocketAdapter {
    private readonly socket;
    private readonly ioServerNamespace;
    constructor(socket: Socket, ioServerNamespace: Namespace);
    joinRoom(roomName: string): void;
    leaveRoom(roomName: string): void;
    emitToRoom(roomName: string, eventName: string, eventData: any): void;
    emit(eventName: string, eventData: any): void;
    on(eventName: string, callback: (...args: any[]) => void): void;
    disconnect(): void;
}
