
export function downloadCsv<T extends object>(
  filename: string,
  rows: T[]
) {
  if (!rows.length) return;

  const headers = Object.keys(rows[0]) as (keyof T)[];

  const escape = (value: unknown) =>
    `"${String(value ?? '').replace(/"/g, '""')}"`;

  const content = [
    headers.map((header) => escape(String(header))).join(','),
    ...rows.map((row) =>
      headers.map((header) => escape(row[header])).join(',')
    ),
  ].join('\n');

  const blob = new Blob([`\uFEFF${content}`], {
    type: 'text/csv;charset=utf-8;',
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');

  anchor.href = url;
  anchor.download = filename;
  anchor.click();

  URL.revokeObjectURL(url);
}
