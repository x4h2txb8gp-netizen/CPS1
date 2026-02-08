


document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
           
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });


const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenuContainer');
const overlay = document.getElementById('overlay');
const closeMenuBtn = document.getElementById('closeMenu');

function closeAll() {
    navMenu.classList.remove('show');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; 
}


menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    overlay.classList.toggle('active');

    if (isOpen) {
        document.body.style.overflow = 'hidden'; 
    } else {
        document.body.style.overflow = '';
    }
});


overlay.addEventListener('click', closeAll);


if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeAll();
    });
}


document.getElementById('showAll').addEventListener('click', function() {
    var content = document.getElementById('hidden');
    
    var btnText = this.querySelector('.button-text'); 
    
    var isHidden = window.getComputedStyle(content).display === 'none';

    if (isHidden) {
        content.style.display = 'block';
        btnText.textContent = 'Скрыть';
    } else {
        content.style.display = 'none';
        btnText.textContent = 'Показать все';
    }
});


document.getElementById('showAll2').addEventListener('click', function() {
    var content = document.getElementById('hidden2');
   
    var btnText = this.querySelector('.button-text'); 
    
    var isHidden = window.getComputedStyle(content).display === 'none';

    if (isHidden) {
        content.style.display = 'block';
        btnText.textContent = 'Скрыть'; 
    } else {
        content.style.display = 'none';
        btnText.textContent = 'Показать все';
    }
});

document.getElementById('showAll3').addEventListener('click', function() {
    var content = document.getElementById('hidden3');
 
    var btnText = this.querySelector('.button-text'); 
    
    var isHidden = window.getComputedStyle(content).display === 'none';

    if (isHidden) {
        content.style.display = 'block';
        btnText.textContent = 'Скрыть'; 
    } else {
        content.style.display = 'none';
        btnText.textContent = 'Читать далее';
    }
});



// SWIPER 
function initMobileSwipers() {
    console.log('initMobileSwipers called, width:', window.innerWidth);
    
    
    if (window.innerWidth > 767) {
        console.log('Desktop detected, destroying Swipers if exist');
       
        if (window.brandsSwiperInstance) {
            window.brandsSwiperInstance.destroy(true, true);
            window.brandsSwiperInstance = null;
        }
        if (window.techSwiperInstance) {
            window.techSwiperInstance.destroy(true, true);
            window.techSwiperInstance = null;
        }
        if (window.servicesSwiperInstance) {
            window.servicesSwiperInstance.destroy(true, true);
            window.servicesSwiperInstance = null;
        }
        return;
    }
    
    console.log('Mobile detected, initializing Swipers');
    
    // Swiper для услуг
    const servicesEl = document.querySelector('.services-swiper');
    if (servicesEl && !window.servicesSwiperInstance) {
        console.log('Creating services swiper');
        window.servicesSwiperInstance = new Swiper(servicesEl, {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 8,
            freeMode: {
                enabled: true,
                sticky: true,
                minimumVelocity: 0.1
            },
            resistanceRatio: 0,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            observer: true,
            observeParents: true,
            watchOverflow: true
        });
        
      
        document.querySelectorAll('.service-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.service-item').forEach(el => {
                    el.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }
    
    // Swiper для брендов
    const brandsEl = document.querySelector('.brands-swiper');
    if (brandsEl && !window.brandsSwiperInstance) {
        console.log('Creating brands swiper');
        window.brandsSwiperInstance = new Swiper(brandsEl, {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: {
                enabled: true,
                sticky: true,
                minimumVelocity: 0.1
            },
            resistanceRatio: 0,
            pagination: {
                el: brandsEl.querySelector('.swiper-pagination'),
                clickable: true,
                dynamicBullets: false
            },
            observer: true,
            observeParents: true,
            watchOverflow: true
        });
    }
    
    // Swiper для видов техники
    const techEl = document.querySelector('.tech-swiper');
    if (techEl && !window.techSwiperInstance) {
        console.log('Creating tech swiper');
        window.techSwiperInstance = new Swiper(techEl, {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: {
                enabled: true,
                sticky: true,
                minimumVelocity: 0.1
            },
            resistanceRatio: 0,
            pagination: {
                el: techEl.querySelector('.swiper-pagination'),
                clickable: true,
                dynamicBullets: false
            },
            observer: true,
            observeParents: true,
            watchOverflow: true
        });
    }
    
    console.log('Swipers initialized successfully');
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, checking Swiper...');
    
    if (typeof Swiper === 'undefined') {
        console.error('SWIPER NOT LOADED! Check CDN link');
        return;
    }
    
    console.log('Swiper loaded, version:', Swiper.version);
    

    setTimeout(() => {
        initMobileSwipers();
    }, 300);
});


let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        console.log('Resize detected, reinitializing Swipers...');
        initMobileSwipers();
    }, 250);
});


window.reinitSwipers = function() {
    if (window.brandsSwiperInstance) {
        window.brandsSwiperInstance.destroy(true, true);
        window.brandsSwiperInstance = null;
    }
    if (window.techSwiperInstance) {
        window.techSwiperInstance.destroy(true, true);
        window.techSwiperInstance = null;
    }
    if (window.servicesSwiperInstance) {
        window.servicesSwiperInstance.destroy(true, true);
        window.servicesSwiperInstance = null;
    }
    initMobileSwipers();
};








// ===== МОДАЛКИ =====

// открыть "Заказать звонок"
document.querySelectorAll('img[src*="phone.png"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('modal-call').classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// открыть "Обратная связь"
document.querySelectorAll('img[src*="chat"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('modal-feedback').classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// закрытие
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('active');
    document.body.style.overflow = '';
  });
});

// закрытие по фону
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});



            });