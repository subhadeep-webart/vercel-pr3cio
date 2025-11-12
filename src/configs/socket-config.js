import { SOCKET_URL } from "@/utils/constant";
import { io } from "socket.io-client";

let socket = null;


export const getSocket = () => {
    if (!socket) {
        socket = io(SOCKET_URL, {
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: 10,
            timeout: 45000,
            pingTimeout: 60000,
            pingInterval: 25000,
            transports: ["websocket", "polling"],
        });
    }

    return socket;
};