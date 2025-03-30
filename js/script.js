function generateMessage() {
    const name = document.getElementById('userName').value.trim();
    if (name === '') {
        alert('الرجاء إدخال اسمك');
        return;
    }
    
    const messages = [
        `كل عام و${name} بخير، تقبل الله منا ومنك صالح الأعمال`,
        `أعاده الله علينا وعليك ${name} باليمن والبركات`,
        `كل عام وأنت ${name} إلى الله أقرب`,
        `عيد مبارك ${name}، أسعد الله أيامك`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    document.getElementById('personalMessage').innerHTML = `
        <h3>رسالة خاصة لـ ${name}</h3>
        <p>${randomMessage}</p>
        <button onclick="shareMessage()">مشاركة الرسالة</button>
    `;
    document.getElementById('personalMessage').style.display = 'block';
}

function shareMessage() {
    if (navigator.share) {
        navigator.share({
            title: 'عيد مبارك',
            text: document.getElementById('personalMessage').textContent,
            url: window.location.href
        }).catch(err => {
            console.log('Error sharing:', err);
        });
    } else {
        alert('مشاركة الرسالة: ' + document.getElementById('personalMessage').textContent);
    }
}
