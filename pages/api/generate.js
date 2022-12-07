import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Generate 1 good headline for my Content.
  
  Topic: Copywriting
  Headline: How to write a compelling copy in 5 minutes? 
  Topic: Copywriting
  Headline: How to earn 5-figures with one article?
  Topic: Copywriting
  Headline: How to keep them reading?
  Topic: Copywriting
  Headline: What makes you different from the rest of the copywriters?
  Topic: ${capitalizedAnimal}
  Headline:`;
}
