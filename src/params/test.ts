/** @type {import('@sveltejs/kit').ParamMatcher} */

export function match(param: string) {
    const leo = [
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
    ]
    return /oi/.test(param)
}
