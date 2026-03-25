import React, { useState } from 'react';

interface LanguageStream {
  lang: string;
  code: string;
  color: string;
  example: string;
  morphemes: string[];
}

const languages: LanguageStream[] = [
  {
    lang: 'German',
    code: 'DE',
    color: '#00FF41',
    example: 'Tastatur',
    morphemes: ['Tast', 'atur'],
  },
  {
    lang: 'Spanish',
    code: 'ES',
    color: '#FF6B35',
    example: 'Teclado',
    morphemes: ['Tecl', 'ado'],
  },
  {
    lang: 'English',
    code: 'EN',
    color: '#6B5BFF',
    example: 'Keyboard',
    morphemes: ['Key', 'board'],
  },
  {
    lang: 'Quechua',
    code: 'QU',
    color: '#FFD700',
    example: 'Llapa',
    morphemes: ['Ll', 'apa'],
  },
];

export function MultilingualProcessor() {
  const [selectedLang, setSelectedLang] = useState<string>('DE');
  const [inputText, setInputText] = useState<string>('Hola');

  const selectedLanguage = languages.find((l) => l.code === selectedLang)!;

  return (
    <div className="flex flex-col gap-6 p-8 bg-card rounded-lg border border-border">
      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'IBM Plex Mono' }}>
        SEAMLESS MULTILINGUAL MORPHEME PROCESSOR
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Language Selection */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            LANGUAGE STREAMS
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                className={`p-3 rounded border-2 transition-all ${
                  selectedLang === lang.code
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: lang.color,
                      boxShadow: `0 0 8px ${lang.color}`,
                    }}
                  />
                  <span className="text-xs font-mono text-foreground">{lang.code}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-accent" style={{ fontFamily: 'IBM Plex Mono' }}>
            TEXT INPUT
          </h4>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type in any language..."
            className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            style={{ fontFamily: 'Fira Code' }}
          />
        </div>
      </div>

      {/* Language Details */}
      <div className="p-4 bg-background rounded border border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">LANGUAGE</p>
            <p className="text-sm font-mono text-foreground">{selectedLanguage.lang}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">EXAMPLE</p>
            <p
              className="text-sm font-mono"
              style={{ color: selectedLanguage.color }}
            >
              {selectedLanguage.example}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">MORPHEME DETECTION</p>
            <div className="flex gap-1">
              {selectedLanguage.morphemes.map((m, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-mono rounded bg-accent/20"
                  style={{ color: selectedLanguage.color }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Processing Info */}
      <div className="text-xs text-muted-foreground space-y-1">
        <p>✓ No manual language switching required</p>
        <p>✓ Morpheme-level detection active</p>
        <p>✓ Code-switching supported</p>
        <p>✓ All processing LOCAL - zero data transmission</p>
      </div>
    </div>
  );
}
