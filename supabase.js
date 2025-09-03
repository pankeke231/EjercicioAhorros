import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yssxqmikkjtinibwsbky.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzc3hxbWlra2p0aW5pYndzYmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MDU1NDUsImV4cCI6MjA3MjQ4MTU0NX0.2-iMpO4m3OTUDqmN5rA3BUli4KjN49Te8OXUKTROTnA'

export const supabase = createClient(supabaseUrl, supabaseKey)


