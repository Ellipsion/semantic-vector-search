
// JINA AI
const createEmbeddings = async (input: string) => {
    const data = {
        input,
        model: "jina-embeddings-v2-base-en"
    }
    try {
    const res = await fetch("https://api.jina.ai/v1/embeddings", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.JINA_AI_API_KEY!}`,
        },
        body: JSON.stringify(data)
    });
    const response = await res.json();
    return response;
    } catch (error) {
    console.log(error);
    }
}

export const vectorize = async (input: string): Promise<number[]> => {
    const embeddingResponse = await createEmbeddings(input);

    console.log(embeddingResponse)
    
    const vector = embeddingResponse.data[0].embedding

    return vector;
}