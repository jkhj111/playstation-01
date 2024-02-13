/*

    콘텐츠 사이트
    https://www.disneyplus.com/ko-kr

    레이아웃
    https://www.tving.com/onboarding

    
    main
    https://cnbl-cdn.bamgrid.com/assets/0e405541b032df302aede51ac5ffef5463ca8d757bf35fb816a4d129825ade7a/original


    img
    https://cnbl-cdn.bamgrid.com/assets/6c7ae3a9aba85fc1d171fc4c1795f1e787902aefb52026fd709025404aec4d4b/original



*/



//슬라이드 클래스
function slideClassAdd() {
    let totalMovieSliderList = document.querySelectorAll(".swiper-container ul li");

    for (let i = 0; i < totalMovieSliderList.length; i++) {
        totalMovieSliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    }
    // let inquirySliderList = document.querySelectorAll(".inquiry ul li");

    // for (let i = 0; i < inquirySliderList.length; i++) {
    //     inquirySliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    // }
    // let eventsSliderList = document.querySelectorAll(".events ul li");

    // for (let i = 0; i < eventsSliderList.length; i++) {
    //     eventsSliderList[i].classList.add("swiper-slide");//li클래스swiper입력
    // }
    
};
slideClassAdd();

//검색
function statusChange( statusItem ) {
    var strText = $(statusItem).text();
 
    // strText 에 전체 문자열이 입력된다.
    $("#tt").val(strText);
}
function onlight2() {
    document.querySelector('.loginModal').style.opacity = "1";
}
function onblack2() {
    document.querySelector('.loginModal').style.opacity = "0";
}



