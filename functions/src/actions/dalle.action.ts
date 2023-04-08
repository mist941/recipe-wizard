import axios from 'axios';

export async function generateImage(
    apiKey: string,
    prompt: string,
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
            return imageData.data[0].url;
        } else {
            console.error('Failed to generate image:', response.status, response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error while generating image:', error);
        return null;
    }
}
