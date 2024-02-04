export declare class Controler {
    private _controlTarget;
    private _arrUsers;
    /**
     * Structure: actionName --- Map<user, arguments>
     * @private
     * @ignore
     */
    private _mapAction_UserArgs;
    /**
     * Structure: propertyName --- Map<user, value>
     * @private
     * @ignore
     */
    private _mapProperty_UserValue;
    private _mapAction_Callbacks;
    constructor(controlTarget: any);
    setControlTarget(controlTarget: any): void;
    getControlTarget(): any;
    /**
     * Register a user.
     * @param user
     */
    register(user: any): void;
    /**
     * Logout a user.
     * @param user
     */
    logout(user: any): void;
    getRegisteredUsers(): Array<any>;
    ifUserExisted(user: any): boolean;
    /**
     * Set disered value of corresponding property.
     * Note: Will not render.If using the set value is decided by constrol target.
     * @param property
     * @param value
     * @param force When true, set the corresponding property of control target directly.
     */
    setDisiredValue(user: any, property: string, value: any, force?: boolean): void;
    /**
     * Clear recorded value of specific property from specific user.
     * @param user
     * @param property
     */
    clearUserDisiredValue(options?: {
        user?: any;
        property?: string;
    }): void;
    /**
     * Get current value of specific property of control target.
     * @param property
     * @returns
     */
    getValue(property: string): any;
    /**
     * Get disired value list of specific property.
     * @param property
     * @returns
     */
    getPropertyDisiredValue(property: string): Array<any>;
    /**
     * Set the action and arguments which the user want to excute.
     * @param user
     * @param actionName
     * @param args
     * @param force When true, call the corresponding method of control target directly. Note that when excute action forcibly, the corresponding callbacks will not fire.
     * @returns The result of action.
     */
    setDisiredAction(user: any, actionName: string, args?: Array<any>, force?: boolean): any;
    /**
     * Clear specific recorded disired action from specific user.
     * @param user
     * @param actionName
     */
    clearUserDisiredAction(options?: {
        user?: any;
        actionName?: string;
    }): void;
    /**
     * Add callback to specific action.
     * @param actionName
     * @param callback
     */
    addCallback(actionName: string, callback: () => void): void;
    removeCallback(actionName: string, callback: () => void): void;
    clearCallback(actionName?: string): void;
    private _fireCallback;
    /**
     * Check '_mapAction_UserArgs' and decide if excute the action.
     * Note: only render action, not property.
     * @param actionName
     * @returns
     */
    private _render;
    /**
     * Check '_mapAction_UserArgs' and decide if excute the action.
     * Note: only render action, not property.
     * @param actionName
     */
    render(actionName?: string): any;
}
