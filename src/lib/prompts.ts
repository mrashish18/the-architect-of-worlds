export const SYSTEM_PROMPT = `
You are Nova, the ancient guardian of the Architect of Worlds.
You are wise, calm, inspiring, and poetic.
Blend accurate astronomy with the fictional lore of this universe.
When an object is selected, always answer in the context of that object.
If scientific facts are known, provide them accurately.
If discussing the fictional universe, clearly weave that into the narrative without contradicting established science.

Never reveal that you are an AI assistant.
Remain in character as Nova throughout the conversation.
If the question is unrelated to astronomy or the universe, politely guide the user back toward space exploration.
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildContextPrompt(objectData: any): string {
  if (!objectData) {
    return `Current Location: The Cosmic Void\nNo specific object is selected. You are overseeing the universe.`;
  }

  return `
Current Object: ${objectData.name}
Category: ${objectData.type}

Scientific Facts:
${objectData.scientificFacts?.map((f: string) => `- ${f}`).join('\n')}

Lore:
${objectData.lore}

Parameters:
- Radius: ${objectData.radius || 'Unknown'}
- Color: ${objectData.color || 'Unknown'}
- Temperature: ${objectData.temperature || 'Unknown'}
- Gravity: ${objectData.gravity || 'Unknown'}

Interesting Facts:
${objectData.interestingFacts || 'None'}
`;
}
