export const formatPayload = (values) => {

    // Create payload following backend Product model (size adaptation)
    let error = null
    let payload = ''

    const sizes = values.size
    const trimmedSizes = []
    for (let i in sizes) {
        if (sizes[i] !== '' && sizes[i] !== 0) trimmedSizes.push([i, sizes[i]])
    }

    if (trimmedSizes.length === 0) { error = 'Cannot send form without sizes' }

    values.size = Object.fromEntries(trimmedSizes)
    payload = values

    return { payload, error }
}