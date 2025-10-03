# Preview Feature Implementation

This implementation adds preview functionality to your Nuxt 3 portfolio, allowing you to preview draft content from Sanity Studio before publishing.

## ✅ What's Been Implemented

### Frontend (Nuxt 3)
- ✅ **Preview API Routes**: `/server/api/preview.post.ts` and `/server/api/exit-preview.post.ts`
- ✅ **Preview Composable**: `composables/usePreview.ts` for managing preview state
- ✅ **Preview Banner**: `components/PreviewBanner.vue` shown when in preview mode
- ✅ **Updated Portfolio API**: `composables/usePortfolioApi.ts` with preview support
- ✅ **Updated Pages**: All content pages now support preview mode
- ✅ **Configuration**: Updated `nuxt.config.ts` with preview secret support
- ✅ **Test Page**: `/preview-test` for testing the preview functionality

### Features
- 🔒 **Secure Preview**: Uses preview secrets to authenticate preview requests
- 🍪 **Cookie-based Sessions**: Preview state managed via secure HTTP-only cookies
- 🎨 **Visual Indicator**: Preview banner shows when viewing draft content
- 📱 **Responsive Design**: Preview banner works on all screen sizes
- 🔄 **Easy Exit**: One-click exit from preview mode

## 🛠 Setup Instructions

### 1. Environment Variables
Add to your `.env` file:
```bash
PREVIEW_SECRET=your_32_character_preview_secret_here
```

### 2. Rails Backend Update
Update your Rails API to handle the preview parameter. See `RAILS_PREVIEW_UPDATE.md` for details.

### 3. Sanity Studio Configuration
In your Sanity Studio:
1. Install the preview settings schema
2. Add the preview action component  
3. Configure preview URLs pointing to your Nuxt app
4. Set the preview secret (same as in your `.env`)

## 🧪 Testing the Preview Feature

### Using the Test Page
1. Visit `/preview-test` in your Nuxt app
2. Enter your preview secret
3. Enter a content slug (e.g., `/project/my-project`)
4. Click "Enable Preview"
5. You'll be redirected to the content page in preview mode

### Manual Testing
1. Create draft content in Sanity Studio
2. Use the preview action in Studio to generate a preview URL
3. Open the URL - you should see the preview banner and draft content

### Preview URLs Format
- Projects: `https://yoursite.com/api/preview?secret=XXX&slug=/project/SLUG&type=project`
- Case Studies: `https://yoursite.com/api/preview?secret=XXX&slug=/case-study/SLUG&type=caseStudy`  
- Blog Posts: `https://yoursite.com/api/preview?secret=XXX&slug=/blog/SLUG&type=blogPost`

## 🔧 How It Works

### Preview Flow
1. **Sanity Studio** generates preview URL with secret and content info
2. **Nuxt API Route** validates secret and sets preview cookies
3. **Frontend Pages** detect preview cookies and fetch draft content
4. **Preview Banner** shows visual indicator of preview mode
5. **Exit Button** clears preview cookies and refreshes page

### Security
- Preview secrets are validated on the server
- Cookies are HTTP-only and secure
- Preview mode automatically expires after 1 hour
- No sensitive data is exposed in client-side code

## 📁 File Structure

```
├── server/
│   └── api/
│       ├── preview.post.ts          # Enable preview mode
│       └── exit-preview.post.ts     # Exit preview mode
├── composables/
│   ├── usePreview.ts               # Preview state management
│   └── usePortfolioApi.ts          # Updated with preview support
├── components/
│   └── PreviewBanner.vue           # Preview mode indicator
├── pages/
│   ├── preview-test.vue            # Testing interface
│   ├── project/[slug].vue          # Updated for preview
│   ├── case-study/[slug].vue       # Updated for preview
│   ├── blog/[slug].vue             # Updated for preview
│   └── portfolio.vue               # Updated for preview
└── services/
    └── sanityApi.js                # Updated with preview parameter
```

## 🚀 Next Steps

1. **Update Rails Backend**: Implement the preview parameter handling (see `RAILS_PREVIEW_UPDATE.md`)
2. **Configure Sanity Studio**: Add preview settings and actions
3. **Set Environment Variables**: Add `PREVIEW_SECRET` to your `.env`
4. **Test the Feature**: Use the `/preview-test` page to verify everything works
5. **Deploy**: Make sure to set `PREVIEW_SECRET` in your production environment

## 🐛 Troubleshooting

### Preview Not Working
- Check that `PREVIEW_SECRET` matches between Sanity and Nuxt
- Verify Rails backend is handling the `preview` parameter
- Ensure cookies are being set correctly (check browser dev tools)

### Content Not Updating  
- Make sure Rails backend is using `perspective: 'previewDrafts'` in preview mode
- Verify Sanity token has correct permissions
- Check that draft filter is being applied correctly in GROQ queries

### 404 Errors
- Verify preview URL paths match your Nuxt routing structure
- Check that slugs in Sanity match the expected format
- Ensure content exists and has the correct `_type`

## 📚 Additional Resources

- [Sanity Preview Documentation](https://www.sanity.io/docs/preview-content-on-site)
- [Nuxt 3 Server API](https://nuxt.com/docs/guide/directory-structure/server)
- [Cookie Management in Nuxt](https://nuxt.com/docs/api/utils/set-cookie)

Your preview feature is now ready! 🎉