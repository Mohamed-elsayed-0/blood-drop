


document.addEventListener('DOMContentLoaded',
    function(){

        //?scroll effect
        const lastScrollPosition = 0;
        window.addEventListener('scroll', () => {
            const parallaxElement = document.querySelector('.parallax');
            const triggerPosition = 300;
            const scrollPosition = window.scrollY;
            if (scrollPosition >= triggerPosition) {
                if (scrollPosition > lastScrollPosition) {
                    parallaxElement.style.transform = `translateY(${-scrollPosition * 0.05}px)`;
                } else {
                    parallaxElement.style.transform = `translateY(${scrollPosition * 0.01}px)`;
                }
            } else {
                parallaxElement.style.transform = 'translateY(0)';
            }
            lastScrollPosition = scrollPosition;
        });
        
        //? back-to-up bottom
        const backToTopBottom = document.getElementById("back-to-top");
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 400){
                backToTopBottom.style.display = 'block';
            }else{
                backToTopBottom.style.display = 'none';
            }
        });
        backToTopBottom.addEventListener('click', () =>{
            window.scrollTo({
                top: 0,
                bottom: 0,
                behavior: 'smooth'
            });
        });

        //? Donate now bottom
        let donate = document.getElementById("Donate_now");
        donate.addEventListener('click', function(){
            window.location.href = 'donate.html';
        })
    }
);


    
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');

if (message === 'success') {
    alert("We reserved the blood to you, we email you to receive it!");
}else if(message === 'success1'){
    alert("Thank you very much, we will email you soon");
}else if(message === 'sorry'){
    alert("Sorry this blood type doesn't available now, but when it become available we will email you directly")
}

