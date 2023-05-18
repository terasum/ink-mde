import type InkInternal from '/types/internal'
import {undo, redo} from '@codemirror/commands'

export const redoCmd = ([state]: InkInternal.Store) => {
  const { editor } = state()
  redo({state: editor.state, dispatch: editor.dispatch})
}

export const undoCmd = ([state]: InkInternal.Store) => {
  const { editor } = state()
  undo({state: editor.state, dispatch: editor.dispatch})
}
