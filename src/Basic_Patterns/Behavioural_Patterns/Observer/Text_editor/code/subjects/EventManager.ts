import {EventListener} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Text_editor/code/observers/EventListener";

/** Subject */
class EventManager {
    private listeners: { [evenType: string]: EventListener[] } = {};

    public subscribe(eventType: string, listener: EventListener): void {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    }

    public unsubscribe(eventType: string, listener: EventListener): void {
        if (!this.listeners[eventType]) {
            return;
        }
        const index = this.listeners[eventType].indexOf(listener);
        if (index > -1) {
            this.listeners[eventType].splice(index, 1);
        }
    }

    public notify(eventType: string, data: any): void {
        const listeners = this.listeners[eventType];
        if (listeners && listeners.length) {
            listeners.forEach(listener => listener.update(data));
        }
    }
}

export {EventManager};