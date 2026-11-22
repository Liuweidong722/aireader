import { describe, expect, it } from "vitest";
import zhCN from "../i18n/zh-CN";
import { GENDER_KEYS, inferGender, onlineVoices, openaiCompatibleVoices, systemVoiceLabel, AZURE_VOICES, MIMO_VOICES } from "./voices";

describe("voice catalogs", () => {
  it("labels male and female voices for each online service", () => {
    for (const provider of ["openai", "azure", "volcengine", "elevenlabs"]) {
      const list = onlineVoices(provider, "");
      expect(list.length, provider).toBeGreaterThan(0);
      expect(
        list.some((v) => v.gender === "female"),
        provider,
      ).toBe(true);
      expect(
        list.some((v) => v.gender === "male"),
        provider,
      ).toBe(true);
    }
  });

  it("picks MiMo voices for the MiMo endpoint", () => {
    const list = openaiCompatibleVoices("https://token-plan-cn.xiaomimimo.com/v1");
    expect(list).toEqual(MIMO_VOICES);
    expect(list.filter((v) => v.gender === "female").length).toBeGreaterThanOrEqual(1);
    expect(list.filter((v) => v.gender === "male").length).toBeGreaterThanOrEqual(1);
  });

  it("keeps custom voice ids when the host is unknown", () => {
    const list = openaiCompatibleVoices("https://example.com/v1");
    expect(list.some((v) => v.id === "alloy")).toBe(true);
    expect(list.some((v) => v.id === "female-1")).toBe(true);
  });

  it("infers gender from common system voice names", () => {
    expect(inferGender("Microsoft Xiaoxiao (Chinese)")).toBe("female");
    expect(inferGender("Microsoft Yunxi (Chinese)")).toBe("male");
    expect(inferGender("Google US English")).toBe("neutral");
  });

  it("tags system voices with a gender when known", () => {
    const label = systemVoiceLabel({ name: "Microsoft Huihui", lang: "zh-CN", voiceURI: "x" } as SpeechSynthesisVoice, (g) =>
      g === "female" ? "女" : g === "male" ? "男" : "中性",
    );
    expect(label).toContain("女");
    expect(label).toContain("zh-CN");
  });

  it("has gender i18n keys in the source dictionary", () => {
    for (const key of Object.values(GENDER_KEYS)) {
      expect(zhCN).toHaveProperty(key);
    }
    expect(zhCN["tts.presetMimo"]).toBe("MiMo");
    expect(zhCN["tts.voiceCustom"]).toBeTruthy();
    expect(zhCN["tts.voiceCatalogHint"]).toContain("{n}");
  });

  it("lists Azure male and female Chinese voices", () => {
    expect(AZURE_VOICES.filter((v) => v.gender === "female").length).toBeGreaterThan(0);
    expect(AZURE_VOICES.filter((v) => v.gender === "male").length).toBeGreaterThan(0);
  });
});
