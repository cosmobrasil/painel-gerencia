BEGIN;

ALTER TABLE public.questionarios
  RENAME COLUMN indice_maturidade_estruturante TO indice_pcm;

ALTER VIEW public.vw_dados_dashboard
  RENAME COLUMN indice_de_maturidade_estruturante TO indice_pcm;

COMMIT;
