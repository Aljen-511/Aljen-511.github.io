'use strict';

const path = require('node:path');
const fs = require('hexo-fs');

function extractFrontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : '';
}

hexo.extend.filter.register('before_post_render', async data => {
  if (!data?.source || !data?.date) return data;

  const sourcePath = path.join(hexo.source_dir, data.source);
  let contents;

  try {
    contents = await fs.readFile(sourcePath);
  } catch {
    return data;
  }

  const frontMatter = extractFrontMatter(contents);
  const hasExplicitUpdated = /(^|\r?\n)updated\s*:/i.test(frontMatter);

  if (!hasExplicitUpdated) {
    data.updated = data.date;
  }

  return data;
});
