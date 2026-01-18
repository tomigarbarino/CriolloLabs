import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function splitText(text: string): string[] {
  return text.split('')
}

/**
 * Split text into words, and each word into characters
 * Preserves word boundaries to prevent line breaks mid-word
 */
export function splitTextByWords(text: string): Array<{ word: string; chars: string[] }> {
  return text.split(' ').map(word => ({
    word,
    chars: word.split('')
  }))
}
