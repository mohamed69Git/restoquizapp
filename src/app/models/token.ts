export interface Token {
    accessToken: string;
    token: Extract;
}
export interface Extract {
    user_id: number;
    name: null;
    scopes: any[];
    revoked: boolean;
    created_at: Date;
    updated_at: Date;
    expired_at: Date;
}
