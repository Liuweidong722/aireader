// Controls shown while the book is read aloud: rate and the voice (system list, or the online
// service's catalog so male/female voices can be switched without opening Settings).

import type { UpdateSettings } from "../App";
import { t } from "../i18n";
import { Icon } from "../icons";
import type { Settings } from "../settings";
import type { SpeechState } from "./useSpeech";
import { Select } from "../Select";
import { GENDER_KEYS, onlineVoices, systemVoiceLabel, type VoiceGender } from "./voices";

const RATES = [0.75, 1, 1.25, 1.5, 2];

const genderLabel = (g: VoiceGender) => t(GENDER_KEYS[g] as "tts.genderFemale");

export default function ReadAloudBar(props: {
  state: SpeechState;
  voices: SpeechSynthesisVoice[];
  settings: Settings;
  update: UpdateSettings;
  onPlayPause: () => void;
  onStep: (delta: 1 | -1) => void;
  onStop: () => void;
}) {
  const { settings, update } = props;
  const playing = props.state === "playing";
  const system = settings.tts.provider === "system";
  const systemList = [...props.voices].sort((a, b) => a.lang.localeCompare(b.lang) || a.name.localeCompare(b.name));
  const onlineList = onlineVoices(settings.tts.provider, settings.tts.baseUrl);
  const onlineHasCurrent = onlineList.some((v) => v.id === settings.tts.voice);

  const voiceOptions = system
    ? [{ value: "", label: t("reader.voiceAuto") }, ...systemList.map((v) => ({ value: v.voiceURI, label: systemVoiceLabel(v, genderLabel) }))]
    : [
        ...onlineList.map((v) => ({ value: v.id, label: `${v.name}${v.gender === "neutral" ? "" : ` · ${genderLabel(v.gender)}`}` })),
        // Keep a custom id visible even when it is not in the catalog.
        ...(settings.tts.voice && !onlineHasCurrent ? [{ value: settings.tts.voice, label: settings.tts.voice }] : []),
        ...(onlineList.length ? [{ value: "__custom__", label: t("tts.voiceCustom") }] : []),
      ];

  const currentVoice = system ? (settings.ttsVoice ?? "") : settings.tts.voice;

  return (
    <div className="read-aloud" role="toolbar" aria-label={t("reader.readAloud")}>
      <button className="icon-button" title={t("reader.prevSentence")} aria-label={t("reader.prevSentence")} onClick={() => props.onStep(-1)}>
        <Icon name="skipBack" size={16} />
      </button>
      <button
        className="icon-button"
        title={`${playing ? t("reader.pause") : t("reader.play")} (R)`}
        aria-label={playing ? t("reader.pause") : t("reader.play")}
        onClick={props.onPlayPause}
      >
        <Icon name={playing ? "pause" : "play"} size={16} filled />
      </button>
      <button className="icon-button" title={t("reader.nextSentence")} aria-label={t("reader.nextSentence")} onClick={() => props.onStep(1)}>
        <Icon name="skipForward" size={16} />
      </button>
      <Select
        ghost
        value={String(settings.ttsRate)}
        label={t("reader.speechRate")}
        options={RATES.map((r) => ({ value: String(r), label: `${r}×` }))}
        onChange={(rate) => update({ ttsRate: Number(rate) })}
      />
      {system || onlineList.length > 0 ? (
        <Select
          ghost
          className="read-aloud-voice"
          value={currentVoice}
          label={t("reader.speechVoice")}
          options={voiceOptions}
          onChange={(voice) => {
            if (voice === "__custom__") {
              if (system) update({ ttsVoice: null });
              else update({ tts: { ...settings.tts, voice: "" } });
              return;
            }
            if (system) update({ ttsVoice: voice || null });
            else update({ tts: { ...settings.tts, voice } });
          }}
        />
      ) : (
        // No catalog for this service: show the id and point at Settings.
        <span className="read-aloud-voice muted small ellipsis" title={settings.tts.voice}>
          {settings.tts.voice || t("tts.voiceCustom")}
        </span>
      )}
      <button className="icon-button" title={t("common.close")} aria-label={t("common.close")} onClick={props.onStop}>
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}
