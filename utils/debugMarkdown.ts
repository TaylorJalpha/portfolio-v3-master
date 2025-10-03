// utils/debugMarkdown.ts
/**
 * Debug utility to help identify Sanity image references in markdown content
 */

export const debugMarkdownContent = (content: string, assets?: any[]) => {
  console.group('🔍 Debugging Markdown Content')
  
  console.log('📝 Raw markdown content:')
  console.log(content)
  
  if (assets) {
    console.log('🖼️ Available assets:')
    console.table(assets.map(asset => ({
      id: asset._id,
      ref: asset._ref,
      url: asset.url,
      type: asset._type
    })))
  }
  
  // Look for various Sanity image patterns
  const patterns = {
    'Standard Sanity Asset ID': /image-[a-f0-9]{40}-\d+x\d+-[a-z]+/g,
    'Sanity Protocol': /sanity:\/\/[^)\s]+/g,
    'Image Protocol': /image:\/\/[^)\s]+/g,
    'Markdown Images': /!\[([^\]]*)\]\(([^)]+)\)/g,
    'Asset References': /_ref["\s]*:["\s]*[^"]+/g,
    'Asset IDs in text': /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/g
  }
  
  Object.entries(patterns).forEach(([name, pattern]) => {
    const matches = content.match(pattern)
    if (matches) {
      console.log(`🎯 Found ${name}:`, matches)
    }
  })
  
  // Extract all markdown image tags
  const imageMatches = content.match(/!\[([^\]]*)\]\(([^)]+)\)/g)
  if (imageMatches) {
    console.log('🖼️ Markdown images found:')
    imageMatches.forEach((match, index) => {
      const [, alt, src] = match.match(/!\[([^\]]*)\]\(([^)]+)\)/) || []
      console.log(`  ${index + 1}. Alt: "${alt}", Src: "${src}"`)
    })
  }
  
  console.groupEnd()
}

export const identifyImageReferences = (content: string): string[] => {
  const references: string[] = []
  
  // Extract various types of references
  const patterns = [
    /image-[a-f0-9]{40}-\d+x\d+-[a-z]+/g,
    /sanity:\/\/([^)\s]+)/g,
    /image:\/\/([^)\s]+)/g,
    /!\[([^\]]*)\]\(([^)]+)\)/g
  ]
  
  patterns.forEach(pattern => {
    const matches = content.match(pattern)
    if (matches) {
      references.push(...matches)
    }
  })
  
  return [...new Set(references)] // Remove duplicates
}