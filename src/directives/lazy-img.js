const LazyImgInitial = 'is-loading';
const LazyImgLoaded = 'is-loaded';

export default {
    inserted: function (el, binding) {
        let img = new Image();

        el.classList.add(LazyImgInitial);

        img.src = binding.value;

        img.onload = () => {
            el.src = binding.value;

            el.classList.remove(LazyImgInitial);

            setTimeout(() => {
                el.classList.add(LazyImgLoaded);
            });
        };
    }
};
