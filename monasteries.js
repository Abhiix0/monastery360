// monasteries.js
import { supabase } from "./supabaseClient"

// Get all monasteries
export async function getAllMonasteries() {
  return await supabase.from("monasteries").select("*")
}

// Get Rumtek only
export async function getRumtek() {
  return await supabase.from("rumtek_view").select("*")
}

// Get Pemayangtse only
export async function getPemayangtse() {
  return await supabase.from("pemayangtse_view").select("*")
}

// Get Tashiding only
export async function getTashiding() {
  return await supabase.from("tashiding_view").select("*")
}
