import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s]/g, '')
    .replace(/\s+/g, '-');
};

rl.question('Post Title: ', (title) => {
  if (!title) {
    console.log('Title is required!');
    rl.close();
    return;
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  
  // Format: 2026-02-08 23:30:00 +0900
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const fullDateStr = `${dateStr} ${hours}:${minutes}:${seconds} +0900`;

  const slug = getSlug(title);
  const fileName = `${dateStr}-${slug}.md`;
  const dirPath = path.join(process.cwd(), 'src/content/blog/post');
  const filePath = path.join(dirPath, fileName);

  if (fs.existsSync(filePath)) {
    console.log(`Error: File ${fileName} already exists!`);
    rl.close();
    return;
  }

  const template = `---
layout: post
title: "${title}"
date: ${fullDateStr}
categories:
  - update
tags:
  - etc
description: "${title}"
---

# ${title}

내용을 여기에 작성하세요.
`;

  fs.writeFileSync(filePath, template);
  
  // Create assets folder for the post
  const assetsDirPath = path.join(process.cwd(), 'src/content/blog/post/assets/posts', `${dateStr}-${slug}`);
  if (!fs.existsSync(assetsDirPath)) {
    fs.mkdirSync(assetsDirPath, { recursive: true });
    console.log(`📁 Assets folder created: ${assetsDirPath}`);
  }
  
  console.log(`
✅ Success! New post created:`);
  console.log(`📍 ${filePath}`);
  console.log(`📁 Assets folder: ${assetsDirPath}`);
  
  rl.close();
});
