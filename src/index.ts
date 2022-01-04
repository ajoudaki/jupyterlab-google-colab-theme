import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the colab_theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'colab_theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('MY JupyterLab extension colab_theme is activated!!!');
    // addDivs();
    const style = 'colab_theme/index.css';

    manager.register({
      name: 'colab_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
