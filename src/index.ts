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

    manager.register({
      name: 'Colab dark theme',
      isLight: false,
      load: () => manager.loadCSS('colab_theme/index.css'),
      unload: () => Promise.resolve(undefined)
    });
    manager.register({
      name: 'Colab dark theme',
      isLight: false,
      load: () => manager.loadCSS('colab_theme/index_dark.css'),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
