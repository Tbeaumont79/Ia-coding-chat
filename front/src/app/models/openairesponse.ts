export interface Openairesponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}
export interface Choice {
  finishReason: string;
  index: number;
  message: {
    content: string;
    functionCall: any | null;
    role: string;
    toolCalls: any[];
  };
}
