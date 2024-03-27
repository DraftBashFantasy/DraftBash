"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIOWebSocketAdapter = void 0;
class SocketIOWebSocketAdapter {
    socket;
    ioServerNamespace;
    constructor(socket, ioServerNamespace) {
        this.socket = socket;
        this.ioServerNamespace = ioServerNamespace;
    }
    joinRoom(roomName) {
        // Join a room within the current namespace
        this.socket.join(roomName);
    }
    leaveRoom(roomName) {
        // Leave a room within the current namespace
        this.socket.leave(roomName);
    }
    emitToRoom(roomName, eventName, eventData) {
        this.ioServerNamespace.to(roomName).emit(eventName, eventData);
    }
    emit(eventName, eventData) {
        // Trigger an event for the current socket/connection
        this.socket.emit(eventName, eventData);
    }
    on(eventName, callback) {
        // Listen for an event on the current socket/connection
        this.socket.on(eventName, callback);
    }
    disconnect() {
        // Disconnect from the current namespace
        this.socket.disconnect();
    }
}
exports.SocketIOWebSocketAdapter = SocketIOWebSocketAdapter;
