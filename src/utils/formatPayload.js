export const formatPayload = (data) => {
    let error = null
    let payload = ''

    // Create payload following backend Product model (size adaptation)
    const sizes = data.size
    const trimmedSizes = []
    for (let i in sizes) {
        if (sizes[i] !== '' && sizes[i] !== 0) trimmedSizes.push([i, sizes[i]])
    }

    if (trimmedSizes.length === 0) { error = 'Cannot send form without sizes' }

    data.size = Object.fromEntries(trimmedSizes)
    payload = data

    return { payload, error }
}