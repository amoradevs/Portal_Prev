-- Portal Prev: tabela de progresso por módulo
create table if not exists public.progress (
  id         uuid        default gen_random_uuid() primary key,
  module_slug text       not null,
  item_key    text       not null,
  completed   boolean    not null default true,
  updated_at  timestamptz not null default now(),
  unique (module_slug, item_key)
);

alter table public.progress enable row level security;

-- Portal pessoal — acesso público total (single-user)
create policy "public_access" on public.progress
  for all
  using (true)
  with check (true);
