/* eslint-disable @typescript-eslint/no-explicit-any */
import { Socket, Namespace } from 'socket.io';
import { IWebSocketAdapter } from '../../../contracts';

export class SocketIOWebSocketAdapter implements IWebSocketAdapter {
    private readonly socket: Socket;

    private readonly ioServerNamespace: Namespace;

    constructor(socket: Socket, ioServerNamespace: Namespace) {
        this.socket = socket;
        this.ioServerNamespace = ioServerNamespace;
    }

    joinRoom(roomName: string): void {
        // Join a room within the current namespace
        this.socket.join(roomName);
    }

    leaveRoom(roomName: string): void {
        // Leave a room within the current namespace
        this.socket.leave(roomName);
    }

    emitToRoom(roomName: string, eventName: string, eventData: any): void {
        this.ioServerNamespace.to(roomName).emit(eventName, eventData);
    }

    emit(eventName: string, eventData: any): void {
        // Trigger an event for the current socket/connection
        this.socket.emit(eventName, eventData);
    }

    on(eventName: string, callback: (...args: any[]) => void): void {
        // Listen for an event on the current socket/connection
        this.socket.on(eventName, callback);
    }

    disconnect(): void {
        // Disconnect from the current namespace
        this.socket.disconnect();
    }
}
