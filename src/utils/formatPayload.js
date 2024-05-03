export const formatPayload = (values) => {

    // Create payload following backend Product model (size adaptation)
    let error = null
    let payload = ''

    const sizes = values.size
    const cleanSizes = []
    for (let i in sizes) {
        if (sizes[i] !== '' && sizes[i] !== 0) cleanSizes.push([i, sizes[i]])
    }

    if (cleanSizes.length === 0) {
        error = 'Cannot send form without sizes'
    } else {
        values.size = Object.fromEntries(cleanSizes)
        payload = values
    }

    return { payload, error }
}