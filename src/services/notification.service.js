import { Notification } from "../models/notification.model.js";
import { getIO } from "../sockets/socket.js";

export const createNotification = async ({userId, message, type, repoId, targetType, targetId}) => {
    try {
        const notification = await Notification.create({
            userId,
            message,
            type,
            repoId,
            targetType,
            targetId,
        });

        // emmitting to the user's private socket room
        getIO().to(`user:${userId}`).emit("new_notification", notification);

        return notification;
    } catch (error) {
        console.error("Error creating notification:", error);
        throw new Error("Failed to create notification")
    }
}