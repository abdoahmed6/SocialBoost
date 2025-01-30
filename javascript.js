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
        let newWindow = window.open(href, '_blank');
        
        // إضافة تأثير متحرك عند فتح الرابط
        newWindow.onload = () => {
            newWindow.document.body.style.opacity = '0';
            newWindow.document.body.style.transition = 'opacity 1s ease-in-out';
            setTimeout(() => {
                newWindow.document.body.style.opacity = '1';
            }, 50);
        };
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
    orderMessage.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(orderMessage);

    setTimeout(() => {
        orderMessage.style.opacity = '0';
    }, 2500);

    setTimeout(() => {
        window.location.href = '/contact.html';
    }, 3000);
});
// Add new comment
function addComment() {
    const userName = document.getElementById('userName').value.trim();
    const commentText = document.getElementById('newComment').value.trim();
    if (userName !== '' && commentText !== '') {
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('comment');
        commentContainer.innerHTML = `<h4>${userName}</h4><p>⭐⭐⭐⭐</p><p>${commentText}</p>`;
        document.getElementById('comments').appendChild(commentContainer);
        document.getElementById('userName').value = '';
        document.getElementById('newComment').value = '';
    }
}
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
