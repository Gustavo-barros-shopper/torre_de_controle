import SecureLS from 'secure-ls'

const STORAGE_SECRET = process.env.REACT_APP_SSO_SECRET

const ls = new SecureLS({
    isCompression: true,
    encodingType: 'aes',
    encryptionSecret: btoa(`LS-${STORAGE_SECRET}`)
})

export const store = {
        get: (key) => {
            return ls.get(`${key}`);
        },
        set: (key, value) => {
            ls.set(`${key}`, value);
        },
        remove: (key) => {
            ls.remove(`${key}`);
        },
        clear: () => {
            ls.clear();
        }
    }