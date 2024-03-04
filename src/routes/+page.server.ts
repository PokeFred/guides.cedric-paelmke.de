export const load = async ({ cookies }) => {
    console.log(cookies.getAll())
    cookies.set('test', 'test', {
        path: '/',
        expires: new Date(Date.now() + (1000 * 60)),
        secure: false
    })
    console.log(cookies.getAll())

    return { }
}
