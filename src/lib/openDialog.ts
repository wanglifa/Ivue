import Dialog from './Dialog.vue'
import {createApp, h, VNode} from 'vue'
interface Options {
  title: string | VNode;
  content: string;
  closeOnClickOverlay?: boolean;
  ok?: () => void;
  cancel?: () => void;
}
export const openDialog = (options: Options) => {
  const {title, content, closeOnClickOverlay} = options
  const div = document.createElement('div')
  document.body.append(div)
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        cancel: () => {},
        closeOnClickOverlay,
        'onUpdate:visible': (newValue: boolean) => {
          if (newValue === false) {
            app.unmount(div)
          }
        }
        }, {title, content})
    }
  })
  app.mount(div)
}