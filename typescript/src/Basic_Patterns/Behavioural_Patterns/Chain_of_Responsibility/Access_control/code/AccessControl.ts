abstract class AccessControl {
    protected nextAccessControl!: AccessControl;

    public setNext(accessControl: AccessControl): AccessControl {
        this.nextAccessControl = accessControl;
        return accessControl;
    }

    public checkAccess(request: string): boolean {
        if (this.nextAccessControl) {
            return this.nextAccessControl.checkAccess(request);
        }

        return false;
    }
}

export { AccessControl };