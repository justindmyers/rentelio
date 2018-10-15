export default {
    name: 'TransitionExpand',
    functional: true,
    render(h, context) {
        const data = {
            props: {
                name: 'expand',
            },
            on: {
                afterEnter(element) {
                    element.style.height = 'auto';
                },
                enter(element) {
                    const width = getComputedStyle(element).width;

                    element.style.width = width;
                    element.style.position = 'absolute';
                    element.style.visibility = 'hidden';
                    element.style.height = 'auto';

                    const height = getComputedStyle(element).height;

                    element.style.width = null;
                    element.style.position = null;
                    element.style.visibility = null;
                    element.style.height = 0;

                    // force redraw
                    getComputedStyle(element).height;

                    setTimeout(function() {
                        element.style.height = height;
                    });
                },
                leave(element) {
                    const height = getComputedStyle(element).height;

                    element.style.height = height;

                    // force redraw
                    getComputedStyle(element).height;

                    setTimeout(function() {
                        element.style.height = 0;
                    });
                }
            }
        };

        return h('transition', data, context.children);
    }
};
