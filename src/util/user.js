
export function getUser() {
    const userData = sessionStorage.getItem('userData');
    if (!userData) throw new Error('No user data');
    return JSON.parse(userData);
}

export function getUserRoleList() {
    const user = getUser();
    const roles = [];
    for (let role in user.roles) {
        if (user.roles[role]) {
            roles.push(role);
        }
    }
    return roles;
}

export async function checkPermission(roles) {
    const userRoles = getUserRoleList();
    for (const role in roles) {
        if (userRoles.findIndex(r => r.startsWith(role)) === -1) {
            return false;
        }
    }
    return true
}