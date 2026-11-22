// Voice catalogs for online read-aloud services: id, display name, and gender labels for the picker.
// System voices are listed from the OS; gender there is inferred from common name patterns.

export type VoiceGender = "female" | "male" | "neutral";

export interface VoiceChoice {
  id: string;
  name: string;
  gender: VoiceGender;
}

/** i18n keys for the gender tags in a voice list. */
export const GENDER_KEYS: Record<VoiceGender, string> = {
  female: "tts.genderFemale",
  male: "tts.genderMale",
  neutral: "tts.genderNeutral",
};

/** OpenAI-compatible: default endpoint and the stock voice set. */
export const OPENAI_VOICES: VoiceChoice[] = [
  { id: "alloy", name: "Alloy", gender: "neutral" },
  { id: "ash", name: "Ash", gender: "male" },
  { id: "ballad", name: "Ballad", gender: "neutral" },
  { id: "coral", name: "Coral", gender: "female" },
  { id: "echo", name: "Echo", gender: "male" },
  { id: "fable", name: "Fable", gender: "neutral" },
  { id: "nova", name: "Nova", gender: "female" },
  { id: "onyx", name: "Onyx", gender: "male" },
  { id: "sage", name: "Sage", gender: "neutral" },
  { id: "shimmer", name: "Shimmer", gender: "female" },
];

/** SiliconFlow CosyVoice sample voices. */
export const SILICONFLOW_VOICES: VoiceChoice[] = [
  { id: "FunAudioLLM/CosyVoice2-0.5B:alex", name: "Alex（男）", gender: "male" },
  { id: "FunAudioLLM/CosyVoice2-0.5B:anna", name: "Anna（女）", gender: "female" },
  { id: "FunAudioLLM/CosyVoice2-0.5B:bella", name: "Bella（女）", gender: "female" },
  { id: "FunAudioLLM/CosyVoice2-0.5B:benjamin", name: "Benjamin（男）", gender: "male" },
  { id: "FunAudioLLM/CosyVoice2-0.5B:david", name: "David（男）", gender: "male" },
  { id: "FunAudioLLM/CosyVoice2-0.5B:emma", name: "Emma（女）", gender: "female" },
];

/** Kokoro local voices (female zf_*, male zm_*). */
export const KOKORO_VOICES: VoiceChoice[] = [
  { id: "zf_xiaobei", name: "晓北（女）", gender: "female" },
  { id: "zf_xiaoni", name: "晓妮（女）", gender: "female" },
  { id: "zf_xiaoxiao", name: "晓晓（女）", gender: "female" },
  { id: "zf_xiaoyi", name: "晓伊（女）", gender: "female" },
  { id: "zm_yunjian", name: "云健（男）", gender: "male" },
  { id: "zm_yunxi", name: "云希（男）", gender: "male" },
  { id: "zm_yunxia", name: "云夏（男）", gender: "male" },
  { id: "zm_yunyang", name: "云扬（男）", gender: "male" },
];

/** MiMo Token Plan TTS voices (OpenAI-compatible). */
export const MIMO_VOICES: VoiceChoice[] = [
  { id: "female-1", name: "女声 1", gender: "female" },
  { id: "female-2", name: "女声 2", gender: "female" },
  { id: "male-1", name: "男声 1", gender: "male" },
  { id: "male-2", name: "男声 2", gender: "male" },
];

/** Azure neural voices useful for Chinese reading. */
export const AZURE_VOICES: VoiceChoice[] = [
  { id: "zh-CN-XiaoxiaoNeural", name: "晓晓（女）", gender: "female" },
  { id: "zh-CN-XiaoyiNeural", name: "晓伊（女）", gender: "female" },
  { id: "zh-CN-YunxiNeural", name: "云希（男）", gender: "male" },
  { id: "zh-CN-YunyangNeural", name: "云扬（男）", gender: "male" },
  { id: "zh-CN-YunyeNeural", name: "云野（男）", gender: "male" },
  { id: "zh-CN-liaoning-XiaobeiNeural", name: "晓北·东北（女）", gender: "female" },
  { id: "zh-CN-shaanxi-XiaoniNeural", name: "晓妮·陕西（女）", gender: "female" },
  { id: "zh-TW-HsiaoChenNeural", name: "曉臻（女）", gender: "female" },
  { id: "zh-TW-YunJheNeural", name: "雲哲（男）", gender: "male" },
  { id: "en-US-AriaNeural", name: "Aria（女）", gender: "female" },
  { id: "en-US-GuyNeural", name: "Guy（男）", gender: "male" },
  { id: "en-US-JennyNeural", name: "Jenny（女）", gender: "female" },
];

