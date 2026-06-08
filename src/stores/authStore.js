import { create } from 'zustand'

export const useBear = create((set) => ({
  token: 0,
  user: null,
}))