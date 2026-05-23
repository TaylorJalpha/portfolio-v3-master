import { h } from 'vue'
import SanityImage from '@/components/SanityImage.vue'

function slugify(children: any): string {
  // children from @portabletext/vue are VNodes; extract text via recursion
  function getText(node: any): string {
    if (typeof node === 'string') return node
    if (Array.isArray(node)) return node.map(getText).join('')
    if (node?.children) return getText(node.children)
    if (node?.props?.children) return getText(node.props.children)
    return ''
  }
  const text = getText(children)
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

/**
 * Composable that provides portable text components configuration
 * for consistent rendering across the application
 */
export const usePortableTextComponents = () => {
  const portableTextComponents = {
    types: {
      image: ({ value }: any) => {
        return h(SanityImage, { value })
      }
    },
    marks: {
      link: ({ children, value }: any) => {
        return h(
          'a',
          {
            href: value.href,
            target: '_blank',
            rel: 'noopener',
            class: 'text-blue-600 hover:text-blue-800 underline transition-colors duration-200'
          },
          children
        )
      },
      strong: ({ children }: any) => {
        return h('strong', { class: 'font-semibold' }, children)
      },
      em: ({ children }: any) => {
        return h('em', { class: 'italic' }, children)
      }
    },
    block: {
      h1: ({ children }: any) => {
        return h('h1', { id: slugify(children), class: 'text-3xl font-bold mb-6 mt-8' }, children)
      },
      h2: ({ children }: any) => {
        return h('h2', { id: slugify(children), class: 'text-2xl font-semibold mb-4 mt-6' }, children)
      },
      h3: ({ children }: any) => {
        return h('h3', { id: slugify(children), class: 'text-xl font-medium mb-3 mt-5' }, children)
      },
      h4: ({ children }: any) => {
        return h('h4', { id: slugify(children), class: 'text-lg font-medium mb-2 mt-4' }, children)
      },
      normal: ({ children }: any) => {
        return h('p', { class: 'mb-4 leading-relaxed text-gray-700 dark:text-gray-300' }, children)
      },
      blockquote: ({ children }: any) => {
        return h('blockquote', { 
          class: 'border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 mb-4 italic text-gray-600 dark:text-gray-400' 
        }, children)
      }
    },
    list: {
      bullet: ({ children }: any) => {
        return h('ul', { class: 'list-disc list-outside ml-6 mb-4 space-y-1' }, children)
      },
      number: ({ children }: any) => {
        return h('ol', { class: 'list-decimal list-outside ml-6 mb-4 space-y-1' }, children)
      }
    },
    listItem: {
      bullet: ({ children }: any) => {
        return h('li', { class: 'text-gray-700 dark:text-gray-300' }, children)
      },
      number: ({ children }: any) => {
        return h('li', { class: 'text-gray-700 dark:text-gray-300' }, children)
      }
    }
  }

  return {
    portableTextComponents
  }
}