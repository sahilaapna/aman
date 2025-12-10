export interface StressAnalysisResult {
  score: number;
  mood: string;
  advice: string;
}

export interface VideoAnalysisResult {
  summary: string;
  emotionalArc: string;
  keyTopics: string[];
}

export interface AudioVisualizerState {
  volume: number;
  isTalking: boolean;
}