/** Volcengine / Doubao voice types. */
export const VOLC_VOICES: VoiceChoice[] = [
  { id: "BV001_streaming", name: "灿灿（女）", gender: "female" },
  { id: "BV002_streaming", name: "灿哥（男）", gender: "male" },
  { id: "BV003_streaming", name: "悠悠（女）", gender: "female" },
  { id: "BV102_streaming", name: "甜甜（女）", gender: "female" },
  { id: "BV103_streaming", name: "catherine（女）", gender: "female" },
  { id: "BV104_streaming", name: "cyrus（男）", gender: "male" },
  { id: "BV105_streaming", name: "lily（女）", gender: "female" },
  { id: "BV106_streaming", name: "wayne（男）", gender: "male" },
];

/** ElevenLabs public multilingual sample voices. */
export const ELEVENLABS_VOICES: VoiceChoice[] = [
  { id: "JBFqnCBsd6RMkjVDRZzb", name: "Rachel（女）", gender: "female" },
  { id: "EXAVITQu4vr4xnSDxMaL", name: "Sarah（女）", gender: "female" },
  { id: "ErXwobaYiN019PkySvjV", name: "Antoni（男）", gender: "male" },
  { id: "TxGEqnHWrfWFTfGW9XjX", name: "Josh（男）", gender: "male" },
  { id: "VR6AewLTigWG4xSOukaG", name: "Arnold（男）", gender: "male" },
  { id: "MF3GhFWF8h5YXNQEGrWm", name: "Dorothy（女）", gender: "female" },
];

/** Catalog for the OpenAI-compatible endpoint currently configured. */
export function openaiCompatibleVoices(baseUrl: string): VoiceChoice[] {
  const base = baseUrl.trim().replace(/\/+$/, "").toLowerCase();
  if (base.includes("mimo")) return MIMO_VOICES;
  if (base.includes("siliconflow")) return SILICONFLOW_VOICES;
  if (base.includes("localhost") || base.includes("127.0.0.1")) return KOKORO_VOICES;
  if (base.includes("api.openai.com")) return OPENAI_VOICES;
  // Unknown host: offer the common OpenAI set plus MiMo so either works as a starting point.
  return [...OPENAI_VOICES, ...MIMO_VOICES];
}

/** Catalog for an online provider; empty when the service has no fixed list. */
export function onlineVoices(provider: string, baseUrl: string): VoiceChoice[] {
  switch (provider) {
    case "openai":
      return openaiCompatibleVoices(baseUrl);
    case "azure":
      return AZURE_VOICES;
    case "volcengine":
      return VOLC_VOICES;
    case "elevenlabs":
      return ELEVENLABS_VOICES;
    default:
      return [];
  }
}

/** Rough gender of a system voice from its display name (best effort). */
export function inferGender(name: string): VoiceGender {
  const n = name.toLowerCase();
  const female = [
    "female",
    "woman",
    "girl",
    "xiaoxiao",
    "xiaoyi",
    "xiaobei",
    "xiaoni",
    "huihui",
    "yaoyao",
    "tingting",
    "hsiaochen",
    "hsiaoyu",
    "hsiaoju",
    "aria",
    "jenny",
    "susan",
    "samantha",
    "karen",
    "moira",
    "fiona",
    "tessa",
    "victoria",
    "serena",
    "allison",
    "ava",
    "joanna",
    "kimberly",
    "salli",
    "kendra",
    "ivy",
    "amy",
    "emily",
    "nicky",
    "shimmer",
    "nova",
    "coral",
    "sonia",
    "natasha",
    "milena",
    "lola",
    "elvira",
    "paulina",
    "camila",
    "marisol",
    "sofia",
    "elena",
    "anna",
    "emma",
    "bella",
    "rachel",
    "sarah",
    "dorothy",
    "female",
    "女",
  ];
  const male = [
    "male",
    "man",
    "boy",
    "yunxi",
    "yunyang",
    "yunye",
    "yunjian",
    "yunxia",
    "kangkang",
    "yunfeng",
    "david",
    "guy",
    "alex",
    "fred",
    "jorge",
    "diego",
    "enrique",
    "gerardo",
    "liam",
    "oliver",
    "william",
    "benjamin",
    "ethan",
    "james",
    "robert",
    "daniel",
    "anthony",
    "echo",
    "onyx",
    "ash",
    "adam",
    "michael",
    "thomas",
    "paul",
    "kevin",
    "brian",
    "arnold",
    "antoni",
    "josh",
    "wayne",
    "cyrus",
    "brandon",
    "christopher",
    "eric",
    "guy",
    "male",
    "男",
  ];
  if (female.some((k) => n.includes(k))) return "female";
  if (male.some((k) => n.includes(k))) return "male";
  return "neutral";
}

/** `Name · 女 · zh-CN` style label for a system voice. */
export function systemVoiceLabel(v: SpeechSynthesisVoice, genderKey: (g: VoiceGender) => string): string {
  const g = inferGender(v.name);
  const tag = g === "neutral" ? "" : ` · ${genderKey(g)}`;
  return `${v.name}${tag} (${v.lang})`;
}
