import { writable } from "svelte/store";

export const isMuted = writable(false);
export const mediaPaused = writable(true);