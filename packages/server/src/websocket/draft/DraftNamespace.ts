import { Server, Socket } from 'socket.io';
import { SocketIOWebSocketAdapter } from '../../../../infrastructure';
import { httpServer } from '../../app';
import { DraftOrderSubject } from './DraftOrderSubject';
import { DraftOrderObserverTimer } from './draft-order-observers/DraftOrderObserverTimer';
import { DraftSocketEventListeners } from './DraftSocketEventListeners';

const socketIOserver = new Server(httpServer);

// Scopes events and rooms to the drafts namespace
const draftNamespace = socketIOserver.of('/drafts');

draftNamespace.on('connection', (socket: Socket) => {
    const socketAdapter = new SocketIOWebSocketAdapter(socket, draftNamespace);
    const draftOrderSubject = new DraftOrderSubject();
    const draftOrderObserverTimer = new DraftOrderObserverTimer(socketAdapter, draftOrderSubject);
    draftOrderSubject.addObserver(draftOrderObserverTimer);
    const draftSocketEventListeners = new DraftSocketEventListeners(socketAdapter, draftOrderSubject);
    draftSocketEventListeners.setupEventListeners();
});
