export interface ICreateAccountRequestPayload {
    accountName: string;
    email: string;
    firstName: string;
    lastName?: string;
    password: string;
}