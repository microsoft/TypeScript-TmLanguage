        if (platform.isWindows) {
            this._processReady.then(() => {
                if (!this._isDisposed) {
                    import('vs/workbench/parts/terminal/electron-browser/windowsShellHelper').then((module) => {
                        this._windowsShellHelper = new module.WindowsShellHelper(this._processId, this._shellLaunchConfig.executable, this, this._xterm);
                    });
                }
            });
        }