/**
 * Toast.js
 * 
 * Bu kütüphane, Bootstrap 5.3 kullanarak dinamik olarak toast bildirimleri
 * oluşturan genel bir fonksiyondur. Sayfanın farklı konumlarında, belirli
 * renklerde ve mesaj içerikleri ile toast gösterebilir.
 * 
 * Fonksiyon Adı: Toast(position, type, message)
 * 
 * Parametreler:
 * - `position` (string): Toast'ın konumunu belirtir. Desteklenen konumlar:
 *   - `sagust` (sağ üst)
 *   - `solust` (sol üst)
 *   - `sagalt` (sağ alt)
 *   - `solalt` (sol alt)
 * - `type` (string): Bootstrap sınıflarına göre toast'ın renk türünü belirtir.
 *   - `success`, `danger`, `warning`, `info` gibi Bootstrap türlerini kullanabilirsiniz.
 * - `message` (string): Toast'ın içeriğinde gösterilecek mesaj metnidir.
 * 
 * Kullanım Örnekleri:
 * -------------------------
 * Toast('sagust', 'success', 'İşlem başarıyla tamamlandı');
 * Toast('solalt', 'danger', 'Hata: İşlem gerçekleştirilemedi');
 * Toast('sagalt', 'info', 'Bilgilendirme: Güncelleme mevcut');
 * -------------------------
 * 
 * Özellikler:
 * - Toast'lar 2 saniye (2000 milisaniye) sonra otomatik olarak kaybolur.
 * - Aynı konumda birden fazla toast gösterildiğinde, yeni toastlar üst üste
 *   gelecek şekilde sıralanır.
 * - Toast'lar kapatma düğmesi ile manuel olarak da kapatılabilir.
 * 
 * Uyarılar:
 * - Bootstrap 5.3 CSS ve JS dosyalarının sayfada yüklü olduğundan emin olun.
 * - Toast sınıfı için Bootstrap'ın desteklediği renk sınıflarını (`success`, `danger`, vb.) kullanın.
 */

function Toast(position, type, message) {
    let container = document.querySelector(`.toast-container.${position}`);
    if (!container) {
        container = document.createElement('div');
        container.className = `toast-container ${position}`;
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-bg-${type} border-0 show`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

    container.appendChild(toast);

    const bsToast = new bootstrap.Toast(toast, {
        autohide: true,
        delay: 2000
    });

    bsToast.show();

    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
        if (container.children.length === 0) {
            container.remove();
        }
    });
}
