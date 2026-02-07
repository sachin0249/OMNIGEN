import { Modality } from "@google/genai";

export enum AppMode {
  DASHBOARD = 'dashboard', // Market + News + Charts
  OMNI_SENSE = 'omni_sense', // Live API (Voice)
  FOCUS_VISION = 'focus_vision', // Image Analysis (Gemini 3 Pro)
  MOOD_MAP = 'mood_map', // Maps Grounding
  RELAXATION = 'relaxation', // Audio Jokes (TTS)
  CHAT = 'chat', // General Chatbot (Multimodal + Tools)
}

export interface ChartData {
  type: 'area' | 'bar' | 'line' | 'pie';
  title: string;
  data: any[];
  dataKeys: string[]; // Keys to plot
  xAxisKey: string;
}

export interface Attachment {
  mimeType: string;
  data: string; // Base64
  name: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
  attachments?: Attachment[]; // User uploaded files
  chartData?: ChartData; // Model generated chart
  generatedImage?: string; // Model generated image
  sources?: GroundingChunk[]; // Web search results
}

export interface GroundingChunk {
  web?: { uri: string; title: string };
  maps?: { uri: string; title: string; placeAnswerSources?: any[] };
}

export interface ProductivityData {
  time: string;
  load: number;
  focus: number;
}