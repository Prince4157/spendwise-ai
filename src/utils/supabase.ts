// This is a placeholder for the Supabase client
// To use real Supabase, add SUPABASE_URL and SUPABASE_ANON_KEY to .env

export const supabase = {
  from: (table: string) => ({
    insert: async (data: Record<string, unknown>[]) => {
      console.log(`[Mock Supabase] Inserting into ${table}:`, data);
      return { data, error: null };
    }
  })
};
