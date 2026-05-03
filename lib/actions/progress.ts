'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

export async function getModuleProgress(moduleSlug: string): Promise<string[]> {
  const supabase = getClient()
  if (!supabase) return []
  const { data } = await supabase
    .from('progress')
    .select('item_key')
    .eq('module_slug', moduleSlug)
  return data?.map((d: { item_key: string }) => d.item_key) ?? []
}

export async function toggleItem(
  moduleSlug: string,
  itemKey: string,
  completed: boolean
): Promise<void> {
  const supabase = getClient()
  if (!supabase) return
  if (completed) {
    await supabase.from('progress').upsert(
      { module_slug: moduleSlug, item_key: itemKey, updated_at: new Date().toISOString() },
      { onConflict: 'module_slug,item_key' }
    )
  } else {
    await supabase.from('progress').delete()
      .eq('module_slug', moduleSlug)
      .eq('item_key', itemKey)
  }
  revalidatePath(`/topicos/${moduleSlug}`)
}
