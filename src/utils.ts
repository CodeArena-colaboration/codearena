import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://kwyelkhktzvkozqrinpc.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3eWVsa2hrdHp2a296cXJpbnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2ODgwMjAsImV4cCI6MjA0NTI2NDAyMH0.9wlc2JveIreKsy3KzeWh60DBKKPxQS4G41VOUNleROo");

export{
    supabase
}