window.onload = function() {
    let blackBg = document.querySelector(".black-bg");
    let bodyArea = document.querySelector("body");

    //토글 클래스 추가
    function toggleSelectBox(selectBox) {
        selectBox.classList.toggle("active");
    };

    document.querySelector('.search-btn').addEventListener('click', function() {
        document.querySelector('#search_hash').classList.add('act');
        bodyArea.style.overflowY = "hidden";
        setTimeout( onlight, 10);
    });
    
    document.querySelector('#search_close').addEventListener('click', function(){
        document.querySelector('#search_hash').classList.remove('act');
        bodyArea.style.overflowY = "visible";
        setTimeout( onblack, 10);
    });
    function onlight() {
        document.querySelector('#search_hash').style.opacity = "1";
    };
    
    function onblack() {
        document.querySelector('#search_hash').style.opacity = "0";
    };

    //search
    // let searchBtn = document.querySelector(".search-btn");
    // let searchCloseBtn = document.querySelector(".search-close-btn");
    // let searchArea = document.querySelector(".searchArea");
    // let searchBox = document.querySelector(".searchBox");

    // searchBtn.addEventListener("click",function() {
    //     searchArea.style.display = "block";
    //     searchBox.style.maxHeight = "196px";
    //     searchBox.style.padding = "50px 0";
    //     blackBg.style.maxHeight = "9999px";
    // });
    // searchCloseBtn.addEventListener("click",function() {
    //     searchArea.style.display = "none";
    //     searchArea.style.padding = "0 20px";
    //     searchBox.style.maxHeight = "0";
    //     searchBox.style.padding = "0";
    //     blackBg.style.maxHeight = "0";
    // });
    // //search 다른곳 클릭시 초기화
    // document.addEventListener("click", function (e) {
        
    //     if (searchArea.style.maxHeight=="196px") {
    //         const targetElement = e.target;
    //         const isSelect = targetElement.classList.contains("searchArea") || targetElement.closest(".searchArea") || targetElement.classList.contains("search-close-btn") || targetElement.closest(".search-icon") ;
    //         if (isSelect) {
    //             return;
    //         }
    //         searchArea.style.maxHeight = "0";
    //         searchArea.style.padding = "0 20px";
    //         searchBox.style.maxHeight = "0";
    //         searchBox.style.padding = "0";
    //         blackBg.style.maxHeight = "0";
    //         searchCloseBtn.style.opacity = "0";
    //         console.log(e.target);
    //         if(e.target.closest(".header-pc ul li") || e.target.closest(".loginBtn")){
    //             blackBg.style.maxHeight = "9999px";
                
    //         }
    //     }
    // });

    //로그인버튼
    let loginModalBtns = document.querySelectorAll(".loginBtn");
    let loginCloseBtn = document.querySelector(".login-close-btn");
    let loginModal = document.querySelector(".loginModal");

    loginModalBtns.forEach(loginBtn => {
        loginBtn.addEventListener("click",function() {
            loginModal.style.display = "block";
            setTimeout( onlight2, 10);
            blackBg.style.maxHeight = "9999px";
            blackBg.style.zIndex = "21";
            bodyArea.style.overflowY = "hidden";
        });
    });
    loginCloseBtn.addEventListener("click",function() {
        loginModal.style.display = "none";
        setTimeout( onblack2, 10);
        blackBg.style.maxHeight = "0";
        blackBg.style.zIndex = "6";
        bodyArea.style.overflowY = "visible";
    });

    //nav 버튼
    let navBtn = document.querySelector(".navBtn");
    let navCloseBtn = document.querySelector(".nav-close-btn");
    let navBox = document.querySelector(".navBox");
    
    let navCount = 0;
    navBtn.addEventListener("click",function(){

        if (navCount == 0) {
            navBtn.classList.add("active");
            navBox.style.right = "0";
            navBox.style.boxShadow = "rgba(0, 0, 0, 0.7) 0px 0px 0px 9999px";
            navCount++;
            bodyArea.style.overflowY = "hidden";
        }
        else{
            navBtn.classList.remove("active");
            navBox.style.right = "-100%";
            bodyArea.style.overflowY = "visible";
            navCount = 0;
        }
    });
    navCloseBtn.addEventListener("click",function(){
        navBtn.classList.remove("active");
        navBox.style.right = "-100%";
        navBox.style.boxShadow = "rgba(0, 0, 0, 0) 0px 0px 0px 9999px";
        bodyArea.style.overflowY = "visible";
        navCount = 0;
    });


    //네비 하위아코디언
    let acc = document.querySelectorAll(".navBox .content ul li p");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            var panel = this.nextElementSibling;
            var coursePanel = document.querySelectorAll(".navBox .content ul li>div");//아코디언 늘어나는 영역
            var courseAccordionActive = document.querySelectorAll(".navBox .content ul li p.active");

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove("active");
            }   
            else { 
                for (var ii = 0; ii < courseAccordionActive.length; ii++) {
                    courseAccordionActive[ii].classList.remove("active");
                }			
                for (var iii = 0; iii < coursePanel.length; iii++) {
                    this.classList.remove("active");
                    coursePanel[iii].style.maxHeight = null;
                }
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.add("active");
            }
        });
    }

    //네비 하위아코디언 다른곳 클릭시 초기화
    document.addEventListener("click", function (e) {
        const targetElement = e.target;
        const isSelect = targetElement.classList.contains("content") || targetElement.closest(".content");
        
        if (isSelect) {
           
            return;
        }

        const allSelectBoxElements = document.querySelectorAll(".content ul li p");
        const coursePanel = document.querySelectorAll(".navBox .content ul li>div");

        allSelectBoxElements.forEach(boxElement => {

            boxElement.classList.remove("active");
        });
        coursePanel.forEach(boxElement => {
            boxElement.style.maxHeight = null;
        });
        
    });

    //characteristic 탭
    let imgTab = document.querySelectorAll(".characteristic .imgTab>div");
    let textContent = document.querySelectorAll(".characteristic .textArea>div");
    for (let i = 0; i < imgTab.length; i++) {
        imgTab[i].addEventListener("click",function() {
            clearTeb1();
            this.classList.add("active");
            switch (i) {
                case 0:
                    textContent[0].classList.add("active");
                    textContent[1].classList.remove("active");
                    textContent[2].classList.remove("active");
                    break;
                case 1:
                    textContent[0].classList.remove("active");
                    textContent[1].classList.add("active");
                    textContent[2].classList.remove("active");
                    break;
                case 2:
                    textContent[0].classList.remove("active");
                    textContent[1].classList.remove("active");
                    textContent[2].classList.add("active");
                    break;
            }
        });
    }
    function clearTeb1() {
        for (let i = 0; i < imgTab.length; i++) {
            imgTab[i].classList.remove("active");
        }
    }

    //movies 탭
    let Tabs1 = document.querySelectorAll(".movies .tabs>div");
    let tabsContent1 = document.querySelectorAll(".movies .tabs-content>div");
    for (let i = 0; i < Tabs1.length; i++) {
        Tabs1[i].addEventListener("click",function() {
            clearTeb2();
            this.classList.add("active");
            switch (i) {
                case 0:
                    tabsContent1[0].classList.add("active");
                    tabsContent1[1].classList.remove("active");
                    tabsContent1[2].classList.remove("active");
                    tabsContent1[3].classList.remove("active");
                    tabsContent1[4].classList.remove("active");
                    tabsContent1[5].classList.remove("active");
                    break;
                case 1:
                    tabsContent1[0].classList.remove("active");
                    tabsContent1[1].classList.add("active");
                    tabsContent1[2].classList.remove("active");
                    tabsContent1[3].classList.remove("active");
                    tabsContent1[4].classList.remove("active");
                    tabsContent1[5].classList.remove("active");
                    break;
                case 2:
                    tabsContent1[0].classList.remove("active");
                    tabsContent1[1].classList.remove("active");
                    tabsContent1[2].classList.add("active");
                    tabsContent1[3].classList.remove("active");
                    tabsContent1[4].classList.remove("active");
                    tabsContent1[5].classList.remove("active");
                    break;
                case 3:
                    tabsContent1[0].classList.remove("active");
                    tabsContent1[1].classList.remove("active");
                    tabsContent1[2].classList.remove("active");
                    tabsContent1[3].classList.add("active");
                    tabsContent1[4].classList.remove("active");
                    tabsContent1[5].classList.remove("active");
                    break;
                case 4:
                    tabsContent1[0].classList.remove("active");
                    tabsContent1[1].classList.remove("active");
                    tabsContent1[2].classList.remove("active");
                    tabsContent1[3].classList.remove("active");
                    tabsContent1[4].classList.add("active");
                    tabsContent1[5].classList.remove("active");
                    break;
                case 5:
                    tabsContent1[0].classList.remove("active");
                    tabsContent1[1].classList.remove("active");
                    tabsContent1[2].classList.remove("active");
                    tabsContent1[3].classList.remove("active");
                    tabsContent1[4].classList.remove("active");
                    tabsContent1[5].classList.add("active");
                    break;
            }
        });
    }
    function clearTeb2() {
        for (let i = 0; i < Tabs1.length; i++) {
            Tabs1[i].classList.remove("active");
        }
    }

    //totalMovie 슬라이더
    let mySwiper1 = new Swiper(".totalMovie .swiper-container01", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop : true,
            allowTouchMove: false,
            speed: 5000,
            observer: true,
            observeParents: true,
            rebuildOnUpdate: true,
            resizeObserver:true,
            autoplay: {
                autoplay: true,     
                delay: 0, 
                disableOnInteraction: false,
            },
            breakpoints: { 
                768: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 6,
                },
            },
            on: {
                resize: function() {
                  this.autoplay.stop(); // 리사이징 시 자동 슬라이드 정지
                  this.autoplay.start(); // 리사이징 시 자동 슬라이드 재시작
                }
            }
    });

    let mySwiper2 = new Swiper(".totalMovie .swiper-container02", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop : true,
        allowTouchMove: false,
        speed: 4500,
        observer: true,
        observeParents: true,
        rebuildOnUpdate: true,
        resizeObserver:true,
        autoplay: {
            autoplay: true,     
            delay: 0, 
            disableOnInteraction: false,
        },
        breakpoints: { 
            768: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            },
        },
        on: {
            resize: function() {
              this.autoplay.stop(); // 리사이징 시 자동 슬라이드 정지
              this.autoplay.start(); // 리사이징 시 자동 슬라이드 재시작
            }
        }
    });

    //fna 하위아코디언
    let fnaAcc = document.querySelectorAll(".fna ul li h3");

    for (let i = 0; i < fnaAcc.length; i++) {
        fnaAcc[i].addEventListener("click", function() {
            var panel = this.nextElementSibling;
            var coursePanel = document.querySelectorAll(".fna ul li .answer");//아코디언 늘어나는 영역
            var courseAccordionActive = document.querySelectorAll(".fna ul li h3.active");

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove("active");
            }   
            else { 
                for (var ii = 0; ii < courseAccordionActive.length; ii++) {
                    courseAccordionActive[ii].classList.remove("active");
                }			
                for (var iii = 0; iii < coursePanel.length; iii++) {
                    this.classList.remove("active");
                    coursePanel[iii].style.maxHeight = null;
                    coursePanel[iii].style.paddingBottom = null;
                }
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.add("active");
            }
        });
    }

    //top버튼
    document.querySelector(".topBtn").addEventListener("click", () => {
        window.scrollTo({top:0, behavior:"smooth"});
    });
    //top버튼숨기기
    window.addEventListener('scroll', () => { 
        const viewportHeight = window.innerHeight;
        const scrolltop = document.documentElement.scrollTop; 
        if (scrolltop > 400) {
            document.querySelector(".topBtn").style.display = "block";
        }
        else{
            document.querySelector(".topBtn").style.display = "none";
        }
    });

    
}