/** Client class */
class Profile {
    private contacts: Map<string, string[]>

    constructor(
        private email: string,
        private name: string,
        ...contacts: string[]) {

        this.contacts = new Map<string, string[]>();

        for (const contact of contacts) {
            const parts = contact.split(':');
            let contactType = 'friend';
            let contactEmail: string;

            if (parts.length == 1) {
                contactEmail = parts[0];
            } else {
                contactType = parts[0];
                contactEmail = parts[1];
            }

            if (!this.contacts.has(contactType)) {
                this.contacts.set(contactType, []);
            }

            this.contacts.get(contactType)?.push(contactEmail);
        }
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }

    getContacts(contactType: string): string[] {
        return this.contacts.get(contactType) || [];
    }

}

export { Profile };