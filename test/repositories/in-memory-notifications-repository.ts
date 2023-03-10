import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "src/application/repositories/notification-repositories";

export class inMemorynotificationsRepository 
    implements NotificationsRepository 
{
    public notifications: Notification[] = [];

    async create(notification: Notification){
    this.notifications.push(notification);
    }
};
