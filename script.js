// عند تحميل الصفحة، إضافة تأثيرات تفاعلية
document.addEventListener('DOMContentLoaded', () => {
    let elements = document.querySelectorAll('.animated');
    elements.forEach(el => {
        el.classList.add('fade-in');
    });

    // تحريك الأزرار
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.3s ease-in-out';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});

// تأثير الفتح والانغلاق على الأقسام
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('hidden');
    if (section.classList.contains('hidden')) {
        section.style.height = '0';
    } else {
        section.style.height = 'auto';
    }
}

// تفاعل مع حقول النصوص وتحديث الرسائل الحية
document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('input', () => {
        let feedback = document.getElementById(input.dataset.feedback);
        if (input.value.length > 0) {
            feedback.innerHTML = 'تم إدخال قيمة!';
            feedback.style.color = 'green';
        } else {
            feedback.innerHTML = 'الرجاء إدخال القيمة';
            feedback.style.color = 'red';
        }
    });
});

// التعامل مع تأثير التمرير على الصفحات
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    const elements = document.querySelectorAll('.scroll-fade');

    elements.forEach(el => {
        if (scrollPosition > el.offsetTop - window.innerHeight / 1.5) {
            el.classList.add('fade-in');
        }
    });
});

// التأثير على الأزرار عندما يتم الضغط عليها
document.querySelectorAll('.button-click').forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#0078D4';
        button.style.color = '#fff';
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
});

// تطبيق التأثيرات التفاعلية على القوائم الجانبية
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#4C4CFF';
        item.style.transition = 'background-color 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
    });
});

// التفاعل مع الروابط وفتحها في نافذة جديدة مع تأثيرات متحركة
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let href = link.getAttribute('href');
        window.open(href, '_blank');
    });
});

// إضافة الرسائل الحية عند الضغط على زر طلب
document.querySelector('.order-button').addEventListener('click', () => {
    let orderMessage = document.createElement('div');
    orderMessage.innerHTML = 'تم تأكيد الطلب! سيتم تحويلك إلى صفحة التواصل.';
    orderMessage.style.backgroundColor = '#0078D4';
    orderMessage.style.color = '#fff';
    orderMessage.style.padding = '10px';
    orderMessage.style.marginTop = '20px';
    orderMessage.style.textAlign = 'center';
    document.body.appendChild(orderMessage);

    setTimeout(() => {
        window.location.href = '/contact.html';
    }, 3000);
});

// التأثيرات التفاعلية على الحقول المنسدلة
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });
});

// إضافة تأثيرات للمقاطع عند تحميل الصفحة
document.querySelectorAll('.fade-on-load').forEach(element => {
    element.classList.add('fade-in');
});
