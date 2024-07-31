import './style.css'
import * as monaco from 'monaco-editor';

monaco.editor.create(document.querySelector("#monaco")!, {
  value: "--"
})
