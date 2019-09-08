import Decision from './ui/components/gameplay/Decision';

// eslint-disable-next-line
const render = async () => {
    // eslint-disable-next-line
    await import(/* webpackIgnore: true */ './palanca-studio.js');
    // eslint-disable-next-line
    let RenderApp = window['palanca-studio'].default;

    RenderApp({
        codename: 'late-shift',
        title: 'Late Shift for the Web',
        width: 1920,
        height: 804,
        Decision,
    });
};

render();
