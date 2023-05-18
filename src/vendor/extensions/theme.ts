import { EditorView } from '@codemirror/view'
import type { Extension } from '@codemirror/state'

export default EditorView.theme({

  '&': { height: '100%', overflow: 'hidden' },
  '.cm-content': {
    padding: '0 8px',
  },

  '.cm-scroller': {
    overflow: 'auto',
    height: '100%',
  },
  '.cm-scroller::-webkit-scrollbar': {
    'width': '6px',
    'background-color': ' #f5f5f5',
  },
  '.cm-scroller::--webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 3px rgba(0, 0, 0, 0.2)',
    'background-color': '#f5f5f5',
  },
  '.cm-scroller::-webkit-scrollbar-thumb': {
    'background-color': '#999',
  },

  '.cm-focused .cm-cursor': {},
  '.cm-focused .cm-selectionBackground, ::selection': {},
  '.cm-gutters': {},
  '&.cm-focused': {
    outline: 'none',
  },
  '.cm-line': {
    'font-size': '1.0em',
    'line-height': '2.0em',
  },
}) as Extension
