export default async function (functionName: string, currentUser: any, options: object) {
    const routePrefix = ''

    let headers = {
        Authorization: `Bearer ${currentUser().token['access_token']}`,
    }

    if (options.hasOwnProperty('headers')){
        // @ts-ignore
        headers = {...headers, ...options.headers}
    }

    let completeOptions = {
        ...options,
        headers,
    }

    const body = await fetch(`.netlify/functions/${functionName}`, completeOptions)
    return await body.json();
}