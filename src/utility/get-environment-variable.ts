export function getEnvironmentVariable(name: string) {
    try {
        const envVar = import.meta.env[name];
        if (!envVar) {
            throw new Error('ENVIRONMENT VARIABLE MISSING')
        }
        return envVar;
    } catch (err: any) {
        console.error(err.message, name);
        throw err;
    }
}