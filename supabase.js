import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://fdqjnqlbjjpeyzzckjux.supabase.co/rest/v1/'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcWpucWxiampwZXl6emNranV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1NjEyMTksImV4cCI6MjA5MzEzNzIxOX0.j_uTIfXpAh7xlYESEueHxIvjeXzr9fx96lT-RMd7c2U'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
