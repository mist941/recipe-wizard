import axios from 'axios';
import { Buffer } from "buffer";

export async function generateImage(
    apiKey: string,
    prompt: string,
    storage: any,
    userId: string,
    model: string = 'image-alpha-001',
    n: number = 1,
    size: string = '256x256',
): Promise<string | null> {
    const data = {
        prompt,
        model,
        num_images: n,
        size,
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/images/generations', data, { headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            } });

        if (response.status === 200) {
            const imageData = response.data;
            const imagePath = `images/${userId}/${Date.now()}.jpg`

            try {
                const imageBlob = await fetchImageAsBlob(imageData.data[0].url);
                await uploadImageToFirebase(storage, imagePath, imageBlob);
                return imagePath;
            } catch (error) {
                console.error("Error uploading image:", error);
                return null;
            }

        } else {
            console.error('Failed to generate image:', response.status, response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error while generating image:', error);
        return null;
    }
}

async function fetchImageAsBlob(imageUrl: string): Promise<Buffer> {
    const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
    });

    return Buffer.from(response.data);
}

async function uploadImageToFirebase(
    storage: any,
    imagePath: string,
    imageBlob: Buffer
): Promise<void> {
    const file = storage.bucket('recipe-wizard-b101d.appspot.com').file(imagePath);
    await file.save(imageBlob);
}


