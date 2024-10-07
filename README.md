Örnek Kullanım

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const button = document.getElementById('showToastButton');
            button.addEventListener('click', () => {
                Toast('sagust', 'success', 'İşlem başarıyla tamamlandı');
            });
        });
    </script>
