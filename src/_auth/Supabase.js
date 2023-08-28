import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zynjcdzmoiwhudjghpsx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bmpjZHptb2l3aHVkamdocHN4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzIyMzc2MSwiZXhwIjoyMDA4Nzk5NzYxfQ.P4ywZ1L3WDtfVJ96lqlh6yP-oSD2NZezNcpeogk0Lgs"
);
