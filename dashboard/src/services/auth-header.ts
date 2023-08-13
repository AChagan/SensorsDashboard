export default function authHeader() {
    const user = localStorage.getItem('user');
    let parsedUser;
    if (!user) {
        return;
    }

    parsedUser = JSON.parse(user);

    if (parsedUser && parsedUser.accessToken) {
        return { 'x-access-token': parsedUser.accessToken };
    } else {
        return {};
    }
}
