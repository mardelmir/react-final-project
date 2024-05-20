import { storage } from '../config/firebase.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const formatPayload = async (data, file) => {
    const error = []
    let payload = data

    // Manage product image: 
    // If it's a file, upload image to firestore and get image url
    if (data.img.length === 0 && !data.imgUrl) {
        { error.push('Cannot send form without an image') }
    } else if (!data.imgUrl) {
        delete payload.imgUrl
        const fileRef = ref(storage, data.img[0].name)
        await uploadBytes(fileRef, file)
        const fileUrl = await getDownloadURL(fileRef)
        payload.img = fileUrl
    } else {
        // If image is an external url, update payload so it fits backend Product model
        payload.img = payload.imgUrl
        delete payload.imgUrl
    }

    // Size adaptation to fit backend Product model
    const sizes = data.size
    const trimmedSizes = []
    for (let i in sizes) {
        if (sizes[i] !== '' && sizes[i] !== 0) trimmedSizes.push([i, sizes[i]])
    }

    if (trimmedSizes.length === 0) { error.push('Cannot send form without sizes') }
    payload.size = Object.fromEntries(trimmedSizes)

    return { payload, error }
}