"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const infrastructure_1 = require("../../../../infrastructure");
const app_1 = require("../../app");
const DraftOrderSubject_1 = require("./DraftOrderSubject");
const DraftOrderObserverTimer_1 = require("./draft-order-observers/DraftOrderObserverTimer");
const DraftSocketEventListeners_1 = require("./DraftSocketEventListeners");
const socketIOserver = new socket_io_1.Server(app_1.httpServer);
// Scopes events and rooms to the drafts namespace
const draftNamespace = socketIOserver.of('/drafts');
draftNamespace.on('connection', (socket) => {
    const socketAdapter = new infrastructure_1.SocketIOWebSocketAdapter(socket, draftNamespace);
    const draftOrderSubject = new DraftOrderSubject_1.DraftOrderSubject();
    const draftOrderObserverTimer = new DraftOrderObserverTimer_1.DraftOrderObserverTimer(socketAdapter, draftOrderSubject);
    draftOrderSubject.addObserver(draftOrderObserverTimer);
    const draftSocketEventListeners = new DraftSocketEventListeners_1.DraftSocketEventListeners(socketAdapter, draftOrderSubject);
    draftSocketEventListeners.setupEventListeners();
});
