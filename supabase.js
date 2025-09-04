import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'rarete'
const supabaseKey = 'jeje'
export const supabase = createClient(supabaseUrl, supabaseKey)


