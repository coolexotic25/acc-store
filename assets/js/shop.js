$('.shop__category').click(function () {
    if(!$(this).hasClass('active')) {
        $('.shop__category').removeClass('active');
        $(this).addClass('active');
        $('.shop__cards').fadeOut();
        $('#category-'+$(this).data('category-index')).fadeIn();
    }
});

        const input = document.querySelector("input");
        const card = Array.from(document.querySelectorAll(".shop__cards .col-lg-4"));
    
        input.addEventListener("input", handleChange);
        handleChange();
    
        function handleChange(event) {
            const el = event?.currentTarget ?? input;
            const inputValue = el.value.toLowerCase();
            card.forEach((li) => {
                const liValue = li.innerText.toLowerCase();
                display(li, !liValue.includes(inputValue));
            });
        }
    
        function display(el, value) {
            if (value) {
                el.setAttribute("hidden", true);
            } else {
                el.removeAttribute("hidden");
            }
        }