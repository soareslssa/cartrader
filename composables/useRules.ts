export const useRules = () => {
    const required = (str: string) => {
        return !!str || 'Field is required'
    }

    const email = (str: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(str) || 'Invalid e-mail.'
    }

    return {
        required, email
    }
}