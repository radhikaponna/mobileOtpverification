-- queries for page_schemas table 
SELECT page_schema_id, tenant_id, page_title, "version", "columns", created_date, updated_date, status
FROM public.page_schemas;

INSERT INTO public.page_schemas
(page_schema_id, tenant_id, page_title, "version", "columns", created_date, updated_date, status)
VALUES(nextval('page_schemas_page_schema_id_seq1'::regclass), 0, '', '', '', 0, 0, 'active'::enum_page_schemas_status);

UPDATE public.page_schemas
SET tenant_id=0, page_title='', "version"='', "columns"='', created_date=0, updated_date=0, status='active'::enum_page_schemas_status
WHERE page_schema_id=nextval('page_schemas_page_schema_id_seq1'::regclass);

DELETE FROM public.page_schemas
WHERE page_schema_id=nextval('page_schemas_page_schema_id_seq1'::regclass);

